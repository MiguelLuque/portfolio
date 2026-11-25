import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14213d",
          color: "#f2f4f3",
          borderRadius: 0,
          fontSize: 84,
          fontWeight: 800,
          letterSpacing: "-0.04em",
        }}
      >
        ML
      </div>
    ),
    size,
  );
}
