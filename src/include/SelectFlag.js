import React, { useState } from 'react';
import imgKorea from 'img/flag_korea.png'
import imgChina from 'img/flag_china.png'
import imgUsa from 'img/flag_usa.png'
import imgJapan from 'img/flag_japan.png'

function SelectFlag({type}) {
    const [isShow, setIsShow] = useState(true);
    const [selected, setSelected] = useState('ko');
    const [viewSelect, setviewSelect] = useState(false);

    const clickbtn = (e) => {
        setSelected(e)
        viewSelect==true
        ? setviewSelect(false)
        : setviewSelect(true)
    }

    return (
        <div className={`selectFlag ${type=='main'?'type1':'type2'} ${viewSelect?'active':''}`}>
            <div className={viewSelect?'viewAll':''}>
                <button className={selected=='ko'?'selected':''} onClick={() => clickbtn('ko')}>
                    <img src={imgKorea} alt="korea"/>
                    <span>KO</span>
                </button>
                {/* <button className={selected=='ch'?'selected':''} onClick={() => clickbtn('ch')}>
                    <img src={imgChina} alt="china"/>
                    <span>CH</span>
                </button> */}
                <button className={selected=='en'?'selected':''} onClick={() => clickbtn('en')}>
                    <img src={imgUsa} alt="english"/>
                    <span>EN</span>
                </button>
                {/* <button className={selected=='jp'?'selected':''} onClick={() => clickbtn('jp')}>
                    <img src={imgJapan} alt="japan"/>
                    <span>JP</span>
                </button> */}
            </div>
        </div>
    );
}

export default SelectFlag;
