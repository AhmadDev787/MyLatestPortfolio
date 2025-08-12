import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Contact Us | Ahmad Hassan Web Development Services",
  description:
    "Get in touch with Ahmad Hassan for professional web development, full-stack solutions, and digital services. Reach out today for custom websites, apps, and more.",
  keywords: [
    "Contact Ahmad Hassan",
    "Web Development Services",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack",
    "Custom Website Development",
    "Hire Web Developer Pakistan",
  ],
  authors: [{ name: "Ahmad Hassan" }],
  creator: "Ahmad Hassan",
  publisher: "Ahmad Hassan",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <html lang="en">
        <body className={`${spaceGrotesk.variable} antialiased`}>
          {children}
        </body>
      </html>
      <Footer />
    </>
  );
}
