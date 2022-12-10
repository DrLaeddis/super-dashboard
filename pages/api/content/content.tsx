import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

// call prisma function
const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed"});
    }

    const contentData = JSON.parse(req.body)

    const saveContentData = await prisma.content.create({
        data: contentData
    });

    res.json(saveContentData);
};