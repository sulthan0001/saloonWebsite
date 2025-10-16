import { Icon as LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

interface ServiceCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  price: string;
  duration: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  price,
  duration,
}: ServiceCardProps) => {
  return (
    <Card className="group relative hover:shadow-[var(--shadow-elegant)] transition-all duration-500 border-border bg-card overflow-hidden">
      <CardHeader>
        <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--rose-gold-light))] to-[hsl(var(--rose-gold))] group-hover:scale-110 transition-transform duration-500">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl group-hover:text-[hsl(var(--rose-gold))] transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between items-center pt-4 border-t border-border">
          <div>
            <p className="text-2xl font-bold text-[hsl(var(--rose-gold))]">
              {price}
            </p>
            <p className="text-sm text-muted-foreground">{duration}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
