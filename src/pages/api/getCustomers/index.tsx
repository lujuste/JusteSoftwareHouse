import {fauna} from '../../../services/fauna'
import {query as q} from 'faunadb'
import {NextApiRequest, NextApiResponse} from 'next'

export default async function getCustomers(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not allowed')
    }

    const newCustomer = (req.body)


    await fauna.query(
        q.Create(
            q.Collection('customers'), {
                data: {
                    name: newCustomer.name,
                    email: newCustomer.email,
                    phone: newCustomer.phone,
                    message: newCustomer.message
                }
            }
        )
    )

    
    res.send(200)


    
}