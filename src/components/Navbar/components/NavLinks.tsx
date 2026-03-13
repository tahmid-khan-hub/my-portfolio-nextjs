export function NavLinks(
    { href, label, activeHash }: 
    { href: string; label: string; activeHash: string }) {
  return (
    <>
      <li>
        <a
          href={href}
          className={`font-semibold pb-1 border-b-2 border-transparent ${
            activeHash === href
              ? "[border-image:linear-gradient(to_right,#1d4ed8,#3b82f6)_1]"
              : "border-none"
          } hover:bg-clip-text hover:text-transparent hover:bg-linear-to-r hover:from-blue-700 hover:via-blue-600 hover:to-blue-300 transition-colors duration-300`}
        >
          {label}
        </a>
      </li>
    </>
  );
}
