import Container from '@/components/ui/Container';


const HowWork = () => {
  return (
    
       <section className="py-16 bg-white">
      <Container className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">1. Schedule Pickup</h3>
            <p className="text-gray-600">Book a parcel pickup online in a few simple steps.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">2. Fast Delivery</h3>
            <p className="text-gray-600">Our delivery team ensures your parcel reaches safely and quickly.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">3. Track & Receive</h3>
            <p className="text-gray-600">Receive real-time updates and confirm delivery from anywhere.</p>
          </div>
        </div>
      </Container>
    </section>

  );
};

export default HowWork;