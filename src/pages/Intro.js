import React from 'react';
import logo from 'img/logo_symbol.png'
import btnBack from 'img/btn_back.png'
import imgMbti from 'img/sample1.png'
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'include/Nav';

function Intro() {
    const navigate = useNavigate();
    return (
        <div className="intro">
            <header className='subHeader'>
                <div className="wrapper">
                <Link onClick={() => navigate(-1)} className='btn-back'>
                        <img src={btnBack} alt="back" />
                    </Link>
                    <div className='text'>
                        <img src={logo} alt="logo" />
                        <h1>광주광역시 동구 여행 스타일 테스트란?</h1>
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
                <div className="contents__intro">
                    <div className="img">
                        <img src={imgMbti} alt="mbti" />
                    </div>
                    <div className="text">
                        <div className="tit">
                            <h1>광주광역시 동구</h1>
                            <h2>
                                <span class="underline">여행 스타일</span>
                                <span>테스트</span>
                            </h2>
                            <p className="subtext">나의 성향에 맞춰 떠나보는 광주 여행!</p>
                            <p className="hashtag">#계획러 #집순이 #미식가</p>
                        </div>
                        <p className='intro__text'>
                            나의 성향과 여행 스타일도 알고<br />
                            광주 동구의 숨은 맛집과 명소들을 알아보자!<br /><br />

                            광주광역시 동구를 중심으로 당신의 응답에 따른 색다른 여행지를 추천드립니다.<br /><br />

                            친구, 연인, 가족과 함께 여행스타일을 이야기하고 광주 동구만의 재미를 느껴보세요.
                        </p>
                    </div>
                </div>
                <Nav />
            </div>
            <div className="btmBg"></div>
        </div>
    );
}

export default Intro;
