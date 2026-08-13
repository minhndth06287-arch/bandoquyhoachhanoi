import React from 'react';
import { TrainFront, Building2, Layers } from 'lucide-react';

const DEPTH_TIERS = [
  { tier: 'B1 — Rất nông', depth: '0 – 10 m', desc: 'Tầng hầm, bãi đỗ xe, hạ tầng kỹ thuật nông' },
  { tier: 'B2 — Nông', depth: '10 – 20 m', desc: 'Metro nông, hầm giao thông, lối đi bộ ngầm' },
  { tier: 'B3 — Trung', depth: '20 – 40 m', desc: 'Metro sâu, tuy-nen kỹ thuật, xử lý nước thải' },
  { tier: 'B4 — Sâu', depth: '> 40 m', desc: 'Hạ tầng chiến lược, quốc phòng – an ninh' }
];

export default function RailTODSection() {
  return (
    <section id="metro-tod" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

      {/* Metro Rail */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <TrainFront className="w-5 h-5 text-emerald-600" />
          <span>Đường sắt đô thị</span>
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
          Theo lộ trình trong hồ sơ quy hoạch, mạng lưới đường sắt đô thị (metro) đi từ{' '}
          <b>6 tuyến (~400 km) vào 2035</b> lên <b>10 tuyến (~800 km) vào 2045</b> và hoàn thiện ở
          quy mô khoảng <b>1.200 km vào 2065</b>; cấu trúc xuyên tâm – vành đai kết nối 9 cực,
          khoảng 70% nhà ga gắn TOD. Hiện Hà Nội đã vận hành tuyến Cát Linh – Hà Đông và Nhổn – ga
          Hà Nội.
        </p>
      </div>

      {/* TOD */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-blue-600" />
          <span>Mô hình TOD</span>
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
          Phát triển đô thị nén, đa chức năng quanh nhà ga (bán kính đi bộ 400 – 800 m), phân theo{' '}
          <b>3 cấp</b> — TOD cấp quốc gia (Super Hub), cấp đô thị và cấp khu vực. Mục tiêu:{' '}
          <b>70% nhà ga metro có không gian TOD</b>, xây 3 – 5 đô thị theo mô hình “đô thị 15
          phút”, dùng cơ chế thu hồi giá trị đất (value capture) đóng góp 20 – 30% vốn làm metro.
        </p>
      </div>

      {/* Underground space */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Layers className="w-5 h-5 text-slate-700" />
          <span>Quy hoạch không gian ngầm</span>
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed max-w-3xl mb-4">
          Lần đầu Hà Nội quy hoạch không gian ngầm theo <b>4 tầng độ sâu</b>, tập trung ở 5 trung
          tâm (Nam sông Hồng; Đông Anh – Mê Linh – Sóc Sơn; Long Biên – Gia Lâm; khu Olympic; Hòa
          Lạc – Xuân Mai – Sơn Tây – Phú Xuyên). Hạn chế đào ngầm ở Hoàng thành Thăng Long, khu phố
          cổ và vùng địa chất yếu.
        </p>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-4 py-2.5 font-semibold">Tầng</th>
                <th className="px-4 py-2.5 font-semibold">Độ sâu</th>
                <th className="px-4 py-2.5 font-semibold">Chức năng chính</th>
              </tr>
            </thead>
            <tbody>
              {DEPTH_TIERS.map((t, idx) => (
                <tr key={t.tier} className={idx !== DEPTH_TIERS.length - 1 ? 'border-b border-slate-100' : ''}>
                  <td className="px-4 py-2.5 font-semibold text-slate-900 whitespace-nowrap">{t.tier}</td>
                  <td className="px-4 py-2.5 text-slate-600 whitespace-nowrap">{t.depth}</td>
                  <td className="px-4 py-2.5 text-slate-600">{t.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
