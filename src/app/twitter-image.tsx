import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Vandrite Documentation - Learn, Build, Extend";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function loadGoogleFont(font: string, weight: number) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&display=swap`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);
  if (match) {
    return await (await fetch(match[1])).arrayBuffer();
  }
  return null;
}

export default async function Image() {
  const nunitoFont = await loadGoogleFont("Nunito", 700);
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          position: "relative",
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at center, rgba(104, 34, 189, 0.3) 0%, transparent 70%)",
          }}
        />

        {/* Logo - Complete Vandrite SVG */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <svg
            width="160"
            height="157"
            viewBox="0 0 306 301"
            style={{
              filter: "drop-shadow(0 20px 60px rgba(104, 34, 189, 0.5))",
            }}
          >
            {/* Background rounded rect with gradient */}
            <defs>
              <linearGradient
                id="bgGrad"
                x1="50.44"
                y1="305.77"
                x2="255.56"
                y2="-4.77"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#6822bd" />
                <stop offset="1" stopColor="#b37eed" />
              </linearGradient>
              <linearGradient
                id="dropGrad"
                x1="103.91"
                y1="249.37"
                x2="211.33"
                y2="86.74"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#915ad5" />
                <stop offset="0.18" stopColor="#a373de" />
                <stop offset="0.46" stopColor="#bb94ea" />
                <stop offset="0.69" stopColor="#caa8f1" />
                <stop offset="0.84" stopColor="#d0b0f4" />
              </linearGradient>
            </defs>
            {/* Rounded background */}
            <rect
              x="0.5"
              y="0.5"
              width="305"
              height="300"
              rx="60"
              ry="60"
              fill="url(#bgGrad)"
            />
            {/* Drop shape */}
            <path
              fill="url(#dropGrad)"
              d="M226.46,238.84h0c38.57-38.57,38.57-101.11,0-139.68L157,29.7l-69.46,69.46c-38.57,38.57-38.57,101.11,0,139.68h0c38.36,38.36,100.56,38.36,138.92,0Z"
            />
            {/* White accent */}
            <path
              fill="#fff"
              d="M228.86,100.88l-15.86-15.86-14.15-14.13-21.5,28.22,44.36,33.8,16.1-21.14c-2.81-3.75-5.55-7.48-8.96-10.9Z"
            />
            {/* White detail line */}
            <path
              fill="#fff"
              stroke="#fff"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M153.5,183.49c.17,0,.33.01.5.01,6.35,0,11.5-5.15,11.5-11.5s-5-11.5-11.5-11.5-11.5,5.15-11.5,11.5c0,2.22.63,4.3,1.72,6.06l.28.44-52.52,64.52,26.02-100.02,44-28,44,34-12.33,46.33-90.25,56.41,50.07-68.24h.5"
            />
          </svg>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 72,
            fontFamily: "Nunito",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 16,
          }}
        >
          Vandrite
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontFamily: "Nunito",
            color: "rgba(255, 255, 255, 0.7)",
            letterSpacing: "0.05em",
          }}
        >
          Documentation
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#6822bd",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#915ad5",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#b37eed",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: nunitoFont
        ? [
            {
              name: "Nunito",
              data: nunitoFont,
              style: "normal" as const,
              weight: 700 as const,
            },
          ]
        : [],
    }
  );
}
