// JavaScript Document


require.config({
	baseUrl : "js/lib",
    paths: {
    	"jquery" : 'jquery-1.11.3.min',
    	"bootstrap" : "bootstrap.min",
    	"bootstrapDrap" : "dropdowns-enhancement.min",
        "echarts" : 'dist'
    },
    shim : {
    	"bootstrapDrap" : {
    		deps : ['jquery']
    	}
    }
});

//初始化页面
require(['jquery','bootstrapDrap'],function($,bootstrapDrap){
	$("#chartBox").height( $(window).height()-$(".navbar ").height() )
})

//载入ecahrts
require(
    [
    	'jquery',
        'echarts',
        'echarts/chart/force',
        //'echarts/chart/bar'
    ],
    function ($,ec) {
    	var url1 = "./1462933681539.json";
        var url2 = "./1463035454049.json";
        var myChart = ec.init(document.getElementById('chartBox'));
        $.getJSON(url1)
        .success(function(data){
        	option = {
			    color:['#48a2fd','#6ce9a1','#d4e157','#4cd1e1','#ff8a65','#ffc400','#bc9fe6','#9ab4f2','#6ce9a1'],
			    title : {
			        text: '人员关联信息图',
			        x:'left',
			        y:'top',
			        textStyle: {
	                    fontSize: 22,
	                    color: "#333"
	                },
	                subtext: "以上信息来源于bigdata数据库"
			    },
			    tooltip : { //悬浮交互框
			        show : true,
			        padding : 10,
			        formatter: function(e, t, n){
			        	var r = e.data;
			        	return r.name+"</br>"+r.value
			        }
			    },
			    legend: {  //图例
			        show : true,
			        orient : 'vertical',  //'horizontal' | 'vertical'
			        x: 'right',
			        y : '45px',
			        selectedMode : "multiple",  //'single' | 'multiple'
			        data:['root','民航订票','民航离港','机动车辆','出入境','机票预定','国内住宿']
			    },
			    series : [
			        {
			            type:'force',
			            name : "动态关联数据",
			            ribbonType: false,
			            categories: [{
		                    name: "root"
		                },{
		                    name: "同户人员"
		                }, {
		                    name: "民航订票"
		                }, {
		                    name: "民航离港"
		                }, {
		                    name: "机动车辆"
		                }, {
		                    name: "出入境"
		                }, {
		                    name: "机票预定"
		                }, {
		                    name: "国内住宿"
		                }],
			            itemStyle: {
		                    normal: {
		                        label: {
		                            show: !0,
		                            //position: "bottom",
		                            textStyle: {
		                                color: "#ffffff",
		                                fontSize: 12,
		                                fontFamily: "微软雅黑"
		                            }
		                        },
		                        nodeStyle: {
		                            brushType: "both",
		                            borderColor: "rgba(255,255,255,0.4)",
		                            borderWidth: 1
		                        },
		                        linkStyle: {
		                            type: "curve" //curve | line
		                        }
		                    },
		                    emphasis: {
		                    	color : "#3881c9",
		                        label: {
		                            show: !1
		                        },
		                        nodeStyle: {
		                        	 borderColor: "rgba(255,255,255,0.4)",
		                        },
		                        linkStyle: {}
		                    }
		                },
		                gravity: 10,  //向心力系数
		                scaling: 1.5,  //布局缩放系数
			            useWorker: false, 
			            minRadius : 15,
			            maxRadius : 25,
			            gravity: 1.1,
			            scaling: 1.1,
			            roam: 'move',
			            //linkSymbol: 'arrow',
			            nodes: data.nodes,
			            links: data.links,
			            
			        }
			    ]
			}
        	myChart.setOption(option);
        })
        
    }
)


