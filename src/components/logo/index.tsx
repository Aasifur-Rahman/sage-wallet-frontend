export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        className="h-8 w-8"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <rect
          x="2"
          y="2"
          width="28"
          height="28"
          rx="8"
          fill="url(#logoGradient)"
        />
        <path
          d="M10 16L14 20L22 12"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
        SageWallet
      </span>
    </div>
  );
}
