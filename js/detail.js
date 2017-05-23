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

require(['jquery','bootstrap','bootstrapDatepicketZH','bootstrapDatepicket','bootstrapDrap'],function($,bootstrap,bootstrapDatepicketZH,bootstrapDatepicket,bootstrapDrap){
	

	$(".input-daterange").datepicker({
		language: "zh-CN",
		orientation: "bottom left"
	})	
	
});

require(['tabfn'],function(tabCountFn){
	
	//tab
	$("#detail-tab-bar a").click(function(e){
		e.preventDefault();
		$(this).tab("show");	
	})
		
	
	$("#detail-tab-bar a").on('show.bs.tab', function (e) {
		//console.log( e.target );
		//console.log( e.relatedTarget );
		var currentCount = $( $(e.target).attr('href') );
		//console.log( currentCount )
		new tabCountFn( currentCount );
		currentCount.find('.subnav a.btn').eq(0).trigger( "change.subnav");
	})	
	
	$('#detail-tab-bar a:first').tab('show');		
})	




	
	