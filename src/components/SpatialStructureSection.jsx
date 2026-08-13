import React from 'react';
import { Compass, Zap } from 'lucide-react';

const POLES = [
  { id: 1, title: 'Đô thị trung tâm', desc: 'Hữu ngạn sông Hồng · Văn hóa - Lịch sử - Chính trị, Đô thị Olympic' },
  { id: 2, title: 'Phía Bắc (Đông Anh – Mê Linh – Sóc Sơn)', desc: 'Cực hội nhập, Logistics & dịch vụ sân bay Nội Bài' },
  { id: 3, title: 'Phía Đông (Gia Lâm – Long Biên)', desc: 'Thương mại dịch vụ, cửa ngõ gắn QL5 & cao tốc Hải Phòng' },
  { id: 4, title: 'Phía Nam (Thường Tín – Phú Xuyên)', desc: 'Công nghiệp & Logistics gắn sân bay 2 & đường sắt tốc độ cao' },
  { id: 5, title: 'Vân Đình – Đại Nghĩa', desc: 'Đô thị sinh thái di sản & tín ngưỡng hai bên sông' },
  { id: 6, title: 'Tây Nam (Xuân Mai – Chương Mỹ)', desc: 'Đô thị giáo dục, y tế & nghỉ dưỡng sinh thái' },
  { id: 7, title: 'Phía Tây (Hòa Lạc)', desc: 'Đô thị khoa học công nghệ, ĐH Quốc gia & Khu CNC' },
  { id: 8, title: 'Tây Bắc (Sơn Tây – Ba Vì)', desc: 'Đô thị văn hóa di sản, du lịch nghỉ dưỡng & ANQP' },
  { id: 9, title: 'Cực Sông Hồng', desc: 'Trục cảnh quan văn hóa - tài chính - du lịch chủ đạo' }
];

const AXES = [
  { id: 1, title: 'Nhật Tân – Nội Bài', desc: 'Trục đô thị sân bay & dịch vụ quốc tế' },
  { id: 2, title: 'Hồ Tây – Cổ Loa – Gia Bình', desc: 'Kết nối vùng kinh tế Đông Bắc' },
  { id: 3, title: 'QL5 / Cao tốc Hải Phòng', desc: 'Hành lang thương mại & hàng hải' },
  { id: 4, title: 'QL1A / Pháp Vân – Cầu Giẽ', desc: 'Hành lang kết nối phía Nam' },
  { id: 5, title: 'QL21B / 21C', desc: 'Hành lang di sản tâm linh Mỹ Đình – Bái Đính' },
  { id: 6, title: 'QL6 / Hà Đông – Xuân Mai', desc: 'Chuỗi đô thị sinh thái cửa ngõ Tây Bắc' },
  { id: 7, title: 'Đại lộ Thăng Long', desc: 'Trục tri thức tới Hòa Lạc & Ba Vì' },
  { id: 8, title: 'QL32 / Tây Thăng Long', desc: 'Trục hướng tâm Sơn Tây & Thượng lưu sông Hồng' },
  { id: 9, title: 'Đại lộ cảnh quan Sông Hồng', desc: 'Trục xanh trung tâm văn hóa sáng tạo' }
];

export default function SpatialStructureSection() {
  return (
    <section id="cuc-truc" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
      <div className="max-w-3xl space-y-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          Cấu trúc không gian: 9 cực tăng trưởng, 9 trục động lực
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Quy hoạch xác lập mô hình chùm đô thị “đa tầng, đa lớp, đa cực, đa trung tâm”, gồm{' '}
          <b>9 cực tăng trưởng</b>, 9 trung tâm lớn và <b>9 trục động lực</b>, lấy sông Hồng làm trục
          cảnh quan – sinh thái – văn hóa chủ đạo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-purple-600" />
            <span>9 Cực Phát Triển</span>
          </h3>
          <div className="space-y-3">
            {POLES.map((p) => (
              <div key={p.id} className="flex gap-3 text-xs">
                <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center flex-none">
                  {p.id}
                </span>
                <div>
                  <div className="font-semibold text-slate-900">{p.title}</div>
                  <div className="text-slate-500">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-600" />
            <span>9 Trục Động Lực</span>
          </h3>
          <div className="space-y-3">
            {AXES.map((a) => (
              <div key={a.id} className="flex gap-3 text-xs">
                <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 font-bold flex items-center justify-center flex-none">
                  {a.id}
                </span>
                <div>
                  <div className="font-semibold text-slate-900">{a.title}</div>
                  <div className="text-slate-500">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
