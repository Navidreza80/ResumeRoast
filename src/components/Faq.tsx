"use client"

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is my CV data safe with ResumeRoast?",
    answer:
      "Hell yeah! We roast your CV, not share it. Privacy is 🔒 locked down tight.",
  },
  {
    question: "How fast do I get feedback?",
    answer:
      "Instant. Upload your CV and BAM — savage feedback within seconds.",
  },
  {
    question: "Can I use ResumeRoast for any job sector?",
    answer:
      "Absolutely. Our AI knows its shit across tech, marketing, design, you name it.",
  },
  {
    question: "Can I download the improved CV?",
    answer:
      "You bet. Export your polished CV in multiple formats, ready to impress.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="w-full py-20 px-6 text-white">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-yellow-400 via-pink-400 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,100,100,0.9)]">
        FAQ — We Got You Covered
      </h2>

      <div className="space-y-6">
        {faqs.map(({ question, answer }, i) => (
          <div
            key={i}
            className="bg-white/10 border border-white/20 rounded-xl p-5 cursor-pointer select-none"
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggle(i);
            }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold drop-shadow-md">{question}</h3>
              {openIndex === i ? (
                <ChevronUp className="w-6 h-6 text-yellow-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-yellow-400" />
              )}
            </div>

            {openIndex === i && (
              <p className="mt-3 text-pink-200 leading-relaxed drop-shadow-md">
                {answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
