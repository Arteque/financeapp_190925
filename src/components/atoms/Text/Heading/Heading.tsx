interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant: "heading_xl" | "heading_lg" | "heading_md";
  children: React.ReactNode;
  className?: string;
}

const Heading = ({
  as: Tag = "h2",
  variant = "heading_xl",
  children,
  className,
  ...props
}: HeadingProps) => {
  return (
    <Tag className={`${variant} ${className || ""}`} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
