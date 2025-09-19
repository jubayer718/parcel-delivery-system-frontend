import Container from "@/components/ui/Container";


const Service = () => {
  return (
    <div>
       <section className="py-16 bg-gray-50">
      <Container className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Same Day Delivery</h3>
            <p className="text-gray-600">Get your parcels delivered the same day with full tracking.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Next Day Delivery</h3>
            <p className="text-gray-600">Fast and reliable delivery to ensure your packages arrive on time.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">International Shipping</h3>
            <p className="text-gray-600">Ship parcels worldwide safely with our trusted logistics network.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Package Tracking</h3>
            <p className="text-gray-600">Real-time tracking updates so you always know where your parcel is.</p>
          </div>
        </div>
      </Container>
    </section>
    </div>
  );
};

export default Service;