import { motion } from "framer-motion";
import { useCursor } from "@/hooks/use-cursor";

export function Cursor() {
  const { pos, hover, visible } = useCursor();
  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden mix-blend-difference md:block"
        animate={{
          x: pos.x - (hover ? 22 : 6),
          y: pos.y - (hover ? 22 : 6),
          scale: hover ? 1 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.3 }}
      >
        <div
          className={`rounded-full bg-white transition-[width,height] duration-300 ${
            hover ? "size-11" : "size-3"
          }`}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[40] hidden md:block"
        animate={{ x: pos.x - 180, y: pos.y - 180, opacity: visible ? 0.5 : 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
      >
        <div className="size-[360px] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_60%)]" />
      </motion.div>
    </>
  );
}
