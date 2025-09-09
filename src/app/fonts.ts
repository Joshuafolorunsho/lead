import { Abel, Acme, Inter, Manrope } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const acme = Acme({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const abel = Abel({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});
