import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="text-white py-24 relative overflow-hidden">
      {/* Glow / Decoration */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Ready to Get <span className="text-yellow-400">Savage</span> Feedback?
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Upload your resume now and let our AI roast it so hard you’ll want to
          rewrite it before your coffee gets cold.
        </p>

        <Link
          href="/roast"
          className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 hover:shadow-yellow-500/50 transition-transform"
        >
          Roast My Resume <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </section>
  );
}
