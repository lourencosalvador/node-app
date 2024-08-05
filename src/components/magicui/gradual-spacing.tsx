"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface BlurIntProps {
  word: string;
  description: string
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}
const BlurIn = ({ word, className, variant, duration = 1, description}: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
   <div className="size-auto flex flex-col gap-3 ">
     <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        "font-display  text-[24px] font-bold tracking-[-0.02em] drop-shadow-sm md:text-[28px] md:leading-[2rem]",
      )}
    >
      {word}
    </motion.h1>
     <motion.p
       initial={{opacity: 0, x: -100}}
       whileInView={{opacity: 1, x: 0}}
       exit={{opacity: 0, x: -100}}
       transition={{ duration }}
       className="text-zinc-600"
     >
      {description}
     </motion.p>
   </div>
  );
};

export default BlurIn;
