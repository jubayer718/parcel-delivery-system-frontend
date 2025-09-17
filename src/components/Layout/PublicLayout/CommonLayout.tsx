import Footer from "./Footer";
import Navbar from "./Navbar";

interface IProps{
  children: React.ReactNode
}

const CommonLayout = ({children}:IProps) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar/>
 
        <div className=" grow-1">
        {children}
    </div>

      <Footer/>
    </div>
  );
};

export default CommonLayout;