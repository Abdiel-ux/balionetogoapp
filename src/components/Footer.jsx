import footerLogo from '../assets/images/footer_logo.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-white/5 pt-10 pb-6">
      <div className="max-w-md mx-auto px-6">
        {/* Nav links */}
        <div className="grid gap-y-3 mb-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-black text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Brand */}
        <div className="flex items-center gap-2.5 mb-6">
          <img src={footerLogo} alt="BaliOneToGo Logo"/>
        </div>

        {/* Copyright */}
        <p className="text-black text-xs">
          ©2026 by BaliOneToGo
        </p>
      </div>
    </footer>
  );
}
