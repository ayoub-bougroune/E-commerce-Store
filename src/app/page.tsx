'use client';

import { useEffect } from "react";
import { usePathname } from 'next/navigation';
import { Home } from "../app/scenes/home/Home";
import { Navbar } from "../app/scenes/global/Navbar";
import { Footer } from "../app/scenes/global/Footer";
import { ItemDetails } from "../app/scenes/itemDetails/ItemDetails";
import { CartMenu } from "../app/scenes/global/CartMenu";
import { Checkout } from "../app/scenes/checkout/Checkout";
import { Confirmation } from "../app/scenes/checkout/Confirmation";
import { NoticeBar } from "../app/scenes/global/NoticeBar";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <NoticeBar />
      <Navbar />
      <ScrollToTop />
      <main>
        <Home />
        <ItemDetails />
        <Checkout />
        <Confirmation />
      </main>
       <CartMenu /> 
      <Footer />
    </div>
  );
}

export default App;

