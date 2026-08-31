import React from 'react';
import { Coffee, Compass, Bookmark, Sparkles, MapPin, Navigation } from 'lucide-react';
import { OriginLocation } from '../types';

interface HeaderProps {
  currentOrigin: OriginLocation;
  onOpenFavorites: () => void;
  favoritesCount: number;
  onOpenRandomPicker: () => void;
  activeSection: 'all' | 'courses' | 'radial-map';
  setActiveSection: (sec: 'all' | 'courses' | 'radial-map') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentOrigin,
  onOpenFavorites,
  favoritesCount,
  onOpenRandomPicker,
  activeSection,
  setActiveSection,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b-4 border-[#FFD93D] text-[#2D2D2D] transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Subtitle */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveSection('all')}>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FF6B6B] border-2 border-[#1A1A1A] flex items-center justify-center shadow-[3px_3px_0px_0px_#1A1A1A] text-white font-black">
              <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg sm:text-2xl font-black tracking-tight text-[#1A1A1A] flex items-center gap-1.5">
                  성남근교 <span className="text-[#FF6B6B]">CAFE-LOG</span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#FFD93D] text-[#1A1A1A] font-extrabold border-2 border-[#1A1A1A] shadow-[1.5px_1.5px_0px_0px_#1A1A1A] hidden sm:inline-block">
                    1시간 힐링
                  </span>
                </h1>
              </div>
              <p className="text-xs text-[#666] flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF6B6B]" />
                <span className="font-bold text-[#1A1A1A] bg-[#FFF9F0] px-1.5 py-0.2 rounded border border-[#1A1A1A]/30">{currentOrigin}</span> 출발 기준 실시간 거리 계산
              </p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1.5 bg-[#FFF9F0] p-1.5 rounded-2xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
            <button
              id="nav-all-cafes-btn"
              onClick={() => setActiveSection('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs lg:text-sm font-black transition-all flex items-center gap-1.5 ${
                activeSection === 'all'
                  ? 'bg-[#FF6B6B] text-white border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]'
                  : 'text-[#2D2D2D] hover:text-[#FF6B6B] hover:bg-white/80'
              }`}
            >
              <Coffee className="w-4 h-4" />
              카페 큐레이션
            </button>
            <button
              id="nav-radial-map-btn"
              onClick={() => setActiveSection('radial-map')}
              className={`px-3.5 py-1.5 rounded-xl text-xs lg:text-sm font-black transition-all flex items-center gap-1.5 ${
                activeSection === 'radial-map'
                  ? 'bg-[#4ECDC4] text-white border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]'
                  : 'text-[#2D2D2D] hover:text-[#4ECDC4] hover:bg-white/80'
              }`}
            >
              <Navigation className="w-4 h-4" />
              1시간 방사형 지도
            </button>
            <button
              id="nav-courses-btn"
              onClick={() => setActiveSection('courses')}
              className={`px-3.5 py-1.5 rounded-xl text-xs lg:text-sm font-black transition-all flex items-center gap-1.5 ${
                activeSection === 'courses'
                  ? 'bg-[#FFD93D] text-[#1A1A1A] border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]'
                  : 'text-[#2D2D2D] hover:text-[#1A1A1A] hover:bg-white/80'
              }`}
            >
              <Compass className="w-4 h-4" />
              당일 드라이브 코스
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Random Pick Button */}
            <button
              id="btn-random-pick"
              onClick={onOpenRandomPicker}
              className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#4ECDC4] hover:bg-[#43b8b0] text-white border-2 border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] hover:translate-y-[-2px] active:translate-y-0 active:shadow-none text-xs sm:text-sm font-black transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-[#FFD93D]" />
              <span className="hidden sm:inline">오늘 어디 갈까?</span>
              <span className="sm:hidden">랜덤</span>
            </button>

            {/* Favorites Drawer Toggle */}
            <button
              id="btn-favorites-toggle"
              onClick={onOpenFavorites}
              className="relative px-3 py-2 sm:px-3.5 sm:py-2 rounded-full bg-[#FFD93D] hover:bg-[#ffd324] text-[#1A1A1A] border-2 border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] hover:translate-y-[-2px] active:translate-y-0 active:shadow-none transition-all flex items-center gap-1.5 font-bold"
              aria-label="찜한 카페 목록"
            >
              <Bookmark className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${favoritesCount > 0 ? 'text-[#FF6B6B] fill-[#FF6B6B]' : 'text-[#1A1A1A]'}`} />
              <span className="text-xs font-black hidden sm:inline">찜 목록</span>
              {favoritesCount > 0 && (
                <span className="flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-[#FF6B6B] text-white font-black text-xs border border-[#1A1A1A] shadow">
                  {favoritesCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="md:hidden flex items-center justify-around py-2.5 border-t-2 border-[#FFD93D] text-xs gap-1.5">
          <button
            onClick={() => setActiveSection('all')}
            className={`flex-1 py-1.5 text-center font-black rounded-xl border-2 transition-all ${
              activeSection === 'all'
                ? 'bg-[#FF6B6B] text-white border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]'
                : 'bg-white text-[#2D2D2D] border-transparent'
            }`}
          >
            카페 큐레이션
          </button>
          <button
            onClick={() => setActiveSection('radial-map')}
            className={`flex-1 py-1.5 text-center font-black rounded-xl border-2 transition-all ${
              activeSection === 'radial-map'
                ? 'bg-[#4ECDC4] text-white border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]'
                : 'bg-white text-[#2D2D2D] border-transparent'
            }`}
          >
            1시간 거리 지도
          </button>
          <button
            onClick={() => setActiveSection('courses')}
            className={`flex-1 py-1.5 text-center font-black rounded-xl border-2 transition-all ${
              activeSection === 'courses'
                ? 'bg-[#FFD93D] text-[#1A1A1A] border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]'
                : 'bg-white text-[#2D2D2D] border-transparent'
            }`}
          >
            드라이브 코스
          </button>
        </div>
      </div>
    </header>
  );
};
