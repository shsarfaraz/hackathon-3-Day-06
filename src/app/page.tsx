
import Customers from "@/components/Customers";
import Footer1 from "@/components/Footer1";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Practice from "@/components/Practice";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import Navbar from "@/components/Navbar";
import Offers from "@/components/Offers";
import Selling from "@/components/Selling";


export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      
      <Hero2 /> 
      <Hero3 />
      <Selling />
      <Customers />
      <Practice />
      <Offers />
      <Footer1 />
    </div>
  );
}
