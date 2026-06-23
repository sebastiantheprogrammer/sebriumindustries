"use client";

import React, { useEffect, useRef, useState } from "react";

interface LinkItem {
  href: string;
  label: string;
}

interface FooterProps {
  leftLinks: LinkItem[];
  rightLinks: LinkItem[];
  copyrightText: string;
  barCount?: number;
}

const Footer: React.FC<FooterProps> = ({
  leftLinks,
  rightLinks,
  copyrightText,
  barCount = 23,
}) => {
  const waveRefs = useRef<(HTMLDivElement | null)[]>([]);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const footer = footerRef.current;
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  useEffect(() => {
    let t = 0;

    const animateWave = () => {
      const waveElements = waveRefs.current;
      let offset = 0;

      waveElements.forEach((element, index) => {
        if (element) {
          offset += Math.max(0, 20 * Math.sin((t + index) * 0.3));
          element.style.transform = `translateY(${index + offset}px)`;
        }
      });

      t += 0.1;
      animationFrameRef.current = requestAnimationFrame(animateWave);
    };

    if (isVisible) {
      animateWave();
    } else if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isVisible]);

  return (
    <footer
      ref={footerRef}
      className="relative flex min-h-[70vh] w-full select-none flex-col justify-between bg-white text-black lg:min-h-screen"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-4 px-6 pb-24 pt-8 md:flex-row md:px-12">
        <div className="space-y-2">
          <ul className="font-accent flex flex-wrap gap-9 text-[15px] font-semibold tracking-[0.04em]">
            {leftLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="transition-opacity hover:opacity-60">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            {copyrightText}
          </p>
        </div>
        <div className="space-y-4">
          <ul className="font-accent flex flex-wrap gap-9 text-[15px] font-semibold tracking-[0.04em] md:justify-end">
            {rightLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="transition-opacity hover:opacity-60">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 md:text-right">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-accent inline-flex text-[15px] font-semibold tracking-[0.04em] transition-opacity hover:opacity-60"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
      <div
        id="waveContainer"
        aria-hidden="true"
        className="bg-white"
        style={{ overflow: "hidden", height: 200 }}
      >
        <div style={{ marginTop: 0 }}>
          {Array.from({ length: barCount }).map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                waveRefs.current[index] = el;
              }}
              className="wave-segment"
              style={{
                height: `${index + 1}px`,
                backgroundColor: "rgb(0, 0, 0)",
                transition: "transform 0.1s ease",
                willChange: "transform",
                marginTop: "-2px",
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
