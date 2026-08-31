import React from 'react';
import { Car, Bus, Bookmark, Star, MapPin, Sparkles, Navigation, ArrowRight } from 'lucide-react';
import { Cafe, OriginLocation } from '../types';

interface CafeCardProps {
  cafe: Cafe;
  origin: OriginLocation;
  transportMode: 'car' | 'transit';
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelectCafe: (cafe: Cafe) => void;
}

export const CafeCard: React.FC<CafeCardProps> = ({
  cafe,
  origin,
  transportMode,
  isFavorite,
  onToggleFavorite,
  onSelectCafe,
}) => {
  const travel = cafe.distanceFromOrigins[origin] || cafe.distanceFromOrigins['판교역'];
  const displayTime = transportMode === 'car' ? travel.carMin : travel.transitMin;

  return (
    <div
      id={`cafe-card-${cafe.id}`}
      className="group bg-white rounded-3xl border-3 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] hover:shadow-[10px_10px_0px_0px_#1A1A1A] hover:translate-y-[-4px] transition-all duration-200 overflow-hidden flex flex-col cursor-pointer"
      onClick={() => onSelectCafe(cafe)}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 border-b-3 border-[#1A1A1A]">
        <img
          src={cafe.images[0]}
          alt={cafe.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Dynamic Travel Time Pill */}
        <div className="absolute top-3 left-3 z-10">
          <div className="px-3 py-1.5 rounded-full text-xs font-black tracking-tight border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] flex items-center gap-1.5 bg-[#FFD93D] text-[#1A1A1A]">
            {transportMode === 'car' ? (
              <Car className="w-3.5 h-3.5 text-[#1A1A1A]" />
            ) : (
              <Bus className="w-3.5 h-3.5 text-[#1A1A1A]" />
            )}
            <span>
              {origin}에서 <strong>{displayTime}분</strong> ({travel.distanceKm}km)
            </span>
          </div>
        </div>

        {/* Bookmark Button */}
        <button
          id={`bookmark-btn-${cafe.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(cafe.id);
          }}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] transition-all active:scale-90 ${
            isFavorite
              ? 'bg-[#FF6B6B] text-white'
              : 'bg-white/90 hover:bg-white text-[#1A1A1A]'
          }`}
          aria-label={isFavorite ? '찜 취소' : '찜하기'}
        >
          <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-white text-white' : 'text-[#1A1A1A]'}`} />
        </button>

        {/* Category & Region floating pill on image bottom */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
          <span className="px-3 py-1 rounded-full bg-[#FF6B6B] text-white font-black border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
            {cafe.category}
          </span>
          <span className="flex items-center gap-1 font-bold bg-[#1A1A1A] text-white px-2.5 py-1 rounded-full border border-white/20">
            <MapPin className="w-3 h-3 text-[#FFD93D]" />
            {cafe.shortLocation}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="text-base sm:text-lg font-black text-[#1A1A1A] group-hover:text-[#FF6B6B] transition-colors line-clamp-1">
              {cafe.name}
            </h3>
            <div className="flex items-center gap-1 text-xs font-black text-[#1A1A1A] bg-[#FFD93D] px-2 py-0.5 rounded-lg border border-[#1A1A1A] flex-shrink-0 shadow-[1px_1px_0px_0px_#1A1A1A]">
              <Star className="w-3.5 h-3.5 fill-[#1A1A1A] text-[#1A1A1A]" />
              <span>{cafe.rating}</span>
              <span className="text-[10px] text-[#555] font-bold">({cafe.reviewCount})</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xs text-[#555] line-clamp-2 mb-3 leading-relaxed font-medium">
            {cafe.tagline}
          </p>

          {/* Badges / Highlights */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {cafe.badges.slice(0, 3).map((b, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2.5 py-0.5 rounded-lg bg-[#FFF9F0] text-[#1A1A1A] border border-[#1A1A1A]/30 font-bold"
              >
                #{b}
              </span>
            ))}
          </div>

          {/* Signature Menu Highlight */}
          <div className="bg-[#FFF9F0] rounded-2xl p-3 border-2 border-[#1A1A1A]/20 mb-3 text-xs">
            <div className="flex items-center justify-between font-black text-[#1A1A1A] mb-1">
              <span className="flex items-center gap-1 text-[#FF6B6B] text-[11px] font-black">
                <Sparkles className="w-3 h-3 text-[#FF6B6B]" />
                대표 시그니처
              </span>
              <span className="text-[#666] text-[11px] font-bold">{cafe.signatureMenus[0]?.price}</span>
            </div>
            <p className="text-[#1A1A1A] font-bold truncate">
              {cafe.signatureMenus[0]?.name}
            </p>
          </div>
        </div>

        {/* Footer: Parking tip & View details button */}
        <div className="pt-3 border-t-2 border-[#1A1A1A]/10 flex items-center justify-between text-xs">
          <span className="text-[11px] font-bold text-[#555] truncate max-w-[150px]">
            {cafe.hasFreeParking ? '🚗 무료주차' : '🅿️ 주차지원'}
            {cafe.petFriendly && ' · 🐶반려견'}
          </span>

          <span className="bg-[#4ECDC4] text-white font-black px-3 py-1.5 rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] group-hover:translate-x-0.5 transition-all flex items-center gap-1 text-xs">
            상세보기
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
