import logo from "@/assets/travola-logo.png";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img src={logo} alt="Travola Global Consults" className={className} width={200} height={64} />
  );
}
