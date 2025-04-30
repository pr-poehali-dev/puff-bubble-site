import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  badge?: string;
  isNew?: boolean;
}

const ProductCard = ({ title, description, price, imageSrc, badge, isNew }: ProductCardProps) => {
  return (
    <Card className="product-card h-full flex flex-col overflow-hidden">
      <div className="relative overflow-hidden h-48 md:h-60">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300"
        />
        {isNew && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-puff-pink text-puff-brown font-medium">Новинка</Badge>
          </div>
        )}
        {badge && (
          <div className="absolute top-2 left-2">
            <Badge variant="outline" className="bg-puff-brown/70 text-puff-cream backdrop-blur-sm">
              {badge}
            </Badge>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-handwritten">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-0 pt-0 flex-grow">
        <p className="font-bold text-lg text-puff-brown">{price} ₽</p>
      </CardContent>
      <CardFooter className="pt-4">
        <Button className="w-full bg-puff-brown text-puff-cream hover:bg-puff-brown/90">
          Заказать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
