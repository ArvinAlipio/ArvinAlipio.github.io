
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
}

const Section = ({ id, className, children, fullWidth = false }: SectionProps) => {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className={cn("container mx-auto px-6", fullWidth ? "max-w-full" : "max-w-6xl")}>
        {children}
      </div>
    </section>
  );
};

export default Section;
