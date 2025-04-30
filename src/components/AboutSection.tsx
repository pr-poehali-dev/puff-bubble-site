import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 bg-puff-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-handwritten font-bold text-puff-brown mb-6">
              Наша история
            </h2>
            <div className="space-y-4 text-puff-brown/80">
              <p>
                Puff & Bubble - это уютное место, где соединились две страсти: искусство выпечки и
                любовь к тайваньскому bubble tea. Наша история началась в 2020 году, когда мы решили
                создать уникальное пространство, где каждый может насладиться свежайшей 
                выпечкой и оригинальными напитками в одном месте.
              </p>
              <p>
                Мы используем только натуральные ингредиенты, свежие фрукты и ягоды, а также оригинальные 
                рецепты, чтобы предложить вам неповторимый вкус. Наши пекари и бариста постоянно 
                экспериментируют с новыми вкусами и текстурами.
              </p>
              <p>
                Будь то хрустящий круассан, нежное пирожное или освежающий bubble tea - в Puff & Bubble 
                каждый найдет что-то особенное для себя.
              </p>
            </div>
            <div className="mt-8">
              <Button className="bg-puff-brown text-puff-cream hover:bg-puff-brown/90">
                Узнать больше о нас
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-puff-pink rounded-full opacity-30"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-puff-beige rounded-full opacity-40"></div>
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://unsplash.com/photos/woman-in-white-long-sleeve-shirt-holding-brown-and-white-ceramic-mug-KR3vjhpkELk/download?force=true&w=640" 
                    alt="Наша пекарня" 
                    className="h-40 w-full object-cover rounded-lg"
                  />
                  <img 
                    src="https://unsplash.com/photos/a-woman-standing-in-front-of-a-bakery-display-case-gOLMDfTHjwE/download?force=true&w=640" 
                    alt="Наша команда" 
                    className="h-32 w-full object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <img 
                    src="https://unsplash.com/photos/person-holding-white-ceramic-teapot-pouring-on-white-ceramic-teacup-LpiTkKUQXxk/download?force=true&w=640" 
                    alt="Приготовление чая" 
                    className="h-32 w-full object-cover rounded-lg"
                  />
                  <img 
                    src="https://unsplash.com/photos/a-person-making-a-design-in-a-cup-of-coffee-0qnRfgnZIsI/download?force=true&w=640" 
                    alt="Наше искусство" 
                    className="h-40 w-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
