import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const FlippingTag = ({
  items,
  startIndex = 0,
  intervalMs = 2200,
  flipDuration = 600,
  delayMs = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex % items.length);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    let intervalId;
    let flipTimeoutId;
    const startTimeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setFlipped(true);
        flipTimeoutId = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % items.length);
          setFlipped(false);
        }, flipDuration);
      }, intervalMs);
    }, delayMs);

    return () => {
      clearTimeout(startTimeoutId);
      if (intervalId) clearInterval(intervalId);
      if (flipTimeoutId) clearTimeout(flipTimeoutId);
    };
  }, [items.length, intervalMs, flipDuration, delayMs]);

  const nextIndex = (currentIndex + 1) % items.length;
  const faceClasses =
    "flip-face bg-white/10 text-white px-3 sm:px-4 py-1 rounded-full border border-white/20 m-1 sm:m-2 text-sm sm:text-base";

  return (
    <span className="flip-wrapper">
      <span className={`flip-card ${flipped ? "flipped" : ""}`}>
        <span className="flip-inner">
          <span className={`${faceClasses} front`} aria-hidden={flipped}>
            {items[currentIndex]}
          </span>
          <span className={`${faceClasses} back`} aria-hidden={!flipped}>
            {items[nextIndex]}
          </span>
        </span>
      </span>
    </span>
  );
};

FlippingTag.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  startIndex: PropTypes.number,
  intervalMs: PropTypes.number,
  flipDuration: PropTypes.number,
  delayMs: PropTypes.number,
};

const HeroExt = () => {
  const tagGroups = [
    ["React", "Next.js", "Node.js", "Express.js", "TypeScript"], // Core Stack
    ["MongoDB", "PostgreSQL", "Firebase"], // Databases
    ["Git & GitHub", "Docker", "CI/CD", "Cloud (AWS / GCP)"], // Tools & DevOps
    [
      "REST APIs",
      "GraphQL",
      "Authentication & Security",
      "Full Stack Development",
    ], // Extras
    ["HTML", "CSS", "JavaScript", "TypeScript", "React"], // Frontend Basics
  ];

  const intervalMs = 2600; // how often each tag flips
  const flipDuration = 650; // flip speed

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Five rotating tags in one row */}
      <div className="flex flex-wrap justify-center mt-2 sm:mt-4 gap-1 sm:gap-2">
        {tagGroups.map((items, idx) => (
          <FlippingTag
            key={`tag-${idx}`}
            items={items}
            startIndex={0}
            delayMs={idx * (intervalMs / tagGroups.length)}
            intervalMs={intervalMs}
            flipDuration={flipDuration}
          />
        ))}
      </div>

      {/* About me section */}
      <div className="mt-10 sm:mt-14 text-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight">
          Turning design visions into seamless and responsive web experiences
        </h2>
        <p className="text-base sm:text-lg mt-3 sm:mt-4 text-white">
          That captivate and engage users across devices.
        </p>
      </div>
    </div>
  );
};

export default HeroExt;
