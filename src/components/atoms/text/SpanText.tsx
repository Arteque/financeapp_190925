import type { SpanProps } from "../../../types/spanType";
const SpanText = ({ className, children, ...props }: SpanProps) => {
  return (
    <span className={`${className || ""}`} {...props}>
      {children}
    </span>
  );
};

export default SpanText;
