import React from 'react';
import { MapPin, Car, Bus, Info } from 'lucide-react';
import { OriginLocation } from '../types';

interface OriginSelectorProps {
  currentOrigin: OriginLocation;
  onSelectOrigin: (origin: OriginLocation) => void;
  transportMode: 'car' | 'transit';
  onToggleTransportMode: (mode: 'car' | 'transit') => void;
}

const ORIGINS: { id: OriginLocation; label: string; desc: string }[] = [
  { id: '판교역', label: '판교역', desc: '신분당선·경강선·테크노밸리' },
  { id: '서현/수내역', label: '서현/수내역', desc: '분당선 중심·중앙공원 인근' },
  { id: '야탑/모란역', label: '야탑/모란역', desc: '분당선·8호선·시외버스터미널' },
  { id: '남한산성입구역', label: '남한산성입구역', desc: '8호선·수정/중원·남한산성 진입로' },
];

export const OriginSelector: React.FC<OriginSelectorProps> = ({
  currentOrigin,
  onSelectOrigin,
  transportMode,
  onToggleTransportMode,
}) => {
  return (
    <div className="bg-white rounded-3xl border-3 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] p-5 sm:p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        {/* Left: Origin Picker */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-full bg-[#FF6B6B] text-white flex items-center justify-center border border-[#1A1A1A] shadow-[1.5px_1.5px_0px_0px_#1A1A1A]">
              <MapPin className="w-4 h-4" />
            </span>
            <h2 className="text-base sm:text-lg font-black text-[#1A1A1A]">
              성남 어디서 출발하시나요?
            </h2>
            <span className="text-xs text-[#666] font-bold hidden sm:inline">
              (출발지에 따라 모든 카페의 소요시간과 거리가 즉시 갱신됩니다)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {ORIGINS.map((item) => {
              const isSelected = currentOrigin === item.id;
              return (
                <button
                  key={item.id}
                  id={`origin-btn-${item.id}`}
                  onClick={() => onSelectOrigin(item.id)}
                  className={`p-3 sm:p-3.5 rounded-2xl text-left transition-all border-2 ${
                    isSelected
                      ? 'bg-[#FFD93D] border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] text-[#1A1A1A] translate-y-[-1px]'
                      : 'bg-[#FFF9F0] hover:bg-white border-[#1A1A1A]/30 hover:border-[#1A1A1A] text-[#2D2D2D]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base font-black flex items-center gap-1.5">
                      <span className={`w-2.5 h-2.5 rounded-full border border-[#1A1A1A] ${isSelected ? 'bg-[#FF6B6B]' : 'bg-white'}`} />
                      {item.label}
                    </span>
                  </div>
                  <p className="text-[11px] font-semibold text-[#555] mt-1 truncate">{item.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Transport Mode Switcher */}
        <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between pt-4 lg:pt-0 border-t-2 lg:border-t-0 lg:border-l-2 border-[#1A1A1A]/20 lg:pl-6 gap-3">
          <div className="text-left lg:text-right">
            <span className="text-xs font-black text-[#1A1A1A] block">이동 수단 모드</span>
            <span className="text-xs text-[#FF6B6B] font-bold">
              {transportMode === 'car' ? '자차 내비 기준' : '대중교통 환승 기준'}
            </span>
          </div>

          <div className="flex bg-[#FFF9F0] p-1.5 rounded-2xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
            <button
              id="transport-mode-car"
              onClick={() => onToggleTransportMode('car')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                transportMode === 'car'
                  ? 'bg-[#FF6B6B] text-white border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]'
                  : 'text-[#555] hover:text-[#1A1A1A]'
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              자차 드라이브
            </button>
            <button
              id="transport-mode-transit"
              onClick={() => onToggleTransportMode('transit')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                transportMode === 'transit'
                  ? 'bg-[#4ECDC4] text-white border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]'
                  : 'text-[#555] hover:text-[#1A1A1A]'
              }`}
            >
              <Bus className="w-3.5 h-3.5" />
              대중교통
            </button>
          </div>
        </div>
      </div>

      {/* Info notice bar */}
      <div className="mt-4 pt-3.5 border-t-2 border-[#1A1A1A]/10 flex items-center gap-2 text-xs font-medium text-[#555] break-keep">
        <Info className="w-4 h-4 text-[#FF6B6B] flex-shrink-0" />
        <span>
          소개된 모든 카페는 <strong>{currentOrigin}</strong>에서 평일·주말 일반 교통상황 기준 <strong>1시간 이내</strong>에 도착 가능한 검증된 곳들입니다.
        </span>
      </div>
    </div>
  );
};
