import logo from "@/assets/al-barakah-logo.png";

export function BrandMark({
  className = "h-9 w-auto",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <img
      src={logo}
      alt="Al Barakah — Transforming Spaces with Design & Color"
      className={`${className} ${invert ? "invert" : ""}`}
      width={1024}
      height={1024}
    />
  );
}
