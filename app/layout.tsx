import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

// 👇 Load Roboto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose the weights you need
})

export const metadata: Metadata = {
  title: "Beyond Limits - Build Technology Building Sales",
  description: "We build technology and digital transformation solutions to operate and compete in a digital economy",
  keywords: "technology, digital transformation, software development, consulting",
  authors: [{ name: "GZnab Technologies" }],
  openGraph: {
    title: "Beyond Limits",
    description: "Build Technology Building Sales",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
