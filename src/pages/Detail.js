import React, {useRef, useState} from 'react';
import logo from 'img/logo_symbol.png'
import btnBack from 'img/btn_back.png'
import {Link, useNavigate} from 'react-router-dom';
import icoHome from 'img/ico_3d_home.png'
import prevIcon from 'img/slidePrev.png'
import nextIcon from 'img/slideNext.png'

import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import sample from 'img/sample1.png'
import imgLocation from 'img/location.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Nav from 'include/Nav';

function Detail() {
    const [swiper, setSwiper] = useState(null);
    const [mainImageIndex, setMainImageIndex] = useState(0);

    SwiperCore.use([Navigation]);

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const swiperParams = {
        navigation: {
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current
        },
        onBeforeInit: (swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.activeIndex = mainImageIndex;
            swiper
                .navigation
                .update();
        },
        onSwiper: setSwiper,
        onSlideChange: (e) => setMainImageIndex(e.activeIndex)
    };
    const navigate = useNavigate();

    return (
        <div className="Trip">
            <header className='subHeader'>
                <div className="wrapper">
                    <Link onClick={() => navigate(-1)} className='btn-back'>
                        <img src={btnBack} alt="back"/>
                    </Link>
                    <div className='text'>
                        <img src={logo} alt="logo"/>
                        <h1>광주광역시 동구 여행 스타일별 추천여행</h1>
                    </div>
                </div>
                <div className="ani-circles2">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

            <div className="contents wrapper sub">
                <div className="leftNav">
                    <Link to="" className='active'>여행 스타일별 추천여행</Link>
                    <Link to="">관광명소</Link>
                    <Link to="">음식</Link>
                    <Link to="">숙박</Link>
                    <Link to="">체험</Link>
                    <Link to="">쇼핑</Link>
                    <Link to="">전시공연</Link>
                </div>
                <div className="contents__trip">
                    <h2>여행 스타일별 추천여행 &#62; 관광명소 &#62; 광주 무등산</h2>
                    <div className="detailImages">
                        <Swiper {...swiperParams} ref={setSwiper} className='swiper'>
                            <SwiperSlide><img src={sample} alt="place" className='slideimg'/></SwiperSlide>
                            <SwiperSlide><img src={sample} alt="place" className='slideimg'/></SwiperSlide>
                            <SwiperSlide><img src={sample} alt="place" className='slideimg'/></SwiperSlide>
                            <button ref={navigationPrevRef} className='prevButton'>
                                <img alt="prevButton" src={prevIcon}/>
                            </button>
                            <button ref={navigationNextRef} className='nextButton'>
                                <img alt="nextButton" src={nextIcon}/>
                            </button>
                        </Swiper>
                        <div className="subImages">
                            <div className="img">
                                <img src={sample} alt="place"/>
                            </div>
                            <div className="img">
                                <img src={sample} alt="place"/>
                            </div>
                        </div>
                    </div>

                    <div className="detailTitle">
                        광주 무등산
                    </div>
                    <div className="location">
                        <img src={imgLocation} alt="location" />
                        <span>광주광역시 &#62; 동구 증심사길 32 (운림동, 증심사지구교통안내소) </span>
                    </div>
                    <div className="detailHashtag">
                        <span># 무등산 수박농부</span>
                        <span># FREE</span>
                        <span># SEASIDE</span>
                    </div>
                    <hr className='detail_hr' />
                    <p className='detail__text'>
                        '무등'이란 말은 불교용어로, 평등이 크게 이루어져서 평등이란 말조차 사라진 상태를 말한다. 다만, 처음부터 이렇게 이름지었다기보다는 광주의 옛 이름인 듯한 '무들'을 음차하면서 뜻 좋은 이름을 붙이기 위해 불교용어 무등을 차용했을 가능성이 있다.역사 기록에 의하면 백제 때 무진악(武珍岳), 고려 때 서석산(瑞石山)이라고 하였다. 이는 광주의 옛 이름 무진주에서 기인한 것으로, 무진주에 있는 산이라 하여 무진악 도는 무악이라 불렸고, 상서로운 돌(서석瑞石)이라 불릴 만큼 고대부터 무속신앙의 관계자들이 자주 찾던 명산으로 유명했다. 삼국통일 후 신라에서도 제사를 올리는 영험한 산이었다.#광주전남 사람들이라면 누구나 잘 아는 산이다. 실제 유명 관광지기도 한 무등산의 해발고도를 드러내기 위해 광주광역시는 원효사를 왕래하는 시내버스에 1187번을 지정해 운영한다. 
                    </p>

                    <a href="http://www.knps.or.kr/mudeung" target="_blank" className="btn mini detail">
                        <span>자세히 알아보기</span>
                    </a>
                </div>
                <Nav />
            </div>
            <div className="btmBg"></div>
        </div>
    );
}

export default Detail;
