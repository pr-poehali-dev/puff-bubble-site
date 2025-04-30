import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-puff-brown to-puff-brown/80 text-puff-cream">
      <div className="bubble-bg absolute inset-0 opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-handwritten font-bold tracking-tight">
              Вкусная выпечка и <span className="text-puff-light">Bubble Tea</span>
            </h1>
            <p className="text-lg md:text-xl max-w-prose text-puff-cream/90">
              Наслаждайтесь изысканной выпечкой, свежими круассанами и освежающим баббл ти 
              в нашей уютной кондитерской
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-puff-light text-puff-brown hover:bg-puff-light/90 font-medium">
                Заказать сейчас <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" className="border-puff-cream/30 hover:bg-puff-cream/10">
                Посмотреть меню
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:flex justify-center items-center">
            <div className="absolute w-3/4 h-3/4 bg-puff-pink/30 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="https://cdn.poehali.dev/files/9edf16fe-bd47-41ec-a083-d614fa79c836.jpg"
                alt="Десерт с клубникой"
                className="w-full h-auto rounded-lg shadow-2xl transform rotate-3 animate-float"
              />
              <img
                src="https://cdn.poehali.dev/files/fa04679e-a563-4184-836f-e136978b68da.jpg"
                alt="Bubble Tea"
                className="w-full h-auto rounded-lg shadow-2xl transform -rotate-3 animate-float [animation-delay:1s]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
