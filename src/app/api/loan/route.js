import prisma from "@/lib/prisma";

export async function POST(request) {

  const {phone} = await request.json();
  console.log(phone);
  try {
    const loan = await prisma.loan.create({
      data: {
        phone
      },
    });

    return new Response(JSON.stringify({ message: loan }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.log(error);
  }


}