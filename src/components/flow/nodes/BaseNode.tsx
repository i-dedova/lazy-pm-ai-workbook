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
  sm: 'min-w-[120px] p-2 text-xs',
  md: 'min-w-[160px] md:min-w-[200px] p-3 text-sm',
  lg: 'min-w-[200px] md:min-w-[260px] p-4 text-base'
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