import React, {useState} from 'react';
import logo from 'img/logo_symbol.png'
import btnBack from 'img/btn_back.png'
import {Link, useNavigate} from 'react-router-dom';
import icoSearch from 'img/ico_search.png'
import sample from 'img/sample1.png'
import Nav from 'include/Nav';

const charData = [
    {
        name: '무등산 수박농부',
        mbti: 'ISTP',
    }, {
        name: '광주 역사학자',
        mbti: 'INTP',
    }, {
        name: '광주 100만 유투버',
        mbti: 'ESTP',
    }, {
        name: 'ACC 무용가',
        mbti: 'ENTP',
    }, {
        name: '헌책방거리 서점원',
        mbti: 'ISTJ',
    }, {
        name: '너릿재 조경사',
        mbti: 'INTJ',
    }, {
        name: '동구 관광 매니저',
        mbti: 'ESTJ',
    }, {
        name: '충장축제 기획자',
        mbti: 'ENTJ',
    }, {
        name: '충장로 인디가수',
        mbti: 'ISFP',
    }, {
        name: '예술의 거리 화가',
        mbti: 'INFP',
    }, {
        name: '야시장 푸트파이터',
        mbti: 'ESFP',
    }, {
        name: 'K-POP 스타의 거리 댄서',
        mbti: 'ENFP',
    }, {
        name: '5.18 주먹밥 요리사',
        mbti: 'ISFJ',
    }, {
        name: '춘설차 다도 선생님',
        mbti: 'INFJ',
    }, {
        name: '동명동 바리스타',
        mbti: 'ESFJ',
    }, {
        name: '공룡알빵 제빵사',
        mbti: 'ENFJ',
    }
]

function TripAdmin() {
    const navigate = useNavigate();
    const [selectitem, setSelectitem] = useState([]);

    const CharItems = () => charData.map(
        (e, i) => <button
                    key={i}
                    onClick={() => {
                        if (selectitem.indexOf(e.mbti) != -1) { // 이미 선택된 mbti라면 해제
                            let result = selectitem.filter(item => item !== e.mbti)
                            setSelectitem(result)
                        } else {
                            if (selectitem.length >= 3) {
                                alert('최대 3개 선택 가능합니다.')
                                return
                            }
                            let arr = [...selectitem]
                            arr.push(e.mbti)
                            setSelectitem(arr)
                        }
                    }}
                    className={selectitem.indexOf(e.mbti) != -1 && 'active'}
                >
                    {e.name}/{e.mbti}
                </button>
    )
    return (
        <div className="TripAdmin">
            <header className='subHeader'>
                <div className="wrapper">
                    <Link onClick={() => navigate(-1)} className='btn-back'>
                        <img src={btnBack} alt="back"/>
                    </Link>
                    <div className='text'>
                        <img src={logo} alt="logo"/>
                        <h1>여행지 관리</h1>
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
                        <h3>카테고리</h3>
                        <select name="" id="">
                            <option defaultValue="">음식</option>
                            <option defaultValue="">숙박</option>
                            <option defaultValue="">체험</option>
                            <option defaultValue="">쇼핑</option>
                            <option defaultValue="">전시공연</option>
                        </select>

                        <h3>여행지 이름</h3>
                        <input type="text" defaultValue=""/>

                        <h3>주소</h3>
                        <input type="text" defaultValue=""/>

                        <h3>여행스타일</h3>
                        <select name="" id="">
                            <option defaultValue="">선택</option>
                        </select>

                        <h3>여행지속성</h3>
                        <select name="" id="">
                            <option defaultValue="">선택</option>
                        </select>

                        <h3>여행동기</h3>
                        <select name="" id="">
                            <option defaultValue="">선택</option>
                        </select>

                        <h3>이미지 등록</h3>
                        <p>대표 이미지 설정 ( 업로드 최대 3개 )</p>
                        <div className="addimg_outer">
                            <div className="addimg">
                                <div className="img">
                                    <img src={sample} alt=""/>
                                </div>
                                <label className="btn mini blue">
                                    <input type="file"/>
                                    <span>이미지 등록하기</span>
                                </label>
                            </div>
                            <div className="addimg">
                                <div className="img">
                                    <img src={sample} alt=""/>
                                </div>
                                <label className="btn mini blue">
                                    <input type="file"/>
                                    <span>이미지 등록하기</span>
                                </label>
                            </div>
                            <div className="addimg">
                                <div className="img">
                                    <img src={sample} alt=""/>
                                </div>
                                <label className="btn mini blue">
                                    <input type="file"/>
                                    <span>이미지 등록하기</span>
                                </label>
                            </div>
                        </div>

                        <h3>캐릭터명 (최대 3개)</h3>
                        <div className="charSelect">
                            <CharItems/>
                        </div>

                        <h3>여행지 설명</h3>
                        <textarea name="" id="" cols="30" rows="10"></textarea>

                        <div
                            style={{
                                height: 50
                            }}></div>
                        <button className='btn'>
                            <span>등록/수정</span>
                        </button>
                    </div>
                </div>
                <Nav />
            </div>
            <div className="btmBg"></div>
        </div>
    );
}

export default TripAdmin;
