import React, { useState, useEffect, useMemo } from 'react';
import { CAFES_DATA } from './data/cafes';
import { Cafe, OriginLocation, FilterState } from './types';
import { Header } from './components/Header';
import { OriginSelector } from './components/OriginSelector';
import { FilterBar } from './components/FilterBar';
import { CafeCard } from './components/CafeCard';
import { CafeDetailModal } from './components/CafeDetailModal';
import { RadialMapGuide } from './components/RadialMapGuide';
import { DriveCourseSection } from './components/DriveCourseSection';
import { RandomCafePicker } from './components/RandomCafePicker';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { Footer } from './components/Footer';
import { Sparkles, MapPin, Compass, Car, Coffee, HelpCircle, Play, ExternalLink, Video } from 'lucide-react';

const INITIAL_FILTER: FilterState = {
  searchQuery: '',
  origin: '판교역',
  selectedCategory: 'ALL',
  selectedRegion: 'ALL',
  maxCarTime: 60,
  transportMode: 'car',
  onlyPetFriendly: false,
  onlyFreeParking: false,
  onlyBakery: false,
  onlyTerrace: false,
  onlyBrunch: false,
  sortBy: 'time',
};

export default function App() {
  const [origin, setOrigin] = useState<OriginLocation>(() => {
    const saved = localStorage.getItem('seongnam_cafe_origin');
    return (saved as OriginLocation) || '판교역';
  });

  const [transportMode, setTransportMode] = useState<'car' | 'transit'>('car');
  const [filter, setFilter] = useState<FilterState>({ ...INITIAL_FILTER, origin });
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('seongnam_cafe_favorites');
      return saved ? JSON.parse(saved) : ['moani', 'smeltz', 'cafe-ryu'];
    } catch {
      return ['moani', 'smeltz', 'cafe-ryu'];
    }
  });

  const [activeSection, setActiveSection] = useState<'all' | 'courses' | 'radial-map'>('all');
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isRandomPickerOpen, setIsRandomPickerOpen] = useState(false);

  // Sync origin changes
  const handleOriginChange = (newOrigin: OriginLocation) => {
    setOrigin(newOrigin);
    setFilter((prev) => ({ ...prev, origin: newOrigin }));
    localStorage.setItem('seongnam_cafe_origin', newOrigin);
  };

  // Sync favorites
  const handleToggleFavorite = (cafeId: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(cafeId)
        ? prev.filter((id) => id !== cafeId)
        : [...prev, cafeId];
      localStorage.setItem('seongnam_cafe_favorites', JSON.stringify(updated));
      return updated;
    });
  };

  const handleClearAllFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('seongnam_cafe_favorites');
  };

  const handleFilterChange = (newFilter: Partial<FilterState>) => {
    setFilter((prev) => ({ ...prev, ...newFilter }));
  };

  const handleResetFilters = () => {
    setFilter({ ...INITIAL_FILTER, origin });
  };

  // Filter and sort logic
  const filteredCafes = useMemo(() => {
    return CAFES_DATA.filter((cafe) => {
      // 1. Search Query
      if (filter.searchQuery.trim() !== '') {
        const query = filter.searchQuery.toLowerCase().trim();
        const matchesName = cafe.name.toLowerCase().includes(query);
        const matchesLocation = cafe.shortLocation.toLowerCase().includes(query) || cafe.address.toLowerCase().includes(query);
        const matchesTagline = cafe.tagline.toLowerCase().includes(query);
        const matchesMenu = cafe.signatureMenus.some((m) => m.name.toLowerCase().includes(query));
        const matchesBadges = cafe.badges.some((b) => b.toLowerCase().includes(query));

        if (!matchesName && !matchesLocation && !matchesTagline && !matchesMenu && !matchesBadges) {
          return false;
        }
      }

      // 2. Category
      if (filter.selectedCategory !== 'ALL' && cafe.category !== filter.selectedCategory) {
        return false;
      }

      // 3. Region
      if (filter.selectedRegion !== 'ALL' && cafe.region !== filter.selectedRegion) {
        return false;
      }

      // 4. Time limit based on current origin
      const travel = cafe.distanceFromOrigins[origin] || cafe.distanceFromOrigins['판교역'];
      const time = transportMode === 'car' ? travel.carMin : travel.transitMin;
      if (time > filter.maxCarTime) {
        return false;
      }

      // 5. Convenience Booleans
      if (filter.onlyFreeParking && !cafe.hasFreeParking) return false;
      if (filter.onlyPetFriendly && !cafe.petFriendly) return false;
      if (filter.onlyBakery && !cafe.hasBakery) return false;
      if (filter.onlyTerrace && !cafe.hasTerrace) return false;
      if (filter.onlyBrunch && !cafe.hasBrunch) return false;

      return true;
    }).sort((a, b) => {
      const travelA = a.distanceFromOrigins[origin] || a.distanceFromOrigins['판교역'];
      const travelB = b.distanceFromOrigins[origin] || b.distanceFromOrigins['판교역'];

      if (filter.sortBy === 'time') {
        const timeA = transportMode === 'car' ? travelA.carMin : travelA.transitMin;
        const timeB = transportMode === 'car' ? travelB.carMin : travelB.transitMin;
        return timeA - timeB;
      }
      if (filter.sortBy === 'distance') {
        return travelA.distanceKm - travelB.distanceKm;
      }
      if (filter.sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (filter.sortBy === 'reviews') {
        return b.reviewCount - a.reviewCount;
      }
      return 0;
    });
  }, [filter, origin, transportMode]);

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#2D2D2D] flex flex-col selection:bg-[#FFD93D] selection:text-[#1A1A1A] font-sans">
      {/* Header Bar */}
      <Header
        currentOrigin={origin}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        favoritesCount={favorites.length}
        onOpenRandomPicker={() => setIsRandomPickerOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Hero Intro Section with Vibrant Neo-retro theme */}
      <div className="px-4 sm:px-6 lg:px-8 pt-6 pb-2 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Main Big Pick Card */}
          <div className="lg:col-span-8 bg-[#FF6B6B] rounded-[32px] sm:rounded-[38px] p-6 sm:p-10 text-white relative overflow-hidden shadow-[8px_8px_0px_0px_#1A1A1A] border-3 border-[#1A1A1A] flex flex-col justify-between">
            {/* Background Decorative Shapes */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#FFD93D] rounded-tl-full opacity-25 -mr-8 -mb-8 pointer-events-none" />
            <div className="absolute right-8 top-8 w-44 h-48 bg-white/10 rounded-[28px] border-2 border-white/20 hidden sm:flex items-center justify-center italic text-3xl font-serif font-black pointer-events-none text-white/30">
              Cafe-Log
            </div>

            <div className="relative z-10 space-y-4 max-w-xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#FF6B6B] font-black text-xs uppercase border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] break-keep">
                  <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>성남 출발 1시간 근교 카페 가이드</span>
                </div>

                <a
                  href="https://www.youtube.com/shorts/oDXHuxpo724"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1A1A] hover:bg-[#333] text-[#FFD93D] hover:text-white font-black text-xs border-2 border-white shadow-[2px_2px_0px_0px_#1A1A1A] transition-all hover:scale-105 active:scale-95 group break-keep"
                >
                  <Play className="w-3 h-3 fill-[#FFD93D] group-hover:fill-white text-[#FFD93D] group-hover:text-white flex-shrink-0" />
                  <span>쇼츠 영상</span>
                  <ExternalLink className="w-3 h-3 text-white/70" />
                </a>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight sm:leading-tight tracking-tight text-white break-keep">
                성남에서 1시간이면 충분한,<br className="hidden sm:inline" />{' '}
                <span className="text-[#FFD93D] underline decoration-4 decoration-[#1A1A1A] underline-offset-4">
                  사계절 감성 카페 & 드라이브
                </span>
              </h2>

              <p className="text-white/95 text-xs sm:text-sm md:text-base font-medium leading-relaxed break-keep">
                남한산성 숲속 한옥부터 경기 광주 신현동 통창 뷰, 용인 고기리 계곡 테라스, 의왕 백운호수 온실 가든, 하남 팔당 한강뷰까지{' '}
                <strong className="text-white underline decoration-wavy decoration-[#FFD93D] underline-offset-2">{origin}</strong> 출발 기준 실측 소요시간으로 정밀 큐레이션합니다.
              </p>

              {/* YouTube Shorts Highlight Callout Box */}
              <div className="pt-1">
                <a
                  href="https://www.youtube.com/shorts/oDXHuxpo724"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#FFF9F0] hover:bg-white text-[#1A1A1A] px-4 py-2.5 rounded-2xl border-2 border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] transition-all hover:translate-y-[-2px] active:translate-y-0 group break-keep"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#FF0000] text-white flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#1A1A1A] border border-[#1A1A1A] flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5 font-black text-xs sm:text-sm text-[#1A1A1A]">
                      <span>🎬 1분 숏폼으로 만나는 카페 투어 미리보기</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#666] group-hover:text-[#FF6B6B]" />
                    </div>
                    <p className="text-[11px] text-[#555] font-medium">유튜브 쇼츠(YouTube Shorts)에서 생생한 현장 영상 감상하기</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Hero Stat Badges */}
            <div className="relative z-10 flex flex-wrap items-center gap-3 pt-6 sm:pt-8">
              <div className="bg-[#1A1A1A] text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl flex flex-col items-center justify-center border-2 border-white/30 shadow-[3px_3px_0px_0px_#1A1A1A]">
                <span className="text-[10px] text-stone-300 font-bold">엄선된 명소</span>
                <span className="font-black text-lg sm:text-xl text-[#FFD93D]">14+ PLACE</span>
              </div>
              <div className="bg-[#1A1A1A] text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl flex flex-col items-center justify-center border-2 border-white/30 shadow-[3px_3px_0px_0px_#1A1A1A]">
                <span className="text-[10px] text-stone-300 font-bold">평균 소요시간</span>
                <span className="font-black text-lg sm:text-xl text-[#4ECDC4]">10~45분</span>
              </div>
              <div className="bg-[#1A1A1A] text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl flex flex-col items-center justify-center border-2 border-white/30 shadow-[3px_3px_0px_0px_#1A1A1A]">
                <span className="text-[10px] text-stone-300 font-bold">거리 정확도</span>
                <span className="font-black text-lg sm:text-xl text-[#FF6B6B]">100% 실측</span>
              </div>
            </div>
          </div>

          {/* Right Dual Quick Highlight Cards */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-5">
            {/* Quick Card 1: Teal */}
            <div
              className="flex-1 bg-[#4ECDC4] rounded-[28px] p-5 sm:p-6 text-white shadow-[6px_6px_0px_0px_#1A1A1A] border-3 border-[#1A1A1A] flex flex-col justify-between hover:translate-y-[-2px] transition-all cursor-pointer"
              onClick={() => {
                const gogiri = CAFES_DATA.find((c) => c.id === 'moan-gogiri');
                if (gogiri) setSelectedCafe(gogiri);
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1A1A1A] text-[#4ECDC4] text-[11px] font-black">
                    계곡 물멍 PICK
                  </span>
                  <span className="text-xs font-black bg-white/30 px-2 py-0.5 rounded-lg">
                    용인 고기리
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black mb-1">고기리 계곡 카페 모안</h3>
                <p className="text-xs text-white/90 font-medium">졸졸 흐르는 계곡물 소리와 함께하는 힐링</p>
              </div>

              <div className="flex justify-between items-end pt-4">
                <span className="bg-[#1A1A1A] text-white px-3 py-1 rounded-xl text-xs font-black">
                  {origin}에서 {CAFES_DATA.find((c) => c.id === 'moan-gogiri')?.distanceFromOrigins[origin]?.carMin || 20}분
                </span>
                <div className="w-8 h-8 bg-white text-[#4ECDC4] rounded-full flex items-center justify-center font-black text-base shadow-[2px_2px_0px_0px_#1A1A1A] border border-[#1A1A1A]">
                  →
                </div>
              </div>
            </div>

            {/* Quick Card 2: Yellow */}
            <div
              className="flex-1 bg-[#FFD93D] rounded-[28px] p-5 sm:p-6 text-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] border-3 border-[#1A1A1A] flex flex-col justify-between hover:translate-y-[-2px] transition-all cursor-pointer"
              onClick={() => {
                const nella = CAFES_DATA.find((c) => c.id === 'nella-foresta');
                if (nella) setSelectedCafe(nella);
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1A1A1A] text-[#FFD93D] text-[11px] font-black">
                    온실 가든 PICK
                  </span>
                  <span className="text-xs font-black bg-black/10 px-2 py-0.5 rounded-lg">
                    의왕 백운호수
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black mb-1">백운호수 넬라포레스타</h3>
                <p className="text-xs text-[#2D2D2D]/80 font-medium">사계절 초록 온실과 잔디마당 산책 코스</p>
              </div>

              <div className="flex justify-between items-end pt-4">
                <span className="bg-[#1A1A1A] text-[#FFD93D] px-3 py-1 rounded-xl text-xs font-black">
                  {origin}에서 {CAFES_DATA.find((c) => c.id === 'nella-foresta')?.distanceFromOrigins[origin]?.carMin || 25}분
                </span>
                <div className="w-8 h-8 bg-[#1A1A1A] text-[#FFD93D] rounded-full flex items-center justify-center font-black text-base shadow-[2px_2px_0px_0px_#1A1A1A]">
                  →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Departure Origin Selector */}
        <OriginSelector
          currentOrigin={origin}
          onSelectOrigin={handleOriginChange}
          transportMode={transportMode}
          onToggleTransportMode={setTransportMode}
        />

        {/* Section: 1-Hour Radial Distance Radar Map */}
        {activeSection === 'radial-map' && (
          <RadialMapGuide
            cafes={CAFES_DATA}
            origin={origin}
            onSelectCafe={(cafe) => setSelectedCafe(cafe)}
          />
        )}

        {/* Section: 1-Day Weekend Drive Courses */}
        {activeSection === 'courses' && (
          <DriveCourseSection
            onSelectCafeById={(cafeId) => {
              const found = CAFES_DATA.find((c) => c.id === cafeId);
              if (found) setSelectedCafe(found);
            }}
          />
        )}

        {/* Section: All Cafes Explorer */}
        {activeSection === 'all' && (
          <>
            {/* Filter Bar */}
            <FilterBar
              filter={filter}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
              totalCount={filteredCafes.length}
            />

            {/* Cafe Cards Grid */}
            {filteredCafes.length === 0 ? (
              <div className="bg-white rounded-3xl border-3 border-[#1A1A1A] p-12 text-center space-y-4 my-8 shadow-[6px_6px_0px_0px_#1A1A1A]">
                <div className="w-16 h-16 rounded-2xl bg-[#FFF9F0] border-2 border-[#1A1A1A] text-[#FF6B6B] flex items-center justify-center mx-auto shadow-[3px_3px_0px_0px_#1A1A1A]">
                  <Coffee className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-[#1A1A1A]">
                  선택하신 조건에 맞는 카페가 없습니다
                </h3>
                <p className="text-xs sm:text-sm text-[#666] max-w-md mx-auto font-medium">
                  필터 조건을 완화하거나 소요 시간 슬라이더를 늘려보세요.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-full bg-[#FF6B6B] hover:bg-[#fa5252] text-white text-xs font-black transition-all shadow-[3px_3px_0px_0px_#1A1A1A] border-2 border-[#1A1A1A] hover:translate-y-[-1px] active:translate-y-0 active:shadow-none"
                >
                  필터 조건 초기화
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-black text-lg sm:text-xl text-[#1A1A1A]">
                  <span className="w-2.5 h-7 bg-[#FF6B6B] rounded-full inline-block"></span>
                  <span>성남 1시간 감성 카페 리스트</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#4ECDC4] text-white border border-[#1A1A1A] font-bold">
                    {filteredCafes.length}곳
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCafes.map((cafe) => (
                    <CafeCard
                      key={cafe.id}
                      cafe={cafe}
                      origin={origin}
                      transportMode={transportMode}
                      isFavorite={favorites.includes(cafe.id)}
                      onToggleFavorite={handleToggleFavorite}
                      onSelectCafe={(c) => setSelectedCafe(c)}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* Modals & Drawers */}
      <CafeDetailModal
        cafe={selectedCafe}
        origin={origin}
        isFavorite={selectedCafe ? favorites.includes(selectedCafe.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onClose={() => setSelectedCafe(null)}
      />

      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        allCafes={CAFES_DATA}
        origin={origin}
        onRemoveFavorite={handleToggleFavorite}
        onSelectCafe={(c) => setSelectedCafe(c)}
        onClearAll={handleClearAllFavorites}
      />

      <RandomCafePicker
        cafes={CAFES_DATA}
        origin={origin}
        isOpen={isRandomPickerOpen}
        onClose={() => setIsRandomPickerOpen(false)}
        onSelectCafe={(c) => setSelectedCafe(c)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
