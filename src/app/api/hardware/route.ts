import type { NextApiResponse } from "next";


export default async function handler(
    req: Request,
    res: NextApiResponse
)   {
    try {
        const result = await req.json()
        res.status(200).json({result})
    } catch (err) {
        res.status(500).json({error: 'failed to load data'})
    }
}