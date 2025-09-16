import Footer from "./Footer";
import Navbar from "./Navbar";

interface IProps{
  children: React.ReactNode
}

const CommonLayout = ({children}:IProps) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
};

export default CommonLayout;