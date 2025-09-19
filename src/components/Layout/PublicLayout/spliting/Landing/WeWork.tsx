import { motion } from 'framer-motion'; 

const workData = [
  {image:'/workImg1.png'},
  {image:'/workImg2.png'},
  {image:'/workImg3.png'},
  {image:'/workImg4.webp'},
  {image:'/workImg5.png'},
  {image:'/workImg1.png'},
  {image:'/workImg2.png'},
]
const WeWork = () => {
  return (
    <section className="my-12">
      <div className="w-full">
        <h2 className=" text-center font-bold text-black">We have worked on over 200+ projects with 150+ clients</h2>
      </div>
      <div className='py-7 my-5 bg-orange-300 overflow-hidden  min-w-screen relative -left-1'>
         <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className='flex w-max gap-10'
        >
          
          {[...workData, ...workData].map((item, index) => (
            <div key={index} className='flex items-center gap-7'>
             
             <img src={item.image} className='h-12 w-full' alt="" />
            </div>
          ))}
        </motion.div>
       </div>
    </section>
  );
};

export default WeWork;