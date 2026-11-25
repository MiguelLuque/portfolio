import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 10,
          fontSize: 24,
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
