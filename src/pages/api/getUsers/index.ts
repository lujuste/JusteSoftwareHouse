import {fauna} from '../../../services/fauna'
import { query as q } from 'faunadb'
import { NextApiRequest, NextApiResponse } from "next";
import { FieldError } from 'react-hook-form';

interface InputProps {
    name: string;
    email?: string;
    errors?: FieldError;
}


// eslint-disable-next-line import/no-anonymous-default-export
export default async function GetUser(req: NextApiRequest, res: NextApiResponse) {
   if(req.method !== "POST" ) {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
   }

   const body = (req.body)
   

   await fauna.query(
    q.Create(
        q.Collection('users'), {
            data: {
                name: body.name,
                email: body.email
            }
        }
    )
)

    return res.status(200).json({message: "Obrigado, logo lhe retornaremos!"})

  }