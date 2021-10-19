import {fauna} from '../../../services/fauna'
import {query as q} from 'faunadb'
import {NextApiRequest, NextApiResponse} from 'next'

export default function getCustomers(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not allowed')
    }

    const body = (req.body)
    res.status(200)


    console.log(body)
}