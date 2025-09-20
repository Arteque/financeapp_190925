import type { divProps } from "../../types/divType";

const ContentBox = ({ className, children, ...props }: divProps) => {
  return (
    <div
      className={`py-[1.5rem] px-[1.25rem] rounded-[.75rem] md:p-[2rem] ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ContentBox;
