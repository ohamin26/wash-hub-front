import { useLocate } from '../../../../hooks/useLocate';
import { Map, useMap } from 'react-kakao-maps-sdk';
import {
  sidbarMenuInfoDetailButton,
  sideBarMenuInfoDetailContainer,
  sidebarMenuImg,
  sidebarMenuInfoDetail,
  sidebarMenuInfoDetailIcon,
  sidebarMenuInfoDetailText,
} from './sideBarMenuInfoDetail.css';
import { FiPhone } from 'react-icons/fi';
import { RiMapPin2Line } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { location } from '../../../../type';
import { useRecoilState } from 'recoil';
import { mapState } from '../../../../recoil/atoms/mapState';
import { useMapScript } from '../../../../hooks/useMapScript';

export const SideBarMenuInfoDetail = () => {
  const markerTestData = [
    {
      id: '1',
      lat: 37.5062528,
      lng: 126.8318208,
      title: '코인세탁소',
      review: ['1', '2', '3'],
      address: '서울특별시 양천구',
    },
  ];
  // 현재 위치 정보 받아오기
  const [locate] = useRecoilState<location>(mapState);
  useLocate();
  useMapScript(locate.latitude, locate.longitude, markerTestData, false);

  // 임시 데이터 나중에 서버랑 연결할 때는 좌표값이랑 이름 변경해주기

  const { data } = useQuery('data', () =>
    fetch(
      'https://dapi.kakao.com/v2/local/search/keyword.json?y=37.514322572335935&x=127.06283102249932&radius=20000&query=카카오프렌즈',
      {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_KEY}`,
          KA: 'sdk/2.2.0 kakao.js/1.39.17 os/javascript lang/en-GB device/MacIntel origin/http%3A%2F%2Flocalhost%3A3000',
        },
      }
    ).then((res) => res.json())
  );
  const id = data?.documents[0].id;
  const onClickMap = () => {
    window.open(`https://place.map.kakao.com/${id}`);
  };
  return (
    <div className={sideBarMenuInfoDetailContainer}>
      <div className={sidebarMenuImg} id="map" />
      {/* </div> */}
      <div>
        <div className={sidebarMenuInfoDetail}>
          <div className={sidebarMenuInfoDetailIcon}>
            <FiPhone />
          </div>
          <div className={sidebarMenuInfoDetailText}>010-111-1111</div>
        </div>
        <div className={sidebarMenuInfoDetail}>
          <div className={sidebarMenuInfoDetailIcon}>
            <RiMapPin2Line />
          </div>
          <div className={sidebarMenuInfoDetailText}>서울시 양천구 신정로 11길</div>
        </div>
        <div>
          <button onClick={onClickMap} className={sidbarMenuInfoDetailButton}>
            카카오 맵으로 보기
          </button>
        </div>
      </div>
    </div>
  );
};
