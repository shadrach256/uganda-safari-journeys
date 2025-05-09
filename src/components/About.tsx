
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="about" ref={sectionRef} className="py-20 bg-safari-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-safari-dark mb-4 reveal">
            About Uganda Safari Journeys
          </h2>
          <div className="w-20 h-1 bg-safari-green mx-auto mb-6 reveal"></div>
          <p className="max-w-3xl mx-auto text-lg reveal">
            Creating unforgettable safari experiences in Uganda for over 15 years
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative reveal">
            <img 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80" 
              alt="Safari guides in Uganda" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-safari-green p-4 rounded shadow-lg hidden md:block reveal">
              <p className="text-white font-serif font-bold text-3xl">15+</p>
              <p className="text-white text-sm">Years of Excellence</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg reveal">
              Founded in 2008, Uganda Safari Journeys has grown to become one of Uganda's premier safari operators, specializing in tailored wildlife and cultural experiences across the Pearl of Africa.
            </p>
            
            <p className="text-lg reveal">
              Our experienced team of local guides and safari experts has intimate knowledge of Uganda's diverse ecosystems, wildlife habits, and cultural heritage, ensuring our guests enjoy authentic and meaningful experiences.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md reveal">
                <h3 className="font-serif font-bold text-xl mb-3 text-safari-green">Expert Local Guides</h3>
                <p>Our guides have unparalleled knowledge of Uganda's wildlife and landscapes.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md reveal">
                <h3 className="font-serif font-bold text-xl mb-3 text-safari-green">Sustainable Tourism</h3>
                <p>We're committed to conservation and supporting local communities.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md reveal">
                <h3 className="font-serif font-bold text-xl mb-3 text-safari-green">Tailored Experiences</h3>
                <p>Each safari is customized to match your interests and preferences.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md reveal">
                <h3 className="font-serif font-bold text-xl mb-3 text-safari-green">Premium Service</h3>
                <p>Enjoy exceptional hospitality from start to finish.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
