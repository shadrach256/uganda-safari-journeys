
import { useEffect, useRef, useState } from 'react';
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United States",
    text: "Our gorilla trekking experience was incredible. Uganda Safari Journeys provided expert guides who made sure we had the most amazing wildlife encounters while being respectful of the gorillas' habitat.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Mark Thompson",
    location: "United Kingdom",
    text: "This was our third safari in Africa, and by far the best. The diversity of wildlife in Queen Elizabeth National Park was exceptional, and our guide James was incredibly knowledgeable.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Spain",
    text: "The cultural experiences arranged by Uganda Safari Journeys were authentic and respectful. We felt like we truly connected with the communities we visited rather than just being tourists.",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "David Chen",
    location: "Australia",
    text: "From the moment we arrived, everything was perfectly organized. Comfortable accommodations, amazing food, and of course, incredible wildlife sightings. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-safari-light parallax-bg" style={{backgroundImage: 'linear-gradient(rgba(232, 208, 176, 0.85), rgba(232, 208, 176, 0.85)), url(https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3)'}}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-safari-dark mb-4 reveal">
            Guest Testimonials
          </h2>
          <div className="w-20 h-1 bg-safari-green mx-auto mb-6 reveal"></div>
          <p className="max-w-3xl mx-auto text-lg reveal">
            Hear from travelers who have experienced the magic of Uganda with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`transition-all duration-500 absolute w-full ${
                index === activeIndex 
                  ? "opacity-100 translate-x-0 z-20" 
                  : "opacity-0 translate-x-24 -z-10"
              }`}
            >
              <Card className="bg-white p-8 shadow-xl reveal">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-full object-cover border-4 border-safari-green"
                    />
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <div className="mb-3 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-safari-orange fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                    
                    <div>
                      <p className="font-bold text-safari-dark">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2 reveal">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? 'bg-safari-green' : 'bg-gray-300 hover:bg-safari-light-green'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
