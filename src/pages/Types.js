import React from 'react';
import logo from 'img/logo_symbol.png'
import btnBack from 'img/btn_back.png'
import { Link, useNavigate } from 'react-router-dom';
import icoSearch from 'img/ico_search.png'
import imgtype from 'img/sample1.png'
import Nav from 'include/Nav';
import SubHeader from 'include/SubHeader';


const items = [
    {id:0},
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
    {id:8},
    {id:9}
]

function Types() {
    const navigate = useNavigate();

    const Items = () =>
        items.map(() =>
            <Link className="item" to="/result">
                <div className="img">
                    <img src={imgtype} alt="" />
                </div>
                <h2>무등산 수박농부</h2>
                <p className='hashtag'>#만능재주꾼 #효율코패스 #체험여행 #압축여행</p>
            </Link>
        )

    return (
        <div className="Types">
            <SubHeader title={'모든 여행 스타일 유형 보기'} />

            <div className="contents wrapper sub">
                <div className="contents__Types">
                    <div className="searchbox">
                        <input type="text" placeholder='스타일 유형 검색' />
                        <button>
                            <img src={icoSearch} alt="" />
                        </button>
                    </div>
                    <div className="types__items">
                        <Items />
                    </div>
                </div>
                <Nav />
            </div>
            <div className="btmBg"></div>
        </div>
    );
}

export default Types;
