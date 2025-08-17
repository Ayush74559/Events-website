"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-white/80 dark:bg-zinc-900/80 shadow-md fixed top-0 left-0 z-50 backdrop-blur">
      <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">Events</Link>
      <div className="hidden md:flex gap-6 text-sm font-medium">
        <a href="/#hero" className="text-gray-800 dark:text-gray-200 hover:text-pink-500 transition-colors scroll-smooth">Home</a>
        <Link href="/events" className="text-gray-800 dark:text-gray-200 hover:text-pink-500 transition-colors">Events</Link>
        <Link href="/about" className="text-gray-800 dark:text-gray-200 hover:text-pink-500 transition-colors">About</Link>
        <Link href="/contact" className="text-gray-800 dark:text-gray-200 hover:text-pink-500 transition-colors">Contact</Link>
      </div>
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800"
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="block w-6 h-0.5 bg-zinc-800 dark:bg-zinc-100"></span>
        <span className="block w-6 h-0.5 bg-zinc-800 dark:bg-zinc-100"></span>
        <span className="block w-6 h-0.5 bg-zinc-800 dark:bg-zinc-100"></span>
      </button>
      {open && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-zinc-900 shadow-md flex flex-col items-center py-4 md:hidden animate-fade-in z-50">
          <a href="/#hero" className="py-2 w-full text-center text-gray-800 dark:text-gray-200 hover:text-pink-500 transition-colors scroll-smooth" onClick={() => setOpen(false)}>Home</a>
          <Link href="/events" className="py-2 w-full text-center text-gray-800 dark:text-gray-200 hover:text-pink-500 transition-colors" onClick={() => setOpen(false)}>Events</Link>
          <Link href="/about" className="py-2 w-full text-center text-gray-800 dark:text-gray-200 hover:text-pink-500 transition-colors" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" className="py-2 w-full text-center text-gray-800 dark:text-gray-200 hover:text-pink-500 transition-colors" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
