import React from 'react';
import { Coffee, MapPin, Sparkles, Navigation, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] border-t-4 border-[#FFD93D] text-[#FFF9F0] py-14 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {/* Col 1: Brand & Purpose */}
        <div className="md:col-span-2 space-y-3.5">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-[#FF6B6B] border-2 border-white flex items-center justify-center text-white shadow-[2px_2px_0px_0px_#FFD93D]">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-white tracking-tight">
              성남 1시간 카페 가이드
            </h3>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed max-w-md font-medium break-keep">
            성남시(분당구·수정구·중원구) 시민 및 판교 직장인을 위한 감성 카페 & 근교 드라이브 큐레이션 서비스입니다.<br className="hidden sm:inline" />{' '}
            남한산성, 경기 광주, 용인 고기리, 의왕 백운호수, 하남 팔당, 수원 광교 등 자차 및 대중교통으로 1시간 이내에 닿을 수 있는 엄선된 카페 정보를 제공합니다.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D2D2D] border border-white/10 text-xs text-[#FFD93D] font-bold break-keep">
            <Sparkles className="w-3.5 h-3.5 text-[#4ECDC4] flex-shrink-0" />
            <span>매주 최신 도로 교통 정보 및 카페 시그니처 메뉴 업데이트 반영</span>
          </div>
        </div>

        {/* Col 2: Major Regional Hubs */}
        <div className="space-y-2 text-xs">
          <h4 className="text-[#FFD93D] font-black text-sm mb-3">성남 출발 1시간 권역</h4>
          <ul className="space-y-2 text-stone-300 font-medium">
            <li>• 성남 분당·서판교·남한산성 (5~20분)</li>
            <li>• 경기 광주 신현·오포·퇴촌 (15~40분)</li>
            <li>• 용인 고기리·수지·보정동 (15~35분)</li>
            <li>• 의왕·과천 백운호수 (20~40분)</li>
            <li>• 하남 미사 & 팔당 한강변 (30~45분)</li>
            <li>• 수원 광교호수공원 (20~35분)</li>
          </ul>
        </div>

        {/* Col 3: Practical Drive Tips */}
        <div className="space-y-2 text-xs">
          <h4 className="text-[#4ECDC4] font-black text-sm mb-3">드라이브 꿀팁</h4>
          <ul className="space-y-2 text-stone-300 font-medium">
            <li>• 고기리 방면: 주말 오전 11시 전 진입 추천</li>
            <li>• 백운호수: 해질녘 노을 타임 뷰 최고</li>
            <li>• 남한산성: 산성터널 순환로 드라이브 명소</li>
            <li>• 팔당 한강변: 심야 02시까지 운영 카페 다수</li>
          </ul>
        </div>
      </div>

      {/* Business & Operator Info Bar */}
      <div className="max-w-7xl mx-auto pt-6 pb-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-stone-300">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#FF6B6B] flex-shrink-0" />
          <span>
            <strong className="text-white font-bold">주소:</strong> 경기도 광주시 고불로87
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FFD93D]" />
          <span>
            <strong className="text-white font-bold">대표자 / 운영:</strong> 김인숙
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4ECDC4]" />
          <span>
            <strong className="text-white font-bold">문의:</strong> kis6478@gmail.com
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400 font-medium">
        <p>© 2026 성남 1시간 카페 가이드 (대표: 김인숙 · 경기도 광주시 고불로87). All rights reserved.</p>
        <p className="flex items-center gap-1.5 text-stone-300">
          Designed with <Heart className="w-4 h-4 text-[#FF6B6B] fill-[#FF6B6B]" /> for Seongnam Coffee Lovers
        </p>
      </div>
    </footer>
  );
};
