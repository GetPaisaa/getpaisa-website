import { Roboto,Roboto_Mono,Poppins } from "next/font/google";
import "../css/globals.css";
import "../css/animate.css"; 
import "../css/tailwind.css";
 
//const inter = Roboto({ subsets: ["latin"] });

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

//import { Poppins } from '@next/font/google';

export const poppins = Poppins({
  weight: ['400', '700'], // specify the weights you need
  subsets: ['latin'], // specify the subsets you need
  display: 'swap', // this is optional
});

 

export const metadata = {
  title: "GetPaisa - Empowering Your Financial Needs.",
  description: "GetPaisa - Empowering Your Financial Needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/x-icon" href="favicon.png"/>
      </head>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
