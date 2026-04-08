"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Star, Settings, ThermometerSnowflake, CarFront, ShieldCheck, Zap, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const featuredServices = [
    { icon: <Settings className="w-8 h-8 text-accent" />, title: "Ganti Oli & Tune Up", desc: "Perawatan rutin presisi untuk performa mesin yang tak tertandingi." },
    { icon: <ThermometerSnowflake className="w-8 h-8 text-accent" />, title: "Servis AC Mobil", desc: "Sistem pendinginan kabin optimal dengan teknologi filter tercanggih." },
    { icon: <CarFront className="w-8 h-8 text-accent" />, title: "Rem & Suspensi", desc: "Keamanan maksimal melalui pengecekan kaki-kaki menyeluruh." },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - The Premium Arrival */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src="/hero-main.png" 
              alt="Bengkel Sitepu - Bengkel Mobil Profesional Jakarta dengan Layanan Servis Terbaik" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute inset-0 bg-grid-white opacity-10" />
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass text-white text-xs font-black uppercase tracking-[0.3em]"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-900 bg-accent overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt={`Pelanggan Puas Bengkel Sitepu ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span>DIPERCAYA 5.000+ PEMILIK MOBIL</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants} 
              className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white uppercase text-balance"
            >
              Bengkel Sitepu <br/>
              <span className="text-accent italic selection:bg-white selection:text-slate-900">Parang 1 Medan.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants} 
              className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl font-medium tracking-tight"
            >
              Bukan sekadar bengkel. Kami adalah partner pemeliharaan kendaraan dengan standar teknologi diagnostik masa depan.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button size="lg" className="text-sm h-16 px-10 bg-accent hover:bg-yellow-500 text-slate-950 shadow-2xl shadow-accent/20 transition-all hover:scale-105 font-black uppercase tracking-widest gap-2 rounded-2xl" asChild>
                <Link href="/contact">Booking Servis <ChevronRight className="w-5 h-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="text-sm h-16 px-10 bg-white/5 backdrop-blur-md text-white border-white/10 hover:bg-white hover:text-slate-950 transition-all font-black uppercase tracking-widest gap-3 rounded-2xl group" asChild>
                <a href="https://wa.me/6285262065007" target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                  Konsultasi Video
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-px h-24 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </section>

      {/* Marquee Branding - High Contrast */}
      <div className="w-full overflow-hidden bg-accent py-6 relative">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-16">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              {["TOYOTA", "HONDA", "SUZUKI", "MITSUBISHI", "BMW", "MERCEDES"].map((brand, j) => (
                <span key={j} className="text-slate-950 font-black text-3xl tracking-[0.2em] italic">
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bento Grid Redesign */}
      <section className="py-32 bg-slate-50 relative bg-grid-slate">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-8 bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:scale-175 group-hover:rotate-6 transition-all duration-700">
                <ShieldCheck className="w-64 h-64 text-slate-950" />
              </div>
              <div className="relative z-10">
                <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                  <ShieldCheck className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-6 uppercase tracking-tight font-heading leading-none">
                  Bengkel Mobil Medan <br/><span className="text-accent underline decoration-accent/20">Spesialis Pickup.</span>
                </h2>
                <p className="text-slate-600 text-lg max-w-lg leading-relaxed font-medium">
                  Setiap detil servis kami dijamin. Jika masalah mekanis yang sama muncul dalam 30 hari, kami tangani tanpa biaya sepeser pun.
                </p>
              </div>
              <Button variant="link" className="mt-8 p-0 w-fit text-slate-950 font-black uppercase tracking-widest text-sm group/btn">
                Pelajari Kebijakan Garansi <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 bg-slate-950 text-white rounded-[2.5rem] p-10 flex flex-col justify-center shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-grid-white opacity-5" />
              <div className="relative z-10 text-center">
                <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-xl shadow-accent/20 group-hover:rotate-12 transition-transform">
                  <Zap className="w-8 h-8 text-slate-950" />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter font-heading">Instan & Akurat</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-8">
                  Mekanik bersertifikat didukung peralatan diagnostik standar Eropa.
                </p>
                <div className="text-5xl font-black text-accent mb-2">98%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Akurasi Diagnosa</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid - High Elegance */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-3xl">
              <div className="text-accent font-black uppercase tracking-[0.4em] text-xs mb-4">Layanan Terbaik Kami</div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter uppercase leading-none font-heading">
                Solusi <span className="text-border text-slate-200">Total</span> <br/>Untuk Kendaraan Anda.
              </h2>
            </div>
            <Button variant="outline" size="lg" className="rounded-2xl h-16 px-10 border-slate-200 font-black uppercase tracking-widest text-xs hover:bg-slate-950 hover:text-white transition-all group" asChild>
              <Link href="/services">
                Semua Layanan
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="h-full border-none shadow-none group bg-transparent">
                  <CardHeader className="p-0 mb-8">
                    <div className="mb-8 p-6 rounded-[2rem] bg-slate-50 w-24 h-24 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500 shadow-sm border border-slate-100 group-hover:border-accent">
                      <div className="group-hover:text-slate-950 transition-colors">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-3xl font-black uppercase tracking-tight font-heading group-hover:text-accent transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-lg text-slate-500 leading-relaxed font-medium mb-6">
                      {service.desc}
                    </CardDescription>
                    <Link href="/services" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-slate-950 hover:gap-3 transition-all">
                      PELAJARI LEBIH LANJUT <ArrowRight className="ml-2 w-4 h-4 text-accent" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - The Dark Cinema */}
      <section className="py-40 relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="/exterior-main.png" 
            alt="Eksterior Bengkel Sitepu - Tempat Servis Mobil Terpercaya di Jakarta Selatan" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-grid-white opacity-5" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-black mb-8 text-white tracking-widest uppercase font-heading leading-tight">
              Beri Mobil Anda <br/><span className="text-accent underline decoration-white/10 underline-offset-8">Terbaik.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed font-medium max-w-2xl mx-auto italic">
              "Kesehatan mobil Anda adalah prioritas kami. Rasakan perbedaannya sejak pertama kali mesin dinyalakan kembali."
            </p>
            <Button size="lg" className="text-sm h-20 px-16 bg-accent hover:bg-yellow-500 text-slate-950 rounded-2xl shadow-2xl shadow-accent/40 transition-all hover:scale-105 font-black uppercase tracking-[0.3em]" asChild>
              <Link href="/contact">MULAI BOOKING SEKARANG</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
