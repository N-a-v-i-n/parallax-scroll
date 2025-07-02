import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Background() {
  const controls = useAnimation();
  const triangleControls = useAnimation();
  const blurControls = useAnimation();
  const globControls = useAnimation();
  const [triggeredIndex, setTriggeredIndex] = useState(null);

  const positions = [
    { top: 0, left: 1110, width: 350, height: 350, filter: "blur(0px)", opacity: 1},
    { top: 139, left: 894, width: 639, height: 639, filter: "blur(0px)", opacity: 1 },
    { top: -201, left: 925, width: 418, height: 418, filter: "blur(10px)", opacity: 1 },
    { top: -1.5, left: 814.5, width: 639, height: 639, filter: "blur(20px)", opacity: 1 },
    { top: 68.5, left: 814.5, width: 639, height: 639, filter: "blur(50px)", opacity: 0.2 },
    { top: 513, left: 527, width: 350, height: 350, filter: "blur(20px)", opacity: 1 },
    { top: 100, left: 150, width: 350, height: 350, filter: "blur(0px)", opacity: 0 },
    { top: 50, left: 50, width: 639, height: 350, filter: "blur(0px)", opacity: 0 },
  ];

  const blurPositions = [
    { top: 660, width: 639, height: 639 },
    { top: -400, width: 500, height: 500 },
    { top: -400, width: 450, height: 450 },
    { top: -400, width: 400, height: 400 },
    { top: -400, width: 380, height: 380 },
    { top: -400, width: 350, height: 350 },
    { top: -400, width: 320, height: 320 },
    { top: -400, width: 300, height: 300 },
  ];

  const trianglePositions = [
    { top: "20%", left: "-10%", width: 500, height: 500, filter: "blur(10px)" },
    { top: "245px", left: "16px", width: 191, height: 191, filter: "blur(20px)" },
    { top: "277px", left: "16px", width: 434, height: 434, filter: "blur(10px)" },
    { top: "-24px", left: "-30%", width: 816, height: 816, filter: "blur(20px)" },
    { top: "-24px", left: "-400px", width: 450, height: 450, filter: "blur(10px)" },
    { top: "-24px", left: "-400px", width: 350, height: 350, filter: "blur(20px)" },
    { top: "-24px", left: "-400px", width: 550, height: 550, filter: "blur(10px)" },
    { top: "-24px", left: "-400px", width: 600, height: 600, filter: "blur(10px)" },
  ];

  const globPositions = [
    {}, // section 0
    {}, // section 1
    {}, // section 2
    {}, // section 3
    {
      left: "calc(50% - 650px/2 - 680px)",
      top: "calc(50% - 650px/2 + 38px)",
      width: 650,
      height: 650,
      opacity: 1,
      rotate: 0,
    },
    {
      left: "calc(50% - 960px/2 - 930px)",
      top: "calc(50% - 650px/2)",
      width: 960,
      height: 960,
      opacity: 1,
      rotate: -90,
    },
    {
      left: "calc(50% - 960px/2 - 930px)",
      top: "calc(50% - 960px/2 + 958px)",
      width: 960,
      height: 960,
      opacity: 1,
      rotate: -90,
    },
    {
      left: "calc(50% - 650px/2 - 680px)",
      top: "calc(50% - 650px/2 + 38px)",
      width: 650,
      height: 650,
      opacity: 0,
      rotate: 0,
    },
  ];
  
  useEffect(() => {
    const mainEl = document.querySelector(".main");
    const scrollWrapper = document.querySelector(".testimonial-scroll-wrapper");
    if (!mainEl) return;

    const handleScroll = () => {
      const scrollY = mainEl.scrollTop;
      const windowHeight = window.innerHeight;

      for (let i = 0; i < 8; i++) {
        const sectionTop = i * windowHeight;
        const sectionBottom = sectionTop + windowHeight;
        const visible =
          Math.min(scrollY + windowHeight, sectionBottom) -
          Math.max(scrollY, sectionTop);
        const ratio = visible / windowHeight;

        if (ratio >= 0.4 && triggeredIndex !== i) {
          setTriggeredIndex(i);

          // Special auto scroll for testimonial section
          if (i === 2 && scrollWrapper) {
            scrollWrapper.style.scrollBehavior = "auto";
            scrollWrapper.scrollLeft = 0;

            setTimeout(() => {
              scrollWrapper.style.scrollBehavior = "smooth";
              scrollWrapper.scrollTo({ left: scrollWrapper.scrollWidth });
            }, 200);
          }

          // Animate Main Ball
          controls.start({
            top: positions[i].top,
            left: positions[i].left,
            width: positions[i].width,
            height: positions[i].height,
            filter: positions[i].filter,
            opacity: positions[i].opacity,
            transition: { duration: 1, ease: "easeInOut" },
          });

          // Animate Triangle
          triangleControls.start({
            ...trianglePositions[i],
            transition: { duration: 1, ease: "easeInOut" },
          });

          // Animate Blur Ball
          blurControls.start({
            top: blurPositions[i].top,
            width: blurPositions[i].width,
            height: blurPositions[i].height,
            transition: { duration: 1, ease: "easeInOut" },
          });

          if (i >= 4 && globPositions[i]) {
            globControls.start({
              top: globPositions[i].top,
              left: globPositions[i].left,
              width: globPositions[i].width,
              height: globPositions[i].height,
              opacity: globPositions[i].opacity ?? 0,
              rotate: globPositions[i].rotate ?? 0,
              transition: { duration: 1, ease: "easeInOut" },
            });
            
          } else {
            globControls.start({
              opacity: 0,
              rotate: 0,
              width: 0,
              height: 0,
              transition: { duration: 0.5 },
            });
          }
          break;
        }
      }
    };

    mainEl.addEventListener("scroll", handleScroll);
    return () => mainEl.removeEventListener("scroll", handleScroll);
  }, [controls, triangleControls, blurControls, triggeredIndex]);

  return (
    <div
      className="background"
      style={{
        backgroundImage: "url('/assets/backgrounds/base.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: -2,
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
      }}
    >
      {/* Main Ball */}
      <motion.img
        src="/Main Ball.png"
        alt="main ball"
        className="mainball"
        animate={controls}
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />

      {/* Triangle */}
      <motion.img
        src="/triangle.png"
        alt="triangle"
        className="triangle"
        animate={triangleControls}
        style={{
          position: "absolute",
          left: "-15%",
          top: "20%",
          width: "500px",
          height: "500px",
          filter: "blur(10px)",
          zIndex: -1,
          mixBlendMode: "plus-lighter",
          pointerEvents: "none",
        }}
      />

      {/* Blur Ball */}
      <motion.img
        src="/Main Ball Blur.png"
        alt="Main Ball Blur"
        className="MainBallBlur"
        animate={blurControls}
        style={{
          position: "absolute",
          top: "660px",
          right: "0%",
          width: "639px",
          height: "639px",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      {/* glob Ball */}
      <motion.img
        src="/Glob.png"
        alt="glob"
        animate={globControls}
        initial={{ opacity: 0 }}
        style={{
          position: "absolute",
          width: "650px",
          height: "650px",
          zIndex: -2,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
