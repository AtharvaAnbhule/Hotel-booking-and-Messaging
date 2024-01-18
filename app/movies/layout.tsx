import './globals.css';
import type { Metadata } from 'next';
import { Inter , Nunito } from 'next/font/google';
import Navigation from './components/shared/navigation/Navigation';
import CurrentUserProvider from './context/CurrentUserContext';
import getCurrentUser from '../actions/getCurrentUser';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movies',
  description: 'Airbnb clone',
}

const font=Nunito({
  subsets:['latin'],
  weight:["1000","300","400","500","700","900"]
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
const currentUser = await getCurrentUser();
  
  return (
    <html lang="en">
      
      <body className={font.className}>
            <CurrentUserProvider user={currentUser}>
            <Navigation />
            
            <div className='pt-16'>
           

        {children}
        </div>
            </CurrentUserProvider>
           
      
        </body>
    </html>
  )
}
