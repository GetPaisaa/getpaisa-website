// import prisma from "@/lib/prisma";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {

  const {email} = await request.json();

  try {
    const launching = await prisma.launching.create({
      data: {
        email
      },
    });

    return new Response(JSON.stringify({ message: launching }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.log(error);
  }


}