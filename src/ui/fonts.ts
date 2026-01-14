import { DM_Sans, Nunito_Sans } from "next/font/google";

export const dmSans = DM_Sans({
    variable: "--font-dm-sans", // creating the variable for CSS usage
    subsets: ["latin"],
});

export const nunitoSans = Nunito_Sans({
    variable: "--font-nunito-sans",
    subsets: ["latin"],
});