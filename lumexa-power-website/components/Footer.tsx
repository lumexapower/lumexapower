import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-lumexa-navy text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-lumexa-gold">LUMEXA POWER</h3>
            <p className="text-gray-300 mb-4">Constant as the Sun</p>
            <p className="text-sm text-gray-400">
              World's first non-tracking 24/7 solar thermal power system
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-lumexa-gold transition">About Us</Link></li>
              <li><Link href="/team" className="hover:text-lumexa-gold transition">Team</Link></li>
              <li><Link href="/news" className="hover:text-lumexa-gold transition">News</Link></li>
              <li><Link href="/contact" className="hover:text-lumexa-gold transition">Contact</Link></li>
            </ul>
          </div>

          {/* Technology Links */}
          <div>
            <h4 className="font-semibold mb-4">Technology</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/technology" className="hover:text-lumexa-gold transition">How It Works</Link></li>
              <li><Link href="/markets" className="hover:text-lumexa-gold transition">Markets</Link></li>
              <li><Link href="/investors" className="hover:text-lumexa-gold transition">Investors</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📧 info@lumexapower.com</li>
              <li>📍 Abu Dhabi, UAE</li>
              <li className="pt-4 flex space-x-4">
                <a href="https://linkedin.com" className="hover:text-lumexa-gold transition">LinkedIn</a>
                <a href="https://twitter.com" className="hover:text-lumexa-gold transition">Twitter</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© 2026 Lumexa Power Inc. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-lumexa-gold">Privacy Policy</Link>
            {' · '}
            <Link href="/terms" className="hover:text-lumexa-gold">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
