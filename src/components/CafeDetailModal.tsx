import React, { useState, useEffect } from 'react';
import {
  X,
  MapPin,
  Car,
  Bus,
  Clock,
  Star,
  Bookmark,
  Share2,
  Copy,
  ExternalLink,
  Sparkles,
  Info,
  CheckCircle2,
  Compass,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { Cafe, OriginLocation, TravelTimeInfo } from '../types';

interface CafeDetailModalProps {
  cafe: Cafe | null;
  origin: OriginLocation;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onClose: () => void;
}

export const CafeDetailModal: React.FC<CafeDetailModalProps> = ({
  cafe,
  origin,
  isFavorite,
  onToggleFavorite,
  onClose,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [memo, setMemo] = useState('');
  const [memoSaved, setMemoSaved] = useState(false);

  useEffect(() => {
    if (!cafe) return;
    setActiveImageIndex(0);
    const savedNotes = localStorage.getItem(`cafe_memo_${cafe.id}`);
    setMemo(savedNotes || '');
  }, [cafe]);

  if (!cafe) return null;

  const currentTravel = cafe.distanceFromOrigins[origin] || cafe.distanceFromOrigins['판교역'];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(cafe.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `[성남 1시간 카페] ${cafe.name}`,
          text: `${cafe.tagline} - ${cafe.name} (${cafe.shortLocation})`,
          url: window.location.href,
        });
      } catch (err) {
        // Share cancelled or not supported
      }
    } else {
      handleCopyAddress();
    }
  };

  const handleSaveMemo = () => {
    localStorage.setItem(`cafe_memo_${cafe.id}`, memo);
    setMemoSaved(true);
    setTimeout(() => setMemoSaved(false), 2000);
  };

  // Build Map search links
  const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(cafe.naverSearchQuery)}`;
  const kakaoMapUrl = `https://map.kakao.com/?q=${encodeURIComponent(cafe.kakaoSearchQuery)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-[#FFF9F0] w-full max-w-4xl rounded-[32px] sm:rounded-[36px] shadow-[8px_8px_0px_0px_#1A1A1A] overflow-hidden flex flex-col max-h-[92vh] border-4 border-[#1A1A1A] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b-3 border-[#1A1A1A] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full bg-[#FF6B6B] text-white font-black text-xs border border-[#1A1A1A] shadow-[1.5px_1.5px_0px_0px_#1A1A1A]">
              {cafe.category}
            </span>
            <span className="text-xs text-[#555] font-black bg-[#FFF9F0] px-2.5 py-1 rounded-lg border border-[#1A1A1A]/30">{cafe.region}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onToggleFavorite(cafe.id)}
              className={`p-2.5 rounded-2xl border-2 border-[#1A1A1A] transition-all shadow-[2px_2px_0px_0px_#1A1A1A] ${
                isFavorite
                  ? 'bg-[#FF6B6B] text-white'
                  : 'bg-white text-[#1A1A1A] hover:bg-[#FFF9F0]'
              }`}
              title="찜하기"
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              className="p-2.5 rounded-2xl bg-white hover:bg-[#FFD93D] text-[#1A1A1A] border-2 border-[#1A1A1A] transition-all shadow-[2px_2px_0px_0px_#1A1A1A]"
              title="공유하기"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-2xl bg-white hover:bg-[#FF6B6B] hover:text-white text-[#1A1A1A] border-2 border-[#1A1A1A] transition-all shadow-[2px_2px_0px_0px_#1A1A1A]"
              title="닫기"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Image Gallery */}
          <div className="space-y-2.5">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-900 border-3 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
              <img
                src={cafe.images[activeImageIndex]}
                alt={cafe.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              {cafe.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === 0 ? cafe.images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-2xl bg-white/90 hover:bg-white text-[#1A1A1A] border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === cafe.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-2xl bg-white/90 hover:bg-white text-[#1A1A1A] border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {cafe.images.length > 1 && (
              <div className="flex gap-2">
                {cafe.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#FF6B6B] shadow-[2px_2px_0px_0px_#1A1A1A] scale-95'
                        : 'border-[#1A1A1A]/30 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Key Specs */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">{cafe.name}</h2>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFD93D] border-2 border-[#1A1A1A] text-[#1A1A1A] font-black text-sm shadow-[2px_2px_0px_0px_#1A1A1A]">
                  <Star className="w-4 h-4 fill-[#1A1A1A] text-[#1A1A1A]" />
                  <span>{cafe.rating}</span>
                  <span className="text-[#333] text-xs font-bold">({cafe.reviewCount}개 리뷰)</span>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] text-xs font-black shadow-[2px_2px_0px_0px_#1A1A1A]">
                  {cafe.priceRange}
                </span>
              </div>
            </div>
            <p className="text-[#444] text-sm sm:text-base font-semibold leading-relaxed">
              {cafe.tagline}
            </p>
          </div>

          {/* Travel Time Comparison across all 4 Seongnam Origins */}
          <div className="bg-[#4ECDC4]/15 rounded-3xl p-4 sm:p-5 border-3 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
            <h3 className="text-sm font-black text-[#1A1A1A] mb-3 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#FF6B6B]" />
              성남 주요 거점별 예상 소요 시간 (실시간)
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {(Object.entries(cafe.distanceFromOrigins) as [OriginLocation, TravelTimeInfo][]).map(([locName, info]) => {
                const isCurrent = locName === origin;
                return (
                  <div
                    key={locName}
                    className={`p-3 rounded-2xl border-2 transition-all ${
                      isCurrent
                        ? 'bg-white border-[#1A1A1A] shadow-[3px_3px_0px_0px_#FF6B6B]'
                        : 'bg-white/90 border-[#1A1A1A]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-black text-[#1A1A1A] flex items-center gap-1">
                        {isCurrent && <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />}
                        {locName}
                      </span>
                      <span className="text-[10px] text-[#666] font-bold">{info.distanceKm}km</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#555] font-semibold flex items-center gap-1">
                          <Car className="w-3 h-3 text-[#FF6B6B]" /> 자차
                        </span>
                        <span className="font-black text-[#FF6B6B]">{info.carMin}분</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#555] font-semibold flex items-center gap-1">
                          <Bus className="w-3 h-3 text-[#4ECDC4]" /> 대중교통
                        </span>
                        <span className="font-black text-[#1A1A1A]">{info.transitMin}분</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Detailed Guide */}
            <div className="mt-3 pt-3 border-t-2 border-[#1A1A1A]/10 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-start gap-1.5 text-[#1A1A1A] font-medium">
                <Car className="w-3.5 h-3.5 text-[#FF6B6B] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>자차 경로:</strong> {cafe.drivingGuide}
                </span>
              </div>
              <div className="flex items-start gap-1.5 text-[#1A1A1A] font-medium">
                <Bus className="w-3.5 h-3.5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>대중교통:</strong> {cafe.transitGuide}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Map Navigation Buttons */}
          <div className="bg-white rounded-3xl p-4 sm:p-5 border-3 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-[#1A1A1A] w-full sm:w-auto">
              <MapPin className="w-4 h-4 text-[#FF6B6B] flex-shrink-0" />
              <span className="font-bold">{cafe.address}</span>
              <button
                onClick={handleCopyAddress}
                className="p-1.5 text-[#1A1A1A] bg-[#FFF9F0] border border-[#1A1A1A] rounded-lg hover:bg-[#FFD93D] transition-all text-[11px] font-black flex items-center gap-1 shadow-[1px_1px_0px_0px_#1A1A1A]"
                title="주소 복사"
              >
                <Copy className="w-3 h-3" />
                {copied ? '복사됨!' : '복사'}
              </button>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={naverMapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-2xl bg-[#03C75A] hover:bg-[#02b350] text-white text-xs font-black flex items-center justify-center gap-1.5 border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] transition-all active:translate-y-0.5"
              >
                네이버 지도 길찾기
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={kakaoMapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-2xl bg-[#FEE500] hover:bg-[#ebd300] text-[#1A1A1A] text-xs font-black flex items-center justify-center gap-1.5 border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] transition-all active:translate-y-0.5"
              >
                카카오맵
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Highlights & Operating Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Highlights & Menus */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-black text-[#1A1A1A] mb-2.5 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#FF6B6B]" />
                  이곳만의 매력 포인트
                </h3>
                <ul className="space-y-2">
                  {cafe.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#333] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B6B] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Signature Menus */}
              <div>
                <h3 className="text-sm font-black text-[#1A1A1A] mb-2.5">
                  시그니처 추천 메뉴
                </h3>
                <div className="space-y-2">
                  {cafe.signatureMenus.map((menu, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-white border-2 border-[#1A1A1A] flex items-center justify-between shadow-[2px_2px_0px_0px_#1A1A1A]"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-black text-xs sm:text-sm text-[#1A1A1A]">
                            {menu.name}
                          </span>
                          {menu.isSignature && (
                            <span className="px-2 py-0.5 rounded-md bg-[#FFD93D] border border-[#1A1A1A] text-[#1A1A1A] text-[10px] font-black">
                              대표
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#666] font-medium mt-0.5">{menu.description}</p>
                      </div>
                      <span className="text-xs sm:text-sm font-black text-[#FF6B6B]">
                        {menu.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Visiting Tips & Facility Badges */}
            <div className="space-y-4">
              {/* Practical Tips Box */}
              <div className="p-4 sm:p-5 rounded-3xl bg-white border-3 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] space-y-2.5 text-xs text-[#333]">
                <h3 className="font-black text-[#1A1A1A] text-sm flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-[#4ECDC4]" />
                  실전 방문 꿀팁
                </h3>
                <div>
                  <span className="font-black text-[#1A1A1A] block mb-0.5">⏰ 영업시간:</span>
                  <span className="text-[#555] font-medium">{cafe.businessHours} (휴무: {cafe.closedDays})</span>
                </div>
                <div>
                  <span className="font-black text-[#1A1A1A] block mb-0.5">🚗 주차 안내:</span>
                  <span className="text-[#555] font-medium">{cafe.parkingInfo}</span>
                </div>
                <div>
                  <span className="font-black text-[#1A1A1A] block mb-0.5">✨ 추천 방문 시간:</span>
                  <span className="text-[#FF6B6B] font-black">{cafe.bestTimeToVisit}</span>
                </div>
                <div>
                  <span className="font-black text-[#1A1A1A] block mb-0.5">💡 혼잡도 피하는 팁:</span>
                  <span className="text-[#555] font-medium">{cafe.crowdTip}</span>
                </div>
              </div>

              {/* Surrounding Hot Spots & Course */}
              <div className="p-4 sm:p-5 rounded-3xl bg-[#FFD93D]/20 border-3 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] text-xs">
                <h3 className="font-black text-[#1A1A1A] text-sm mb-2 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#FF6B6B]" />
                  연계 당일치기 추천 코스
                </h3>
                <p className="text-[#333] leading-relaxed font-semibold mb-3">
                  {cafe.recommendedCourse}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t-2 border-[#1A1A1A]/10">
                  <span className="text-[11px] font-black text-[#1A1A1A] mr-1">주변 스팟:</span>
                  {cafe.nearbySpots.map((spot, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-white border border-[#1A1A1A] text-[#1A1A1A] text-[11px] font-bold shadow-[1px_1px_0px_0px_#1A1A1A]"
                    >
                      {spot.name} ({spot.type}, 차로 {spot.travelMin}분)
                    </span>
                  ))}
                </div>
              </div>

              {/* Personal Visit Memo Saved locally */}
              <div className="p-4 rounded-3xl bg-white border-3 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] text-xs">
                <h3 className="font-black text-[#1A1A1A] mb-1.5 flex items-center justify-between">
                  <span>나만의 방문 메모 / 찜 메모</span>
                  {memoSaved && <span className="text-[#4ECDC4] font-black">저장 완료!</span>}
                </h3>
                <textarea
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  placeholder="다음에 먹어볼 메뉴나 같이 갈 친구 메모를 적어보세요..."
                  className="w-full p-2.5 bg-[#FFF9F0] border-2 border-[#1A1A1A] rounded-xl text-xs text-[#1A1A1A] placeholder-[#888] focus:outline-none focus:bg-white mb-2 resize-none h-16 font-medium"
                />
                <button
                  onClick={handleSaveMemo}
                  className="w-full py-2 rounded-xl bg-[#1A1A1A] hover:bg-[#333] text-white font-black text-xs transition-all shadow-[2px_2px_0px_0px_#FF6B6B]"
                >
                  메모 저장하기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-white px-6 py-3.5 border-t-3 border-[#1A1A1A] flex items-center justify-between text-xs text-[#555] font-semibold">
          <span>성남 1시간 카페 가이드 공식 인증 큐레이션</span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-2xl bg-[#FF6B6B] hover:bg-[#fa5252] text-white font-black border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] transition-all"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
