import Link from "next/link";
import { navigation } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        CI/CD Lab
      </Link>
      <nav aria-label="Điều hướng chính">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
