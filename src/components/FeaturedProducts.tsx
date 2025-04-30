import ProductCard from './ProductCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FeaturedProducts = () => {
  const bakeryProducts = [
    {
      id: 1,
      title: "Круассан с ягодами",
      description: "Хрустящий круассан с клубникой, голубикой и шоколадной глазурью",
      price: "320",
      imageSrc: "https://cdn.poehali.dev/files/9edf16fe-bd47-41ec-a083-d614fa79c836.jpg",
      badge: "Хит продаж",
      isNew: false
    },
    {
      id: 2,
      title: "Клубничный тарт",
      description: "Нежный тарт с заварным кремом и свежей клубникой",
      price: "380",
      imageSrc: "https://cdn.poehali.dev/files/ece45d11-238e-4970-95eb-ab73edb3ebe3.jpg",
      badge: "",
      isNew: true
    },
    {
      id: 3,
      title: "Круассан с яйцом",
      description: "Сытный завтрак: круассан с яйцом, беконом и руколой",
      price: "350",
      imageSrc: "https://cdn.poehali.dev/files/2547138c-9c06-415f-8bf6-bd89e66dfbd7.jpg",
      badge: "Бестселлер",
      isNew: false
    }
  ];

  const bubbleTeaProducts = [
    {
      id: 1,
      title: "Молочный классический",
      description: "Классический молочный чай с тапиокой и карамельным сиропом",
      price: "240",
      imageSrc: "https://cdn.poehali.dev/files/fa04679e-a563-4184-836f-e136978b68da.jpg",
      badge: "Топ продаж",
      isNew: false
    },
    {
      id: 2,
      title: "Таро с тапиокой",
      description: "Молочный чай с пюре таро и жемчужинами тапиоки",
      price: "270",
      imageSrc: "https://unsplash.com/photos/green-and-brown-container-with-brown-liquid-9yvADFNcXOc/download?force=true&w=640",
      badge: "",
      isNew: true
    },
    {
      id: 3,
      title: "Манго матча",
      description: "Освежающий чай с пюре манго, матчей и кокосовыми желе",
      price: "290",
      imageSrc: "https://unsplash.com/photos/boba-teas-in-plastic-cups-JJkrLQb6Wqg/download?force=true&w=640",
      badge: "Освежающий",
      isNew: false
    }
  ];

  return (
    <section className="py-16 bg-puff-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-handwritten font-bold text-puff-brown mb-4">
            Наши популярные продукты
          </h2>
          <p className="text-puff-brown/80 max-w-2xl mx-auto">
            Выбирайте из нашей коллекции свежей выпечки и освежающих bubble tea напитков
          </p>
        </div>

        <Tabs defaultValue="bakery" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-puff-light/30">
              <TabsTrigger 
                value="bakery" 
                className="data-[state=active]:bg-puff-brown data-[state=active]:text-puff-cream"
              >
                Выпечка
              </TabsTrigger>
              <TabsTrigger 
                value="bubbleTea" 
                className="data-[state=active]:bg-puff-brown data-[state=active]:text-puff-cream"
              >
                Bubble Tea
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="bakery" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bakeryProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  imageSrc={product.imageSrc}
                  badge={product.badge}
                  isNew={product.isNew}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="bubbleTea" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bubbleTeaProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  imageSrc={product.imageSrc}
                  badge={product.badge}
                  isNew={product.isNew}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-puff-brown text-puff-brown hover:bg-puff-brown hover:text-puff-cream">
            Смотреть все продукты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
