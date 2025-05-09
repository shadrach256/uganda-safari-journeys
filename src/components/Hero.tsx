
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://videos.pexels.com/videos/elephant-walking-in-the-mud-1580855" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80" 
            alt="Uganda safari landscape" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-20">
        <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-center max-w-5xl animate-fade-in">
          Discover the Pearl of Africa
        </h1>
        
        <p className="text-white text-lg md:text-xl mt-6 text-center max-w-2xl animate-fade-in animate-delay-200">
          Experience breathtaking wildlife encounters, vibrant cultures, and stunning landscapes with Uganda's premier safari company
        </p>
        
        <div className="mt-10 flex flex-col md:flex-row gap-4 animate-fade-in animate-delay-300">
          <Button 
            className="bg-safari-green hover:bg-safari-brown text-white text-lg px-8 py-6"
            onClick={() => document.getElementById('safaris')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Safaris
          </Button>
          
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-safari-dark text-lg px-8 py-6"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
