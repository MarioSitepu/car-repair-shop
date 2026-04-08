import Link from "next/link";
import { Wrench, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-24 pb-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 text-white group">
              <div className="bg-accent text-accent-foreground p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-accent/20">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase font-heading">
                Bengkel<span className="text-accent">Sitepu</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              Servis mobil terpercaya dan berkualitas. Kami memberikan pelayanan terbaik untuk menjaga performa kendaraan Anda tetap prima dengan standar teknologi terkini.
            </p>
            <div className="flex items-center gap-4 pt-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-slate-950 transition-all duration-300 border border-white/5">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8 font-heading">Navigasi</h4>
            <ul className="space-y-4">
              {[
                { name: "Beranda", path: "/" },
                { name: "Layanan Kami", path: "/services" },
                { name: "Tentang Kami", path: "/about" },
                { name: "Kontak & Booking", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sm font-bold hover:text-accent transition-colors flex items-center group">
                    <ArrowRight className="w-0 h-3 group-hover:w-3 mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8 font-heading">Kontak Kami</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <a href="https://maps.app.goo.gl/z4fMMF8YdYyt1sxy7" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  <span className="text-sm leading-relaxed font-medium">Jl. Parang I No.15, Kwala Bekala, Kec. Medan Johor, Kota Medan, Sumatera Utara 20131</span>
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-white/5 p-2.5 rounded-xl group-hover:bg-accent/10 transition-colors">
                  <a href="https://wa.me/6285262065007?text=Halo%20Bengkel%20Sitepu%20Medan%2C%20saya%20ingin%20tanya%20mengenai%20servis..." target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 text-accent" />
                  </a>
                </div>
                <span className="text-sm font-bold">+62 852 6206 5007</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-white/5 p-2.5 rounded-xl group-hover:bg-accent/10 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium">stinart123@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6 font-heading">Jam Operasional</h4>
            <ul className="space-y-4">
              <li className="flex items-center justify-between text-sm py-2 border-b border-white/5">
                <span className="flex items-center gap-2 opacity-60"><Clock className="w-4 h-4" /> Sen - Sab</span>
                <span className="font-bold">08:00 - 17:00</span>
              </li>
              <li className="flex items-center justify-between text-sm py-2 text-accent">
                <span className="flex items-center gap-2 font-bold"><Clock className="w-4 h-4" /> Minggu</span>
                <span className="font-bold italic uppercase text-xs">Tutup</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-widest text-slate-500">
          <p>&copy; {new Date().getFullYear()} Bengkel Mobil Sitepu. Crafted with Precision.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
