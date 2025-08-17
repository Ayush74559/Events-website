import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-6">We are passionate about connecting people with amazing events. Our platform helps you discover, share, and experience the best events around you.</p>
      </main>
      <Footer />
    </>
  );
}
