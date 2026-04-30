import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yvonne Montefrio | Full-Stack Developer",
  description:
    "Full-Stack Developer with 10+ years of experience building scalable web and mobile applications. Specialized in React, React Native, Angular, and Laravel.",
  keywords: [
    "Yvonne Montefrio",
    "Full-Stack Developer",
    "React",
    "React Native",
    "Laravel",
    "TypeScript",
    "Angular",
    "Philippines",
  ],
  authors: [{ name: "Yvonne Montefrio" }],
  openGraph: {
    title: "Yvonne Montefrio | Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Web Developer with 10+ years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=DM+Sans:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
