import './globals.css';
//import { Space_Grotesk } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';

import Navbar from '@/components/Navbar'

//const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <div className='px-4 grid place-content-center min-h-screen bg-gray-900'>
          <div className='sm:w-[500px] md:w-[600px] lg:w-[700px]'>
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
