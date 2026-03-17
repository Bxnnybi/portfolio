import "./globals.css"
import { Marcellus } from "next/font/google"
import Navbar from "@/components/Navbar"

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${marcellus.className} bg-mocha-light text-mocha-dark dark:bg-[#0F172A] dark:text-white`}>

        <Navbar />

        {children}

      </body>

    </html>
  )
}