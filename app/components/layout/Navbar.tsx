"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Layanan", path: "/services" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Kontak", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "py-3 glass shadow-2xl shadow-slate-900/10"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-accent text-accent-foreground p-2.5 rounded-xl group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-accent/20">
              <Wrench className="w-5 h-5" />
            </div>
            <span className={cn(
              "text-2xl font-black tracking-tighter uppercase font-heading transition-colors",
              isScrolled ? "text-slate-900" : "text-white"
            )}>
              Bengkel<span className="text-accent underline decoration-accent/30 underline-offset-4">Sitepu</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-accent relative py-2 group",
                    pathname === link.path
                      ? "text-accent"
                      : isScrolled ? "text-slate-600" : "text-slate-200"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300",
                    pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </Link>
              ))}
            </div>
            <Button asChild className="rounded-full px-6 h-11 bg-accent hover:bg-yellow-500 text-slate-950 font-black uppercase text-xs tracking-widest gap-2">
              <Link href="/contact">
                Booking Servis
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                "text-sm font-bold uppercase tracking-widest py-3 border-b border-slate-50 transition-colors",
                pathname === link.path
                  ? "text-accent"
                  : "text-slate-600"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full mt-4 rounded-xl h-14 bg-slate-950 text-white font-bold" asChild onClick={() => setIsMobileMenuOpen(false)}>
            <Link href="/contact">Booking Servis</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
