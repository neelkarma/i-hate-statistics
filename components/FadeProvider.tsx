import { FC } from "react";
import { motion } from "framer-motion";

export const FadeProvider: FC = ({ children }) => {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={{
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
        },
      }}
      transition={{
        ease: [0, 0, 0.2, 1],
      }}
    >
      {children}
    </motion.main>
  );
};
