import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex R.",
    role: "Junior Developer",
    avatar: "https://i.pravatar.cc/80?img=12",
    quote:
      "ResumeRoast brutally roasted my CV and then gave me the tips to fix it. Landed 3 interviews in a week!",
    rating: 5,
  },
  {
    name: "Jenna T.",
    role: "Marketing Specialist",
    avatar: "https://i.pravatar.cc/80?img=47",
    quote:
      "I thought my CV was solid, but this AI showed me the cold, hard truth. Now recruiters actually call me back.",
    rating: 4,
  },
  {
    name: "Mark S.",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/80?img=31",
    quote:
      "The instant feedback blew my mind. ResumeRoast turned my weak points into strengths, no cap.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 text-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-yellow-400 via-pink-400 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,100,100,0.9)]">
          What They’re Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map(({ name, role, avatar, quote, rating }, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300"
            >
              {/* Avatar */}
              <img
                src={avatar}
                alt={`${name} avatar`}
                className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-yellow-400"
              />

              {/* Quote */}
              <p className="text-pink-200 italic mb-6 leading-relaxed drop-shadow-md">
                “{quote}”
              </p>

              {/* Stars */}
              <div className="flex justify-center mb-4 space-x-1">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-5 w-5 ${
                        idx < rating ? "text-yellow-400" : "text-white/30"
                      }`}
                    />
                  ))}
              </div>

              {/* Name & Role */}
              <p className="font-semibold text-lg">{name}</p>
              <p className="text-sm text-pink-300">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
