import React, { useState } from 'react';
import { X, Sparkles, RefreshCw, Car, ArrowRight, Heart, MapPin } from 'lucide-react';
import { Cafe, OriginLocation } from '../types';

interface RandomCafePickerProps {
  cafes: Cafe[];
  origin: OriginLocation;
  isOpen: boolean;
  onClose: () => void;
  onSelectCafe: (cafe: Cafe) => void;
}

const MOODS = [
  { id: 'all', label: '전체 중 무작위' },
  { id: 'forest', label: '🌲 조용한 숲멍' },
  { id: 'water', label: '🌊 호수·계곡 물멍' },
  { id: 'bakery', label: '🥐 갓 구운 빵 빵지순례' },
  { id: 'quick', label: '⚡ 20분 이내 초근접' },
  { id: 'pet', label: '🐶 반려견과 드라이브' },
];

export const RandomCafePicker: React.FC<RandomCafePickerProps> = ({
  cafes,
  origin,
  isOpen,
  onClose,
  onSelectCafe,
}) => {
  const [selectedMood, setSelectedMood] = useState('all');
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  if (!isOpen) return null;

  const handlePickRandom = () => {
    setIsSpinning(true);

    let candidates = [...cafes];
    if (selectedMood === 'forest') {
      candidates = candidates.filter((c) => c.category === '숲/마운틴뷰' || c.sceneryType === '마운틴/숲');
    } else if (selectedMood === 'water') {
      candidates = candidates.filter((c) => c.category === '호수/리버뷰' || c.category === '계곡/테라스');
    } else if (selectedMood === 'bakery') {
      candidates = candidates.filter((c) => c.hasBakery);
    } else if (selectedMood === 'quick') {
      candidates = candidates.filter((c) => {
        const time = c.distanceFromOrigins[origin]?.carMin || 30;
        return time <= 20;
      });
    } else if (selectedMood === 'pet') {
      candidates = candidates.filter((c) => c.petFriendly);
    }

    if (candidates.length === 0) {
      candidates = cafes;
    }

    // Animation rolling effect
    let count = 0;
    const interval = setInterval(() => {
      const randomItem = candidates[Math.floor(Math.random() * candidates.length)];
      setSelectedCafe(randomItem);
      count++;
      if (count >= 10) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 80);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-lg rounded-3xl shadow-[8px_8px_0px_0px_#1A1A1A] overflow-hidden border-4 border-[#1A1A1A] p-6 sm:p-7 space-y-5 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-[#FF6B6B] border-2 border-[#1A1A1A] text-white flex items-center justify-center shadow-[2px_2px_0px_0px_#1A1A1A]">
              <Sparkles className="w-5 h-5 text-[#FFD93D]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-[#1A1A1A]">오늘 어디 갈까?</h3>
              <p className="text-xs text-[#666] font-semibold">성남 1시간 내 감성 카페 즉석 추천</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#FFF9F0] hover:bg-white text-[#1A1A1A] border-2 border-[#1A1A1A] transition-all shadow-[2px_2px_0px_0px_#1A1A1A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mood Selector Pills */}
        <div>
          <label className="text-xs font-black text-[#1A1A1A] block mb-2">
            오늘 원하는 분위기나 조건을 골라보세요:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {MOODS.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedMood(m.id)}
                className={`py-2 px-2.5 rounded-xl text-xs font-black transition-all border-2 text-center ${
                  selectedMood === m.id
                    ? 'bg-[#FFD93D] border-[#1A1A1A] text-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]'
                    : 'bg-[#FFF9F0] border-[#1A1A1A]/30 text-[#444] hover:border-[#1A1A1A]'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Roulette Display Area */}
        <div className="bg-[#FFF9F0] rounded-2xl p-5 border-2 border-[#1A1A1A] text-center min-h-[220px] flex flex-col items-center justify-center shadow-[inset_0px_2px_4px_rgba(0,0,0,0.05)]">
          {selectedCafe ? (
            <div className={`space-y-3 w-full transition-all ${isSpinning ? 'opacity-50 blur-[0.5px]' : 'opacity-100'}`}>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden max-h-36 mx-auto bg-stone-200 shadow-[3px_3px_0px_0px_#1A1A1A] border-2 border-[#1A1A1A]">
                <img
                  src={selectedCafe.images[0]}
                  alt={selectedCafe.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 px-3 py-1 rounded-full bg-[#FF6B6B] text-white font-black text-xs border border-[#1A1A1A] shadow">
                  {selectedCafe.category}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-black text-[#1A1A1A]">{selectedCafe.name}</h4>
                <p className="text-xs text-[#555] line-clamp-1 font-medium">{selectedCafe.tagline}</p>
                <div className="flex items-center justify-center gap-3 text-xs text-[#1A1A1A] mt-2 font-bold">
                  <span className="flex items-center gap-1 text-[#FF6B6B] font-black bg-white px-2 py-0.5 rounded-lg border border-[#1A1A1A]/20">
                    <Car className="w-3.5 h-3.5" />
                    {origin}에서 {selectedCafe.distanceFromOrigins[origin]?.carMin || 20}분
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FF6B6B]" />
                    {selectedCafe.shortLocation}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <Sparkles className="w-10 h-10 text-[#FF6B6B] mx-auto animate-bounce" />
              <p className="text-sm font-black text-[#1A1A1A]">
                아래 버튼을 눌러 오늘의 추천 카페를 뽑아보세요!
              </p>
              <p className="text-xs text-[#666] font-semibold">
                {origin} 출발 기준 최적의 코스로 안내해드립니다.
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={handlePickRandom}
            disabled={isSpinning}
            className="w-full py-3.5 rounded-2xl bg-[#FF6B6B] hover:bg-[#fa5252] text-white font-black text-sm flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#1A1A1A] border-2 border-[#1A1A1A] transition-all disabled:opacity-50 hover:translate-y-[-1px] active:translate-y-0 active:shadow-none"
          >
            <RefreshCw className={`w-4 h-4 ${isSpinning ? 'animate-spin' : ''}`} />
            {selectedCafe ? '다른 카페 다시 뽑기' : '추천 카페 뽑기!'}
          </button>

          {selectedCafe && !isSpinning && (
            <button
              onClick={() => {
                onClose();
                onSelectCafe(selectedCafe);
              }}
              className="w-full py-3 rounded-2xl bg-[#4ECDC4] hover:bg-[#3ec4bb] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all border-2 border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] hover:translate-y-[-1px] active:translate-y-0 active:shadow-none"
            >
              이 카페 상세 정보 보러가기
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
