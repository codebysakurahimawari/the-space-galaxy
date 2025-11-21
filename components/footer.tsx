"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0f] text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">

          {/* Explore Space */}
          <div>
            <h3 className="text-white font-semibold tracking-wide text-sm mb-4">
              Explore Space
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/planets" className="hover:text-white transition">Planets & Other Worlds</Link></li>
              <li><Link href="/missions" className="hover:text-white transition">Space Missions</Link></li>
              <li><Link href="/night-sky" className="hover:text-white transition">Night Sky</Link></li>
              <li><Link href="/policy" className="hover:text-white transition">Space Policy</Link></li>
              <li><Link href="/kids" className="hover:text-white transition">For Kids</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-white font-semibold tracking-wide text-sm mb-4">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/articles" className="hover:text-white transition">Articles</Link></li>
              <li><Link href="/radio" className="hover:text-white transition">Planetary Radio</Link></li>
              <li><Link href="/images" className="hover:text-white transition">Space Images</Link></li>
              <li><Link href="/videos" className="hover:text-white transition">Videos</Link></li>
              <li><Link href="/courses" className="hover:text-white transition">Courses</Link></li>
              <li><Link href="/report" className="hover:text-white transition">The Planetary Report</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-white font-semibold tracking-wide text-sm mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/action" className="hover:text-white transition">Action Center</Link></li>
              <li><Link href="/email" className="hover:text-white transition">Email Signup</Link></li>
              <li><Link href="/membership" className="hover:text-white transition">Become a Member</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Give */}
          <div>
            <h3 className="text-white font-semibold tracking-wide text-sm mb-4">Give</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/renew" className="hover:text-white transition">Renew Membership</Link></li>
              <li><Link href="/projects" className="hover:text-white transition">Support a Project</Link></li>
              <li><Link href="/shop" className="hover:text-white transition">Shop to Support</Link></li>
              <li><Link href="/travel" className="hover:text-white transition">Travel</Link></li>
              <li><Link href="/ways-to-give" className="hover:text-white transition">Other Ways to Give</Link></li>
            </ul>
          </div>

          {/* Brand / Social */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold tracking-wide text-sm mb-4">
              The Planetary Society
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the world’s citizens to advance space science and exploration.
            </p>

            {/* Example: replace # with the real URLs */}
            <div className="flex items-center gap-4 mt-4">

              <Link
                href="https://twitter.com"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>

              <Link
                href="https://youtube.com"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition"
              >
                <i className="fa-brands fa-youtube"></i>
              </Link>

            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-between">
          <p>© {new Date().getFullYear()} The Planetary Society. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
