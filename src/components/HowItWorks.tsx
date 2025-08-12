import { Flame, FileText, Sparkles } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Upload Your CV",
    desc: "Drag it in. We won’t leak it… unless it’s really bad.",
  },
  {
    icon: Flame,
    title: "AI Roasts It",
    desc: "Savage honesty, zero mercy. Your ego might not survive.",
  },
  {
    icon: Sparkles,
    title: "Get the Glow-Up",
    desc: "Walk away with a CV so good, recruiters will weep.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative text-white py-24 overflow-hidden">
      {/* Subtle radial highlight */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative container mx-auto px-6">
        {/* Section heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,100,100,0.8)]">
          How It Works
        </h2>
        <p className="text-center text-pink-200 max-w-2xl mx-auto mb-16 drop-shadow-md">
          Three steps between you and a CV that slaps harder than Monday blues.
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="relative group bg-white/10 border border-white/20 rounded-2xl p-8 text-center shadow-xl hover:bg-white/20 transition-all duration-300"
              >
                {/* Step number */}
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-black font-extrabold w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                  {i + 1}
                </span>

                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <Icon className="h-12 w-12 text-yellow-400 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 drop-shadow-[0_0_8px_rgba(255,150,150,0.8)]">{step.title}</h3>

                {/* Description */}
                <p className="text-pink-200 text-sm leading-relaxed drop-shadow-md">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
