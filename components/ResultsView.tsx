import { Box, StackProps, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC, ReactNode, Children } from "react";

type StaggerFadeUpProps = {
  children: ReactNode;
  interval?: number;
  duration?: number;
} & StackProps;

export const ResultsView: FC<StaggerFadeUpProps> = ({
  children,
  interval,
  duration,
  ...props
}) => {
  return (
    <VStack
      as={motion.div}
      variants={{
        show: {
          transition: {
            staggerChildren: interval ?? 0.1,
          },
        },
      }}
      initial="hidden"
      animate="show"
      textAlign="left"
      pt={5}
      mx={{
        base: "5%",
        md: "10%",
        lg: "20%",
      }}
      gap={2}
      {...props}
    >
      {Children.map(children, (child) => {
        return (
          <Box
            as={motion.div}
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  ease: [0, 0, 0.2, 1],
                  duration: duration ?? 0.5,
                },
              },
            }}
            w="full"
          >
            {child}
          </Box>
        );
      })}
    </VStack>
  );
};
