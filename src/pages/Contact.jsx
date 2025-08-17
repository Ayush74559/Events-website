import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-6">Have questions or want to partner with us? Reach out via email at <a href='mailto:info@events.com' className='text-blue-600 underline'>info@events.com</a>.</p>
      </main>
      <Footer />
    </>
  );
}
