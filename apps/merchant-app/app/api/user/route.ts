import { NextResponse } from "next/server";
import client from "@repo/db/client";
import dotenv from "dotenv";

dotenv.config();

// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL,
// });

// const client = new PrismaClient({ adapter });

export const GET = async () => {
  await client.merchant.create({
    data: {
      email: "asd",
      name: "adsads",
      auth_type: "Google",
    },
  });
  return NextResponse.json({
    message: "hi there",
  });
};
