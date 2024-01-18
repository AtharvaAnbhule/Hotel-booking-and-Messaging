import './globals.css';
import type { Metadata } from 'next';
import { Inter,Nunito } from 'next/font/google';
import { NextAuthProvider } from './context/AuthContext';
import ActiveStatus from './components/ActiveStatus';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Social',
  description: '',
}



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <ActiveStatus />
         {children}
         </NextAuthProvider>
        </body>
    </html>
  )
}
