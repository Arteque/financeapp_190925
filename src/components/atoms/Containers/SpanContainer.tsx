interface SpanContainerProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const SpanContainer = ({
  children,
  className,
  ...props
}: SpanContainerProps) => {
  return (
    <span className={`${className}`} {...props}>
      {children}
    </span>
  );
};

export default SpanContainer;
