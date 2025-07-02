import React, { useEffect, useState } from "react";

export default function Section0Visuals() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.3); // adjust speed factor
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="temppp"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 100,
        pointerEvents: "none",
        transform: `translateY(${offsetY}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Central Glow Gradient */}
      <div
        style={{
          position: "absolute",
          width: "1000px",
          height: "784px",
          left: "calc(50% - 1000px / 2 - 11px)",
          top: "calc(50% - 784px / 2 - 361.5px)",
          background:
            "radial-gradient(41.76% 41.76% at 50% 50%, hsla(242,87.6%,62%,1) 0%, rgba(191, 9, 255, 0) 100%)",
          filter: "blur(150px)",
        }}
      />

      {/* Ellipse 7 */}
      <div
        style={{
          position: "absolute",
          width: "260px",
          height: "260px",
          left: "calc(50% - 260px / 2 - 642px)",
          top: "calc(50% - 260px / 2 - 384.5px)",
          background: "#1A00FF",
          filter: "blur(173.5px)",
        }}
      />

      {/* Ellipse 9 */}
      <div
        style={{
          position: "absolute",
          width: "291px",
          height: "291px",
          left: "calc(50% - 291px / 2 - 632.5px)",
          top: "calc(50% - 291px / 2 + 388px)",
          background: "#4D54E8",
          filter: "blur(173.5px)",
        }}
      />

      {/* Ellipse 10 */}
      <div
        style={{
          position: "absolute",
          width: "461px",
          height: "461px",
          left: "calc(50% - 461px / 2 + 546.5px)",
          top: "calc(50% - 461px / 2 + 330px)",
          background: "#4D54E8",
          opacity: 0.3,
          filter: "blur(173.5px)",
        }}
      />

      {/* Ellipse 6 */}
      <div
        style={{
          position: "absolute",
          width: "326px",
          height: "326px",
          left: "calc(50% - 326px / 2 - 609px)",
          top: "calc(50% - 326px / 2 - 69.5px)",
          background: "rgba(23, 24, 23, 0.66)",
          filter: "blur(200px)",
        }}
      />
    </div>
  );
}
