import { TButton } from "@/core/types/types";

function Button({
  isLoading,
  title,
  width,
  height,
  fontSize,
  color,
  type,
}: TButton) {
  return (
    <button
      type={type}
      style={{ width, height, color, fontSize }}
      className={`${
        isLoading ? "bg-(--color-primary)/80" : "bg-(--color-primary)"
      } disabled:bg-(--color-primary)/80 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-x-1.5 px-3 rounded-lg border-none`}
      disabled={isLoading}
    >
      {title}
    </button>
  );
}

export default Button;
