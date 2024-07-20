import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";

const LanguageIcons = () => {
  const icons = [
    { component: <FaReact />, color: "#61DAFB" },
    { component: <FaNodeJs />, color: "#68A063" },
    { component: <FaPython />, color: "#FFD43B" },
  ];

  return (
    <div className="relative overflow-hidden h-[60px] mx-5 md:mx-[54px] lg:mx-36 my-6">
      <motion.div
        className="flex items-center h-full whitespace-nowrap"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="text-6xl mx-16"
            style={{ color: icon.color }}
          >
            {icon.component}
          </div>
        ))}
        {/* Duplicating icons for smooth scrolling effect */}
        {/* {icons.map((icon, index) => (
          <div
            key={`duplicate-${index}`}
            className="text-3xl mx-4"
            style={{ color: icon.color }}
          >
            {icon.component}
          </div>
        ))} */}
      </motion.div>
    </div>
  );
};

export default LanguageIcons;
