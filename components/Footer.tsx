export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-10 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between md:px-10">
      <p>© 2026 ATELIER NØIR. All rights reserved.</p>
      <div className="flex gap-5 uppercase tracking-[0.16em]">
        <a href="/shipping" className="hover:text-neutral-900">
          Shipping
        </a>
        <a href="/returns" className="hover:text-neutral-900">
          Returns
        </a>
        <a href="/contacts" className="hover:text-neutral-900">
          Contact
        </a>
      </div>
    </footer>
  );
}
