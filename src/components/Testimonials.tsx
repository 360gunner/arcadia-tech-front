
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, Global Banking Corp",
      content: "TETRACODE transformed our entire banking infrastructure. Their expertise in core banking systems is unmatched. We've seen 50% improvement in transaction processing speed.",
      rating: 5,
      company: "Fortune 500 Bank"
    },
    {
      name: "Michael Chen",
      role: "VP Engineering, StreamMax",
      content: "The broadcasting platform they built handles millions of concurrent users flawlessly. Their technical expertise and attention to detail is exceptional.",
      rating: 5,
      company: "Leading Broadcaster"
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Digital, AirLink Airlines",
      content: "Our airline operations are now completely digitized thanks to TETRACODE. The system they built increased our operational efficiency by 30%.",
      rating: 5,
      company: "International Airline"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              {" "}Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the leaders who trust us 
            with their most critical technology infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t pt-6">
                <div className="font-semibold text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Average Project Duration (months)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">System Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
