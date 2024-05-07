import AppFooter from '@/components/app-footer';
import Navbar from '@/components/navbar';
import '@/styles/globals.scss'
import '@/styles/layout.scss'


export const metadata = {
  title: "Remmber Ben Romano",
  description: "A Memorial website for out beloved Ben Romano, a person of giving.. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir='rtl'>
        <body>
          <Navbar />
        <main className='main-layout relative gap-5vh'>
          {children}
        </main>
        <AppFooter />
        </body>
    </html>
  );
}
