// src/app/dashboard/layout.js
import Footer from "@/utils/components/footer/footer";
import "./movie.css";
import Header from "@/utils/components/header/header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   

      <main>
      <Header />
       {children}
       <Footer />
      </main>  
    
  );
}