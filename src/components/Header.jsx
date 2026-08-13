import React, { useState } from 'react';
import { Map, Layers, Menu, X, ExternalLink } from 'lucide-react';

const NAV_LINKS = [
  { href: '#ban-do', label: 'Bản đồ tương tác' },
  { href: '#cuc-truc', label: '9 Cực & 9 Trục' },
  { href: '#metro-tod', label: 'Đường sắt & TOD' },
  { href: '#dan-so', label: 'Dân số' },
  { href: '#faq', label: 'FAQ' }
];

export default function Header({ isMetroView, setIsMetroView }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo & Title */}
          <a href="#top" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-red-600 to-orange-500 flex items-center justify-center text-white shadow-sm ring-2 ring-red-100 flex-none">
              <Map className="w-5 h-5" />
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold text-slate-900 tracking-tight leading-none">
                  Bản đồ Quy hoạch Hà Nội
                </h1>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-50 text-red-700 border border-red-200">
                  Tầm nhìn 100 năm
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Quyết định 2512/QĐ-UBND · 127.000+ vùng chức năng
              </p>
            </div>
          </a>

          {/* Center Nav (desktop) */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-medium text-slate-600">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMetroView(!isMetroView)}
              className={`hidden sm:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border transition ${
                isMetroView
                  ? 'bg-slate-900 text-amber-400 border-slate-700 shadow-xs ring-2 ring-slate-800'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
              title="Chuyển chế độ xem Metro Đêm"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isMetroView ? 'Metro Dark' : 'Chế độ chuẩn'}</span>
            </button>

            <a
              href="https://gateway.datviet.ai/api/tiles/hanoi/13/6503/3608.pbf"
              target="_blank"
              rel="noreferrer"
              className="hidden xl:flex items-center gap-1 text-xs text-slate-500 hover:text-red-600 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-200 transition"
              title="Xem endpoint Vector Tile PBF demo"
            >
              <span>API Vector Tiles</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg border border-slate-200 text-slate-600"
              aria-label="Mở menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden flex flex-col pb-3 gap-1 text-sm font-medium text-slate-600">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
