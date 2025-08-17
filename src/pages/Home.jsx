import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import events from "../utils/dummyEvents";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.slice(0, 3).map((event, i) => (
          <EventCard key={i} {...event} />
        ))}
      </main>
      <Footer />
    </>
  );
}
