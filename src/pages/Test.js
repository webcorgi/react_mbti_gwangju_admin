import React from 'react';
import ico3DModeling from 'img/ico_3d_modeling.png'
import { Link } from 'react-router-dom';

function Test() {
    return (
        <div className="test">
            <div className="header_test">
                <div className="wrapper">
                    <div className="tit">
                        <h1>광주광역시 동구</h1>
                        <h2>
                            <span className="underline">여행 스타일</span>
                            <span>테스트</span>
                        </h2>
                        <p className="subtext">나의 성향에 맞춰 떠나보는 광주 여행!</p>
                        <p className="hashtag">#계획러 #집순이 #미식가</p>
                    </div>
                    <img src={ico3DModeling} alt="" className="ico_3d_modeling" />
                </div>
            </div>

            <div className="survey__list">
                <ul className="wrapper">
                    <li>
                        <div className="num">1</div>
                        <div className="qa">
                            <div className="q">집에만 있으니 지루하다, 이럴 때 내 행동은?</div>
                            <div className="a">
                                <label>
                                    <input type="radio" name="survey1" />
                                    <div className="fakeRadio"></div>
                                    <span>집에서도 즐길 거리가 한가득이지, 배달음식을 시켜 넷플릭스를 본다.</span>
                                </label>
                                <label>
                                    <input type="radio" name="survey1" />
                                    <div className="fakeRadio"></div>
                                    <span>시간되는 사람~? 당장 나가서 친구들을 만난다.</span>
                                </label>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="num">2</div>
                        <div className="qa">
                            <div className="q">집에만 있으니 지루하다, 이럴 때 내 행동은?</div>
                            <div className="a">
                                <label>
                                    <input type="radio" name="survey1" />
                                    <div className="fakeRadio"></div>
                                    <span>집에서도 즐길 거리가 한가득이지, 배달음식을 시켜 넷플릭스를 본다.</span>
                                </label>
                                <label>
                                    <input type="radio" name="survey1" />
                                    <div className="fakeRadio"></div>
                                    <span>시간되는 사람~? 당장 나가서 친구들을 만난다.</span>
                                </label>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="num">3</div>
                        <div className="qa">
                            <div className="q">집에만 있으니 지루하다, 이럴 때 내 행동은?</div>
                            <div className="a">
                                <label>
                                    <input type="radio" name="survey1" />
                                    <div className="fakeRadio"></div>
                                    <span>집에서도 즐길 거리가 한가득이지, 배달음식을 시켜 넷플릭스를 본다.</span>
                                </label>
                                <label>
                                    <input type="radio" name="survey1" />
                                    <div className="fakeRadio"></div>
                                    <span>시간되는 사람~? 당장 나가서 친구들을 만난다.</span>
                                </label>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="num">4</div>
                        <div className="qa">
                            <div className="q">집에만 있으니 지루하다, 이럴 때 내 행동은?</div>
                            <div className="a">
                                <label>
                                    <input type="radio" name="survey1" />
                                    <div className="fakeRadio"></div>
                                    <span>집에서도 즐길 거리가 한가득이지, 배달음식을 시켜 넷플릭스를 본다.</span>
                                </label>
                                <label>
                                    <input type="radio" name="survey1" />
                                    <div className="fakeRadio"></div>
                                    <span>시간되는 사람~? 당장 나가서 친구들을 만난다.</span>
                                </label>
                            </div>
                        </div>
                    </li>
                </ul>
                <Link to='/result' className='btn wrapper'>
                    <span>다음 페이지 ( 1/5 )</span>
                </Link>
            </div>
        </div>
    );
}

export default Test;
