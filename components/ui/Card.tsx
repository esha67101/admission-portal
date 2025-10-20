// Reusable Card Component
// Ye component kahi bhi use kar sakte hain

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div 
      className={`
        card 
        ${hover ? 'hover-lift' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
}

