import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-1 px-4 py-16">
      {/* Logo */}
      <svg width="80" height="80" viewBox="0 0 306 301" className="mb-8">
        <defs>
          <linearGradient
            id="bgGradHome"
            x1="50.44"
            y1="305.77"
            x2="255.56"
            y2="-4.77"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#6822bd" />
            <stop offset="1" stopColor="#b37eed" />
          </linearGradient>
          <linearGradient
            id="dropGradHome"
            x1="103.91"
            y1="249.37"
            x2="211.33"
            y2="86.74"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#915ad5" />
            <stop offset="0.18" stopColor="#a373de" />
            <stop offset="0.46" stopColor="#bb94ea" />
            <stop offset="0.69" stopColor="#caa8f1" />
            <stop offset="0.84" stopColor="#d0b0f4" />
          </linearGradient>
        </defs>
        <rect
          x="0.5"
          y="0.5"
          width="305"
          height="300"
          rx="60"
          ry="60"
          fill="url(#bgGradHome)"
        />
        <path
          fill="url(#dropGradHome)"
          d="M226.46,238.84h0c38.57-38.57,38.57-101.11,0-139.68L157,29.7l-69.46,69.46c-38.57,38.57-38.57,101.11,0,139.68h0c38.36,38.36,100.56,38.36,138.92,0Z"
        />
        <path
          fill="#fff"
          d="M228.86,100.88l-15.86-15.86-14.15-14.13-21.5,28.22,44.36,33.8,16.1-21.14c-2.81-3.75-5.55-7.48-8.96-10.9Z"
        />
        <path
          fill="#fff"
          stroke="#fff"
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M153.5,183.49c.17,0,.33.01.5.01,6.35,0,11.5-5.15,11.5-11.5s-5-11.5-11.5-11.5-11.5,5.15-11.5,11.5c0,2.22.63,4.3,1.72,6.06l.28.44-52.52,64.52,26.02-100.02,44-28,44,34-12.33,46.33-90.25,56.41,50.07-68.24h.5"
        />
      </svg>

      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
        Vandrite Documentation
      </h1>

      <p className="text-lg text-fd-muted-foreground mb-8 max-w-md">
        Learn how to use Vandrite to organize your studies and ideas, or build
        powerful plugins to extend its functionality.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/docs"
          className="inline-flex items-center justify-center rounded-lg bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
        >
          Get Started
        </Link>
        <Link
          href="/docs/plugins"
          className="inline-flex items-center justify-center rounded-lg border border-fd-border px-6 py-3 text-sm font-medium transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        >
          Plugin Development
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
        <div className="p-6 rounded-lg border border-fd-border bg-fd-card">
          <div className="text-2xl mb-2">📝</div>
          <h3 className="font-semibold mb-2">User Guide</h3>
          <p className="text-sm text-fd-muted-foreground">
            Learn how to use all of Vandrite&apos;s features
          </p>
        </div>
        <div className="p-6 rounded-lg border border-fd-border bg-fd-card">
          <div className="text-2xl mb-2">🔌</div>
          <h3 className="font-semibold mb-2">Plugin API</h3>
          <p className="text-sm text-fd-muted-foreground">
            Build custom plugins to extend Vandrite
          </p>
        </div>
        <div className="p-6 rounded-lg border border-fd-border bg-fd-card">
          <div className="text-2xl mb-2">🎨</div>
          <h3 className="font-semibold mb-2">Themes</h3>
          <p className="text-sm text-fd-muted-foreground">
            Customize the look and feel of Vandrite
          </p>
        </div>
      </div>
    </div>
  );
}
