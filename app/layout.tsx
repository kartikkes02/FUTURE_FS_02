// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Pacifico } from "next/font/google";
// import "./globals.css";
// import { CartProvider } from '../lib/CartContext';
// import { AuthProvider } from '../lib/AuthContext';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const pacifico = Pacifico({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-pacifico',
// })

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "ShopEase - Your Shopping Destination",
//   description: "Discover amazing products at ShopEase. Quality items, great prices, and exceptional service.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning={true}>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
//       >
//         <AuthProvider>
//           <CartProvider>
//             <Header />
//             <main className="min-h-screen">
//               {children}
//             </main>
//             <Footer />
//           </CartProvider>
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import { CartProvider } from '../lib/CartContext';
import { AuthProvider } from '../lib/AuthContext';
import { SessionProvider } from "next-auth/react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientSessionProvider from './ClientSessionProvider';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShopEase - Your Shopping Destination",
  description: "Discover amazing products at ShopEase. Quality items, great prices, and exceptional service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <ClientSessionProvider>
          <AuthProvider>
            <CartProvider>
              <Header />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
            </CartProvider>
          </AuthProvider>
        </ClientSessionProvider>
      </body>
    </html>
  );
}