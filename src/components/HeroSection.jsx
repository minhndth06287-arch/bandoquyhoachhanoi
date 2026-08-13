import React from 'react';
import { FileText, MapPinned, Layers3, Users, TrainFront, Target, Plane, Boxes } from 'lucide-react';

const SUMMARY_ITEMS = [
  { icon: FileText, label: 'Văn bản', value: 'Quyết định 2512/QĐ-UBND, ký 13/5/2026' },
  { icon: MapPinned, label: 'Phạm vi', value: 'Toàn Hà Nội — ~3.359,84 km², 126 đơn vị cấp xã (51 phường, 75 xã)' },
  { icon: Layers3, label: 'Cấu trúc', value: '“Đa tầng, đa lớp, đa cực, đa trung tâm”; sông Hồng là trục trung tâm' },
  { icon: Boxes, label: 'Quy mô', value: '9 cực phát triển · 9 trục động lực · 9 trung tâm lớn' },
  { icon: Users, label: 'Dân số 2065', value: '17 – 19 triệu người (dài hạn tối đa ~20 triệu)' },
  { icon: TrainFront, label: 'Đường sắt đô thị', value: '6 tuyến ~400 km (2035) → 10 tuyến ~800 km (2045) → ~1.200 km (2065)' },
  { icon: Target, label: 'Mục tiêu 2065', value: 'Trở thành “thành phố toàn cầu”, chất lượng sống cao' },
  { icon: Plane, label: 'Sân bay', value: 'Bổ sung sân bay quốc tế thứ hai của vùng Thủ đô' }
];

export default function HeroSection() {
  return (
    <section id="top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 space-y-6">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Bản đồ Quy hoạch Hà Nội tầm nhìn 100 năm
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Tra cứu <b>chức năng sử dụng đất</b> từng khu vực Hà Nội theo Quy hoạch tổng thể Thủ đô
          (Quyết định <b>2512/QĐ-UBND</b> ngày 13/5/2026, tầm nhìn 100 năm) ngay trên bản đồ tương
          tác bên dưới — bấm vào một khu để xem loại đất. Dữ liệu tham khảo, hiển thị lại từ nguồn
          công khai.
        </p>
      </div>

      <div>
        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">
          Quy hoạch Hà Nội 100 năm tóm tắt trong 60 giây
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SUMMARY_ITEMS.map((item) => (
            <div
              key={item.label}
              className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1.5"
            >
              <div className="flex items-center gap-1.5 text-red-600">
                <item.icon className="w-4 h-4" />
                <span className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
                  {item.label}
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
