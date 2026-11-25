type ExternalLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function ExternalLink({ href, className = "link", children }: ExternalLinkProps) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
