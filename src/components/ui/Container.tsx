import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface IProps{
  children: ReactNode,
   className?: string 
}

const Container = ({children,className}:IProps) => {
  return (
    <div className={cn(
      'max-w-[1200px] w-full mx-auto px-4 py-4 xl:px-20',
      className && className
      )}>
      {children}
    </div>
  );
};

export default Container;