import React, { useEffect } from 'react';
import icoHome from 'img/ico_3d_home.png'
import {Link, useLocation} from 'react-router-dom';
import sample from 'img/sample1.png'
import kakao from 'img/kakao.png'
import facebook from 'img/facebook.png'
import twitter from 'img/twitter.png'
import insta from 'img/insta.png'
import share from 'img/share.png'
import Nav from 'include/Nav';
import imgResultMBTI from 'img/mbti/ISTP.png'
import ENFJ from 'img/mbti/ENFJ.png'
import ISTJ from 'img/mbti/ISTJ.png'

let currentPath = "";

function Result() {
   
    
    return (
        <div className="result">
            
            <div className="wrapper">
                <h1 className='tit__big'>나의 여행 스타일은?</h1>
                <div className="contents">
                    <div className="content__result">
                        <div className="result__inner">
                            <h2 className='tit-top'>올해도 수박농사는 거뜬없지!</h2>
                            <div className="imgmbtibox">
                                <img src={imgResultMBTI} alt=""/>
                            </div>
                            <h3 className='tit-resulttype'>무등산 수박농부</h3>
                            <div className="hashtagbox">
                                <span className="hashtag"># 만능 재주꾼</span>
                                <span className="hashtag"># 창의적</span>
                                <span className="hashtag"># 호기심천국</span>
                            </div>
                            <hr/>
                            <h3 className="tit-mark">
                                당신의 유형은?
                            </h3>
                            <p className='type-detail'>
                                현실적이지만 대담한 스타일!<br/>
                                예기치 못한 상황도 무난히 타파하는 경력직 농부<br/><br/>

                                노력파라 자신의 기술을 마음껏 활용하여<br/>
                                목표 달성을 이룬다구~<br/><br/>

                                효율러라 활동적인 일을 선호하는 타입
                            </p>
                            <div className="h80"></div>
                            <h3 className="tit-mark">
                                당신의 여행타입은?
                            </h3>
                            <p className='type-detail'>
                                반복되는 일상에 무료함을 느끼고 여행을 떠나는 타입!<br/>
                                하지만 여행은 효율적이어야하는 효율러로<br/>
                                여행지간 도선을 최소화 시킴!<br/><br/>

                                항상 새로운 에너지로 가득<br/>
                                철학, 사색, 아이디어에 목마른 걸 달래줄 수 있는<br/>
                                여행지였으면 좋겠어~<br/><br/>

                                예상치 못한 상황도 무난히 타파할 수 있으니<br/>
                                어딜 내놓아도 걱정없는 타입<br/>
                                액티비티한 여행지도 즐겁게 놀 수 있는<br/>
                                발랄한 여행러
                            </p>

                            <hr/>

                            <h3 className='tit-circle'>추천코스</h3>
                            <h4 className='course-name'>무등산 모노레일</h4>
                            <p className='detail-text'>액티비티한 활동을 즐기는 사람은 지산 유원지로</p>
                            <div className="imgbox">
                                <img src={sample} alt="course"/>
                            </div>
                            <p>
                                무등산의 자연을 만끽하고 더불어 액티비티를<br/>
                                즐길 수 있는 광주 동구의 핫스팟
                            </p>

                            <div className="course__items">
                                <div className="item">
                                    <Link to="/detail" className="imgbox">
                                        <img src={sample} alt="course"/>
                                    </Link>
                                    <h5>남도 관광안내센터</h5>
                                </div>
                                <div className="item">
                                    <Link to="/detail" className="imgbox">
                                        <img src={sample} alt="course"/>
                                    </Link>
                                    <h5>무등 현대미술관</h5>
                                </div>
                            </div>
                            <Link to="/trip" className="btn mini">
                                <span>추천 여행지 더보기</span>
                            </Link>

                            <hr />

                            <h3 className='tit-circle bage'>당신의 여행메이트</h3>

                            <div className="course__items">
                                <div className="item">
                                    <p className='tit-place c_best'>최고의 메이트</p>
                                    <Link to="/result" className="imgbox" onClick={() => window.scrollTo(0, 0)}>
                                        <img src={ENFJ} alt="course"/>
                                    </Link>
                                    <p className='tit-sub'>뭐든 할 수 있다구!</p>
                                    <h6>공룡알빵 제빵사</h6>
                                </div>
                                <div className="item">
                                <p className='tit-place c_worst'>최악의 메이트</p>
                                    <Link to="/result" className="imgbox" onClick={() => window.scrollTo(0, 0)}>
                                        <img src={ISTJ} alt="course"/>
                                    </Link>
                                    <p className='tit-sub'>마음의 정화가 필요해</p>
                                    <h6>헌책방거리 점원</h6>
                                </div>
                            </div>

                            <hr />

                            <div className="wrapper__share">
                                <h6>내 결과 공유하기</h6>
                                <div className="share">
                                    <button className='btn_kakao'>
                                        <img src={kakao} alt="kakao" />
                                    </button>
                                    <button className='btn_facebook'>
                                        <img src={facebook} alt="facebook" />
                                    </button>
                                    <button className='btn_twitter'>
                                        <img src={twitter} alt="twitter" />
                                    </button>
                                    <button className='btn_insta'>
                                        <img src={insta} alt="insta" />
                                    </button>
                                    <button className='btn_share'>
                                        <img src={share} alt="share" />
                                    </button>
                                </div>
                                <Link to="/test" className='btn mini retry'><span>다시하기</span></Link>
                            </div>
                        </div>
                    </div>
                    <Nav />
                </div>
            </div>
            <div className="ani-circles">
                <span className='ani_on_circle'></span>
                <span className='ani_on_circle2'></span>
                <span className='ani_on_circle3'></span>
                <span className='ani_on_circle'></span>
                <span className='ani_on_circle2'></span>
                <span className='ani_on_circle3'></span>
            </div>
        </div>
    );
}

export default Result;
