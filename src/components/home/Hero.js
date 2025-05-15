import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Protecting Your Digital Assets in an Evolving Threat Landscape
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive cybersecurity solutions to safeguard your business from sophisticated threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Security Assessment
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-8 relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black bg-opacity-70 p-4 rounded-lg border border-gray-700">
                    <div className="text-3xl font-bold mb-2 text-emerald-500">99.9%</div>
                    <div className="text-gray-300">Threat Detection</div>
                  </div>
                  <div className="bg-black bg-opacity-70 p-4 rounded-lg border border-gray-700">
                    <div className="text-3xl font-bold mb-2 text-emerald-500">24/7</div>
                    <div className="text-gray-300">Monitoring</div>
                  </div>
                  <div className="bg-black bg-opacity-70 p-4 rounded-lg border border-gray-700">
                    <div className="text-3xl font-bold mb-2 text-emerald-500">500+</div>
                    <div className="text-gray-300">Clients Protected</div>
                  </div>
                  <div className="bg-black bg-opacity-70 p-4 rounded-lg border border-gray-700">
                    <div className="text-3xl font-bold mb-2 text-emerald-500">15min</div>
                    <div className="text-gray-300">Response Time</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-full h-full bg-emerald-600 rounded-xl opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 