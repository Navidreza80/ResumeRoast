import { Zap, Clock, MessageCircle, Download } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI Roasts Your CV",
    desc: "No BS, just raw, savage feedback that tells you exactly what recruiters think.",
    colorFrom: "from-yellow-400",
    colorTo: "to-orange-500",
  },
  {
    icon: Clock,
    title: "Instant Feedback",
    desc: "Why wait days? Get your CV slammed and fixed in seconds flat.",
    colorFrom: "from-pink-500",
    colorTo: "to-red-600",
  },
  {
    icon: MessageCircle,
    title: "Custom Tips & Fixes",
    desc: "Tailored advice based on your unique CV to turn weaknesses into wins.",
    colorFrom: "from-purple-400",
    colorTo: "to-pink-500",
  },
  {
    icon: Download,
    title: "Export Perfect CVs",
    desc: "Download ready-to-send, polished CVs recruiters can’t ignore.",
    colorFrom: "from-red-400",
    colorTo: "to-yellow-500",
  },
];

export default function Features() {
  return (
    <section className="relative text-white py-24 px-6 overflow-hidden">
      {/* Container */}
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-center text-5xl font-extrabold mb-10 bg-gradient-to-r from-yellow-400 via-pink-400 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,100,100,0.9)]">
          Features That Slap Hard
        </h2>
        <p className="text-center text-pink-300 max-w-3xl mx-auto mb-16 drop-shadow-md">
          No fluff, just the cold hard truth your CV needs to crush the competition.
        </p>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {features.map(({ icon: Icon, title, desc, colorFrom, colorTo }, i) => (
            <div
              key={i}
              className="group relative flex items-start space-x-6 bg-white/10 border border-white/20 rounded-3xl p-8 shadow-lg hover:bg-white/20 transition-all duration-300"
            >
              {/* Icon circle */}
              <div
                className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${colorFrom} ${colorTo} flex items-center justify-center text-black text-2xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,150,150,0.8)]">
                  {title}
                </h3>
                <p className="text-pink-200 leading-relaxed drop-shadow-md">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
