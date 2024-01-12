import { writeFile } from "fs/promises";
import { NextResponse } from "next/server"


export async function POST(req: Request) {
    try {

       const body = await req.formData()

       const image = body.get("imageUrl") as File


        const fileBuffer = await (image as File).arrayBuffer();
        const buffer = Buffer.from(fileBuffer);

        const path = `${process.cwd()}/public/serverImages/${crypto.randomUUID() + image.name}`;

        await writeFile(path, buffer)

        const rest = path.split(`${process.cwd()}/public/`)[1]

        return NextResponse.json(rest, {status: 200})
        
    } catch (error) {
        console.log("error in file upload")
        return NextResponse.json(error, {status: 500})
    }
}