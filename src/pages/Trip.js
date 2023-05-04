import React from 'react';
import logo from 'img/logo_symbol.png'
import btnBack from 'img/btn_back.png'
import { Link, useNavigate } from 'react-router-dom';
import imgSearch from 'img/ico_search.png'
import imgPlace from 'img/sample1.png'
import imgFirst from 'img/first.png'
import imgPrev from 'img/prev.png'
import imgNext from 'img/next.png'
import imgLast from 'img/last.png'
import Nav from 'include/Nav';
import SubHeader from 'include/SubHeader';

function Trip() {
    const navigate = useNavigate();
    return (
        <div className="Trip">
            <SubHeader title={'광주광역시 동구 여행 스타일별 추천여행'} />

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
                    <h2>여행 스타일별 추천여행</h2>
                    <div className="searchbox">
                        <select name="" id="">
                            <option value="">전체</option>
                        </select>
                        <input type="text" placeholder='여행 스타일별 추천여행' />
                        <button>
                            <img src={imgSearch} alt="" />
                        </button>
                    </div>

                    <div className="list__top">
                        <div className="selects">
                            <select name="" id="">
                                <option value="">여행 스타일</option>
                                <option value="">무등산 수박농부</option>
                                <option value="">광주 역사학자</option>
                                <option value="">광주 100만 유투버</option>
                                <option value="">ACC 무용가</option>
                                <option value="">헌책방거리 서점원</option>
                                <option value="">너릿재 조경사</option>
                                <option value="">동구 관광 매니저</option>
                                <option value="">충장축제 기획가</option>
                                <option value="">충장로 인디가수</option>
                                <option value="">예술의 거리 화가</option>
                                <option value="">야시장 푸드파이터</option>
                                <option value="">K-POP 스타의 거리 댄서</option>
                                <option value="">5.18 주먹밥 요리사</option>
                                <option value="">춘설차 다도 선생님</option>
                                <option value="">동명동 바리스타</option>
                            </select>
                            <select name="" id="">
                                <option value="">여행 동기</option>
                                <option value="">재미와 추억</option>
                                <option value="">호기심 충족</option>
                                <option value="">액티비티와 모험</option>
                                <option value="">스트레스 해소</option>
                                <option value="">친구, 가족과 함께</option>
                                <option value="">새로운 만남</option>
                            </select>
                            <select name="" id="">
                                <option value="">여행지 속성</option>
                                <option value="">핫플</option>
                                <option value="">자연자원</option>
                                <option value="">문화체험</option>
                                <option value="">행사&#183;이벤트</option>
                            </select>
                        </div>
                        <p>총 10건의 추천 여행지가 있습니다.</p>
                    </div>

                    <Link to="/trip/admin" className="item">
                        <div className="img">
                            <img src={imgPlace} alt="" />
                        </div>
                        <div className="text">
                            <h3>광주동구 관광지</h3>
                            <p>
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광
                            </p>
                        </div>
                    </Link>
                    <Link to="/trip/admin" className="item">
                        <div className="img">
                            <img src={imgPlace} alt="" />
                        </div>
                        <div className="text">
                            <h3>광주동구 관광지</h3>
                            <p>
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광
                            </p>
                        </div>
                    </Link>
                    <Link to="/trip/admin" className="item">
                        <div className="img">
                            <img src={imgPlace} alt="" />
                        </div>
                        <div className="text">
                            <h3>광주동구 관광지</h3>
                            <p>
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광
                            </p>
                        </div>
                    </Link>
                    <Link to="/trip/admin" className="item">
                        <div className="img">
                            <img src={imgPlace} alt="" />
                        </div>
                        <div className="text">
                            <h3>광주동구 관광지</h3>
                            <p>
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광
                            </p>
                        </div>
                    </Link>
                    <Link to="/trip/admin" className="item">
                        <div className="img">
                            <img src={imgPlace} alt="" />
                        </div>
                        <div className="text">
                            <h3>광주동구 관광지</h3>
                            <p>
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관광지설명관
                                관광지설명관광지설명관광지설명관광지설명관광지설명관광
                            </p>
                        </div>
                    </Link>

                    <div className="paging">
                        <button className='first'>
                            <img src={imgFirst} alt="first" />
                        </button>
                        <button className='prev'>
                            <img src={imgPrev} alt="prev" />
                        </button>
                        <div className="num">
                            <button className='active'>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                        </div>
                        <button className='next'>
                            <img src={imgNext} alt="next" />
                        </button>
                        <button className='last'>
                            <img src={imgLast} alt="last" />
                        </button>

                    </div>
                </div>
                <Nav isTripAdmin={true} />
            </div>
            <div className="btmBg"></div>
        </div>
    );
}

export default Trip;
