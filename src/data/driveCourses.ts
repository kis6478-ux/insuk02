import { DriveCourse } from '../types';

export const DRIVE_COURSES: DriveCourse[] = [
  {
    id: 'course-1',
    title: '남한산성 힐링 숲속 & 한옥 투어',
    subtitle: '성남 구도심·분당에서 20분! 울창한 성곽 숲길과 고즈넉한 한옥 테라스',
    estimatedTotalHour: '약 4~5시간',
    theme: '숲멍 & 한옥 감성 & 역사 산책',
    origin: '성남 모란/산성역 출발 기준 (자차 15분)',
    spots: [
      {
        order: 1,
        title: '출발 & 숲길 드라이브',
        category: '출발',
        name: '성남 산성대로 ➡️ 남한산성 순환도로',
        description: '사계절 벚꽃과 녹음, 단풍이 우거진 남한산성 와인딩 드라이브 코스를 즐깁니다.',
        estDuration: '20분',
        travelFromPrev: '성남 출발'
      },
      {
        order: 2,
        title: '점심 식사',
        category: '식사',
        name: '남한산성 백숙마을 능이버섯 백숙',
        description: '토속 닭백숙이나 도토리묵, 감자전으로 든든하게 건강한 한 끼를 즐깁니다.',
        estDuration: '1시간 20분',
        travelFromPrev: '차량 5분'
      },
      {
        order: 3,
        title: '한옥 테라스 카페',
        category: '카페',
        name: '카페 류 (Ryu)',
        description: '남한산성 숲속 한옥에서 시그니처 흑임자라떼와 쑥인절미 와플을 즐기며 계곡 물소리를 듣습니다.',
        estDuration: '1시간 30분',
        travelFromPrev: '차량 3분'
      },
      {
        order: 4,
        title: '문화유산 & 성곽길 산책',
        category: '명소/산책',
        name: '남한산성 행궁 & 수어장대 일몰 조망',
        description: '수어장대에 올라 서울 강남과 롯데타워, 성남 시내가 한눈에 내려다보이는 노을 뷰를 감상합니다.',
        estDuration: '1시간',
        travelFromPrev: '도보/차량 6분'
      }
    ],
    drivingTip: '주말 오후 산성로터리는 차량 정체가 있을 수 있으니 오전 11시 이전 입성 또는 오후 4시 이후 입성을 추천합니다.',
    bestDay: '맑은 주말 오후 or 가을 단풍철'
  },
  {
    id: 'course-2',
    title: '고기리 계곡 물멍 & 앙버터 빵지순례',
    subtitle: '판교·분당에서 15분! 시원한 계곡 물소리와 전국 3대 앙버터의 만남',
    estimatedTotalHour: '약 3.5~4.5시간',
    theme: '계곡 물멍 & 베이커리 & 미식',
    origin: '판교역 / 미금역 출발 기준 (자차 15분)',
    spots: [
      {
        order: 1,
        title: '오전 빵지순례',
        category: '카페',
        name: '글림 (GLEAM) 베이커리',
        description: '아침 갓 구워져 나오는 천연 발효 바게트 앙버터와 국가대표 로스팅 원두 커피를 테이크아웃합니다.',
        estDuration: '40분',
        travelFromPrev: '판교/분당 출발 15분'
      },
      {
        order: 2,
        title: '미식 점심',
        category: '식사',
        name: '고기리 막국수 (원조 들기름막국수)',
        description: '고소한 들기름 향이 가득한 막국수와 쫄깃한 수육으로 기분 좋은 식사를 즐깁니다.',
        estDuration: '1시간 30분',
        travelFromPrev: '차량 3분'
      },
      {
        order: 3,
        title: '계곡 1열 힐링 테라스',
        category: '카페',
        name: '모안 (Moan)',
        description: '계곡 바로 위 데크 테라스에서 발을 담그거나 맑은 물멍을 하며 시원한 솔잎 에이드를 마십니다.',
        estDuration: '1시간 30분',
        travelFromPrev: '차량 3분'
      },
      {
        order: 4,
        title: '자연 숲길 산책',
        category: '명소/산책',
        name: '바라산 자연휴양림 둘레길',
        description: '울창한 침엽수림 목재 데크로드를 가볍게 걸으며 피톤치드를 듬뿍 마십니다.',
        estDuration: '50분',
        travelFromPrev: '차량 8분'
      }
    ],
    drivingTip: '고기리막국수는 주말 대기가 길 수 있으니 현장 테이블링 등록 후 글림 베이커리에 먼저 다녀오면 완벽합니다.',
    bestDay: '봄~여름 계곡 시즌, 화창한 날'
  },
  {
    id: 'course-3',
    title: '백운호수 수변 산책 & 온실 가든 쇼핑 투어',
    subtitle: '서판교에서 18분! 드넓은 유리온실 정원과 롯데 타임빌라스, 호수 야경',
    estimatedTotalHour: '약 5~6시간',
    theme: '온실 정원 & 쇼핑 & 호수 야경',
    origin: '서판교/판교IC 출발 기준 (자차 18분)',
    spots: [
      {
        order: 1,
        title: '식물원 온실 브런치',
        category: '카페',
        name: '넬라포레스타 (Nella Foresta)',
        description: '사계절 푸른 초대형 유리온실 정원에서 젤라또 아포가토와 마르게리타 포카치아를 즐깁니다.',
        estDuration: '1시간 30분',
        travelFromPrev: '판교 출발 18분'
      },
      {
        order: 2,
        title: '트렌디 쇼핑 & 글라스빌',
        category: '명소/산책',
        name: '롯데 프리미엄 아울렛 타임빌라스',
        description: '자연과 어우러진 잔디광장과 글라스빌을 둘러보며 쇼핑과 사진 촬영을 즐깁니다.',
        estDuration: '2시간',
        travelFromPrev: '차량 5분'
      },
      {
        order: 3,
        title: '호수 1열 일몰 & 야경 티타임',
        category: '카페',
        name: '흙과나무 (Earth & Wood)',
        description: '백운호수 수변 통창에서 잔잔한 호수 윤슬과 붉은 노을, 로맨틱한 야경 조명을 감상합니다.',
        estDuration: '1시간 20분',
        travelFromPrev: '차량 4분'
      },
      {
        order: 4,
        title: '호수 둘레길 산책',
        category: '명소/산책',
        name: '백운호수 수변 생태탐방로 (데크길)',
        description: '선선한 호수 바람을 맞으며 3km 목재 데크로드를 가볍게 걸으며 하루를 마무리합니다.',
        estDuration: '40분',
        travelFromPrev: '카페 바로 앞'
      }
    ],
    drivingTip: '백운호수 순환로는 일몰 시간대 차량이 몰리니 타임빌라스 주차 후 도보 또는 일찍 이동하세요.',
    bestDay: '주말 오후 및 노을이 아름다운 날'
  },
  {
    id: 'course-4',
    title: '광교 웰빙타운 건축미학 & 호수공원 루프탑 코스',
    subtitle: '판교에서 20분! 곽희수 건축가의 마스터피스와 광교호수공원 파노라마 야경',
    estimatedTotalHour: '약 4시간',
    theme: '모던 건축 & 페이스트리 & 도심 야경',
    origin: '성남 판교/분당 출발 기준 (자차 20분 / 신분당선 20분)',
    spots: [
      {
        order: 1,
        title: '건축 루프탑 베이커리',
        category: '카페',
        name: '광교 르디투어 (Le Detour)',
        description: '노출 콘크리트 건축물과 온돌 루프탑에서 프랑스 정통 퀸아망과 스페셜티 커피를 맛봅니다.',
        estDuration: '1시간 40분',
        travelFromPrev: '판교 출발 22분'
      },
      {
        order: 2,
        title: '라이프스타일 산책',
        category: '명소/산책',
        name: '광교 앨리웨이 & 스트리트 마켓',
        description: '예술 작품과 트렌디한 편집숍이 모여있는 복합문화 스트리트를 둘러봅니다.',
        estDuration: '1시간 20분',
        travelFromPrev: '차량 8분'
      },
      {
        order: 3,
        title: '호수공원 야경 산책',
        category: '명소/산책',
        name: '광교 호수공원 원천호수 어반레비',
        description: '물 위에 떠 있는 화려한 LED 조명 데크로드를 걸으며 미래지향적인 도시 야경을 담습니다.',
        estDuration: '1시간',
        travelFromPrev: '도보 3분'
      }
    ],
    drivingTip: '신분당선 광교역 이용 시 판교역에서 15분 만에 도착하여 대중교통으로도 아주 편안합니다.',
    bestDay: '선선한 저녁, 야경 데이트 코스'
  }
];
