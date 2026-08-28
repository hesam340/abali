import { TIcon } from "@/core/types/types";

function Icon({
  name,
  className,
  fill = "currentColor",
  stroke = "none",
}: TIcon) {
  return (
    <svg className={className} fill={fill} stroke={stroke}>
      <use href={`/svg/sprite.svg#${name}`}></use>
    </svg>
  );
}

export default Icon;
