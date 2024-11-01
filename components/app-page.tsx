'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin } from "lucide-react"

export function Page() {
  const [currentPage, setCurrentPage] = useState('opening')
  const [recipientName] = useState('Honored Guest')

  const handleOpenInvitation = () => {
    setCurrentPage('details')
  }

  const handleSaveToCalendar = () => {
    console.log("Saving to calendar...")
  }

  const handleOpenMap = () => {
    window.open("https://goo.gl/maps/your-venue-location", "_blank")
  }

  return (
    <div className="min-h-screen bg-baby-blue text-navy-blue font-serif">
      {currentPage === 'opening' ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-floral-pattern bg-cover bg-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-great-vibes mb-8 text-navy-blue">
            The Wedding of John & Jane
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-navy-blue">
            To our honored guest, {recipientName}
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
              And among His signs is that He created for you mates from among yourselves, 
              that you may dwell in tranquility with them, and He has put love and mercy 
              between your hearts. Verily in that are signs for those who reflect. 
              - Quran 30:21
            </p>
          </div>

          <div className="mb-12 text-navy-blue">
            <p className="text-2xl mb-2">Friday</p>
            <h2 className="text-5xl font-bold mb-2">28 June 2024</h2>
            <p className="text-2xl">10:30 AM WIB</p>
          </div>

          <Button
            onClick={handleSaveToCalendar}
            className="bg-navy-blue text-baby-blue hover:bg-navy-blue/90 mb-8 flex items-center"
          >
            <CalendarDays className="mr-2" />
            Save to Calendar
          </Button>

          <div className="mb-8 text-navy-blue">
            <h3 className="text-2xl mb-2">Dress Code</h3>
            <p>Formal – Pastel Colors</p>
          </div>

          <Button
            onClick={handleOpenMap}
            className="bg-navy-blue text-baby-blue hover:bg-navy-blue/90 mb-12 flex items-center"
          >
            <MapPin className="mr-2" />
            View Venue Location
          </Button>

          <footer className="text-lg max-w-2xl text-navy-blue">
            <p>
              With all humility, we ask for your presence and blessings on our wedding day.
            </p>
          </footer>
        </div>
      )}
    </div>
  )
}