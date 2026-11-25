import { ImageResponse } from "next/og";

export const alt = "Miguel Luque, Team Lead and Senior Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f2f4f3",
          color: "#14213d",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700 }}>Miguel Luque</div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.03em", maxWidth: 980 }}>
          Backend lead for systems that can&apos;t get the numbers wrong.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30, color: "#55606e" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#d99a2b" }} />
          Team Lead / Senior Backend Engineer, Seville
        </div>
      </div>
    ),
    size,
  );
}
