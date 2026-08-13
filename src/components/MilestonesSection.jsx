import React from 'react';
import { Award } from 'lucide-react';

const MILESTONES = [
  {
    year: '2035',
    color: 'text-red-600',
    title: 'GRDP ~20.000 USD/người',
    desc: 'Đô thị xanh, thông minh; trung tâm giáo dục & y tế hàng đầu khu vực Châu Á - Thái Bình Dương. 6 tuyến Metro (~400 km).'
  },
  {
    year: '2045',
    color: 'text-orange-600',
    title: 'GRDP ~680 tỷ USD (45.000 USD/người)',
    desc: 'Trung tâm đổi mới sáng tạo; đạt phát thải ròng bằng 0 (Net Zero). 10 tuyến Metro (~800 km).'
  },
  {
    year: '2065',
    color: 'text-purple-600',
    title: 'GRDP ~2.000 tỷ USD (100.000 USD/người)',
    desc: 'Trở thành “Thành phố toàn cầu”, thuộc TOP 10 thủ đô hạnh phúc nhất thế giới. ~1.200 km Metro hoàn chỉnh.'
  }
];

export default function MilestonesSection() {
  return (
    <section id="muc-tieu" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
        <Award className="w-5 h-5 text-red-600" />
        <span>Mục tiêu phát triển theo mốc 2035 · 2045 · 2065</span>
      </h2>
      <p className="text-sm text-slate-600 leading-relaxed max-w-3xl mb-4">
        Tăng trưởng GRDP đặt mục tiêu trên 11%/năm giai đoạn 2026–2045, khoảng 5%/năm giai đoạn
        2046–2065. Tầm nhìn 100 năm: Hà Nội là “thành phố toàn cầu”.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {MILESTONES.map((m) => (
          <div key={m.year} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className={`text-2xl font-black ${m.color}`}>{m.year}</div>
            <div className="font-semibold text-slate-900 text-sm">{m.title}</div>
            <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
