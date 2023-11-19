import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import {OpenAI} from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(
    req: Request
){
    try {
        const {userId} = auth();
        const body = await req.json();
        const {message} = body;

        if(!userId){
            return new NextResponse("Unauthorized",{status: 401})
        }
        if(!openai){
            return new NextResponse("Open Ai API key not configured",{status: 500});
        }
        if(!message){
            return new NextResponse("Message are required",{status: 400})
        }
        const response = await OpenAI.createChatCompletion({
            model:"gpt-3.5-turbo",
            message
        });
        return NextResponse.json(response.data.choices[0].message);
        
    } catch (error) {
        console.log("[CONVERSATION ERROR]",error);
        return new NextResponse('Internal error',{status: 500});
    }
}
