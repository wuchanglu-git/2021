const chartdata1 = [
    { color: '#1E9493', name: '农、林、牧、渔业', num: '13', percent: [20, '05'] },
    { color: '#5AD8A6', name: '电力、热力、燃气及水生产供应业', num: '13', percent: [18, '95'] },
    { color: '#6DC8EC', name: '铜仁', num: '13', percent: [15, '05'] },
    { color: '#5B8FF9', name: '贵阳', num: '13', percent: [14, '05'] },
    { color: '#945FB9', name: '安顺', num: '13', percent: [12, '05'] },
    { color: '#FF99C3', name: '黔东南', num: '13', percent: [10, '05'] },
    { color: '#F6BD16', name: '黔南', num: '13', percent: [9, '05'] },
    { color: '#FF9845', name: '黔西南', num: '13', percent: [8, '05'] },
    { color: '#EE5253', name: '遵义', num: '13', percent: [7, '05'] },
]
const chartdata2 = [
    { color: '#EE5253', name: '重大风险(活跃度为0)', today: 8, count: 49 },
    { color: '#FF99C3', name: '较大风险...', today: 8, count: 49 },
    { color: '#F6BD16', name: '一般风险', today: 8, count: 49 },
    { color: '#3F7AFD', name: '低风险', today: 8, count: 49 },
    { color: '#0AA6A8', name: '暂无风险', today: 8, count: 49 }
]
const chartdata3 = [
    { color: '#1E9493', name: '变更事项1', num: '13', percent: [20, '05'] },
    { color: '#5AD8A6', name: '变更事项2', num: '13', percent: [18, '95'] },
    { color: '#6DC8EC', name: '变更事项3', num: '13', percent: [15, '05'] },
    { color: '#5B8FF9', name: '变更事项4', num: '13', percent: [14, '05'] },

]
const vm = new Vue({
    el: "#app",
    data() {
        return {
            data1: [
                {
                    name: "白云区在册企业",
                    num: 21593,
                },
                {
                    name: "规上企业",
                    num: 65,
                },
            ],
            data2: [
                {
                    name: "第一产业企业",
                    num: 822,
                },
                {
                    name: "第二产业企业",
                    num: 2543,
                },
                {
                    name: "第三产业企业",
                    num: 18228,
                },
            ],
            introduce: "目前系统通过数据监测预警共 65 家，系统参考工商总局预警数，建立企业风险预警模型，对监测企业进行评分监测。",
            tabs1: [
                { name: '大类', select: false },
                { name: '小类', select: true }
            ],
            chartdata1,
            chartdata2,
            searchList:[1,2,3,4,5,6],
            companey:{
                name:'贵州海科实业发展有限公司'
            },
            members:[1,2,3,4],
            chartdata3
        };
    },
});
const option1 = {
    // tooltip: {
    //     trigger: 'item',
    //     formatter: '{a} <br/>{b}: {c} ({d}%)'
    // },
    legend: {
        data: ['', '', '', '', '', '', '', '', '', '']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '35%'],
            label: {
                position: 'inner',
                fontSize: 14,
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 900, name: '' },
                { value: 775, name: '' },
                { value: 679, name: '', selected: false },
                { value: 775, name: '' },

            ],
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 2
            },
        },
        {
            name: '访问来源',
            type: 'pie',
            labelLine: {
                show: false
            },
            data: [
                { value: 1048, name: '' },
                { value: 335, name: '' },
                { value: 310, name: '' },
                { value: 251, name: '' },
                { value: 234, name: '' },
                { value: 147, name: '' },
                { value: 135, name: '' },
                { value: 102, name: '' }
            ],
            radius: ["50%", "80%"],
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 2
            }
        }
    ]
};
const chart1 = echarts.init(document.getElementById('chart1'));
// 使用刚指定的配置项和数据显示图表。
chart1.setOption(option1);


const option2 = {
    xAxis: {
        type: 'category',
        data: ['3-11', '12', '13', '14', '15', '16', '17']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [10, 40, 35, 45, 20, 49, 10],
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
    },
    {
        data: [20, 10, 35, 15, 20, 49, 10],
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
    },
    {
        data: [25, 15, 35, 45, 40, 49, 10],
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
    },
    {
        data: [30, 25, 35, 45, 30, 49, 10],
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
    },
    {
        data: [10, 30, 35, 45, 10, 49, 10],
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
    }]
}
const chart2 = echarts.init(document.getElementById('chart2'));
// 使用刚指定的配置项和数据显示图表。
chart2.setOption(option2);

const option3 = {
    // tooltip: {
    //     trigger: 'item',
    //     formatter: '{a} <br/>{b}: {c} ({d}%)'
    // },
    legend: {
        data: ['', '', '', '', '', '', '', '', '', '']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            labelLine: {
                show: false
            },
            data: [
                { value: 1048, name: '' },
                { value: 335, name: '' },
                { value: 310, name: '' },
                { value: 251, name: '' },
                { value: 234, name: '' },
                { value: 147, name: '' },
                { value: 135, name: '' },
                { value: 102, name: '' }
            ],
            radius: ["50%", "80%"],
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 2
            }
        }
    ]
};
const chart3 = echarts.init(document.getElementById('chart3'));
// 使用刚指定的配置项和数据显示图表。
chart3.setOption(option3);

const option4 = {
    xAxis: {
        type: 'category',
        data: ['3-11', '12', '13', '14', '15', '16', '17']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [10, 40, 35, 45, 20, 49, 10],
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
    },
    {
        data: [20, 10, 35, 15, 20, 49, 10],
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
    },
    {
        data: [25, 15, 35, 45, 40, 49, 10],
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
    },
    {
        data: [30, 25, 35, 45, 30, 49, 10],
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
    },
    {
        data: [10, 30, 35, 45, 10, 49, 10],
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
    }]
}
const chart4 = echarts.init(document.getElementById('chart4'));
// 使用刚指定的配置项和数据显示图表。
chart4.setOption(option4);