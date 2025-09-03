import { ReactNode } from 'react';

interface BaseNodeProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
}

const variantStyles = {
  primary: 'bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant',
  secondary: 'bg-card/80 backdrop-blur-sm border border-border/50 shadow-elegant',
  accent: 'bg-gradient-accent backdrop-blur-sm shadow-glow'
};

const sizeStyles = {
  sm: 'min-w-[140px] p-3',
  md: 'min-w-[180px] md:min-w-[220px] p-4',
  lg: 'min-w-[220px] md:min-w-[280px] p-6'
};

export const BaseNode = ({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'md'
}: BaseNodeProps) => {
  return (
    <div className={`
      rounded-xl transition-all duration-300
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${className}
    `}>
      {children}
    </div>
  );
};