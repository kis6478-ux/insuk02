import React from 'react';
import { Search, SlidersHorizontal, RotateCcw, Clock, Sparkles, X } from 'lucide-react';
import { FilterState } from '../types';

interface FilterBarProps {
  filter: FilterState;
  onFilterChange: (newFilter: Partial<FilterState>) => void;
  onResetFilters: () => void;
  totalCount: number;
}

const CATEGORIES = [
  { id: 'ALL', label: '전체 테마' },
  { id: '숲/마운틴뷰', label: '🌲 숲·마운틴뷰' },
  { id: '호수/리버뷰', label: '🌊 호수·리버뷰' },
  { id: '계곡/테라스', label: '🏞️ 계곡·물멍' },
  { id: '대형/베이커리', label: '🥐 대형 베이커리' },
  { id: '한옥/전통', label: '🏮 감성 한옥' },
  { id: '온실/식물원', label: '🌿 온실 식물원' },
  { id: '도심/감성로스터리', label: '☕ 스페셜티 로스터리' },
];

const REGIONS = [
  { id: 'ALL', label: '전체 지역' },
  { id: '성남 판교·분당·남한산성', label: '성남/분당/판교' },
  { id: '경기 광주 (신현/오포/퇴촌)', label: '경기 광주 (신현/퇴촌)' },
  { id: '용인 (고기리/수지/보정)', label: '용인 (고기리/수지)' },
  { id: '의왕·과천 (백운호수)', label: '의왕/백운호수' },
  { id: '하남·팔당 (한강뷰)', label: '하남/팔당 (한강)' },
  { id: '수원 (광교호수)', label: '수원/광교호수' },
  { id: '서울 (양재천/강남)', label: '서울 (양재천/강남)' },
];

const TIME_PRESETS = [
  { val: 60, label: '전체 (1시간 이내)' },
  { val: 20, label: '⚡ 20분 컷 초근접' },
  { val: 30, label: '🚗 30분 드라이브' },
  { val: 45, label: '🌿 45분 근교 힐링' },
];

export const FilterBar: React.FC<FilterBarProps> = ({
  filter,
  onFilterChange,
  onResetFilters,
  totalCount,
}) => {
  const isAnyFilterActive =
    filter.searchQuery !== '' ||
    filter.selectedCategory !== 'ALL' ||
    filter.selectedRegion !== 'ALL' ||
    filter.maxCarTime < 60 ||
    filter.onlyFreeParking ||
    filter.onlyPetFriendly ||
    filter.onlyBakery ||
    filter.onlyTerrace ||
    filter.onlyBrunch;

  return (
    <div className="bg-white rounded-3xl border-3 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] p-5 sm:p-6 mb-8 space-y-4">
      {/* Top row: Search input & Sort & Reset */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#1A1A1A] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="cafe-search-input"
            type="text"
            value={filter.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            placeholder="카페 이름, 지역(예: 고기리, 백운호수), 메뉴(앙버터, 카이막)..."
            className="w-full pl-10 pr-9 py-2.5 bg-[#FFF9F0] focus:bg-white border-2 border-[#1A1A1A] focus:border-[#FF6B6B] rounded-2xl text-sm font-semibold text-[#1A1A1A] placeholder-[#888] focus:outline-none transition-all shadow-[2px_2px_0px_0px_#1A1A1A]"
          />
          {filter.searchQuery && (
            <button
              onClick={() => onFilterChange({ searchQuery: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#888] hover:text-[#1A1A1A] rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort & Count */}
        <div className="flex items-center gap-3 justify-between sm:justify-end">
          <div className="text-xs font-black text-[#1A1A1A] bg-[#FFD93D] px-3 py-2 rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
            총 <span className="text-[#FF6B6B]">{totalCount}곳</span>
          </div>

          <div className="flex items-center gap-2">
            <select
              id="sort-by-select"
              value={filter.sortBy}
              onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
              className="bg-[#FFF9F0] border-2 border-[#1A1A1A] text-[#1A1A1A] text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#FF6B6B] font-black cursor-pointer shadow-[2px_2px_0px_0px_#1A1A1A]"
            >
              <option value="time">⏱️ 소요시간 빠른순</option>
              <option value="rating">⭐ 평점 높은순</option>
              <option value="reviews">💬 리뷰 많은순</option>
              <option value="distance">📏 이동거리 가까운순</option>
            </select>

            {isAnyFilterActive && (
              <button
                id="btn-reset-filters"
                onClick={onResetFilters}
                className="p-2.5 text-[#1A1A1A] bg-[#FFF9F0] hover:bg-white rounded-xl text-xs font-black border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] flex items-center gap-1 transition-all active:translate-y-0.5"
                title="필터 초기화"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#FF6B6B]" />
                <span className="hidden sm:inline">초기화</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Time Presets Row */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <div className="text-xs font-black text-[#1A1A1A] flex items-center gap-1 mr-1">
          <Clock className="w-3.5 h-3.5 text-[#FF6B6B]" />
          이동 시간:
        </div>
        {TIME_PRESETS.map((p) => {
          const isSelected = filter.maxCarTime === p.val;
          return (
            <button
              key={p.val}
              id={`time-filter-${p.val}`}
              onClick={() => onFilterChange({ maxCarTime: p.val })}
              className={`px-3.5 py-1.5 rounded-full text-xs transition-all border-2 ${
                isSelected
                  ? 'bg-[#FFD93D] text-[#1A1A1A] border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] font-black'
                  : 'bg-[#FFF9F0] hover:bg-white border-[#1A1A1A]/30 text-[#444] font-bold'
              }`}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isSelected = filter.selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`cat-filter-${cat.id}`}
              onClick={() => onFilterChange({ selectedCategory: cat.id })}
              className={`px-3.5 py-1.5 rounded-2xl text-xs whitespace-nowrap transition-all border-2 ${
                isSelected
                  ? 'bg-[#FF6B6B] border-[#1A1A1A] text-white shadow-[2.5px_2.5px_0px_0px_#1A1A1A] font-black translate-y-[-1px]'
                  : 'bg-white hover:bg-[#FFF9F0] border-[#1A1A1A]/30 hover:border-[#1A1A1A] text-[#2D2D2D] font-bold'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Region Selection Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        <span className="text-[11px] font-black text-[#1A1A1A] whitespace-nowrap mr-1">지역:</span>
        {REGIONS.map((reg) => {
          const isSelected = filter.selectedRegion === reg.id;
          return (
            <button
              key={reg.id}
              id={`reg-filter-${reg.id}`}
              onClick={() => onFilterChange({ selectedRegion: reg.id })}
              className={`px-2.5 py-1 rounded-xl text-xs whitespace-nowrap transition-all border-2 ${
                isSelected
                  ? 'bg-[#4ECDC4] border-[#1A1A1A] text-white font-black shadow-[2px_2px_0px_0px_#1A1A1A]'
                  : 'bg-[#FFF9F0] hover:bg-white border-[#1A1A1A]/20 text-[#555] font-semibold'
              }`}
            >
              {reg.label}
            </button>
          );
        })}
      </div>

      {/* Feature Convenience Toggles */}
      <div className="pt-3 border-t-2 border-[#1A1A1A]/10 flex flex-wrap items-center gap-2 sm:gap-2.5">
        <span className="text-[11px] font-black text-[#1A1A1A] flex items-center gap-1">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF6B6B]" />
          편의 조건:
        </span>

        <button
          onClick={() => onFilterChange({ onlyFreeParking: !filter.onlyFreeParking })}
          className={`px-3 py-1 rounded-xl text-xs border-2 transition-all ${
            filter.onlyFreeParking
              ? 'bg-[#FF6B6B] text-white border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] font-black'
              : 'bg-white text-[#555] border-[#1A1A1A]/30 hover:border-[#1A1A1A] font-bold'
          }`}
        >
          🚗 무료 전용 주차
        </button>

        <button
          onClick={() => onFilterChange({ onlyPetFriendly: !filter.onlyPetFriendly })}
          className={`px-3 py-1 rounded-xl text-xs border-2 transition-all ${
            filter.onlyPetFriendly
              ? 'bg-[#FF6B6B] text-white border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] font-black'
              : 'bg-white text-[#555] border-[#1A1A1A]/30 hover:border-[#1A1A1A] font-bold'
          }`}
        >
          🐶 반려동물 동반 가능
        </button>

        <button
          onClick={() => onFilterChange({ onlyBakery: !filter.onlyBakery })}
          className={`px-3 py-1 rounded-xl text-xs border-2 transition-all ${
            filter.onlyBakery
              ? 'bg-[#FF6B6B] text-white border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] font-black'
              : 'bg-white text-[#555] border-[#1A1A1A]/30 hover:border-[#1A1A1A] font-bold'
          }`}
        >
          🥐 베이커리 빵집
        </button>

        <button
          onClick={() => onFilterChange({ onlyTerrace: !filter.onlyTerrace })}
          className={`px-3 py-1 rounded-xl text-xs border-2 transition-all ${
            filter.onlyTerrace
              ? 'bg-[#FF6B6B] text-white border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] font-black'
              : 'bg-white text-[#555] border-[#1A1A1A]/30 hover:border-[#1A1A1A] font-bold'
          }`}
        >
          🏞️ 야외 테라스/루프탑
        </button>

        <button
          onClick={() => onFilterChange({ onlyBrunch: !filter.onlyBrunch })}
          className={`px-3 py-1 rounded-xl text-xs border-2 transition-all ${
            filter.onlyBrunch
              ? 'bg-[#FF6B6B] text-white border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] font-black'
              : 'bg-white text-[#555] border-[#1A1A1A]/30 hover:border-[#1A1A1A] font-bold'
          }`}
        >
          🍳 브런치 운영
        </button>
      </div>
    </div>
  );
};
