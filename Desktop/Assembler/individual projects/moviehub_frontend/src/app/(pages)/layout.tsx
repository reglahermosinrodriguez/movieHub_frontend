// src/app/dashboard/layout.js
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
      </main>  
    
  );
}
