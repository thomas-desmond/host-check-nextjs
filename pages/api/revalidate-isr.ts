import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await res.revalidate('/feature/on-demand-isr');
        return res.json({ revalidated: true });

    } catch (err) {
        return res.status(500).send('Error revalidating');
    }
}
