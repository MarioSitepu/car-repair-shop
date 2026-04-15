"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Award, Clock, Shield, Wrench, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { icon: <Clock className="w-8 h-8 text-accent" />, value: "10+", label: "TAHUN PENGALAMAN" },
    { icon: <Users className="w-8 h-8 text-accent" />, value: "5000+", label: "PELANGGAN PUAS" },
    { icon: <Award className="w-8 h-8 text-accent" />, value: "15", label: "MEKANIK AHLI" },
  ];

  const reasons = [
    "Mekanik bersertifikat dan spesialis mesin",
    "Peralatan bengkel standar komputasi modern",
    "Suku cadang orisinal & bergaransi tertulis",
    "Sistem antrean digital & booking terjadwal",
    "Transparansi biaya di awal pengerjaan",
    "Fasilitas ruang tunggu VVIP Ber-AC & WiFi",
  ];

  return (
    <div className="bg-white">
      {/* Hero / Vision Section */}
      <section className="relative pt-40 pb-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-grid-white" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-[0.4em] mb-8"
          >
            DEDIKASI & PRESISI
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase font-heading leading-none"
          >
            Kualitas <br/><span className="text-stroke-thin text-slate-800">Tanpa Kompromi.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Sejak 2014, Bengkel Sitepu hadir untuk mendefinisikan ulang standar perawatan otomotif di Indonesia dengan transparansi dan integritas.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-none font-heading">
                  Memulai dengan <br/><span className="text-accent underline decoration-accent/20">Visi yang Jelas.</span>
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    Lahir dari kecintaan pada dunia otomotif dan kegelisahan akan sulitnya menemukan bengkel yang jujur, Bengkel Sitepu hadir sebagai jawaban atas keraguan pemilik kendaraan.
                  </p>
                  <p>
                    Kami mengombinasikan keahlian mekanik berpengalaman puluhan tahun dengan manajemen servis modern yang mengutamakan kepuasan pelanggan di atas segalanya.
                  </p>
                </div>
              </div>

              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 italic font-medium text-slate-900 border-l-8 border-l-accent shadow-xl shadow-slate-200/50">
                "Kami tidak hanya memperbaiki mobil, kami memulihkan kepercayaan Anda pada kendaraan yang Anda cintai. Setiap baut memiliki cerita, dan kami memastikan ceritanya berakhir dengan sempurna."
              </div>

              <Button size="lg" className="h-14 px-10 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest text-xs gap-3 group" asChild>
                <Link href="/contact">
                  Bergabung dengan Komunitas Kami
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-4/5 rounded-[3.5rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <img 
                  src="/exterior-main.png" 
                  alt="Sejarah dan Tim Bengkel Sitepu - Solusi Perawatan Mobil Terpercaya Sejak 2014" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Decoration */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent rounded-[3rem] z-0 opacity-20 blur-2xl" />
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-slate-950 rounded-[3rem] z-0 opacity-10 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-950 text-white relative bg-grid-white opacity-95">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/5 group-hover:bg-accent group-hover:text-slate-950 transition-all duration-500">
                  {stat.icon}
                </div>
                <div className="text-6xl font-black mb-2 font-heading tracking-tighter">{stat.value}</div>
                <div className="text-xs font-black uppercase tracking-[0.4em] text-accent">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us - Bento Reveal */}
      <section className="py-32 bg-slate-50 bg-grid-slate">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 tracking-tighter uppercase font-heading">
              Bukan Sekadar <br/><span className="text-accent underline decoration-accent/10">Bengkel Biasa.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium">Layanan premium dengan hasil yang bisa Anda rasakan langsung pada performa kendaraan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/30 flex items-center gap-6 group hover:border-accent transition-colors"
              >
                <div className="bg-accent/10 p-2.5 rounded-xl shrink-0 group-hover:bg-accent group-hover:text-slate-950 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-accent group-hover:text-slate-950" />
                </div>
                <span className="text-base font-bold text-slate-900 uppercase tracking-widest leading-snug">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
