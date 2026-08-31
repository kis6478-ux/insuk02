import React from 'react';
import { X, Bookmark, Trash2, ArrowRight, Car, Share2, Coffee } from 'lucide-react';
import { Cafe, OriginLocation } from '../types';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  allCafes: Cafe[];
  origin: OriginLocation;
  onRemoveFavorite: (id: string) => void;
  onSelectCafe: (cafe: Cafe) => void;
  onClearAll: () => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  allCafes,
  origin,
  onRemoveFavorite,
  onSelectCafe,
  onClearAll,
}) => {
  if (!isOpen) return null;

  const favoriteCafes = allCafes.filter((c) => favorites.includes(c.id));

  const handleShareFavorites = () => {
    if (favoriteCafes.length === 0) return;
    const text = `[성남 1시간 카페 내 찜 목록]\n` + favoriteCafes.map((c) => `- ${c.name} (${c.shortLocation}, ${c.distanceFromOrigins[origin]?.carMin || 20}분)`).join('\n');
    if (navigator.share) {
      navigator.share({ title: '성남 1시간 카페 찜 목록', text });
    } else {
      navigator.clipboard.writeText(text);
      alert('찜 목록이 클립보드에 복사되었습니다!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-150">
      <div
        className="w-full max-w-md bg-[#FFF9F0] h-full shadow-2xl flex flex-col border-l-4 border-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b-3 border-[#1A1A1A] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#FF6B6B] border border-[#1A1A1A] text-white flex items-center justify-center shadow-[2px_2px_0px_0px_#1A1A1A]">
              <Bookmark className="w-4 h-4 fill-white" />
            </div>
            <h3 className="text-base sm:text-lg font-black text-[#1A1A1A]">
              내가 찜한 카페 ({favoriteCafes.length})
            </h3>
          </div>

          <div className="flex items-center gap-1.5">
            {favoriteCafes.length > 0 && (
              <button
                onClick={handleShareFavorites}
                className="p-2 text-[#1A1A1A] hover:bg-[#FFD93D] rounded-xl border border-[#1A1A1A] transition-all shadow-[1.5px_1.5px_0px_0px_#1A1A1A]"
                title="찜 목록 공유하기"
              >
                <Share2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-[#1A1A1A] hover:bg-[#FF6B6B] hover:text-white rounded-xl border border-[#1A1A1A] transition-all shadow-[1.5px_1.5px_0px_0px_#1A1A1A]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
          {favoriteCafes.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3 text-stone-400">
              <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#1A1A1A] flex items-center justify-center text-[#FF6B6B] shadow-[3px_3px_0px_0px_#1A1A1A]">
                <Coffee className="w-7 h-7" />
              </div>
              <p className="text-base font-black text-[#1A1A1A]">찜한 카페가 없습니다</p>
              <p className="text-xs text-[#666] font-medium max-w-xs leading-relaxed">
                마음에 드는 카페의 북마크 아이콘을 눌러 저장해두고 주말 드라이브 계획을 세워보세요!
              </p>
            </div>
          ) : (
            favoriteCafes.map((cafe) => {
              const travel = cafe.distanceFromOrigins[origin] || cafe.distanceFromOrigins['판교역'];
              const savedMemo = localStorage.getItem(`cafe_memo_${cafe.id}`);

              return (
                <div
                  key={cafe.id}
                  className="bg-white hover:bg-[#FFF9F0] border-2 border-[#1A1A1A] rounded-2xl p-3.5 transition-all flex gap-3.5 cursor-pointer group shadow-[3px_3px_0px_0px_#1A1A1A] hover:translate-y-[-1px] active:translate-y-0 active:shadow-none"
                  onClick={() => {
                    onClose();
                    onSelectCafe(cafe);
                  }}
                >
                  <img
                    src={cafe.images[0]}
                    alt={cafe.name}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0 border border-[#1A1A1A]"
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-sm font-black text-[#1A1A1A] truncate group-hover:text-[#FF6B6B]">
                          {cafe.name}
                        </h4>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemoveFavorite(cafe.id);
                          }}
                          className="text-[#888] hover:text-[#FF6B6B] p-1 rounded-md transition-colors"
                          title="삭제"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#666] font-medium truncate">{cafe.shortLocation}</p>
                    </div>

                    {savedMemo && (
                      <p className="text-[10px] text-[#1A1A1A] bg-[#FFD93D]/30 px-2 py-0.5 rounded-md border border-[#FFD93D] truncate mt-1 font-semibold">
                        📝 {savedMemo}
                      </p>
                    )}

                    <div className="flex items-center justify-between text-xs pt-1.5 mt-1 border-t border-[#1A1A1A]/10">
                      <span className="text-[11px] font-black text-[#FF6B6B] flex items-center gap-1">
                        <Car className="w-3.5 h-3.5 text-[#FF6B6B]" />
                        {origin}에서 {travel.carMin}분
                      </span>

                      <span className="text-[11px] font-black text-[#1A1A1A] flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                        보기 <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {favoriteCafes.length > 0 && (
          <div className="p-4 border-t-3 border-[#1A1A1A] bg-white flex items-center justify-between gap-2.5">
            <button
              onClick={onClearAll}
              className="text-xs text-[#666] hover:text-[#FF6B6B] font-black py-2.5 px-3.5 rounded-xl border border-[#1A1A1A]/30 hover:border-[#FF6B6B] transition-all"
            >
              전체 삭제
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#333] text-white font-black text-xs text-center transition-all shadow-[2px_2px_0px_0px_#1A1A1A]"
            >
              닫기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
