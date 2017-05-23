// JavaScript Document
require.config({
	baseUrl: "js/lib",
	paths : {
			"tool" : "tool",
			"jquery" : "jquery-1.11.3.min",
			"bootstrap" : "bootstrap.min",
			"bootstrapTable" : "bootstrap-table",
			"bootstrapTableZH" : "bootstrap-table-zh-CN",
			"bootstrapDrap" : "dropdowns-enhancement.min",
			"bootstrapDatepicket" : "bootstrap-datepicker.min",
			"bootstrapDatepicketZH" : "bootstrap-datepicker.zh-CN.min",
			"bootstrap-dialog" : "bootstrap-dialog.min"
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
			"bootstrapDrap" : {
				deps : ['jquery','bootstrap'],
				exports : "jQuery.fn.bootstrapDrap"
			},
			"bootstrapDatepicketZH" : {
				deps : ['jquery','bootstrapDatepicket']
			},
			"bootstrapDatepicket" : {
				deps : ['jquery','bootstrap'],
				exports : "jQuery.fn.bootstrapDatepicket"
			}
		}		
});

require(["jquery","bootstrap","bootstrapTable","bootstrapTableZH","bootstrap-dialog"],function( $ , bootstrap , bootstrapTable , bootstrapTableZH ,BootstrapDialog){
	
		
	
		var format = {
			portrait : function(value,row,index){  
				return["<img src="+ value +">"].join('');
			},
			infor : function(value,row,index){
				return ['<div class="clearfix">',
						'<p><a href="javascript:void(0)" class="person-name"><span style="font-size:22px">',value.name,
						'</span></a>&nbsp;&nbsp;&nbsp;&nbsp;<span>性别：',value.sex,
						'</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>年龄：',value.age,'岁</span></p>',
						'<p><span>手机号码：',value.tel,'</span></p>',
						'<p><span>身份证号：',value.id,'</span></p>',
						'<p><span>地址：',value.add,'</span></p>',
						'</div>'
				].join('');
			},
			operate : function( value , row , index ){
				
				var isFollow = value ? "已标记": "标记";
				var isFollowStyle = value ? "btn-followed ": "btn-follow";
 				return ['<div class="table_handle_warp">',
				        '<a href="javascript:;" class="btn btn-sm follow '+ isFollowStyle +' ">'+isFollow+'</a>',
						'&nbsp;&nbsp',
						'<a href="javascript:;" class="btn btn-sm btn-handle watch">查看</a>',
						'</div>'
				].join('');
			}
		}
		
		var event = {
				infor : {
					'click .person-name' : function(e, value, row, index){
						BootstrapDialog.alert( '你点击了' + JSON.stringify( row ) )
					}
				},
				operate : {
					'click .follow' : function(e, value, row, index){
						BootstrapDialog.alert( value + '/' + JSON.stringify(row) + '/' + index );
					},
					'click .watch' : function(e, value, row, index){
						BootstrapDialog.alert( value + '/' + JSON.stringify(row) + '/' + index );
					}	
				}
			}

		//grid
		$("#table").bootstrapTable({
				//classes : ' table-no-bordered',
				undefinedText : "未找到结果",
				url : './data2.json',
				pagination : true,
				pageSize : 20,
				idField : 'pic',	
				paginationPreText : '上一页',
				paginationNextText : '下一页',
				columns: [{
						field: 'pic',
						title: '照片',
						align : 'center',
						width : '180',
						formatter :format.portrait
					}, {
						field: 'information',
						title: '信息',
						sortable : true,
						width : '450',
						order : 'asc',
						events : event.infor,
						formatter : format.infor,
						sorter : function(a,b){
							$.each(a,function( item ){
								console.log( item.name )	
							})
							$.each(b,function( item ){
								console.log( item.name )	
							})
						}
					}, {
						field: 'source',
						title: '来源'
					}, {
						field: 'time',
						title: '记录时间'
					}, {
						field: 'operate',
						title: '操作',
						align: 'center',
						events : event.operate,
						formatter : format.operate
					}
				]
		});
})


require(['tool','bootstrapDrap','bootstrapDatepicketZH','bootstrapDatepicket'],function( tool , bootstrapDrap , bootstrapDatepicketZH , bootstrapDatepicket ){

	$("[data-collapsible]").collapsible();
	$("[data-pills]").pills({afterSelect : function(value){ alert(value) }});
	$(".input-daterange").datepicker({
        language: "zh-CN",
        orientation: "bottom left"
	})
	
})

