export function Button({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="pl-4 pr-2 py-2 bg-accent text-background rounded-full leading-[1em] inline-flex items-center cursor-pointer group"
    >
      {children}
      <span className="ml-6 w-[1.5em] h-[1.5em] rounded-full bg-background text-foreground inline-flex items-center justify-center relative overflow-hidden">
        <span className="w-[1.5em] h-[1.5em] inline-flex items-center justify-center group-hover:translate-x-full group-hover:-translate-y-full transition-transform">
          &#8599;
        </span>
        <span className="w-[1.5em] h-[1.5em] inline-flex items-center justify-center absolute top-[100%] right-[100%] group-hover:translate-x-full group-hover:-translate-y-full transition-transform">
          &#8599;
        </span>
        {/* <span>&#8599;</span> */}
      </span>
    </a>
  );
}
