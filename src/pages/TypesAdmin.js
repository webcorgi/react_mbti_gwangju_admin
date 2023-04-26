import React from 'react';
import logo from 'img/logo_symbol.png'
import btnBack from 'img/btn_back.png'
import { Link, useNavigate } from 'react-router-dom';
import icoSearch from 'img/ico_search.png'
import sample from 'img/sample1.png'
import Nav from 'include/Nav';


function TypesAdmin() {
    const navigate = useNavigate();
    return (
        <div className="TypesAdmin">
            <header className='subHeader'>
                <div className="wrapper">
                    <Link onClick={() => navigate(-1)} className='btn-back'>
                        <img src={btnBack} alt="back" />
                    </Link>
                    <div className='text'>
                        <img src={logo} alt="logo" />
                        <h1>여행 스타일 관리</h1>
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
                        <h2>ISTP</h2>
                        <h3>여행스타일 한줄설명</h3>
                        <input type="text" defaultValue="올해도 수박농사~~~~~~~~" />

                        <h3>여행스타일 이미지등록</h3>
                        <div className="addimg">
                            <div className="img">
                                <img src={sample} alt="" />
                            </div>
                            <label className="btn mini blue">
                                <input type="file" />
                                <span>이미지 등록하기</span></label>
                        </div>

                        <h3>여행스타일 제목</h3>
                        <input type="text" defaultValue="무등산 수박농부" />

                        <h3>여행스타일 태그등록 (최대 3개)</h3>
                        <div className="addtag">
                            <label>
                                <span>#</span>
                                <input type="text" />
                            </label>
                            <label>
                                <span>#</span>
                                <input type="text" />
                            </label>
                            <label>
                                <span>#</span>
                                <input type="text" />
                            </label>
                        </div>

                        <h3>유형설명</h3>
                        <textarea name="" id="" cols="30" rows="10"></textarea>

                        <h3>여행타입설명</h3>
                        <textarea name="" id="" cols="30" rows="10"></textarea>

                        <h3>최고의 여행메이트</h3>
                        <select name="" id="">
                            <option defaultValue="">선택</option>
                        </select>

                        <h3>최악의 여행메이트</h3>
                        <select name="" id="">
                            <option defaultValue="">선택</option>
                        </select>

                        <div style={{height:50}}></div>
                        <button className='btn'><span>수정하기</span></button>
                    </div>
                </div>
                <Nav />
            </div>
            <div className="btmBg"></div>
        </div>
    );
}

export default TypesAdmin;
