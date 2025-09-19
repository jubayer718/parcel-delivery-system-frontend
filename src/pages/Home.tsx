import Container from "@/components/ui/Container";
import man1 from '@/assets/Images/man1.png'
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";
import WeWork from "@/components/Layout/PublicLayout/spliting/Landing/WeWork";
import Service from "@/components/Layout/PublicLayout/spliting/Landing/Service";
import HowWork from "@/components/Layout/PublicLayout/spliting/Landing/HowWork";
import Testimonials from "@/components/Layout/PublicLayout/spliting/Landing/Testimonials";
import Footer from "@/components/Layout/PublicLayout/Footer";

const Home = () => {
  return (
    <div className="bg-[url('@/assets/Images/bannerImg.jpg')] bg-center bg-cover lg:h-[500px] md:h-80 h-60 max-w-screen bg-no-repeat relative mb-16">

      {/* White fog effect at bottom */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/80 to-transparent"></div>
      
      <Container className="flex items-center justify-evenly relative z-10">
        {/* Image */}
        <div className="w-1/2">
          <img
            src={man1}
            className="md:block hidden h-48 md:h-72 lg:h-[480px] -ml-8 lg:-ml-20 md:ml-8"
            alt=""
          />
        </div>

        {/* content */}
        <div className="space-y-4 w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold  text-black/70 w-full">

            Delivering Your Parcels Safely, Quickly, and <span className="text-orange-300">On Time, Every Time.</span>
          </h1>
          <p className= " hidden md:block lg:text-white text-left text-white/75">
            We make shipping simple — doorstep pickup, flexible delivery options, and
            seamless tracking at your fingertips. Whether it’s same-day, next-day, or
            scheduled, we’ve got you covered with reliable service that never compromises.
          </p>
          <Button ><Link to={'/dashboard'} className="flex items-center gap-2 font-bold">Get Started | <MdOutlineArrowOutward size={24} className="bg-white rounded-full text-black"/> </Link></Button>
        </div>

        {/* we work section */}
      </Container>
      <WeWork />
      <Service />
      <HowWork />
      <Testimonials />
      <Footer/>
    </div>
  );
};

export default Home;