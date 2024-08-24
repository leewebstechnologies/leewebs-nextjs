import { Inter, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@component/components/navbar/Navbar";
import Footer from "@component/components/footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import AuthProvider from "@component/components/AuthProvider/AuthProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leewebs | Leading Web Development Agency in Nigeria",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <ThemeProvider>
            <AuthProvider>
              <Navbar />
              {children}
              <Footer />
            </AuthProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
