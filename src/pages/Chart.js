import React, {useState} from 'react';
import logo from 'img/logo_symbol.png'
import btnBack from 'img/btn_back.png'
import {Link, useNavigate} from 'react-router-dom';
import icoSearch from 'img/ico_search.png'
import imgChart from 'img/chart.png'
import sample from 'img/sample1.png'
import Nav from 'include/Nav';
import SubHeader from 'include/SubHeader';

const charData = [
    {
        name: '무등산 수박농부',
        mbti: 'ISTP',
        color:'red',
    }, {
        name: '광주 역사학자',
        mbti: 'INTP',
        color:'orange',
    }, {
        name: '광주 100만 유투버',
        mbti: 'ESTP',
        color:'blue',
    }, {
        name: 'ACC 무용가',
        mbti: 'ENTP',
        color:'skyblue',
    }, {
        name: '헌책방거리 서점원',
        mbti: 'ISTJ',
        color:'green',
    }, {
        name: '너릿재 조경사',
        mbti: 'INTJ',
        color:'yellowgreen',
    }, {
        name: '동구 관광 매니저',
        mbti: 'ESTJ',
        color:'violet',
    }, {
        name: '충장축제 기획자',
        mbti: 'ENTJ',
        color:'purple',
    }, {
        name: '충장로 인디가수',
        mbti: 'ISFP',
        color:'pink',
    }, {
        name: '예술의 거리 화가',
        mbti: 'INFP',
        color:'yellow',
    }, {
        name: '야시장 푸트파이터',
        mbti: 'ESFP',
        color:'aqua',
    }, {
        name: 'K-POP 스타의 거리 댄서',
        mbti: 'ENFP',
        color:'aqua',
    }, {
        name: '5.18 주먹밥 요리사',
        mbti: 'ISFJ',
        color:'brown',
    }, {
        name: '춘설차 다도 선생님',
        mbti: 'INFJ',
        color:'crimson',
    }, {
        name: '동명동 바리스타',
        mbti: 'ESFJ',
        color:'cadetblue',
    }, {
        name: '공룡알빵 제빵사',
        mbti: 'ENFJ',
        color:'coral',
    }
]

function Chart() {
    const navigate = useNavigate()

    const TypesCharts = () =>
        charData.map((e,i) =>
            <div className="box" key={i}>
                <div className="chart">
                    <span className='dot' style={{backgroundColor:e.color}}></span>
                    <p className='percent'>38%</p>
                </div>
                <h3>{e.name}</h3>
                <h4>{e.mbti}</h4>
            </div>
    )

    return (
        <div className="Chart">
            <SubHeader title={'여행스타일 테스트 통계'} />

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
                                <colgroup>
                                    <col style={{width:'28%'}} />
                                    <col style={{width:'18%'}} />
                                    <col style={{width:'18%'}} />
                                    <col style={{width:'18%'}} />
                                    <col style={{width:'18%'}} />
                                </colgroup>
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
                            <img src={imgChart} alt="" style={{margin:'20px 0'}} />
                            <div className="typesChartData">
                                <TypesCharts />
                            </div>
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
