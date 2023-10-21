
import { Poppins } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css"



const poppins = Poppins({weight:["400","600"], subsets: ['latin'] })


export const metadata = {
  title: 'Punppy || Home',
  description: 'The landing page for the punppy web application',
}
 
export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        
        </body>
    </html>
  )
}
