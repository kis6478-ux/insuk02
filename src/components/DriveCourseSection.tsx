import React, { useState } from 'react';
import { Compass, Clock, MapPin, Navigation, Sparkles, ChevronDown, ChevronUp, ArrowRight, Car } from 'lucide-react';
import { DRIVE_COURSES } from '../data/driveCourses';
import { DriveCourse, Cafe } from '../types';

interface DriveCourseSectionProps {
  onSelectCafeById: (cafeId: string) => void;
}

export const DriveCourseSection: React.FC<DriveCourseSectionProps> = ({ onSelectCafeById }) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(DRIVE_COURSES[0].id);

  const activeCourse = DRIVE_COURSES.find((c) => c.id === selectedCourseId) || DRIVE_COURSES[0];

  return (
    <div className="bg-white rounded-3xl border-3 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] p-6 sm:p-8 mb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b-2 border-[#1A1A1A]/10 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 mb-1.5 px-3 py-1 rounded-full bg-[#FFD93D] text-[#1A1A1A] font-black text-xs border border-[#1A1A1A] shadow-[1.5px_1.5px_0px_0px_#1A1A1A]">
            <Compass className="w-4 h-4 text-[#FF6B6B]" />
            성남 출발 추천 1일 드라이브 코스
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#1A1A1A] break-keep">
            주말 당일치기 1일 카페 투어 코스
          </h2>
          <p className="text-xs sm:text-sm text-[#555] font-medium mt-0.5 break-keep">
            성남에서 출발해 점심 맛집, 시그니처 카페, 산책로까지 한 번에 즐기는 완성형 코스 가이드
          </p>
        </div>
      </div>

      {/* Course Selection Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
        {DRIVE_COURSES.map((course) => {
          const isSelected = course.id === activeCourse.id;
          return (
            <button
              key={course.id}
              onClick={() => setSelectedCourseId(course.id)}
              className={`p-4 rounded-2xl text-left transition-all border-2 ${
                isSelected
                  ? 'bg-[#FF6B6B] border-[#1A1A1A] text-white shadow-[4px_4px_0px_0px_#1A1A1A] translate-y-[-2px]'
                  : 'bg-[#FFF9F0] hover:bg-white border-[#1A1A1A]/30 text-[#2D2D2D]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-black border ${isSelected ? 'bg-white text-[#FF6B6B] border-white' : 'bg-[#1A1A1A] text-white border-[#1A1A1A]'}`}>
                  {course.estimatedTotalHour}
                </span>
                <span className={`text-[11px] font-black ${isSelected ? 'text-[#FFD93D]' : 'text-[#FF6B6B]'}`}>{course.theme}</span>
              </div>
              <h3 className="text-sm sm:text-base font-black line-clamp-1">{course.title}</h3>
              <p className={`text-xs mt-1 line-clamp-1 font-medium ${isSelected ? 'text-white/90' : 'text-[#666]'}`}>{course.subtitle}</p>
            </button>
          );
        })}
      </div>

      {/* Active Course Detailed Itinerary */}
      <div className="bg-[#FFF9F0] rounded-3xl p-5 sm:p-7 border-3 border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b-2 border-[#1A1A1A]/10">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#1A1A1A] flex items-center gap-2">
              <span>{activeCourse.title}</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#555] font-semibold mt-0.5">{activeCourse.subtitle}</p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="px-3.5 py-1.5 rounded-xl bg-[#FFD93D] text-[#1A1A1A] font-black border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
              출발 기준: {activeCourse.origin}
            </span>
          </div>
        </div>

        {/* Step-by-step Timeline */}
        <div className="space-y-4 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-1 before:bg-[#FFD93D] before:hidden sm:before:block">
          {activeCourse.spots.map((spot, idx) => {
            const isCafe = spot.category === '카페';
            return (
              <div
                key={idx}
                className={`relative pl-0 sm:pl-10 p-4 sm:p-5 rounded-2xl bg-white border-2 transition-all ${
                  isCafe
                    ? 'border-[#1A1A1A] shadow-[4px_4px_0px_0px_#FF6B6B]'
                    : 'border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]'
                }`}
              >
                {/* Timeline node circle for desktop */}
                <div
                  className={`hidden sm:flex absolute left-2 top-6 -translate-x-1/2 w-5 h-5 rounded-full items-center justify-center border-2 border-[#1A1A1A] shadow ${
                    isCafe ? 'bg-[#FF6B6B]' : 'bg-[#4ECDC4]'
                  }`}
                />

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#1A1A1A] text-white font-black">
                        STEP {spot.order}
                      </span>
                      <span
                        className={`text-[11px] px-2.5 py-0.5 rounded-md font-black border border-[#1A1A1A] ${
                          isCafe
                            ? 'bg-[#FFD93D] text-[#1A1A1A]'
                            : 'bg-[#4ECDC4] text-white'
                        }`}
                      >
                        {spot.category}
                      </span>
                      <h4 className="text-base font-black text-[#1A1A1A]">{spot.name}</h4>
                    </div>

                    <p className="text-xs sm:text-sm text-[#444] font-medium leading-relaxed pt-1">
                      {spot.description}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between text-xs text-[#555] flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                    <span className="font-black text-[#1A1A1A] bg-[#FFF9F0] px-2 py-0.5 rounded-md border border-[#1A1A1A]/30">체류 {spot.estDuration}</span>
                    <span className="text-[11px] font-bold text-[#FF6B6B] mt-1">({spot.travelFromPrev})</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Driving Tip Footer */}
        <div className="mt-6 pt-4 border-t-2 border-[#1A1A1A]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#1A1A1A] font-semibold">
            <Car className="w-4 h-4 text-[#FF6B6B] flex-shrink-0" />
            <span>
              <strong>드라이브 팁:</strong> {activeCourse.drivingTip}
            </span>
          </div>

          <span className="px-3 py-1.5 rounded-xl bg-white text-[#1A1A1A] font-black border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] whitespace-nowrap">
            추천 날씨/요일: {activeCourse.bestDay}
          </span>
        </div>
      </div>
    </div>
  );
};
