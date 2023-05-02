import Plane from "include/Plane";
import midBg from 'img/mid_bg.png'
import ico3DModeling from 'img/ico_3d_modeling.png'
import imgFirst from 'img/sample1.png'
import imgSecond from 'img/sample2.png'
import imgChart from 'img/chart.png'
import icoChart from 'img/ico_3d_chart.png'
import icoIntro from 'img/ico_3d_love.png'
import icoTrip from 'img/ico_3d_backpack.png'
import icoTest from 'img/ico_3d_goal.png'
import icoGlobal from 'img/ico_3d_global.png'
import logo from 'img/logo_symbol.png'
import imgKo from 'img/img_ko.png'
import { Link } from "react-router-dom";
import sample from 'img/sample1.png'
import SelectFlag from "include/SelectFlag";
import ENFJ from 'img/mbti/ENFJ.png'
import ISTJ from 'img/mbti/ISTJ.png'
import mbtiMain from 'img/mbti_main.png'

function Home() {
    return (
    <>
        <Plane />
        <main>
            <div className="wrapper">
                <div className="visual">
                    <div className="visual__info">
                        <div className="ani-circle"></div>
                        <div className="tit">
                            <h1>광주광역시 동구</h1>
                            <h2>
                                <span className="underline">여행 스타일</span>
                                <span>테스트</span>
                            </h2>
                            <h3>
                                <img src={ico3DModeling} alt="" className="ico_3d_modeling" />
                                <span>ADMIN</span>
                            </h3>
                        </div>
                        {/* <Link to="/test" className="btn big">
                            <img src={ico3DModeling} alt="" className="ico_3d_modeling" />
                            <span>관리자</span>
                        </Link> */}
                    </div>
                    <div className="visual__image">
                        <img src={mbtiMain} alt="" />
                    </div>
                </div>
            </div>
            <div className="mid_bg">
                <img src={midBg} alt="mid_bg" />
            </div>

            <div className="main__content wrapper">
                <div className="content__box2">
                    <Link to="/chart" className="btn_intro">
                        <img src={icoChart} alt="chart" />
                        <p>통계</p>
                    </Link>
                    <Link to="/types" className="btn_trip">
                        <img src={icoTrip} alt="types" />
                        <p>여행스타일</p>
                    </Link>
                    <Link to="/test/admin" className="btn_intro color1">
                        <img src={icoTest} alt="test" />
                        <p>테스트문항</p>
                    </Link>
                    <Link to="/trip" className="btn_trip color2">
                        <img src={icoGlobal} alt="trip" />
                        <p>여행지</p>
                    </Link>
                </div>
            </div>
            <div className="btmBg"></div>
        </main>
    </>
    );
}
export default Home;