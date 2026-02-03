import axios from "axios";
import { ContactFormInput } from "./definitions";

const PIPEDREAM_WEBHOOK_URL = "https://eouyqui1lt08i41.m.pipedream.net";

export async function sendEmail({ name, email, message }: ContactFormInput) {
    return axios.post(PIPEDREAM_WEBHOOK_URL, {
        name,
        email,
        message,
    });
}
