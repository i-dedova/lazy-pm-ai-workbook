import { Badge } from "@/components/ui/badge";

interface MetricBadgeProps {
  percentage: string;
  label: string;
  variant?: "primary" | "accent" | "highlight";
}

export const MetricBadge = ({ percentage, label, variant = "primary" }: MetricBadgeProps) => {
  const variantClasses = {
    primary: "bg-primary/10 text-primary border-primary/30 hover:bg-primary/20",
    accent: "bg-accent/10 text-accent border-accent/30 hover:bg-accent/20", 
    highlight: "bg-highlight/10 text-highlight border-highlight/30 hover:bg-highlight/20"
  };

  return (
    <Badge 
      variant="outline" 
      className={`${variantClasses[variant]} font-semibold px-4 py-2 text-sm lg:text-base lg:px-6 lg:py-3 transition-colors`}
    >
      {percentage} {label}
    </Badge>
  );
};