interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode | string;
}

export { LinkProps };
