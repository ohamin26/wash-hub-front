declare module '@/*';

export interface LoginState {
  isLogin: boolean | DefaultValue | null;
}

export interface LoginModalState {
  isModalOpen: boolean;
}

export interface MenuState {
  isMyPageOpened?: boolean;
  isOpened?: boolean;
}

export interface MyPageState {
  isDropdownMenuOpened: boolean;
  isModalOpened: boolean;
}

export interface ReviewState {
  isImgModalOpen: boolean;
  selectedImg: string;
  isOpened: boolean;
  isCreateReviewModalOpen: boolean;
  isDeleteReviewModalOpen: boolean;
}

export interface SidebarState {
  isActiveDetail: boolean;
  isActiveReview: boolean;
  isActiveSearch: boolean;
}

export type ReviewImg = string | ArrayBuffer | null;
export type ProfileEditImg = string | ArrayBuffer | null;

export type dropdownRef = HTMLDivElement | null;

export type customoverlay = kakao.maps.CustomOverlay | null;

export interface location {
  latitude: number;
  longitude: number;
}

export type MapScript = (lat: number, lng: number, draggable: boolean) => void;

export type MiniMapScript = (lat: number, lng: number) => void;

export type KakaoMapId = (longitude: number, latitude: number, placeName: string) => void;

type JwtPayload = {
  userId: String;
};

export interface debounce {
  (map: kakao.maps.Map, locate: location, setLocate: SetterOrUpdater<location>): void;
}

export interface userInfo {
  bookmarks: {
    data: [
      {
        map: {
          id: string;
          picture: string;
          placeName: string;
          roadName: string;
          latitude: number;
          longitude: number;
        };
      },
    ];
    meta: {
      page: number;
      pageCount: number;
      take: number;
      itemCount: number;
    };
  };
  profile: {
    name: string;
    email: string;
    nickname: string;
    profileImg: string;
    id: string;
  };
}

export interface mapInfo {
  id: string;
  placeName: string;
  isBookmark: boolean;
  latitude: string;
  longitude: string;
  picture: string;
  reviewCount: number;
  roadName: string;
}

export type SearchInfo = () => void;

export interface BookmarkParams {
  mapId: mapId;
}

export interface UseBookmarkOptions {
  onOpenModal: () => void;
}

export interface ReviewData {
  files: File | null;
  desc: string;
  map: string;
}

export type DeleteReviewData = string;

export interface ProfileEditData {
  name: string;
  email: string;
}

type ChildrenProps = {
  children: React.ReactNode;
};
