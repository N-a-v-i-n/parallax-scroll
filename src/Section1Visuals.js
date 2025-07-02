import React from "react";

export default function Section1Visuals() {
  return (

    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        top: 0,
        left: 0,
        zIndex: -55,
        overflow: "hidden",
      }}
    >
      {/* Main group wrapper */}
      <div
        style={{
          position: "absolute",
          width: "1555px",
          height: "1314px",
          left: "calc(50% - 1555px / 2 - 0.5px)",
          top: "calc(50% - 1314px / 2 - 97px)",
        }}
      >
        {/* Central radial gradient */}
        <div
          style={{
            position: "absolute",
            width: "1000px",
            height: "784px",
            left: "calc(50% - 1000px / 2 - 11px)",
            top: "calc(90% - 884px / 2 - 362px)",
            background:
              "radial-gradient(41.76% 41.76% at 50% 50%, #095DFF 0%, rgba(191, 9, 255, 0) 100%)",
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
            top: "calc(50% - 260px / 2 - 385px)",
            background: "linear-gradient(0deg, #1A00FF, #1A00FF)",
            filter: "blur(173.5px)",
            borderRadius: "50%",
          }}
        />

        {/* Ellipse 9 */}
        <div
          style={{
            position: "absolute",
            width: "291px",
            height: "291px",
            left: "calc(50% - 291px / 2 - 632.5px)",
            top: "calc(50% - 291px / 2 + 387.5px)",
            background: "linear-gradient(0deg, #4D54E8, #4D54E8)",
            filter: "blur(173.5px)",
            borderRadius: "50%",
          }}
        />

        {/* Ellipse 10 */}
        <div
          style={{
            position: "absolute",
            width: "461px",
            height: "461px",
            left: "calc(50% - 461px / 2 + 546.5px)",
            top: "calc(50% - 461px / 2 + 329.5px)",
            background: "linear-gradient(0deg, #4D54E8, #4D54E8)",
            opacity: 0.3,
            filter: "blur(173.5px)",
            borderRadius: "50%",
          }}
        />

        {/* Ellipse 6 */}
        <div
          style={{
            position: "absolute",
            width: "326px",
            height: "326px",
            left: "calc(50% - 326px / 2 - 609px)",
            top: "calc(50% - 326px / 2 - 70px)",
            background: "rgba(23, 24, 23, 0.66)",
            filter: "blur(200px)",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* 🔵 Additional radial gradient in top-left
      <div
        style={{
          position: "absolute",
          width: "445px",
          height: "445px",
          left: "400px",
          top: "-78px",
          background:
            "radial-gradient(41.76% 41.76% at 50% 50%, #095DFF 0%, rgba(191, 9, 255, 0) 100%)",
          filter: "blur(150px)",
          zIndex: 0,
        }}
      /> */}
    </div>
  );
}
