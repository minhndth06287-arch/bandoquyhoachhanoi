import React from 'react';
import { MapPin, MousePointerClick, SlidersHorizontal, Locate } from 'lucide-react';
import HanoiPlanningMap from './HanoiPlanningMap';
import LayerControlPanel from './LayerControlPanel';
import FeatureCard from './FeatureCard';

const STEPS = [
  { icon: Locate, text: 'Bấm nút định vị (GPS) ở góc phải để bản đồ nhảy tới vị trí hiện tại của bạn, hoặc tự kéo/thu phóng tới khu vực cần xem.' },
  { icon: MousePointerClick, text: 'Bấm vào một vùng màu — cửa sổ sẽ hiện tên loại đất và cấp quy hoạch (Quy hoạch chung hoặc Phân khu).' },
  { icon: SlidersHorizontal, text: 'Bật/tắt lớp QHC và Phân khu ở bảng bên trái để so sánh.' }
];

export default function MapSection({
  layerState,
  setLayerState,
  isMetroView,
  setIsMetroView,
  selectedFeature,
  setSelectedFeature,
  mapRef,
  onFlyToLocation
}) {
  return (
    <section id="ban-do" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
      <div className="max-w-3xl space-y-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-red-600" />
          Bản đồ quy hoạch sử dụng đất Hà Nội
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Hơn <b>127.000 vùng chức năng</b> (Quy hoạch chung + Phân khu) phủ toàn thành phố. Bấm nút
          định vị để nhảy tới vị trí của bạn, hoặc bấm vào một khu để xem loại đất và cấp quy hoạch.
        </p>
      </div>

      {/* Boxed map, fixed height — embedded block, not full-screen */}
      <div className="relative w-full h-[520px] sm:h-[600px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
        <HanoiPlanningMap
          layerState={layerState}
          isMetroView={isMetroView}
          setSelectedFeature={setSelectedFeature}
          mapRef={mapRef}
        />

        <div className="absolute top-4 left-4 z-20 max-h-[calc(100%-2rem)] overflow-y-auto">
          <LayerControlPanel
            layerState={layerState}
            setLayerState={setLayerState}
            isMetroView={isMetroView}
            setIsMetroView={setIsMetroView}
            onFlyToLocation={onFlyToLocation}
          />
        </div>

        {selectedFeature && (
          <div className="absolute bottom-6 left-4 z-30 max-w-[calc(100%-2rem)]">
            <FeatureCard
              feature={selectedFeature}
              onClose={() => setSelectedFeature(null)}
              isMetroView={isMetroView}
            />
          </div>
        )}

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 pointer-events-none text-[11px] text-slate-500 bg-white/80 px-3 py-1 rounded-full shadow-xs border border-slate-200/50 backdrop-blur-xs text-center max-w-md truncate">
          Dữ liệu Vector Tiles PBF: gateway.datviet.ai · Tham khảo QĐ 2512/QĐ-UBND
        </div>
      </div>

      <p className="text-[11px] text-slate-400 leading-relaxed">
        Nguồn dữ liệu: cổng thông tin quy hoạch thành phố Hà Nội (bản đồ Quy hoạch chung & Phân khu,
        dữ liệu công khai). Thông tin mang tính tham khảo, không thay thế trích lục quy hoạch chính thức.
      </p>

      {/* How-to steps */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 mb-3">Cách tra cứu quy hoạch khu vực của bạn</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {STEPS.map((s, idx) => (
            <div key={idx} className="flex gap-3 text-xs">
              <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center flex-none">
                {idx + 1}
              </span>
              <p className="text-slate-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
