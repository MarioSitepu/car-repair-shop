"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="relative pt-40 pb-24 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-grid-white" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-[0.4em] mb-8"
          >
            HUBUNGI SPESIALIS KAMI
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase font-heading leading-none"
          >
            Akses <br/><span className="text-accent underline decoration-accent/20">Tanpa Batas.</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">Bicara langsung dengan mekanik ahli kami untuk konsultasi awal atau jadwalkan servis rutin Anda dalam hitungan detik.</p>
        </div>
      </section>

      <section className="py-32 bg-slate-50 relative bg-grid-slate">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Info Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-8"
            >
              {[
                { icon: <MapPin className="w-6 h-6" />, title: "Lokasi Workshop", content: "Jl. Parang I No.15, Kwala Bekala, Kec. Medan Johor, Kota Medan, Sumatera Utara 20131" },
                { icon: <Phone className="w-6 h-6" />, title: "Layanan Darurat", content: "085262065007" },
                { icon: <Mail className="w-6 h-6" />, title: "Email Resmi", content: "stinart123@gmail.com" },
                { icon: <Clock className="w-6 h-6" />, title: "Jam Operasional", content: "Sen - Sab (08:00 - 17:00)\nMinggu Tutup" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/40 group hover:border-accent transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="bg-slate-50 p-4 rounded-2xl text-slate-950 group-hover:bg-accent transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{item.title}</h3>
                      <p className="text-base font-bold text-slate-900 whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-slate-950 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid-white opacity-5" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <MessageSquare className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-4">Chat Langsung</h3>
                  <p className="text-slate-400 font-medium text-sm mb-8 italic">Punya pertanyaan singkat? Admin WhatsApp kami stand by 24 jam.</p>
                  <Button size="lg" className="w-full h-14 bg-accent hover:bg-yellow-500 text-slate-950 rounded-2xl font-black uppercase tracking-widest text-xs gap-3">
                    MULAI CHAT <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <Card className="border-none shadow-2xl shadow-slate-200/50 bg-white rounded-[3rem] overflow-hidden">
                <CardContent className="p-10 md:p-16">
                  <div className="mb-12">
                    <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tighter mb-4 font-heading">Form Booking Servis</h2>
                    <p className="text-slate-500 font-medium">Lengkapi data di bawah untuk mendapatkan konfirmasi jadwal dalam 5 menit.</p>
                  </div>
                  
                  {isSuccess ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-accent/10 border-2 border-accent/20 p-12 rounded-[2.5rem] text-center flex flex-col items-center"
                    >
                      <div className="bg-accent p-6 rounded-full shadow-2xl shadow-accent/40 mb-8">
                        <CheckCircle2 className="w-12 h-12 text-slate-950" />
                      </div>
                      <h3 className="text-3xl font-black text-slate-950 mb-4 uppercase tracking-tight">E-TICKET DIKIRIM!</h3>
                      <p className="text-slate-700 font-bold max-w-sm">Tim kami telah menerima data Anda. Silakan cek WhatsApp Anda untuk detail reservasi.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-slate-400">Nama Pemilik</Label>
                          <Input id="name" placeholder="John Doe" required className="h-16 px-6 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-accent transition-all font-bold text-slate-950" />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-slate-400">WhatsApp Aktif</Label>
                          <Input id="phone" type="tel" placeholder="0812xxxx" required className="h-16 px-6 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-accent transition-all font-bold text-slate-950" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <Label htmlFor="car" className="text-xs font-black uppercase tracking-widest text-slate-400">Identitas Kendaraan</Label>
                          <Input id="car" placeholder="Contoh: Honda Civic 2021" required className="h-16 px-6 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-accent transition-all font-bold text-slate-950" />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="date" className="text-xs font-black uppercase tracking-widest text-slate-400">Tanggal Servis</Label>
                          <Input id="date" type="date" required className="h-16 px-6 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-accent transition-all font-bold text-slate-950" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="service" className="text-xs font-black uppercase tracking-widest text-slate-400">Paket Layanan</Label>
                        <select 
                          id="service" 
                          className="flex h-16 w-full rounded-2xl border-transparent bg-slate-50 px-6 py-2 text-base font-bold text-slate-950 focus:bg-white focus:border-accent transition-all focus-visible:outline-none focus-visible:ring-0"
                          required
                        >
                          <option value="">Pilih Paket Layanan</option>
                          <option value="tune-up">Tune Up & Ganti Oli</option>
                          <option value="ac">Servis AC Digital</option>
                          <option value="rem">Rem & Kaki-kaki</option>
                          <option value="overhaul">Diagnosa Mesin / Overhaul</option>
                          <option value="other">Konsultasi Umum</option>
                        </select>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-slate-400">Deskripsi Keluhan (Opsional)</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Ceritakan sejarah servis atau kendala saat ini..." 
                          className="min-h-[160px] p-6 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-accent transition-all font-bold text-slate-950 resize-none"
                        />
                      </div>

                      <Button type="submit" className="w-full h-20 text-sm rounded-2xl font-black uppercase tracking-[0.3em] bg-accent hover:bg-yellow-500 text-slate-950 shadow-2xl shadow-accent/40" disabled={isSubmitting}>
                        {isSubmitting ? (
                          "PROSES PENDAFTARAN..."
                        ) : (
                          <>
                            KONFIRMASI JADWAL SERVIS <Send className="w-5 h-5 ml-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
