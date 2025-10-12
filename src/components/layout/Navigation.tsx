'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { getImagePath } from "@/lib/utils";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname.replace(/\/$/, '') === href.replace(/\/$/, '');
  console.log("pathname", isActive )
  
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header 
      className={`w-full flex flex-col items-center gap-4 py-8 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center gap-3 animate-slide-in">
        <div className="rounded-xl overflow-hidden w-[40px] h-[40px] bg-white">
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