"use client";

import React, { useEffect, useId, useRef } from "react";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

const joinClasses = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const GooeyText: React.FC<GooeyTextProps> = ({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName,
}) => {
  const filterId = useId().replace(/:/g, "");
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (texts.length === 0) return;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    let animationFrameId = 0;

    const setText = () => {
      if (!text1Ref.current || !text2Ref.current) return;
      text1Ref.current.textContent = texts[textIndex % texts.length];
      text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
    };

    const setMorph = (fraction: number) => {
      if (!text1Ref.current || !text2Ref.current) return;

      const safeFraction = Math.max(fraction, 0.01);
      const invertedFraction = Math.max(1 - fraction, 0.01);

      text2Ref.current.style.filter = `blur(${Math.min(8 / safeFraction - 8, 100)}px)`;
      text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      text1Ref.current.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
      text1Ref.current.style.opacity = `${Math.pow(1 - fraction, 0.4) * 100}%`;
    };

    const doCooldown = () => {
      morph = 0;
      if (!text1Ref.current || !text2Ref.current) return;

      text2Ref.current.style.filter = "";
      text2Ref.current.style.opacity = "100%";
      text1Ref.current.style.filter = "";
      text1Ref.current.style.opacity = "0%";
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;
      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex = (textIndex + 1) % texts.length;
          setText();
        }
        doMorph();
      } else {
        doCooldown();
      }
    };

    setText();
    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [texts, morphTime, cooldownTime]);

  return (
    <div className={joinClasses("relative", className)}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id={filterId}>
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div className="relative flex h-full w-full items-center justify-center" style={{ filter: `url(#${filterId})` }}>
        <span
          ref={text1Ref}
          className={joinClasses(
            "absolute inset-x-0 top-1/2 mx-auto inline-block -translate-y-1/2 select-none text-center",
            textClassName
          )}
        />
        <span
          ref={text2Ref}
          className={joinClasses(
            "absolute inset-x-0 top-1/2 mx-auto inline-block -translate-y-1/2 select-none text-center",
            textClassName
          )}
        />
      </div>
    </div>
  );
};

export default GooeyText;
