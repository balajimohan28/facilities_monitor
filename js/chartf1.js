window.onload = function(){
    var dom = document.getElementById("container");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    var odata = {'air': [120468160,
      231487184,
      406122654,
      451675350,
      418819750,
      436396986,
      466714069,
      445259978,
      467006564,
      491349205,
      464828304,
      452310276,
      430562186,
      427029743,
      417033537,
      427138587,
      423617848,
      377922214,
      361560189,
      330660829],
     'water': [11359764,
      17072277,
      18335280,
      16714651,
      14957476,
      15923967,
      17189771,
      14227028,
      11425822,
      8238793,
      7815906,
      7569627,
      11441212,
      11816567,
      9397482,
      9892580,
      10236405,
      9769675,
      11677886,
      10576985],
     'land': [536235,
      721437,
      516650,
      477180,
      590004,
      637080,
      511986,
      2772204,
      529799,
      465589,
      502179,
      605071,
      628841,
      566337,
      789460,
      731772,
      1173252,
      1065458,
      968153,
      1546317]};
    var data1 = [];
    var data2 = [];
    var data3 = [];
    var data1 = odata["air"]
    var data2 = odata["water"]
    var data3 = odata["land"]
    var xAxisData = [];

    for (var i = 1999; i < 2019; i++) {
        xAxisData.push(i);
    }




    option = {
        title: {
            text: 'Trend of Indusrial Waste'
        },
        legend: {
            data: ['Air', 'Water', 'Land'],
            align: 'left'
        },
        toolbox: {
            // y: 'bottom',
            feature: {
                magicType: {
                    type: ['stack', 'tiled']
                },
                dataView: {},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        tooltip: {},
        xAxis: {
            data: xAxisData,
            silent: false,
            splitLine: {
                show: false
            }
        },
        yAxis: {
        },
        series: [{
            name: 'Air',
            type: 'bar',
            data: data1,
            animationDelay: function (idx) {
                return idx * 10;
            }
        }, {
            name: 'Water',
            type: 'bar',
            data: data2,
            animationDelay: function (idx) {
                return idx * 10 + 100;
            }
        },{
            name: 'Land',
            type: 'bar',
            data: data3,
            animationDelay: function (idx) {
                return idx * 10 + 200;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

}