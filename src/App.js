import React from "react";

import "./css.css";
function App() {
  return (
    <div id="wrap">
        <div id="title">
            <a href="#"><p id="WlsTitle">YMS website</p></a>
        </div>
        <div id="icons">
            <a href="https://www.instagram.com/undefined181207/" id="icon" target="_blank" ><img src="/Instagram_logo_2022.svg.webp" alt=""/></a>
            <a href="https://github.com/yms-071218" id="icon" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt=""/></a>
        </div>
        <div id="mySoge">
            <div id="soge">
                <p id="soge1">2023 후반기</p>
                <h1 id="soge2">첫번째 프로젝트</h1>
                <p id="soge3">
                    YMS 개발중
                </p>
            </div>
            <video height="180" width="288"  muted autoPlay loop>
                <source src="/pexels_videos_1851768 (2160p).mp4" type="video/mp4"/>
            </video>
        </div>
        
        <div id="video2">
            <video muted autoPlay loop>
                <source src="/pexels-cottonbro-9669111 (1080p).mp4" type="video/mp4"/>
            </video>
        </div>
        
        <div id="bj">
            <div id="bonMoon"></div>
            <div id="jaLyo"></div>
        </div>
        
        <div id="bin"></div>
    </div>
  );
}

export default App;
