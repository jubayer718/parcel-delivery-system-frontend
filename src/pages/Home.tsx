import Container from "@/components/ui/Container";
import man1 from '@/assets/Images/man1.png'


const Home = () => {
  return (
       <div className="bg-[url('@/assets/Images/bannerImg.jpg')] bg-center bg-cover lg:h-[500px] md:h-64 h-52 max-w-screen bg-no-repeat relative">
    <Container className="flex items-center justify-evenly">
    {/* Image */}
        <div className="w-1/2">
        <img src={man1} className="h-48 md:h-60 lg:h-[480px] -ml-8 lg:-ml-20 md:ml-8 " alt="" />
        </div>
        {/* content */}
        <div className=" w-1/2">

          <h1 className=" text-2xl md:text-4xl lg:text-5xl font-bold text-center">Delivering Your Parcels, On Time.<span className="text-orange-300"> Every Time.</span></h1>
        </div>
   </Container>
    </div>
  );
};

export default Home;