export const LinkIcon = ({
  alt,
  href,
  pic,
  className,
}: {
  alt: string;
  href: string;
  pic: string;
  className: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <img src={pic} alt={alt} width="36" height="36" />
    </a>
  );
};
