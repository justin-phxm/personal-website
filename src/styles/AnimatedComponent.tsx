"use client";
import { motion } from "motion/react";

const fadeLeftVariant = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const fadeRightVariant = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const fadeUpVariant = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const fadeDownVariant = {
  initial: { opacity: 0, y: -100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const variantOptions = {
  fadeUp: fadeUpVariant,
  fadeDown: fadeDownVariant,
  fadeLeft: fadeLeftVariant,
  fadeRight: fadeRightVariant,
} as const;
type VO = keyof typeof variantOptions;
export default function FadeUpAnimation({
  children,
  variants = "fadeUp",
}: {
  children: React.ReactNode;
  variants?: VO;
}) {
  return (
    <motion.div
      variants={variantOptions[variants]}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
}
