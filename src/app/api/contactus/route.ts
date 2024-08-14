import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {

  const { fname, email, phone, message } = await request.json();

  try {
    const contact = await prisma.contactus.create({
      data: {
        fname,
        email,
        phone,
        message,
      },
    });

    return new Response(JSON.stringify({ message: contact }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.log(error);
  }


}