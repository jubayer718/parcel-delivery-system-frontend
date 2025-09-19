import Container from "@/components/ui/Container";


const Testimonials = () => {
  return (
     <section className="py-16 bg-gray-50">
      <Container className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-gray-600 mb-4">
              “Fast and reliable! My packages always arrive on time. Highly recommend.”
            </p>
            <h4 className="font-semibold">– John Doe</h4>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-gray-600 mb-4">
              “Excellent service with real-time tracking. Makes sending parcels stress-free.”
            </p>
            <h4 className="font-semibold">– Jane Smith</h4>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-gray-600 mb-4">
              “Affordable rates and super fast delivery. I trust them with all my shipments.”
            </p>
            <h4 className="font-semibold">– Michael Lee</h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;