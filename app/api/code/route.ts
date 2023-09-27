import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { userSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openAi = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

interface ChatCompletionMessageParam {
  role: "system";
  content: string; // Update this to be of type string
}

const instructionMessage: ChatCompletionMessageParam = {
  role: "system",
  content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanation."
};

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorised", { status: 401 });
        }

        if (!openAi) {
            return new NextResponse("OpenAI API key not configured", { status: 500 });
        }

        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }

        const freeTrial = await checkApiLimit();
        const isPro = await userSubscription();

        if (!freeTrial && !userSubscription) {
            return new NextResponse("Free trial has expired!", { status: 403 });
        }

        const response = await openAi.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages:[instructionMessage, ...messages]
        });

        if (!isPro) {
            await increaseApiLimit();
        }

        return NextResponse.json(response.choices[0].message)
        
    } catch (error) {
        console.log("[CODE_ERROR] ", error );
        return new NextResponse("Internal Error", { status: 500 });
    }
}
