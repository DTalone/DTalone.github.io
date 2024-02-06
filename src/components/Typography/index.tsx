interface TypographyProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Typography({
  type,
  className,
  onClick,
  children,
}: TypographyProps) {
  if (type === "h1")
    return (
      <h1
        className={`font-kronaone font-bold text-neutral-100 
                    base:max-md:text-3xl 
                    md:max-lg:text-5xl 
                    lg:text-7xl 
                    ${className}`}
        onClick={onClick}
      >
        {children}
      </h1>
    );
  if (type === "h2")
    return (
      <h2
        className={`font-kronaone text-neutral-100 
                    base:max-md:text-2xl    
                    md:max-lg:text-4xl 
                    lg:text-6xl 
                    ${className}`}
      >
        {children}
      </h2>
    );
  if (type === "h3")
    return (
      <h3
        className={`font-koulen text-neutral-100
                    base:max-md:text-xl    
                    md:max-lg:text-3xl 
                    lg:text-5xl 
                    ${className}`}
      >
        {children}
      </h3>
    );
  return (
    <p
      className={`font-krub text-neutral-100
                  base:max-md:text-xs 
                  md:max-lg:text-base 
                  lg:text-2xl 
                  ${className}`}
    >
      {children}
    </p>
  );
}
