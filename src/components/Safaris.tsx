
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Safari data
const safaris = [
  {
    id: 1,
    title: "Gorilla Trekking Adventure",
    description: "Track endangered mountain gorillas in Bwindi Impenetrable Forest, one of the world's most thrilling wildlife encounters.",
    duration: "5 days",
    price: "From $2,500",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    tags: ["Wildlife", "Adventure"],
  },
  {
    id: 2,
    title: "Big Five Safari",
    description: "Explore Queen Elizabeth National Park, spotting lions, elephants, buffalo, leopards, and rhinos in their natural habitat.",
    duration: "7 days",
    price: "From $1,800",
    image: "https://images.unsplash.com/photo-1547970511-3d923e3130a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    tags: ["Wildlife", "Photography"],
  },
  {
    id: 3,
    title: "Cultural & Wildlife Experience",
    description: "Immerse yourself in authentic Ugandan culture with village visits, traditional performances and wildlife viewing.",
    duration: "10 days",
    price: "From $2,200",
    image: "https://images.unsplash.com/photo-1521815049196-8a76f26a2135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["Culture", "Wildlife"],
  },
  {
    id: 4,
    title: "Murchison Falls Adventure",
    description: "Witness the spectacular Murchison Falls and enjoy game drives spotting hippos, crocodiles, and abundant birdlife.",
    duration: "4 days",
    price: "From $1,500",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    tags: ["Adventure", "Nature"],
  }
];

const Safaris = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredSafaris, setFilteredSafaris] = useState(safaris);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filters = ["All", "Wildlife", "Adventure", "Culture", "Photography", "Nature"];

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredSafaris(safaris);
    } else {
      setFilteredSafaris(
        safaris.filter(safari => safari.tags.includes(activeFilter))
      );
    }
  }, [activeFilter]);

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
    <section id="safaris" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-safari-dark mb-4 reveal">
            Unforgettable Safari Experiences
          </h2>
          <div className="w-20 h-1 bg-safari-green mx-auto mb-6 reveal"></div>
          <p className="max-w-3xl mx-auto text-lg reveal">
            Explore our carefully crafted safari packages, each designed to showcase the best of Uganda
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={activeFilter === filter 
                ? "bg-safari-green text-white hover:bg-safari-brown" 
                : "border-safari-green text-safari-dark hover:text-white hover:bg-safari-green"
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSafaris.map((safari, index) => (
            <Card key={safari.id} className="hover-scale overflow-hidden reveal">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={safari.image} 
                  alt={safari.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {safari.tags.map((tag) => (
                    <span key={tag} className="safari-tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="font-serif text-xl text-safari-dark">{safari.title}</CardTitle>
                <CardDescription className="flex justify-between items-center">
                  <span>{safari.duration}</span>
                  <span className="font-semibold text-safari-green">{safari.price}</span>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700">{safari.description}</p>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full bg-safari-green hover:bg-safari-brown">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Safaris;
