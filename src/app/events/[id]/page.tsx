"use client";
import { useState, use } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import events from "../../../utils/dummyEvents";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function EventDetailsPage({ params }: PageProps) {
  const { id } = use(params);
  const event = events[parseInt(id, 10)] || events[0];
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", tickets: 1 });
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    bookings.push({ ...form, eventId: id, eventTitle: event.title });
    localStorage.setItem("bookings", JSON.stringify(bookings));
    setSuccess(true);
    setShowForm(false);
    setForm({ name: "", email: "", tickets: 1 });
  }

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-24">
        <div className="mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-xl mb-4" />
          <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
          <p className="text-zinc-500 mb-2">{event.date}</p>
          <p className="mb-6">{event.description}</p>
        </div>
        <div className="mb-8">
          <iframe
            title="Event Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.5946%2C12.9716%2C77.5946%2C12.9716&amp;layer=mapnik"
            className="w-full h-64 rounded-xl border"
            allowFullScreen
          ></iframe>
        </div>
        {success && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded">Booking successful! Check your localStorage for demo data.</div>
        )}
        {showForm ? (
          <form onSubmit={handleSubmit} className="mb-8 p-6 bg-white dark:bg-zinc-900 rounded-xl shadow flex flex-col gap-4 max-w-md mx-auto">
            <label className="font-medium">Name
              <input name="name" type="text" required value={form.name} onChange={handleChange} className="block w-full border rounded px-3 py-2 mt-1" />
            </label>
            <label className="font-medium">Email
              <input name="email" type="email" required value={form.email} onChange={handleChange} className="block w-full border rounded px-3 py-2 mt-1" />
            </label>
            <label className="font-medium">Number of tickets
              <input name="tickets" type="number" min="1" max="10" required value={form.tickets} onChange={handleChange} className="block w-full border rounded px-3 py-2 mt-1" />
            </label>
            <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded font-semibold text-lg hover:bg-pink-500 transition-colors">Book</button>
            <button type="button" onClick={() => setShowForm(false)} className="text-xs text-zinc-500 mt-2">Cancel</button>
          </form>
        ) : (
          <button className="bg-blue-600 text-white px-8 py-3 rounded font-semibold text-lg hover:bg-pink-500 transition-colors" onClick={() => setShowForm(true)}>Book Ticket</button>
        )}
      </main>
      <Footer />
    </>
  );
}
