import type { SpanProps } from "../../../types/spanType";

const Icon = ({ className, children, ...props }: SpanProps) => {
  return (
    <span className={`${className || ""}`} {...props}>
      {children}
    </span>
  );
};

export default Icon;
