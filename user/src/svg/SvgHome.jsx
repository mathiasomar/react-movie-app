import { motion } from "framer-motion";

const SvgHome = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={30}
    height={30}
    fill="none"
    viewBox="0 0 192 192"
    {...props}
  >
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1 }}
      d="m88.278 49.408 82.223 49.333-126.074 71.26V22h21.925v109.63l60.298-32.89-38.37-21.926Z"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 12,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 5,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
export default SvgHome;
