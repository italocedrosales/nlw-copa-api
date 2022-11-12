import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const prisma = new PrismaClient({});

const app = express();

app.get("/users", async (req: Request, res: Response) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
