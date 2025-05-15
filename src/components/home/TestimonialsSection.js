import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "CyberShield's penetration testing team uncovered critical vulnerabilities that our internal team missed. Their detailed remediation plan helped us strengthen our security posture significantly.",
      author: "Sarah Johnson",
      position: "CIO, Nexus Financial",
      image: "/images/testimonial-1.jpg"
    },
    {
      id: 2,
      content: "When we experienced a serious data breach, CyberShield's incident response team was on-site within hours. Their expertise and quick action minimized the damage and helped us recover fast.",
      author: "Michael Chen",
      position: "CISO, TechVantage Solutions",
      image: "/images/testimonial-2.jpg"
    },
    {
      id: 3,
      content: "We've been working with CyberShield for over 5 years and they've consistently delivered exceptional security consulting services. They truly understand our business and provide tailored solutions.",
      author: "Emily Rodriguez",
      position: "VP of IT, GlobalHealth Systems",
      image: "/images/testimonial-3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">What Our Clients Say</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We take pride in delivering exceptional cybersecurity services that exceed our clients' expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-black rounded-lg shadow-lg p-8 border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center text-emerald-500">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.213.048-.446.104-.711.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center bg-gray-800 px-6 py-2 rounded-full">
            <span className="text-emerald-500 font-semibold">Trusted by 500+ companies worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 