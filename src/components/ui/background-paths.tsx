const PATHS = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  d: `M-${380 - i * 5} -${189 + i * 6}C-${380 - i * 5} -${189 + i * 6} -${
    312 - i * 5
  } ${216 - i * 6} ${152 - i * 5} ${343 - i * 6}C${616 - i * 5} ${
    470 - i * 6
  } ${684 - i * 5} ${875 - i * 6} ${684 - i * 5} ${875 - i * 6}`,
  width: 0.5 + i * 0.03,
  opacity: 0.05 + i * 0.006,
}));

const MIRRORED_PATHS = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  d: `M-${380 + i * 5} -${189 + i * 6}C-${380 + i * 5} -${189 + i * 6} -${
    312 + i * 5
  } ${216 - i * 6} ${152 + i * 5} ${343 - i * 6}C${616 + i * 5} ${
    470 - i * 6
  } ${684 + i * 5} ${875 - i * 6} ${684 + i * 5} ${875 - i * 6}`,
  width: 0.5 + i * 0.03,
  opacity: 0.05 + i * 0.006,
}));

const FloatingPaths = ({ mirrored = false }: { mirrored?: boolean }) => {
  const paths = mirrored ? MIRRORED_PATHS : PATHS;

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 696 316"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {paths.map((path) => (
        <path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={path.opacity}
        />
      ))}
    </svg>
  );
};

const BackgroundPaths = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden text-black opacity-45">
    <div className="absolute inset-0 animate-background-paths">
      <FloatingPaths />
      <FloatingPaths mirrored />
    </div>
    <div className="absolute inset-0 animate-background-paths-reverse opacity-50">
      <FloatingPaths />
      <FloatingPaths mirrored />
    </div>
  </div>
);

export default BackgroundPaths;
