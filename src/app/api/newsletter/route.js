import prisma from "@/lib/prisma";

export async function POST(request) {

  const {email} = await request.json();

  try {
    const newsletter = await prisma.newsletter.create({
      data: {
        email
      },
    });

    return new Response(JSON.stringify({ message: newsletter }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.log(error);
  }


}