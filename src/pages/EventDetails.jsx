import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EventDetails() {
  // You would fetch event details by ID here
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Event Title</h1>
        <p className="text-zinc-500 mb-2">Event Date</p>
        <p className="mb-6">Event description goes here. Replace with real data.</p>
        {/* Add more event details and registration button here */}
      </main>
      <Footer />
    </>
  );
}
