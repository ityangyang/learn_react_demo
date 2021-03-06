import React, {Component} from 'react';
import './graph.css';
import echarts from "echarts";

class Graph extends Component {

    handleClick() {
        const {handleGraphClick} = this.props;
        handleGraphClick();
    }

    drawGraph(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: data || [5, 20, 36, 10, 10, 20]
            }]
            
        });
    }

    componentDidMount() {
        this.drawGraph();
    }

    componentWillReceiveProps(nextProps) {
        this.drawGraph(nextProps.histoGramData);
    }

    render() {
        return (
            <div id="main" className="graph" onClick={this.handleClick.bind(this)}>
            </div>
        )
    }
}

export default Graph;
