import { Inter } from "next/font/google";
import Home from "@/src/components/home";
const inter = Inter({ subsets: ["latin"] });

export default function HomeMain() {
  return <Home />;
}
