import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

// call prisma function
const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
    if (req.method === "GET") {
        const content = await prisma.content.findMany();
        res.status(200).json(content)
    }


    res.status(200).json({ name: "John Doe" });
};