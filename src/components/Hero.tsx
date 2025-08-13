import { Button } from "@/components/ui/button";
import { FileText, Flame, Skull } from "lucide-react";
import AnimatedCvSvg from "./AnimatedCVSVG";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white">
      <div className="absolute inset-0 bg-[url('/gif.gif')] bg-cover bg-center opacity-20 pointer-events-none" />

      <div className="absolute right-8 bottom-8 hidden md:block">
        <AnimatedCvSvg />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        {/* Icons cluster */}
        <div className="flex gap-4 mb-6 text-yellow-300">
          <Flame className="h-12 w-12 animate-bounce" />
          <Skull className="h-12 w-12 animate-pulse" />
          <FileText className="h-12 w-12 animate-bounce delay-150" />
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 drop-shadow-[0_0_15px_rgba(255,100,100,0.8)]">
          Your CV Sucks
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-pink-100 leading-relaxed drop-shadow-md">
          Let AI roast it into ashes 🔥 and rebuild it better than your last
          relationship.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/roast">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold shadow-xl transform hover:scale-105 transition-transform"
            >
              Roast My Resume
            </Button>
          </Link>
          <Link href="#how-it-works">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white/10 hover:scale-105 transition-transform"
            >
              Show Me How It Works
            </Button>
          </Link>
        </div>

        {/* Tagline */}
        <p className="mt-8 text-sm text-pink-200 italic">
          Better to cry here than in front of HR.
        </p>
      </div>

      {/* 🔳 Gradient vignette for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
    </section>
  );
}
