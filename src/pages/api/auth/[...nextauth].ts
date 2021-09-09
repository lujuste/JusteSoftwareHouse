import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import {fauna} from '../../../services/fauna'
import { query as q } from 'faunadb'

export default NextAuth({
    providers: [
        Providers.Facebook({
          clientId: process.env.FACEBOOK_APP_ID,
          clientSecret: process.env.FACEBOOK_KEY_SECRET,
          scope: 'email',
        }),
        Providers.Google({
          clientId: process.env.GOOGLE_APP_ID,
          clientSecret: process.env.GOOGLE_KEY_SECRET,
        })
      ],
      callbacks: {
        async signIn(user, account, profile) { 
          const {email } = user

          try{
            await fauna.query(
              q.If(
                q.Not(
                    q.Exists(
                        q.Match(
                            q.Index('user_by_emailx'),
                            q.Casefold(user.email)
                        )
                    )
                ),
                q.Create(
                    q.Collection('users'),
                    { data: { email } }
                ),
                q.Get(
                    q.Match(
                        q.Index('user_by_emailx'),
                        q.Casefold(user.email)
                    )
                )
            )
        )
        return true

    } catch (err) {
        console.log(err)
        return false
    }
        }
      }
})


