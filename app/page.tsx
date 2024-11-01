'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";

export default function Page() {
  const [currentPage, setCurrentPage] = useState('opening');
  const recipientName = 'di Tempat';

  const handleOpenInvitation = () => {
    setCurrentPage('details');
  };

  const handleSaveToCalendar = () => {
    window.open("https://calendar.google.com/calendar/u/0/r", "_blank")
  };

  const handleOpenMap = () => {
    window.open("https://g.co/kgs/hEZSuy6", "_blank");
  };

  // Add a handler function for the Back button
  const handleBack = () => {
    setCurrentPage('opening');
  };

  return (
    <div className="min-h-screen bg-baby-blue text-navy-blue font-serif">
      {currentPage === 'opening' ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-floral-pattern bg-cover bg-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-great-vibes mb-8 text-navy-blue">
            Undangan Wisuda Salsabilla Nisa
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-navy-blue">
            Kepada Bapak/Ibu/Sdr/I {recipientName}
          </p>
          <Button
            onClick={handleOpenInvitation}
            className="bg-navy-blue text-baby-blue hover:bg-navy-blue/90 text-lg px-8 py-3 rounded-full transition-all duration-300"
          >
            Open Invitation
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-start min-h-screen bg-floral-pattern bg-cover bg-center text-center p-4 pt-12">
          <div className="bg-baby-blue/80 p-6 rounded-lg mb-8 max-w-2xl w-full">
            <p className="italic text-lg mb-4 text-navy-blue">
              Hallo dan Salam sejahtera untuk kita semua, Assalamualaikum Wr.WIB 
              Dengan ini saya mengundang bapak, ibu, dan rekan untuk menghadiri
              undangan acara Wisuda yang akan dilaksanakan pada:
            </p>
          </div>

          <div className="mb-12 text-navy-blue">
            <p className="text-2xl mb-2">Selasa</p>
            <h2 className="text-5xl font-bold mb-2">3 Desember 2024</h2>
            <p className="text-2xl">09.00 sd 12.00 AWIB</p>
          </div>

          <Button
            onClick={handleSaveToCalendar}
            className="bg-navy-blue text-baby-blue hover:bg-navy-blue/90 mb-8 flex items-center"
          >
            <CalendarDays className="mr-2" />
            Save to Calendar
          </Button>

          <div className="mb-8 text-navy-blue">
            <h3 className="text-2xl mb-2">Notes</h3>
            <p>Pakaian Pria – Resmi/Batik/Jas (Berdasi)</p>
            <p>Pakaian Wanita – Resmi/Batik </p>
            <p>Tidak diperkenankan membawa anak kecil</p>
            <p>Dilarang meninggalkan tempat upacara wisuda sebelum seluruh rangkaian acara selesai</p>
            <p>Harap hadir 30 menit sebelum acara dimulai</p>
          </div>

          <Button
            onClick={handleOpenMap}
            className="bg-navy-blue text-baby-blue hover:bg-navy-blue/90 mb-12 flex items-center"
          >
            <MapPin className="mr-2" />
            View Venue Location
          </Button>

          <div className="mb-8 text-navy-blue">
            <h3 className="text-2xl mb-2">Susunan Acara</h3>
            <p>1. Pembukaan</p>
            <p>2. Menyanyikan lagu Indonesia raya </p>
            <p>3. Mengheningkan Cipta</p>
            <p>4. Pembukaan Sidang Wisuda</p>
            <p>5. Pelantikan Wisudawan</p>
          </div>

          <footer className="text-lg max-w-2xl text-navy-blue">
            <p>
              With all humility, we ask for your presence and blessings on our graduate day.
            </p>
          </footer>

          {/* Add the Back button here */}
          <Button
            onClick={handleBack}
            className="bg-navy-blue text-baby-blue hover:bg-navy-blue/90 mt-8 flex items-center"
          >
            back
          </Button>
        </div>
      )}
    </div>
  );
}
