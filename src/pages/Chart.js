import React, {useState} from 'react';
import logo from 'img/logo_symbol.png'
import btnBack from 'img/btn_back.png'
import {Link, useNavigate} from 'react-router-dom';
import icoSearch from 'img/ico_search.png'
import imgChart from 'img/chart.png'
import sample from 'img/sample1.png'
import Nav from 'include/Nav';

const charData = [
    {
        name: '무등산 수박농부',
        mbti: 'ISTP'
    }, {
        name: '광주 역사학자',
        mbti: 'INTP'
    }, {
        name: '광주 100만 유투버',
        mbti: 'ESTP'
    }, {
        name: 'ACC 무용가',
        mbti: 'ENTP'
    }, {
        name: '헌책방거리 서점원',
        mbti: 'ISTJ'
    }, {
        name: '너릿재 조경사',
        mbti: 'INTJ'
    }, {
        name: '동구 관광 매니저',
        mbti: 'ESTJ'
    }, {
        name: '충장축제 기획자',
        mbti: 'ENTJ'
    }, {
        name: '충장로 인디가수',
        mbti: 'ISFP'
    }, {
        name: '예술의 거리 화가',
        mbti: 'INFP'
    }, {
        name: '야시장 푸트파이터',
        mbti: 'ESFP'
    }, {
        name: 'K-POP 스타의 거리 댄서',
        mbti: 'ENFP'
    }, {
        name: '5.18 주먹밥 요리사',
        mbti: 'ISFJ'
    }, {
        name: '춘설차 다도 선생님',
        mbti: 'INFJ'
    }, {
        name: '동명동 바리스타',
        mbti: 'ESFJ'
    }, {
        name: '공룡알빵 제빵사',
        mbti: 'ENFJ'
    }
]

function Chart() {
    const navigate = useNavigate()

    const TypesCharts = () =>
        charData.map((e,i) =>
            <div className="box" key={i}>
                <div className="chart">
                    <img src={imgChart} alt="" />
                    <p className='percent'>38%</p>
                </div>
                <h3>{e.name}</h3>
                <h4>{e.mbti}</h4>
            </div>
    )

    return (
        <div className="Chart">
            <header className='subHeader'>
                <div className="wrapper">
                    <Link onClick={() => navigate(-1)} className='btn-back'>
                        <img src={btnBack} alt="back"/>
                    </Link>
                    <div className='text'>
                        <img src={logo} alt="logo"/>
                        <h1>여행스타일 테스트 통계</h1>
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
                <div className="contents__Types">
                    <div className="formbox">
                        <div className="chartbox1">
                            <div className="box">
                                <b>모든 참가자</b>
                                <p>1237</p>
                            </div>
                            <div className="box">
                                <b>PC 접속자</b>
                                <p>76</p>
                            </div>
                            <div className="box">
                                <b>MOBILE 접속자</b>
                                <p>1237</p>
                            </div>
                            <div className="box">
                                <b>공유하기 버튼클릭</b>
                                <p>1237</p>
                            </div>
                        </div>

                        <h3>기간별 데이터</h3>
                        <div className="formtable">
                            <table>
                                <tr>
                                    <th></th>
                                    <th>누적</th>
                                    <th>오늘</th>
                                    <th>최근7일</th>
                                    <th>최근30일</th>
                                </tr>
                                <tr>
                                    <th>모든참가자</th>
                                    <td>191</td>
                                    <td>561</td>
                                    <td>7</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <th>PC 접속자</th>
                                    <td>191</td>
                                    <td>561</td>
                                    <td>7</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <th>MOBILE 접속자</th>
                                    <td>191</td>
                                    <td>561</td>
                                    <td>7</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <th>공유하기 버튼클릭</th>
                                    <td>191</td>
                                    <td>561</td>
                                    <td>7</td>
                                    <td>9</td>
                                </tr>
                            </table>
                        </div>

                        <h3>여행스타일별 데이터</h3>

                        <div className="typesChart">
                            <TypesCharts />
                        </div>

                        <div style={{height:50}}></div>

                        <button className="btn"><span>통계결과 다운받기</span></button>
                    </div>
                </div>
                <Nav/>
            </div>
            <div className="btmBg"></div>
        </div>
    );
}

export default Chart;
