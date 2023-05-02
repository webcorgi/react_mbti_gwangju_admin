import React, {useState} from 'react';
import logo from 'img/logo_symbol.png'
import btnBack from 'img/btn_back.png'
import {Link, useNavigate} from 'react-router-dom';
import icoSearch from 'img/ico_search.png'
import sample from 'img/sample1.png'
import Nav from 'include/Nav';
import SubHeader from 'include/SubHeader';

function TestAdmin() {
    const navigate = useNavigate();

    return (
        <div className="TestAdmin">
            <SubHeader title={'여행스타일 테스트 문항 관리'} />

            <div className="contents wrapper sub">
                <div className="contents__Types">
                    <div className="formbox">
                        <h3>유형선택하기</h3>
                        <div className="typesChoice">
                            <button className="btn mini active"><span>E/I</span></button>
                            <button className="btn mini"><span>N/S</span></button>
                            <button className="btn mini"><span>T/F</span></button>
                            <button className="btn mini"><span>P/J</span></button>
                        </div>


                        <h3>질문/선택지</h3>
                        <ul className="qnalist">
                            <li>
                                <div className="q">
                                    <span>Q-1</span>
                                    <input type="text" defaultValue="주 2회 약속이 있나요?" />
                                </div>
                                <div className="a">
                                    <div className="a1">
                                        <span>A-1</span>
                                        <input type="text" defaultValue="아니요" />
                                        <select name="" id="">
                                            <option defaultValue="">결과값 선택</option>
                                            <option defaultValue="">E</option>
                                            <option defaultValue="">I</option>
                                        </select>
                                    </div>
                                    <div className="a2">
                                        <span>A-2</span>
                                        <input type="text" defaultValue="네" />
                                        <select name="" id="">
                                            <option defaultValue="">결과값 선택</option>
                                            <option defaultValue="">E</option>
                                            <option defaultValue="">I</option>
                                        </select>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="q">
                                    <span>Q-2</span>
                                    <input type="text" defaultValue="주 2회 약속이 있나요?" />
                                </div>
                                <div className="a">
                                    <div className="a1">
                                        <span>A-1</span>
                                        <input type="text" defaultValue="아니요" />
                                        <select name="" id="">
                                            <option defaultValue="">결과값 선택</option>
                                            <option defaultValue="">E</option>
                                            <option defaultValue="">I</option>
                                        </select>
                                    </div>
                                    <div className="a2">
                                        <span>A-2</span>
                                        <input type="text" defaultValue="네" />
                                        <select name="" id="">
                                            <option defaultValue="">결과값 선택</option>
                                            <option defaultValue="">E</option>
                                            <option defaultValue="">I</option>
                                        </select>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="q">
                                    <span>Q-3</span>
                                    <input type="text" defaultValue="주 2회 약속이 있나요?" />
                                </div>
                                <div className="a">
                                    <div className="a1">
                                        <span>A-1</span>
                                        <input type="text" defaultValue="아니요" />
                                        <select name="" id="">
                                            <option defaultValue="">결과값 선택</option>
                                            <option defaultValue="">E</option>
                                            <option defaultValue="">I</option>
                                        </select>
                                    </div>
                                    <div className="a2">
                                        <span>A-2</span>
                                        <input type="text" defaultValue="네" />
                                        <select name="" id="">
                                            <option defaultValue="">결과값 선택</option>
                                            <option defaultValue="">E</option>
                                            <option defaultValue="">I</option>
                                        </select>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="q">
                                    <span>Q-4</span>
                                    <input type="text" defaultValue="주 2회 약속이 있나요?" />
                                </div>
                                <div className="a">
                                    <div className="a1">
                                        <span>A-1</span>
                                        <input type="text" defaultValue="아니요" />
                                        <select name="" id="">
                                            <option defaultValue="">결과값 선택</option>
                                            <option defaultValue="">E</option>
                                            <option defaultValue="">I</option>
                                        </select>
                                    </div>
                                    <div className="a2">
                                        <span>A-2</span>
                                        <input type="text" defaultValue="네" />
                                        <select name="" id="">
                                            <option defaultValue="">결과값 선택</option>
                                            <option defaultValue="">E</option>
                                            <option defaultValue="">I</option>
                                        </select>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="q">
                                    <span>Q-5</span>
                                    <input type="text" defaultValue="주 2회 약속이 있나요?" />
                                </div>
                                <div className="a">
                                    <div className="a1">
                                        <span>A-1</span>
                                        <input type="text" defaultValue="아니요" />
                                        <select name="" id="">
                                            <option defaultValue="">결과값 선택</option>
                                            <option defaultValue="">E</option>
                                            <option defaultValue="">I</option>
                                        </select>
                                    </div>
                                    <div className="a2">
                                        <span>A-2</span>
                                        <input type="text" defaultValue="네" />
                                        <select name="" id="">
                                            <option defaultValue="">결과값 선택</option>
                                            <option defaultValue="">E</option>
                                            <option defaultValue="">I</option>
                                        </select>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div
                            style={{
                                height: 50
                            }}></div>
                        <button className='btn'>
                            <span>수정하기</span>
                        </button>
                    </div>
                </div>
                <Nav />
            </div>
            <div className="btmBg"></div>
        </div>
    );
}

export default TestAdmin;
