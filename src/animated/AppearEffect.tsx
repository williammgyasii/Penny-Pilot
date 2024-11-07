import { motion } from "framer-motion";

const AppearFromBottom = ({
  children,
  delayNum = 0,
}: {
  children: React.ReactNode;
  delayNum?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: delayNum * 0.1, // Stagger animation for each child
      }}
      className="p-5"
    >
      {children}
    </motion.div>
  );
};

export default AppearFromBottom;
