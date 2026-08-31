import React, { useState } from 'react';
import { Compass, MapPin, Navigation, Car, Sparkles, ArrowRight } from 'lucide-react';
import { Cafe, OriginLocation } from '../types';

interface RadialMapGuideProps {
  cafes: Cafe[];
  origin: OriginLocation;
  onSelectCafe: (cafe: Cafe) => void;
}

// Angular / radius coordinates simulation mapped to real geographical bearings relative to Seongnam Center
interface NodePos {
  cafeId: string;
  angleDeg: number; // 0 is East, 90 is South, 180 is West, 270 is North
  radiusScale: number; // 0.2 to 0.9 depending on travel time
  directionLabel: string;
}

const CAFE_POSITIONS: Record<string, { angleDeg: number; directionLabel: string }> = {
  'moani': { angleDeg: 120, directionLabel: '남동 (분당 금곡동)' },
  'smeltz': { angleDeg: 45, directionLabel: '동북 (광주 신현동)' },
  'cafe-ryu': { angleDeg: 25, directionLabel: '동북 (남한산성)' },
  'moan-gogiri': { angleDeg: 150, directionLabel: '남서 (용인 고기리)' },
  'le-detour': { angleDeg: 170, directionLabel: '남서 (수원 광교)' },
  'nella-foresta': { angleDeg: 210, directionLabel: '서남 (의왕 백운호수)' },
  'earth-and-wood': { angleDeg: 215, directionLabel: '서남 (백운호수 1열)' },
  'bellstar-beach': { angleDeg: 340, directionLabel: '북동 (하남/팔당 한강)' },
  'padisha': { angleDeg: 240, directionLabel: '서남 (서판교 운중동)' },
  'farmers-daddy': { angleDeg: 15, directionLabel: '동북 (광주 퇴촌)' },
  'gleam-bakery': { angleDeg: 145, directionLabel: '남서 (용인 고기동)' },
  'boaz-yangjae': { angleDeg: 290, directionLabel: '북서 (서울 양재천)' },
  'ibaebae-bakery': { angleDeg: 60, directionLabel: '동 (성남-광주 이배재)' },
  'open-alley': { angleDeg: 50, directionLabel: '동북 (신현동 문형산)' },
};

export const RadialMapGuide: React.FC<RadialMapGuideProps> = ({
  cafes,
  origin,
  onSelectCafe,
}) => {
  const [hoveredCafeId, setHoveredCafeId] = useState<string | null>(null);

  const hoveredCafe = cafes.find((c) => c.id === hoveredCafeId);

  return (
    <div className="bg-[#1A1A1A] text-[#FFF9F0] rounded-[32px] sm:rounded-[36px] border-4 border-[#FFD93D] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#1A1A1A] mb-12">
      {/* Title & Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b-2 border-white/10 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 mb-1.5 px-3 py-1 rounded-full bg-[#FF6B6B] text-white font-black text-xs border border-white/20 shadow-[2px_2px_0px_0px_#FFD93D]">
            <Compass className="w-4 h-4" />
            성남 1시간 방사형 거리 레이더
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            성남 중심 1시간 거리 레이더
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 font-medium break-keep">
            <strong>{origin}</strong>을 중심으로 동서남북 15분·30분·45분·60분 동심원 안의 카페 위치를 직관적으로 확인하세요.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs bg-[#2D2D2D] px-4 py-2.5 rounded-2xl border-2 border-white/20">
          <div className="flex items-center gap-1.5 font-bold">
            <span className="w-3 h-3 rounded-full bg-[#4ECDC4] border border-white" />
            <span className="text-white">15분 컷</span>
          </div>
          <div className="flex items-center gap-1.5 font-bold">
            <span className="w-3 h-3 rounded-full bg-[#FFD93D] border border-white" />
            <span className="text-white">30분 드라이브</span>
          </div>
          <div className="flex items-center gap-1.5 font-bold">
            <span className="w-3 h-3 rounded-full bg-[#FF6B6B] border border-white" />
            <span className="text-white">45분 힐링</span>
          </div>
          <div className="flex items-center gap-1.5 font-bold">
            <span className="w-3 h-3 rounded-full bg-[#a855f7] border border-white" />
            <span className="text-white">60분 근교</span>
          </div>
        </div>
      </div>

      {/* Main Radar Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* SVG Interactive Radar Canvas */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="relative w-full max-w-[480px] aspect-square">
            <svg viewBox="0 0 500 500" className="w-full h-full">
              {/* Background gradient & grid */}
              <defs>
                <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.2" />
                  <stop offset="60%" stopColor="#1A1A1A" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#111111" stopOpacity="1" />
                </radialGradient>
              </defs>

              <rect width="500" height="500" rx="30" fill="url(#radarGlow)" stroke="#333" strokeWidth="2" />

              {/* Concentric distance rings (15m, 30m, 45m, 60m) */}
              <circle cx="250" cy="250" r="60" fill="none" stroke="#4ECDC4" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" />
              <circle cx="250" cy="250" r="120" fill="none" stroke="#FFD93D" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.6" />
              <circle cx="250" cy="250" r="180" fill="none" stroke="#FF6B6B" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.6" />
              <circle cx="250" cy="250" r="230" fill="none" stroke="#a855f7" strokeWidth="1.5" opacity="0.5" />

              {/* Axis Crosslines */}
              <line x1="250" y1="20" x2="250" y2="480" stroke="#444" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="20" y1="250" x2="480" y2="250" stroke="#444" strokeWidth="1" strokeDasharray="2,2" />

              {/* Cardinal direction labels */}
              <text x="250" y="38" fill="#4ECDC4" fontSize="11" fontWeight="bold" textAnchor="middle">
                북 (서울 강남 / 양재천 / 하남)
              </text>
              <text x="475" y="254" fill="#FFD93D" fontSize="11" fontWeight="bold" textAnchor="end">
                동 (남한산성 / 광주)
              </text>
              <text x="250" y="475" fill="#FF6B6B" fontSize="11" fontWeight="bold" textAnchor="middle">
                남 (용인 고기리 / 광교호수)
              </text>
              <text x="25" y="254" fill="#a855f7" fontSize="11" fontWeight="bold" textAnchor="start">
                서 (백운호수 / 과천)
              </text>

              {/* Ring time markers */}
              <text x="255" y="195" fill="#4ECDC4" fontSize="10" fontWeight="900">15분</text>
              <text x="255" y="135" fill="#FFD93D" fontSize="10" fontWeight="900">30분</text>
              <text x="255" y="75" fill="#FF6B6B" fontSize="10" fontWeight="900">45분</text>
              <text x="255" y="30" fill="#a855f7" fontSize="10" fontWeight="900">60분</text>

              {/* Center Origin Node: Seongnam */}
              <g transform="translate(250, 250)">
                <circle r="22" fill="#FF6B6B" opacity="0.3" className="animate-ping" />
                <circle r="16" fill="#FF6B6B" stroke="#FFD93D" strokeWidth="3" />
                <text y="4" fill="#ffffff" fontSize="9" fontWeight="900" textAnchor="middle">
                  {origin === '남한산성입구역' ? '산성' : origin.replace('역', '')}
                </text>
              </g>

              {/* Plotted Cafe Nodes */}
              {cafes.map((cafe) => {
                const pos = CAFE_POSITIONS[cafe.id] || { angleDeg: 45, directionLabel: '근교' };
                const travel = cafe.distanceFromOrigins[origin] || cafe.distanceFromOrigins['판교역'];
                const carMin = travel.carMin;

                // Scale radius proportionally: 10min -> ~50px, 60min -> ~230px
                const radius = Math.min(235, Math.max(45, (carMin / 60) * 230));
                const rad = (pos.angleDeg - 90) * (Math.PI / 180);
                const x = 250 + radius * Math.cos(rad);
                const y = 250 + radius * Math.sin(rad);

                let nodeColor = '#4ECDC4'; // 15m
                if (carMin > 15) nodeColor = '#FFD93D'; // 30m
                if (carMin > 30) nodeColor = '#FF6B6B'; // 45m
                if (carMin > 45) nodeColor = '#a855f7'; // 60m

                const isHovered = hoveredCafeId === cafe.id;

                return (
                  <g
                    key={cafe.id}
                    className="cursor-pointer transition-transform duration-200"
                    onMouseEnter={() => setHoveredCafeId(cafe.id)}
                    onMouseLeave={() => setHoveredCafeId(null)}
                    onClick={() => onSelectCafe(cafe)}
                  >
                    {/* Pulsing ring on hover */}
                    {isHovered && (
                      <circle cx={x} cy={y} r="20" fill={nodeColor} opacity="0.4" className="animate-ping" />
                    )}

                    {/* Outer node circle */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isHovered ? 13 : 9}
                      fill={nodeColor}
                      stroke="#1A1A1A"
                      strokeWidth={isHovered ? 3 : 2}
                      className="transition-all duration-200"
                    />

                    {/* Label */}
                    <text
                      x={x}
                      y={y + (y > 250 ? 18 : -14)}
                      fill={isHovered ? '#FFD93D' : '#ffffff'}
                      fontSize={isHovered ? '11.5' : '10'}
                      fontWeight="900"
                      textAnchor="middle"
                      className="pointer-events-none drop-shadow-md select-none transition-all"
                    >
                      {cafe.name.split(' ')[0]} ({carMin}분)
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right: Interactive Inspector Card */}
        <div className="lg:col-span-5">
          {hoveredCafe ? (
            <div className="bg-[#2D2D2D] rounded-3xl p-6 border-3 border-[#FFD93D] shadow-[6px_6px_0px_0px_#4ECDC4] space-y-3.5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#FF6B6B] text-white font-black text-xs border border-white/20">
                  {hoveredCafe.category}
                </span>
                <span className="text-xs font-bold text-stone-300">{hoveredCafe.shortLocation}</span>
              </div>

              <h3 className="text-xl font-black text-white">{hoveredCafe.name}</h3>
              <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                {hoveredCafe.tagline}
              </p>

              {/* Travel Time Box */}
              <div className="bg-[#1A1A1A] rounded-2xl p-3.5 border-2 border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[#FFD93D] font-black text-sm">
                  <Car className="w-4 h-4" />
                  <span>
                    자차 {hoveredCafe.distanceFromOrigins[origin]?.carMin || 20}분 소요
                  </span>
                </div>
                <span className="text-stone-300 font-bold">
                  거리 {hoveredCafe.distanceFromOrigins[origin]?.distanceKm || 10}km
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectCafe(hoveredCafe)}
                  className="w-full py-3 rounded-2xl bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-[3px_3px_0px_0px_#FFD93D] border-2 border-[#1A1A1A] active:translate-y-0.5"
                >
                  상세 정보 및 길찾기 보기
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#242424] rounded-3xl p-6 sm:p-8 border-2 border-stone-700 text-center space-y-3.5">
              <div className="w-14 h-14 rounded-2xl bg-[#FF6B6B]/20 text-[#FF6B6B] flex items-center justify-center mx-auto border-2 border-[#FF6B6B]/40">
                <Navigation className="w-7 h-7 animate-pulse" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-white">
                지도 위 카페 노드를 선택해보세요
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed max-w-sm mx-auto">
                마우스를 올리거나 터치하면 해당 방향의 예상 이동 시간, 시그니처 특징 및 길찾기 정보가 활성화됩니다.
              </p>
              <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#FFD93D] font-black">
                <Sparkles className="w-4 h-4" />
                <span>성남에서 가장 가까운 힐링 카페들이 한눈에!</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
