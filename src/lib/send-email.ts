import axios from "axios";
import { ContactFormInput } from "@/lib/definitions";
import { PIPEDREAM_WEBHOOK_URL } from "@/lib/constants";

export async function sendEmail({ name, email, message }: ContactFormInput) {
    return axios.post(PIPEDREAM_WEBHOOK_URL, {
        name,
        email,
        message,
    });
}
