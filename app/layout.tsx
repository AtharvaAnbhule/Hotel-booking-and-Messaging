"use client"
import "@/app/hotels/globals.css";
import type { Metadata } from 'next';
import { SessionProvider } from "next-auth/react";
import { Inter,Nunito } from 'next/font/google';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font=Nunito({
  subsets:['latin']
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  
  return (
    <html lang="en">
      <body className={font.className}>
       <SessionProvider>{children}</SessionProvider>
        
        
        
        </body>
    </html>
  )
}
