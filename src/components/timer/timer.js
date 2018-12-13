import React, { Component } from 'react';
import './timer.css';

class Timer extends Component {
    render() {
        return (
            <div className="App">
                <div class="timer">
                    <a href="http://time.tianqi.com/">北京时间-国家授时中心标准时间</a>
                    <div class="time-block">
                        <span>钟表icon</span>
                        <span class="seconds">
                            11:21
                    <span>41</span>
                        </span>
                        <span class="day">
                            <span>星期几</span>
                            <span>2018年几月九日</span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;