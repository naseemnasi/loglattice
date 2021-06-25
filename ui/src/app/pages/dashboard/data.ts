import { ChartType } from './dashboard.component-chart.model';

function getDaysInMonth(month, year) {
    const date = new Date(year, month, 1);
    const days = [];
    let idx = 0;
    while (date.getMonth() === month && idx < 7) {
        const d = new Date(date);
        days.push(d.getDate() + ' ' + d.toLocaleString('en-us', { month: 'short' }));
        date.setDate(date.getDate() + 1);
        idx += 1;
    }
    return days;
}

const now = new Date();
const labels = getDaysInMonth(now.getMonth(), now.getFullYear());
const revenueAreaChart: ChartType = {
    chart: {
        height: 290,
        type: 'area',
        toolbar: {
            show: false
        },
    },
    tooltip: {
        theme: 'dark',
        x: { show: false }
    },
    stroke: {
        curve: 'smooth',
        width: 4
    },
    series: [{
        name: 'Completed Task',
        data: [1, 3, 0, 4, 6, 2, 5]
    }],
    dataLabels: {
        enabled: false
    },
   
    legend: {
        show: false
    },
    colors: ['#ff427c'],
    xaxis: {
        type: 'string',
        categories: labels,
        tooltip: {
            enabled: false
        },
        axisBorder: {
            show: false
        },
    },
    yaxis: {
        labels: {
            formatter(val) {
                return val + '';
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [45, 100]
        },
    },
};

const patternedDonutChart: ChartType = {
    chart: {
        height: 300,
        type: 'donut',
        dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
        }
    },
    stroke: {
        show: true,
        width: 1,
    },
    series: [11, 14,10],
    colors: ['#68e365', '#b48dd3','#ff427c'],
    labels: ['Todo', 'In Progress','Done'],
    dataLabels: {
        dropShadow: {
            blur: 3,
            opacity: 0.8
        },
        enabled: false
    },
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            enabled: true,
            style: ['verticalLines',  'horizontalLines','slantedLines','squares', 'circles'],
        },
    },
    states: {
        hover: {
            enabled: false
        }
    },
    legend: {
        show: true,
        position: 'right',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 10
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
};

export {  patternedDonutChart, revenueAreaChart };
