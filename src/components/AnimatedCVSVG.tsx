"use client";
import React from "react";

type Props = {
  className?: string;
};

export default function AnimatedCvSvg({ className = "" }: Props) {
  return (
    <svg
      className={className}
      width="320"
      height="360"
      viewBox="0 0 320 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="paperGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#f3f3f5" stopOpacity="1" />
        </linearGradient>

        <linearGradient id="accent" x1="0" x2="1">
          <stop offset="0%" stopColor="#ffd166" />
          <stop offset="50%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#ff3b8a" />
        </linearGradient>

        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="20"
            floodColor="#000"
            floodOpacity="0.25"
          />
        </filter>

        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <mask id="burnMask">
          <rect x="0" y="0" width="320" height="360" fill="white" />

          <g id="burnHole">
            <circle id="burnCircle" cx="240" cy="260" r="0" fill="black" />
          </g>
        </mask>

        <style>
          {`
          /* floating slow rotation */
          .float {
            transform-origin: 160px 180px;
            animation: float 6s ease-in-out infinite;
          }
          @keyframes float {
            0% { transform: translateY(0) rotate(-1deg); }
            50% { transform: translateY(-8px) rotate(1deg); }
            100% { transform: translateY(0) rotate(-1deg); }
          }

          /* flame flicker */
          .flame {
            transform-origin: center;
            animation: flicker 900ms infinite;
          }
          @keyframes flicker {
            0% { transform: translateY(0) scaleY(1) scaleX(1); opacity: 1; }
            50% { transform: translateY(-3px) scaleY(1.06) scaleX(0.98); opacity: 0.9; }
            100% { transform: translateY(0) scaleY(1) scaleX(1); opacity: 1; }
          }

          /* inner small flame with different timing */
          .flame-2 { animation-duration: 650ms; }

          /* the burn "hole" pulsing */
          #burnCircle {
            animation: burnPulse 1600ms ease-in-out infinite;
            transform-origin: 240px 260px;
          }
          @keyframes burnPulse {
            0% { r: 2; opacity: 0.9; transform: translateY(0); }
            50% { r: 12; opacity: 0.95; transform: translateY(-2px); }
            100% { r: 2; opacity: 0.9; transform: translateY(0); }
          }

          /* small smoke wisps fade */
          .smoke { animation: smokeRise 2200ms linear infinite; }
          @keyframes smokeRise {
            0% { transform: translateY(0); opacity: 0.6; }
            100% { transform: translateY(-18px); opacity: 0; }
          }

          /* slight paper fold animation */
          .fold { animation: foldWiggle 2200ms ease-in-out infinite; transform-origin: 232px 40px; }
          @keyframes foldWiggle {
            0% { transform: rotate(-2deg); }
            50% { transform: rotate(2deg); }
            100% { transform: rotate(-2deg); }
          }
        `}
        </style>
      </defs>

      {/* subtle outer shadow */}
      <rect
        x="12"
        y="12"
        width="296"
        height="336"
        rx="12"
        fill="black"
        opacity="0.06"
        filter="url(#softShadow)"
      />

      {/* Paper group: apply burnMask so hole appears */}
      <g className="float" mask="url(#burnMask)">
        {/* main paper */}
        <rect
          x="24"
          y="20"
          width="272"
          height="320"
          rx="12"
          fill="url(#paperGrad)"
          stroke="#e6e4e8"
          strokeWidth="1"
        />

        {/* folded corner */}
        <path
          className="fold"
          d="M272 20 L272 68 L232 20 Z"
          fill="#fff6"
          stroke="#efdede"
          strokeWidth="1"
        />

        {/* header bar */}
        <rect
          x="44"
          y="48"
          width="232"
          height="18"
          rx="4"
          fill="#111827"
          opacity="0.08"
        />

        {/* fake text lines */}
        {Array.from({ length: 7 }).map((_, i) => {
          const y = 84 + i * 28;
          const width = i % 3 === 0 ? 200 : i % 2 === 0 ? 220 : 160;
          return (
            <rect
              key={i}
              x="44"
              y={y}
              width={width}
              height="10"
              rx="3"
              fill="#0f1724"
              opacity="0.06"
            />
          );
        })}

        {/* accent bullet / tag */}
        <rect
          x="44"
          y="280"
          width="80"
          height="18"
          rx="6"
          fill="url(#accent)"
        />

        {/* tiny logo circle */}
        <circle cx="64" cy="62" r="10" fill="#ff6b6b" />

        {/* burnt edges — subtle darker shapes near bottom-right */}
        <path
          d="M220 300 C230 312 248 320 260 312 L268 300 L260 292 C250 286 232 286 220 292 Z"
          fill="#1a0000"
          opacity="0.08"
        />
      </g>

      {/* Flames cluster bottom-right (outside the mask so visible even when paper masked) */}
      <g transform="translate(200,230)">
        {/* base glow */}
        <ellipse
          cx="40"
          cy="60"
          rx="44"
          ry="14"
          fill="url(#accent)"
          opacity="0.12"
          filter="url(#glow)"
        />

        {/* big flame */}
        <g className="flame">
          <path
            d="M40 60 C34 52 30 40 40 36 C50 32 56 44 54 52 C52 60 46 66 40 60 Z"
            fill="#ff6b6b"
            opacity="1"
          />
          <path
            className="flame-2"
            d="M40 56 C36 48 34 40 40 38 C46 36 50 44 48 52 C46 58 43 60 40 56 Z"
            fill="#ffd166"
            opacity="0.95"
          />
          <circle cx="40" cy="44" r="4" fill="#fff6" opacity="0.9" />
        </g>

        {/* small inner ember */}
        <g transform="translate(80,24)" className="flame flame-2">
          <path
            d="M0 30 C-4 24 -6 18 0 16 C6 14 8 18 6 22 C4 26 2 30 0 30 Z"
            fill="#ff9a66"
          />
        </g>

        {/* smoke wisps */}
        <g transform="translate(220, 160) scale(0.9)">
          <path
            className="smoke"
            d="M-40 40 C-44 34 -46 24 -38 18 C-30 12 -20 14 -18 20"
            stroke="#f8fafc"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.12"
          />
          <path
            className="smoke"
            d="M-16 36 C-20 30 -22 24 -18 20 C-14 16 -6 16 -4 20"
            stroke="#f8fafc"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
            opacity="0.08"
          />
        </g>
      </g>

      {/* Burn 'hole' circle (in mask) - placed outside defs so CSS animation can target it */}
      <circle id="burnCircle" cx="240" cy="260" r="2" fill="#000" />
    </svg>
  );
}
