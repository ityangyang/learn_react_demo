import React, { Component } from 'react';
import './timer.css';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            now: new Date(),
            seconds: '',
            hour_minutes: '',
            week: '',
            day: '',
            active: false
        };
        // this.toggleTxtisActive = this.toggleTxtisActive.bind(this);
        this.showNowTxt = this.showNowTxt.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

        this.updateTimeTxt();
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            now: new Date()
        });

        this.updateTimeTxt();
    }

    formatNum(num) {
        return num < 10 ? `0${num}` : num;
    }

    getWeekInfo() {
        let weekday = this.state.now.getDay();
        let formatWeekDay = "";
        switch (weekday) {
            case 1:
                formatWeekDay = "星期一";
                break;
            case 2:
                formatWeekDay = "星期二";
                break;
            case 3:
                formatWeekDay = "星期三";
                break;
            case 4:
                formatWeekDay = "星期四";
                break;
            case 5:
                formatWeekDay = "星期五";
                break;
            case 6:
                formatWeekDay = "星期六";
                break;
            default:
                formatWeekDay = "星期日";
        }
        return formatWeekDay;
    }

    updateTimeTxt() {
        this.setState({
            seconds: this.formatNum(+this.state.now.getSeconds()),
            hour_minutes: `${this.formatNum(+this.state.now.getHours())}:${this.formatNum(+this.state.now.getMinutes())}`,
            week: this.getWeekInfo(),
            day: `${this.state.now.getFullYear()}年${this.formatNum(+this.state.now.getMonth() + 1)}月${this.formatNum(+this.state.now.getDate())}日`
        });
    }

    showNowTxt(e) {
        console.log(this.state.now);
        e.stopPropagation();
    }

    toggleTxtisActive = () => {
        this.setState((preState) => {
            return {
                active: !preState.active
            }
        })
    }

    handleClick() {
        const {handleTimerClick} = this.props;
        handleTimerClick();
    }

    render() {
        return (
            <div className="App">
                <div className='timer' onClick={this.handleClick}>
                    <a href="http://time.tianqi.com/">北京时间-国家授时中心标准时间</a>
                    <div className={this.props.isDiffBG ? 'isdiffbgcolor time-block' : 'time-block'}>
                        <span>钟表icon</span>
                        <span className="seconds" onClick={this.showNowTxt}>
                            {this.state.hour_minutes}
                            <span>{this.state.seconds}</span>
                        </span>
                        <span className="day">
                            <span className={this.state.active ? 'isActive' : ''} onMouseEnter={this.toggleTxtisActive} onMouseLeave={this.toggleTxtisActive}>{this.state.week}</span>
                            <span>{this.state.day}</span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;