import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/send-email";

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing fields" },
                { status: 400 },
            );
        }

        await sendEmail({ name, email, message });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Pipedream error:", err);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 },
        );
    }
}
