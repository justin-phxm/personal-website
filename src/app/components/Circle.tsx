import { twMerge } from "tailwind-merge";

export default function Circle({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "pointer-events-none absolute aspect-square w-1/2 rounded-full opacity-40 shadow-2xl blur-2xl",
        className,
      )}
    />
  );
}
