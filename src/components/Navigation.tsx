'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getImagePath } from "@/lib/utils";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link 
      href={href} 
      className={`nav-link ${isActive ? 'active' : ''}`}
    >
      {children}
    </Link>
  );
}

export default function Navigation() {
  return (
    <header className="w-full flex flex-col items-center gap-4 py-8">
      <div className="flex items-center gap-3 animate-slide-in">
        <div className="rounded-full overflow-hidden w-[40px] h-[40px] bg-white">
          <Image
            className="rounded-full"
            src={getImagePath("/images/logoBlack.png")}
            alt="profile"
            width={100}
            height={100}
          />
        </div>
        <p className="text-md text-white font-sans"> Sofie Buur </p>
      </div>
      <div className="animate-slide-in-delay-50">
        <nav className="flex gap-8 font-sans text-sm">
          <NavLink href="/work">Work</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
} 