import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(
  req: Request,
  { params }: { params: { channelId: string , serverId: string} }
) {
  try {
    const { searchParams } = new URL(req.url);
    const channelId = searchParams.get("channelId") || "";
    const serverId = searchParams.get("serverId") || "";

    

    const channel = await db.channel.findFirst({
      where: { id: channelId },
      include: { 
        Message: {
          include: { 
            user: true
          }
        }
      }
    });


    return NextResponse.json(channel, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("error in getting channels", { status: 500 });
  }
}
