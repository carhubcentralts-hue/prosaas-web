'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

interface NavHeaderProps {
  lang: 'he' | 'en';
  homeUrl: string;
  featuresUrl: string;
  voiceDemoUrl: string;
  faqUrl: string;
  blogUrl: string;
  aboutUrl: string;
  contactUrl: string;
  heUrl?: string;
  enUrl?: string;
}

export default function NavHeader({
  lang,
  homeUrl,
  featuresUrl,
  voiceDemoUrl,
  faqUrl,
  blogUrl,
  aboutUrl,
  contactUrl,
  heUrl,
  enUrl,
}: NavHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isHebrew = lang === 'he';

  const navLinks = [
    { href: featuresUrl, label: isHebrew ? 'יכולות' : 'Features', ariaLabel: isHebrew ? 'ניווט ליכולות' : 'Go to Features' },
    { href: voiceDemoUrl, label: isHebrew ? 'הדגמת קול' : 'Voice Demo', ariaLabel: isHebrew ? 'ניווט להדגמת קול' : 'Go to Voice Demo' },
    { href: faqUrl, label: isHebrew ? 'שאלות נפוצות' : 'FAQ', ariaLabel: isHebrew ? 'ניווט לשאלות נפוצות' : 'Go to FAQ' },
    { href: blogUrl, label: isHebrew ? 'בלוג' : 'Blog', ariaLabel: isHebrew ? 'ניווט לבלוג' : 'Go to Blog' },
    { href: aboutUrl, label: isHebrew ? 'אודות' : 'About', ariaLabel: isHebrew ? 'ניווט לאודות' : 'Go to About' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href={homeUrl} className="flex items-center flex-shrink-0" aria-label="ProSaaS – דף הבית / Home">
          <Image src="/logo.svg" alt="ProSaaS" width={120} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5" aria-label={isHebrew ? 'ניווט ראשי' : 'Main navigation'}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition text-sm font-medium whitespace-nowrap"
              aria-label={link.ariaLabel}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher lang={lang} heUrl={heUrl} enUrl={enUrl} />
        </nav>

        {/* Desktop CTA */}
        <Link
          href={contactUrl}
          className="hidden md:inline-flex bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 whitespace-nowrap"
        >
          {isHebrew ? 'קבל הדגמה חינם' : 'Get a Free Demo'}
        </Link>

        {/* Mobile: Language switcher + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher lang={lang} heUrl={heUrl} enUrl={enUrl} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
            aria-label={isOpen ? (isHebrew ? 'סגור תפריט' : 'Close menu') : (isHebrew ? 'פתח תפריט' : 'Open menu')}
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white" role="navigation" aria-label={isHebrew ? 'תפריט ניווט נייד' : 'Mobile navigation'}>
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition py-3 px-3 rounded-lg text-sm font-medium"
                aria-label={link.ariaLabel}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={contactUrl}
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm text-center"
            >
              {isHebrew ? 'קבל הדגמה חינם' : 'Get a Free Demo'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
