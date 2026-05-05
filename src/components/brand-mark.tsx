import logo from "@/assets/craftronix_logo_colorful.svg";

export function BrandMark({
  className = "w-12 h-12",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <div className="flex items-center justify-center h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 300 300"
        role="img"
      >
        <title>Craftronix — interior design studio</title>
        <desc>Text-only wordmark logo in mauve and slate</desc>

        <rect fill="#C0748A" x="115" y="108" width="70" height="3" rx="1.5" />

        <text
          x="150"
          y="148"
          font-family="ui-sans-serif,system-ui,-apple-system,sans-serif"
          font-size="28"
          font-weight="500"
          letter-spacing="6"
          text-anchor="middle"
          fill="#2A1E28"
        >
          craftronix
        </text>

        <line
          x1="100"
          y1="162"
          x2="200"
          y2="162"
          stroke="#E8C4D8"
          stroke-width="1"
          fill="none"
        />

        <text
          x="150"
          y="180"
          font-family="ui-sans-serif,system-ui,-apple-system,sans-serif"
          font-size="9.5"
          letter-spacing="3.5"
          text-anchor="middle"
          fill="#C0748A"
        >
          interior design studio
        </text>
      </svg>
    </div>
  );
}
