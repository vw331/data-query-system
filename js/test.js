// JavaScript Document


require.config({
	baseUrl : "js/lib",
	paths : {
		"jquery" : "jquery-1.11.3.min",
		"bootstrap" : "bootstrap.min",
		"bootstrapTable" : "bootstrap-table",
		"bootstrapDrap" : "dropdowns-enhancement.min",
		"bootstrapTableZH" : "bootstrap-table-zh-CN",
		"bootstrapDatepicket" : "bootstrap-datepicker.min",
		"bootstrapDatepicketZH" : "bootstrap-datepicker.zh-CN.min",
		"bootstrap-dialog" : "bootstrap-dialog.min",
		"validate" : "jquery.validate.min",
		"validatezh" : "messages_zh"
	},
	shim : {
		"bootstrap" : {
			deps : ['jquery']
		},
		"bootstrapTableZH" : {
			deps : ['bootstrapTable'],	
		},
		"bootstrapTable" : {
			deps : ['jquery','bootstrap'],
			exports : "jQuery.fn.bootstrapTable"
		},
		"bootstrapDatepicketZH" : {
			deps : ['jquery','bootstrapDatepicket']
		},
		"bootstrapDrap" : {
				deps : ['jquery','bootstrap'],
				exports : "jQuery.fn.bootstrapDrap"
			},
		"bootstrapDatepicket" : {
			deps : ['jquery','bootstrap'],
			exports : "jQuery.fn.bootstrapDatepicket"
		}
	}	
});

require(['jquery','bootstrap','bootstrapDatepicketZH','bootstrapDatepicket','bootstrapDrap','bootstrapTable','bootstrap-dialog','validate','validatezh'],function($,bootstrap,bootstrapDatepicketZH,bootstrapDatepicket,bootstrapDrap,bootstrapTable,BootstrapDialog,validate,validatezh){
	
	/*var oTable = null;
	
	//传递的参数
	function queryParams(params) {

		return {
		type : "zanzhu",
			
		pageSize: params.limit,
		
		pageNumber: params.pageNumber,
		
		UserName: 4 ,
		
		};
	
	}
		
	$("#table").bootstrapTable({
		url : './data.php',
		pagination : true,
		dataType: "json",
		pageSize : 10,	
		paginationPreText : '上一页',
		paginationNextText : '下一页',
		queryParamsType: "limit",
		queryParams: queryParams,
		search: true, //不显示 搜索框
		showColumns: true, //不显示下拉框（选择显示的列）
		//sidePagination: "server", //服务端请求
		singleSelect : false, //选择多个
		showRefresh : true, //显示刷新按钮
		//striped: true, // 隔行加亮
		detailView: true,
		columns: [{
				field: 'indate',
				title: '入住时间',
			}, {
				field: 'outdate',
				title: '离开时间',
				titleTooltip:'hello world!'
			}, {
				field: 'hotel',
				title: '酒店',
				sorter:function(a,b){
					alert(a+'/'+b)
				},
				sortName : '<b><span style="color:red">abc</span></b>'
			},{
				field: 'add',
				title: '地址'
			},{
				field: 'peer',
				title: '同行'
			}
		]
	});*/

	$("#search-form").validate({
		/*submitHandler : function(){

		},*/
		onfocusout : false,
		onkeyup : false,
		errorPlacement : function(error , element){
			if(element.attr("name")=="key")
			{
				BootstrapDialog.show({
					type : "type-danger",
					size : "size-small",
					title : error.text(),
					cssClass : "dialogtip",
					closable:true	
				});
			}
			
			console.log( error.html() )
		},
		rules : {
			range:{
				required : true,
			},
			key : {
				required : true,
				minlength : 3,
				maxlength : 9
			}
		},
		messages : {
			range : {
				required :"一定要选择的"
			},
			key : {
				required : "一定要输入的啊",
				minlength : "最小不能超过3位数的",
				maxlength : "最大不能超过9位数的"
			}
		}
 	})

	

	$("#btn1").click(function(){
		BootstrapDialog.show({
			type : "type-danger", //type-default , type-danger , type-info ,type-primary , type-success , type-warning 
			size : "size-small",  //size-normal , size-wide , size-large
			title: '请输入正确的信息',
			cssClass : "dialogtip",
			closable:true
		});
		
	})
	
	$("#btn2").click(function(){
		
	})
});
