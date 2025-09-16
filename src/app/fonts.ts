import { Abel, Acme, DM_Sans, Inter, Manrope, Poppins } from "next/font/google";

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

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
