'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <svg className="w-8 h-8" viewBox="0 0 50 50" fill="none">
                <path
                  d="M38.5 11.5c-.3 0-2.7-.1-2.7-.1s-2.2-2.2-2.4-2.4c-.3-.3-.8-.2-1 0l-1.4.4c-.5-1.4-1.3-2.7-2.5-2.7h-.2c-.7-1-1.6-1.5-2.5-1.5-6.2 0-9.2 7.8-10.1 11.8l-4.7 1.5c-1.5.5-1.5.5-1.7 2-.2.9-4.4 34-4.4 34L33.5 45l16-3.5S38.8 11.6 38.5 11.5zM30.3 10l-2.6.8c.5-2 1.4-4 2.6-5.3.3 1.2.4 2.9 0 4.5zm-3.3-5.3c.8 0 1.4.3 2 .9-1.5 1.6-2.9 4.3-3.5 8l-3.9 1.2c1.1-4.2 3.3-10.1 5.4-10.1zM26 23c-.1-.7-3-1.5-6.2-1.4-2.4.1-2.5.8-2.5 1.2-.1.8 0 1.4 3.8 2.7 5 1.7 6.1 4.2 5.9 7-.2 4.6-3.9 7.5-9.9 7.7-7.3.3-11.2-3.8-11.2-3.8l1.5-5s3.8 2.9 6.9 2.7c2-.1 2.7-1.4 2.7-2.4 0-4.2-6.1-4.1-7.6-9.4-1.3-4.6 2.7-9.3 9.2-9.7 4-.3 6 1.1 6 1.1l-2.3 5.7-4.3-1.6z"
                  fill="#95BF47"
                />
              </svg>
              <span className="text-2xl font-bold text-black">Index 101</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <NavItem
                label="Solutions"
                hasDropdown
                active={activeDropdown === 'solutions'}
                onToggle={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
              />
              <NavItem label="Pricing" href="/pricing" />
              <NavItem
                label="Resources"
                hasDropdown
                active={activeDropdown === 'resources'}
                onToggle={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
              />
              <NavItem label="Enterprise" href="/enterprise" />
              <a
                href="/winter-edition"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium hover:shadow-lg transition-all"
              >
                <span className="text-lg">❄️</span>
                Winter Edition
              </a>
            </nav>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <a
              href="/login"
              className="hidden md:inline-flex px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Log in
            </a>
            <a
              href="/signup"
              className="px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-all hover:shadow-xl"
            >
              Start for free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavItem({
  label,
  href,
  hasDropdown,
  active,
  onToggle,
}: {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  active?: boolean;
  onToggle?: () => void;
}) {
  if (hasDropdown) {
    return (
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${active ? 'rotate-180' : ''}`} />
      </button>
    );
  }

  return (
    <a href={href} className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors">
      {label}
    </a>
  );
}
