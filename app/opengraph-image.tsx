import { ImageResponse } from "next/og";

export const alt = "Softi — кастомні oversize-футболки";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Брендова OG-картинка (латиниця → надійний рендер без кастомних шрифтів).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F4F1EB",
          color: "#121211",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 40,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#6B6760",
            fontFamily: "sans-serif",
          }}
        >
          UA · Streetwear
        </div>
        <div style={{ fontSize: 280, lineHeight: 1, fontWeight: 700 }}>
          Softi
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 34,
            letterSpacing: 6,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          <span style={{ color: "#FF2E7E" }}>●</span>
          <span>1 of 1</span>
          <span style={{ color: "#FF2E7E" }}>●</span>
          <span>softi.brand</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
