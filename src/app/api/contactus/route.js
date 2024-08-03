import prisma from "@/lib/prisma";

export async function POST(request) {

  const { fname, lname, email, phone, message } = await request.json();

  try {
    const contact = await prisma.contactus.create({
      data: {
        fname,
        lname,
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