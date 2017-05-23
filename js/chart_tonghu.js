// JavaScript Document


require.config({
	baseUrl : "js/lib",
    paths: {
    	"jquery" : 'jquery-1.11.3.min',
    	"bootstrap" : "bootstrap.min",
    	"bootstrapDrap" : "dropdowns-enhancement.min",
        "echarts" : 'dist'
    }
});

//初始化页面
/*require(['jquery','bootstrapDrap'],function($,bootstrapDrap){
	$("#chartBox").height( $(window).height()-$(".navbar ").height() )
})*/

//载入ecahrts
require(
    [
    	'jquery',
        'echarts',
        //'echarts/chart/force',
        'echarts/chart/tree'
    ],
    function ($,ec) {

        var url3 = "./tonghu.json";
        var myChart = ec.init(document.getElementById('chartBox'));
        
        myChart.showLoading({
		    text: '正在努力的读取数据中...',    //loading话术
		});

        $.getJSON(url3)
        .success(function(data){ 
        	var option = setTongHuOption(data);

        	//绑定事件
        	var ecConfig = require('echarts/config');

            function focus(param) {
               console.log( param )
            }

            myChart.on(ecConfig.EVENT.CLICK, focus)

            myChart.on(ecConfig.EVENT.FORCE_LAYOUT_END, function () {
                console.log(myChart.chart.force.getPosition());
            });

        	myChart.setOption( option  )  
        })
		.complete( setTimeout(  function(){ myChart.hideLoading() } , 500 ) )
        
    }
)


function setTongHuOption(data){
	var option = {
			// 默认色板
			color:['#48a2fd','#6ce9a1','#d4e157','#4cd1e1','#ff8a65','#ffc400','#bc9fe6','#9ab4f2','#6ce9a1'],
		    // 图表标题
		    title : {
		       text: '张全蛋的同户人员图',
		       x:'left',
		       y:'top'
		    },
		    //提示框
		    tooltip: {
		    	show : true,
		    	formatter : function( arg ){
		    		return "姓名:"+arg.data.name+"<br/>id:"+arg.data.value+"<br>电话号码:"+arg.data.tel;
		    	},
		    	padding : 10
		    }, 
		    //图例
		    /*legend : {
		    	padding:5,
		    	itemGap:10,
		    	selectedMode : false, //关闭图例开关
		    	data:['根节点','子节点']
		    	},*/
		    series : [
		        {
		            name:'根节点',
		            type:'tree',
		            orient: 'vertical',  // vertical horizontal
		            rootLocation: {x: 'center',y: 100}, // 根节点位置  {x: 100, y: 'center'}
		            symbol : 'circle',  //节点图型类型
		            symbolSize : 30,	//节点大小
		            layerPadding : 300, //层间距
		            nodePadding: 20,   //节点间距
		            roam : true,  //缩放和拖拽 false true scale move
			            itemStyle: {
		                normal: { //默认
		                	color: '#48a2fd',
		                    label: {
		                        show: true,
		                        formatter: '{a}',
		                        textStyle : {
		                        	color : '#333333',
		                        	fontFamily :  "微软雅黑",
		                        	baseline : 'middle'
		                        }
		                    },
		                    lineStyle: {
		                        color: '#488bbd',
		                        type: 'curve' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
		                    }
		                },
		                emphasis: { //鼠标移上时
		                	color : '#1c5e8f',
		                	borderWidth : 5,
		                	borderColor : '#1c5e8f',
		                    label: {
		                        show: true,
		                        textStyle : {
		                        	color : '#333333'
		                        }
		                    }
		                }
		            },
		            
		            data: data
		        }
		    ]
		};
}


