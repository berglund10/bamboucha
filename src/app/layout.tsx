import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/ui/nav-bar";

export const metadata: Metadata = {
  title: "Bamboucha",
  description: "TBA",
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body data-theme="retro">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
