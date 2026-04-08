"use client"

import { motion } from "framer-motion"
import { Settings, ThermometerSnowflake, CarFront, Battery, Droplet, Wrench, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: <Droplet className="w-10 h-10" />,
      title: "Ganti Oli & Filter",
      desc: "Penggantian pelumas mesin menggunakan brand premium (Shell, Shell Helix, dsb) untuk menjaga viskositas dan kebersihan internal mesin.",
      details: ["Pembersihan filter udara", "Pengecekan air radiator", "Pembersihan saringan oli"]
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Tune Up Presisi",
      desc: "Optimalisasi pembakaran melalui pembersihan throttle body, injektor, dan pengecekan busi secara komputerisasi.",
      details: ["Scanning ECU", "Pembersihan ruang bakar", "Kalibrasi idle"]
    },
    {
      icon: <ThermometerSnowflake className="w-10 h-10" />,
      title: "Servis AC Digital",
      desc: "Pemeliharaan AC sistem tertutup dengan penggantian freon R134a murni dan pembersihan evaporator tanpa bongkar dashboard.",
      details: ["Vakum & Oli Kompresor", "Filter Kabin Carbon", "Deteksi Kebocoran UV"]
    },
    {
      icon: <CarFront className="w-10 h-10" />,
      title: "Rem & Kaki-kaki",
      desc: "Layanan pengereman total dan perbaikan suspensi untuk kenyamanan berkendara di berbagai medan jalan.",
      details: ["Bubut Cakram", "Ganti Kampas Rem", "Servis Shockbreaker"]
    },
    {
      icon: <Battery className="w-10 h-10" />,
      title: "Sistem Kelistrikan",
      desc: "Diagnosa dan perbaikan sistem starter, pengisian aki, hingga instalasi aksesoris kelistrikan standar pabrik.",
      details: ["Cek Aki Digital", "Servis Dinamo Ampere", "Pengecekan Kabel Bodi"]
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Turun Mesin (Overhaul)",
      desc: "Perbaikan total mesin (Top Overhaul / Full Overhaul) dengan penggantian sparepart original dan bergaransi resmi.",
      details: ["Ganti Ring Piston", "Skur Klep Presisi", "Pengecekan Kruk As"]
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="relative pt-40 pb-24 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/services-main.png" 
            alt="Layanan Diagnosa Mesin Komputerisasi Bengkel Sitepu Jakarta" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-grid-white opacity-5" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-[0.3em] mb-8"
            >
              <Settings className="w-3.5 h-3.5" />
              SOLUSI TEKNIS TERPADU
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase font-heading leading-none"
            >
              Layanan <br/><span className="text-accent underline decoration-accent/20">Spesialis Pickup & Mobil Medan.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed font-medium max-w-2xl"
            >
              Bengkel Sitepu Parang 1 menyediakan diagnosa digital dan perawatan mekanikal untuk segala jenis kendaraan, mulai dari mobil pribadi hingga pickup operasional.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-slate-50 relative bg-grid-slate">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border-none shadow-2xl shadow-slate-200/50 bg-white rounded-[2.5rem] p-4 flex flex-col group overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors" />
                  <CardHeader className="p-8 pb-4">
                    <div className="mb-8 w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-950 group-hover:bg-accent group-hover:text-slate-950 transition-all duration-500 shadow-sm border border-slate-100 group-hover:border-accent">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-black uppercase tracking-tight font-heading group-hover:text-accent transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 flex-grow">
                    <CardDescription className="text-base text-slate-600 leading-relaxed font-medium mb-8">
                      {service.desc}
                    </CardDescription>
                    <ul className="space-y-3">
                      {service.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-3 text-sm font-bold text-slate-900 uppercase tracking-widest">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Fleet/Pickup Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-5" />
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-accent/10 border-2 border-accent/20 rounded-[3.5rem] p-12 md:p-20 relative z-10 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-6 transition-transform duration-700">
              <CarFront className="w-64 h-64 text-white" />
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-2/3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-slate-950 text-[10px] font-black uppercase tracking-widest mb-8">
                  LAYANAN PRIORITAS BISNIS
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase font-heading">
                  Spesialis Pickup <br/><span className="text-accent italic">& Armada Bisnis.</span>
                </h2>
                <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mb-12">
                  Kami mengerti bahwa armada operasional Anda adalah aset vital. Bengkel Sitepu Medan memberikan prioritas **Fast Track** bagi kendaraan operasional (L300, GranMax, Carry, dsb) untuk meminimalkan waktu henti bisnis Anda.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    "Prioritas Pengerjaan (Fast Track)",
                    "Suku Cadang Heavy Duty",
                    "Pencatatan Sejarah Servis Digital",
                    "Harga Kompetitif untuk Unit Banyak"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="text-white font-bold uppercase tracking-tight text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="h-20 px-12 bg-accent hover:bg-yellow-500 text-slate-950 rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-2xl shadow-accent/20" asChild>
                  <a href="https://wa.me/6285262065007?text=Halo%20Bengkel%20Sitepu%2C%20saya%20tertarik%20dengan%20layanan%20prioritas%20armada%2Fpickup..." target="_blank" rel="noopener noreferrer">
                    KONSULTASI ARMADA <ArrowRight className="ml-3 w-5 h-5" />
                  </a>
                </Button>
              </div>
              <div className="lg:w-1/3 text-center">
                <div className="bg-slate-900 border border-white/5 p-12 rounded-[3rem] shadow-2xl">
                  <div className="text-6xl font-black text-accent mb-2">95%+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Same-Day Completion</div>
                  <p className="text-slate-500 text-sm font-medium italic">"Unit masuk pagi, siap beroperasi kembali sore harinya."</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3.5rem] overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1920&auto=format&fit=crop" 
                alt="Mekanik Ahli Bengkel Sitepu sedang Melakukan Tune Up Mobil" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" />
              <div className="absolute inset-0 bg-grid-white opacity-5" />
            </div>
            
            <div className="relative z-10 p-12 md:p-24 text-center">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase font-heading">Butuh Diagnosa Khusus?</h2>
              <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                Jika mobil Anda memiliki gejala yang sulit diidentifikasi, tim spesialis kami siap membantu melakukan pengecekan komputerisasi secara gratis.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="h-16 px-12 bg-accent hover:bg-yellow-500 text-slate-950 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-accent/20 transition-all hover:scale-105" asChild>
                  <Link href="/contact">Hubungi Sekarang <ArrowRight className="ml-3 w-5 h-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-12 bg-white/5 text-white border-white/10 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-slate-950 transition-all" asChild>
                  <Link href="/contact">Lihat Estimasi Biaya</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
