import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";
import events from "../utils/dummyEvents";

export default function Events() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, i) => (
          <EventCard key={i} {...event} />
        ))}
      </main>
      <Footer />
    </>
  );
}
