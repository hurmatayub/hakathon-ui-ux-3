import Image from "next/image";

const insight = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold text-[#1A202C]">Car Rental Insights</h1>
        <p className="text-xl text-[#4A5568] mt-4">Everything you need to know before renting a car!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/images/suv.jpg"
            alt="SUV Rental"
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-2xl font-semibold text-[#1A202C] mt-4">SUV Rentals</h3>
          <p className="text-lg text-[#4A5568] mt-2">
            Spacious and perfect for family trips. Our SUVs come with modern amenities for a comfortable journey.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/images/sedan.jpg"
            alt="Sedan Rental"
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-2xl font-semibold text-[#1A202C] mt-4">Sedan Rentals</h3>
          <p className="text-lg text-[#4A5568] mt-2">
            Ideal for business trips or city driving. Our sedans are fuel-efficient and stylish.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image
            src="/images/convertible.jpg"
            alt="Convertible Rental"
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-2xl font-semibold text-[#1A202C] mt-4">Convertible Rentals</h3>
          <p className="text-lg text-[#4A5568] mt-2">
            Experience the open road in style with our convertible cars. Perfect for those sunny days!
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-[#1A202C]">Why Choose Us?</h2>
        <p className="text-lg text-[#4A5568] mt-4">
          Our rental services are designed to provide convenience, comfort, and safety. Here&apos;s why we stand out:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-[#4A5568] text-3xl font-bold">🛡️</div>
            <h3 className="text-xl font-semibold text-[#1A202C] mt-4">Safety First</h3>
            <p className="text-lg text-[#4A5568] mt-2">
              We ensure all our cars are regularly inspected for safety, providing you peace of mind on the road.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-[#4A5568] text-3xl font-bold">🚗</div>
            <h3 className="text-xl font-semibold text-[#1A202C] mt-4">Wide Fleet</h3>
            <p className="text-lg text-[#4A5568] mt-2">
              From sedans to SUVs and convertibles, our wide selection of cars ensures the perfect ride for every need.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-[#4A5568] text-3xl font-bold">💳</div>
            <h3 className="text-xl font-semibold text-[#1A202C] mt-4">Affordable Rates</h3>
            <p className="text-lg text-[#4A5568] mt-2">
              We offer competitive and transparent pricing, with no hidden fees, making your rental experience smooth.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-[#1A202C] text-center">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-1/3">
            <p className="text-lg text-[#4A5568]">
              &quot;I had an amazing experience renting from this company. The car was clean, and the process was seamless!&quot;
            </p>
            <div className="mt-4 text-[#1A202C] font-semibold">Sarah L.</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-1/3">
            <p className="text-lg text-[#4A5568]">
              &quot;The SUV was perfect for our family trip. We were comfortable the whole way and had plenty of space.&quot;
            </p>
            <div className="mt-4 text-[#1A202C] font-semibold">Michael D.</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-1/3">
            <p className="text-lg text-[#4A5568]">
              &quot;Excellent service, great rates, and the convertible made our weekend getaway unforgettable!&quot;
            </p>
            <div className="mt-4 text-[#1A202C] font-semibold">David K.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default insight;
