import { Lora } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});
