import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'Quy hoạch Hà Nội tầm nhìn 100 năm là gì?',
    a: 'Là Quy hoạch tổng thể Thủ đô Hà Nội được UBND thành phố phê duyệt tại Quyết định 2512/QĐ-UBND ngày 13/5/2026, định hướng phát triển đến năm 2065 và tầm nhìn dài hạn tới khoảng năm 2085 — nên gọi tắt là "tầm nhìn 100 năm". Quy hoạch phủ toàn bộ địa giới Hà Nội theo cấu trúc "đa tầng, đa lớp, đa cực, đa trung tâm", lấy sông Hồng làm trục cảnh quan trung tâm.'
  },
  {
    q: 'Làm sao biết nhà/khu đất của tôi nằm trong chức năng quy hoạch nào?',
    a: 'Dùng bản đồ tương tác ở trên, bấm nút định vị (GPS) để nhảy tới vị trí của bạn, hoặc kéo bản đồ tới khu vực cần xem rồi bấm vào một vùng — hệ thống sẽ hiện tên loại đất và cấp quy hoạch (Quy hoạch chung hoặc Phân khu). Đây là dữ liệu tham khảo, hồ sơ pháp lý chính thức vẫn tra tại cơ quan quản lý.'
  },
  {
    q: 'Dữ liệu bản đồ này lấy từ đâu, có chính xác không?',
    a: 'Dữ liệu chức năng sử dụng đất được lấy từ cổng thông tin quy hoạch công khai của thành phố Hà Nội, gồm hơn 127.000 vùng chức năng phủ toàn thành phố. Màu và tên loại đất giữ nguyên theo hệ quy hoạch gốc. Thông tin có tính tham khảo, không thay thế trích lục/hồ sơ quy hoạch chính thức.'
  },
  {
    q: '9 cực phát triển và 9 trục động lực của Hà Nội là gì?',
    a: 'Quy hoạch xác định 9 cực phát triển (nội đô lịch sử, phía Bắc Đông Anh–Mê Linh–Sóc Sơn, phía Đông Gia Lâm–Long Biên, phía Nam, Vân Đình–Đại Nghĩa, Xuân Mai–Chương Mỹ, phía Tây Hòa Lạc, Sơn Tây–Ba Vì, và trục sông Hồng) cùng 9 trục động lực (Nhật Tân–Nội Bài, Hồ Tây–Cổ Loa, QL5, QL1A, QL21B/21C, QL6, Đại lộ Thăng Long, QL32/Tây Thăng Long và trục cảnh quan sông Hồng).'
  },
  {
    q: 'Hà Nội quy hoạch bao nhiêu km đường sắt đô thị?',
    a: 'Theo lộ trình trong hồ sơ quy hoạch, mạng lưới đường sắt đô thị đạt khoảng 6 tuyến / ~400 km vào năm 2035, khoảng 10 tuyến / ~800 km vào năm 2045, và hoàn thiện ở quy mô khoảng 1.200 km vào năm 2065; cấu trúc xuyên tâm – vành đai kết nối 9 cực phát triển, khoảng 70% nhà ga gắn TOD.'
  },
  {
    q: 'TOD trong quy hoạch Hà Nội tầm nhìn 100 năm là gì?',
    a: 'TOD (Transit-Oriented Development) là mô hình phát triển đô thị nén, đa chức năng quanh nhà ga đường sắt đô thị, trong bán kính đi bộ 400 – 800 m. Quy hoạch phân TOD thành 3 cấp (quốc gia/Super Hub, đô thị, khu vực), đặt mục tiêu 70% nhà ga metro có không gian TOD.'
  },
  {
    q: 'Quy hoạch không gian ngầm Hà Nội gồm những gì?',
    a: 'Lần đầu Hà Nội quy hoạch không gian ngầm theo 4 tầng độ sâu: B1 rất nông (0–10 m), B2 nông (10–20 m, metro nông), B3 trung (20–40 m, metro sâu), B4 sâu (trên 40 m, hạ tầng chiến lược). Không gian ngầm tập trung ở 5 trung tâm, hạn chế đào ở Hoàng thành Thăng Long, khu phố cổ và vùng địa chất yếu.'
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
        <HelpCircle className="w-5 h-5 text-red-600" />
        <span>Câu hỏi thường gặp</span>
      </h2>
      <div className="max-w-3xl space-y-2">
        {FAQS.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={item.q} className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left"
              >
                <span className="text-sm font-semibold text-slate-900">{item.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 flex-none transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen && (
                <p className="px-4 pb-4 text-xs text-slate-600 leading-relaxed">{item.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
