"use client"

import React, { useEffect, useState } from "react"
import ticketmasterService from "../services/ticketmasterService"
import partyImage from "../assets/party.png"

export default function Home() {
  const [popularEvents, setPopularEvents] = useState([])

  useEffect(() => {
    const fetchPopularEvents = async () => {
      try {
        const data = await ticketmasterService.getPopularEvents()
        if (data._embedded) {
          setPopularEvents(data._embedded.events)
        }
      } catch (error) {
        console.error("Error fetching popular events", error)
      }
    }

    fetchPopularEvents()
  }, [])

  return (
    <div className="w-full">
      {/* Hero section */}
      <div className="w-full">
        <div className="relative w-full h-[600px] bg-[url('../assets/party.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60">
            <div className="container mx-auto px-4 h-full">
              <div className="flex h-full items-center justify-center">
                <div className="text-white text-center max-w-4xl">
                  <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight">
                    Find Your Next Amazing Experience
                  </h1>
                  <p className="mb-8 text-xl text-gray-200">
                    Discover and book tickets for the hottest events near you. From concerts to sports, we've got you covered!
                  </p>
                  <div className="flex gap-4 justify-center">
                    <a href="/events">
                      <button
                        type="button"
                        className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Browse Events
                      </button>
                    </a>
                    <a href="/about">
                      <button
                        type="button"
                        className="rounded-lg bg-white/10 backdrop-blur-sm px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-white/20 hover:scale-105 border border-white/30"
                      >
                        Learn More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Events Section */}
      <div className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Popular Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {popularEvents.map((event: any) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-[1.02] border border-gray-100">
                <div className="relative h-48">
                  <img
                    src={event.images[0]?.url || partyImage}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-semibold text-white">{event.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">
                    {event.dates?.start?.localDate || "Date TBA"}
                  </p>
                  <a
                    href={`/events/${event.id}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
