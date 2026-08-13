import React from 'react';
import { Users } from 'lucide-react';

const POPULATION = [
  { year: '2030', value: '11,5 – 12 triệu người' },
  { year: '2035', value: '12 – 14 triệu người' },
  { year: '2045', value: '15 – 16 triệu người' },
  { year: '2065', value: '17 – 19 triệu người' },
  { year: 'Sau 2065', value: 'Cơ bản giữ mức tối đa ~20 triệu người' }
];

export default function PopulationSection() {
  return (
    <section id="dan-so" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
        <Users className="w-5 h-5 text-red-600" />
        <span>Dự báo dân số Hà Nội theo quy hoạch</span>
      </h2>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden max-w-2xl">
        <table className="w-full text-xs text-left">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-4 py-2.5 font-semibold">Mốc thời gian</th>
              <th className="px-4 py-2.5 font-semibold">Quy mô dân số</th>
            </tr>
          </thead>
          <tbody>
            {POPULATION.map((p, idx) => (
              <tr key={p.year} className={idx !== POPULATION.length - 1 ? 'border-b border-slate-100' : ''}>
                <td className="px-4 py-2.5 font-semibold text-slate-900 whitespace-nowrap">{p.year}</td>
                <td className="px-4 py-2.5 text-slate-600">{p.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
