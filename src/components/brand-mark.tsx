import logo from "@/assets/logo.png";

export function BrandMark({
  className = "w-60 h-60",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <div className="flex items-center justify-center h-full">
      <img src={logo} alt="Craftronix" className={className} />
    </div>
  );
}
