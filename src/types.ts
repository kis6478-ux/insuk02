export type OriginLocation = '판교역' | '야탑/모란역' | '서현/수내역' | '남한산성입구역';

export type CafeCategory =
  | '숲/마운틴뷰'
  | '호수/리버뷰'
  | '계곡/테라스'
  | '대형/베이커리'
  | '한옥/전통'
  | '도심/감성로스터리'
  | '온실/식물원';

export type CafeRegion =
  | '성남 판교·분당·남한산성'
  | '경기 광주 (신현/오포/퇴촌)'
  | '용인 (고기리/수지/보정)'
  | '하남·팔당 (한강뷰)'
  | '의왕·과천 (백운호수)'
  | '수원 (광교호수)'
  | '서울 (양재천/강남)';

export interface MenuCategoryItem {
  name: string;
  price: string;
  description: string;
  isSignature?: boolean;
}

export interface TravelTimeInfo {
  carMin: number;
  transitMin: number;
  distanceKm: number;
}

export interface NearbySpot {
  name: string;
  type: '맛집' | '관광/명소' | '산책로' | '쇼핑';
  travelMin: number;
}

export interface Cafe {
  id: string;
  name: string;
  tagline: string;
  category: CafeCategory;
  region: CafeRegion;
  address: string;
  shortLocation: string; // e.g. "경기 광주시 신현동"
  distanceFromOrigins: Record<OriginLocation, TravelTimeInfo>;
  transitGuide: string;
  drivingGuide: string;
  signatureMenus: MenuCategoryItem[];
  priceRange: '5천원~7천원' | '6천원~8천원' | '7천원~9천원' | '8천원 이상';
  businessHours: string;
  closedDays: string;
  images: string[];
  badges: string[];
  rating: number;
  reviewCount: number;
  highlights: string[];
  parkingInfo: string;
  hasFreeParking: boolean;
  petFriendly: boolean;
  kidsZone: boolean;
  hasTerrace: boolean;
  hasBakery: boolean;
  hasBrunch: boolean;
  hasWifi: boolean;
  hasOutlets: boolean;
  sceneryType: '마운틴/숲' | '리버/호수' | '계곡' | '정원/가든' | '모던건축';
  bestTimeToVisit: string;
  crowdTip: string;
  nearbySpots: NearbySpot[];
  recommendedCourse: string;
  instagramUrl?: string;
  naverSearchQuery: string;
  kakaoSearchQuery: string;
}

export interface DriveCourse {
  id: string;
  title: string;
  subtitle: string;
  estimatedTotalHour: string;
  theme: string;
  origin: string;
  spots: {
    order: number;
    title: string;
    category: '출발' | '식사' | '카페' | '명소/산책' | '귀가';
    name: string;
    description: string;
    estDuration: string;
    travelFromPrev: string;
  }[];
  drivingTip: string;
  bestDay: string;
}

export interface FilterState {
  searchQuery: string;
  origin: OriginLocation;
  selectedCategory: string;
  selectedRegion: string;
  maxCarTime: number; // in minutes (e.g. 15, 30, 45, 60)
  transportMode: 'car' | 'transit';
  onlyPetFriendly: boolean;
  onlyFreeParking: boolean;
  onlyBakery: boolean;
  onlyTerrace: boolean;
  onlyBrunch: boolean;
  sortBy: 'time' | 'rating' | 'reviews' | 'distance';
}
