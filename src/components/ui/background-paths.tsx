import { motion } from "framer-motion";

type FloatingPathsProps = {
  position: 1 | -1;
};

const pathCount = 36;

const FloatingPaths = ({ position }: FloatingPathsProps) => {
  const paths = Array.from({ length: pathCount }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: "currentColor",
    width: 0.5 + i * 0.03,
    duration: 22 + i * 0.22,
    delay: i * 0.08,
  }));

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 696 316"
    >
      {paths.map((path) => (
        <motion.path
          animate={{
            pathLength: [0.18, 0.9, 0.18],
            pathOffset: [0, 0.45, 1],
            opacity: [0.06, 0.16, 0.06],
          }}
          d={path.d}
          initial={{ pathLength: 0.18, opacity: 0.06 }}
          key={path.id}
          stroke={path.color}
          strokeWidth={path.width}
          transition={{
            duration: path.duration,
            delay: path.delay,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      ))}
    </svg>
  );
};

const BackgroundPaths = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden text-black opacity-55">
    <FloatingPaths position={1} />
    <FloatingPaths position={-1} />
  </div>
);

export default BackgroundPaths;
