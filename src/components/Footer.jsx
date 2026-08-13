import React from 'react';
import { Map } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-red-600 to-orange-500 flex items-center justify-center text-white">
            <Map className="w-4 h-4" />
          </div>
          <span className="font-bold text-slate-900 text-sm">Bản đồ Quy hoạch Hà Nội</span>
        </div>
        <p className="text-[11px] text-slate-400 leading-relaxed max-w-3xl">
          Lưu ý: Thông tin chỉ mang tính chất tham khảo, không thay thế hồ sơ pháp lý. Dữ liệu bản
          đồ và quy hoạch trên trang demo này được tổng hợp và sơ đồ hoá từ nguồn công khai — trước
          khi giao dịch hoặc làm thủ tục, vui lòng đối chiếu văn bản/trích lục chính thức của cơ
          quan quản lý.
        </p>
        <p className="text-[11px] text-slate-400">© 2026 · Demo bản đồ quy hoạch (dự án học tập, phi thương mại).</p>
      </div>
    </footer>
  );
}
