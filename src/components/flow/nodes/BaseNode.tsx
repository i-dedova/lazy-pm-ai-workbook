import { ReactNode, forwardRef } from 'react';

interface BaseNodeProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const variantStyles = {
  primary: 'bg-card/80 backdrop-blur-sm border border-primary/20 shadow-elegant',
  secondary: 'bg-card/80 backdrop-blur-sm border border-border/50 shadow-elegant',
  accent: 'bg-gradient-accent backdrop-blur-sm shadow-glow'
};

const sizeStyles = {
  xs: 'w-[160px] min-w-[160px] h-[50px] p-2 text-sm',
  sm: 'w-[200px] min-w-[200px] p-2.5 text-sm',
  md: 'w-[220px] min-w-[220px] p-3.5 text-base', 
  lg: 'w-[240px] min-w-[240px] p-4 text-lg'
};

export const BaseNode = forwardRef<HTMLDivElement, BaseNodeProps>(({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'md'
}, ref) => {
  return (
    <div 
      ref={ref}
      className={`
        rounded-xl transition-all duration-300
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </div>
  );
});

BaseNode.displayName = 'BaseNode';