import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export  async function GET(req:Request, { params }: { params: { serverId: string } }) {
    try {

        const { searchParams } = new URL(req.url);
        const gserverId = searchParams.get("serverId") || "";
    

        const channels = await db.channel.findMany({where: {connectedToServer: gserverId}})

        return NextResponse.json(channels, {status: 200})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json("error in getting channels", {status:500})
    }
}