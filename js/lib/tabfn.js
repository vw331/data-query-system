// JavaScript Document

define(['jquery','bootstrap','bootstrapTableZH','bootstrapTable'],function($,bootstrap,bootstrapTableZH,bootstrapTable){
	
	var tabCountFn = (function(){
		
		
		var tabCountFn = function(oParent){
				this.tabCountSubNavWarp = oParent.find(".subnav");
				this.tabCountBox = oParent.find(".detail-view-warp");
				this.init();
			};
		
		tabCountFn.prototype.init = function(){
				var This = this;
				this.tabCountSubNavWarp.on("change.subnav","a.btn",function(){
					This.toggle( $(this) );
				});
				this.bind();
			};
			
		tabCountFn.prototype.bind = function(){
				var This = this;
				this.tabCountSubNavWarp.on("click","a.btn",function(){
					$(this).trigger("change.subnav")
				})
			};
		tabCountFn.prototype.toggle = function(obj){
				obj.addClass("btn-quick-active").parents(".pill").siblings().find(".btn").removeClass("btn-quick-active");
				this.render(obj);
			};
		tabCountFn.prototype.render = function(obj){
				var type = obj.data("type");
				new renderInfor( type , this.tabCountBox )
			}			
		
		return tabCountFn;
	})();
	
	
	
	var renderInfor = (function(){

		
		var _oInfo = [];
	
		var _pushView = function( parentType , currentType ){
			var isHere = false;
			
			$.each(  _oInfo , function(index,item){
				if( item.name == parentType )
				{
					item.value.push(currentType);
					isHere = true;
				}
			})
			
			if(!isHere)
			{
				var newType  = {name:parentType,value:[]};
				newType.value.push( currentType )
				_oInfo.push( newType );
			}
		}
		
		var _getView = function( type ){
			var iNow = null;
			$.each( _oInfo , function(index,item){
				$.each( item.value , function(index,value){
					if(value==type)
					{
						iNow = index;
					}
				}) 
			})
			return iNow;
		}
		
		//render构造函数
		var renderFn = function( type , warp){
				this.type = type;
				this.parentType = warp.data('box');
				this.warp = warp;
				this.isCreat = false;
				this.beforecreat()
			};
		
		//在视图创建之前	
		renderFn.prototype.beforecreat = function(){
				
			var This = this;
			var allContent = This.warp.children("div");
			var currentContent = allContent.filter('[show="on"]');
			
			//如果当前正在显示
			if( currentContent.data("content") == This.type )
			{
				this.isCreat = true;
				return false;
			}
			
			//如果当前正在视图中
			var inView = _getView(This.type); 
			if(  inView !== null )
			{
				var index = inView;
				allContent.hide().attr("show","off").eq(index).show().attr("show","on")
				this.isCreat = true;
			}
			
			//继续创建
			if(!this.isCreat)
			{
				allContent.hide().attr("show","off");
				this.creat();
			}
			
		}
		
		//创建视图
		renderFn.prototype.creat = function(){
			
			var This = this;
			var type = This.type;

			var view = $('<div id="'+type+'-warp" data-content="'+type+'" show="on"></div>').appendTo( This.warp );
			
			_pushView(  This.parentType , type )
			
			//创建表格
			this.table( view , type )
			
			return this;
		};
		
		//创建表格
		renderFn.prototype.table = function( warp,type ){
			
			var table = $('<table id="'+ type +'-table"></table>').appendTo(warp);
			var example = $("#"+ type + "-table" );
			
			var columns = [];
			var baseUrl = config.baseUrl;
			
			//获取该类型的配置项
			$.each( config ,function(key,value){
				if( key == type ){
					columns = value.columns;	
				}
			})
			
			//传递的参数
			function queryParams(params) {
				return {
					
					type : type,
						
					pageSize: params.limit,
					
					pageNumber: params.pageNumber,
					
					UserName: 4 ,
				
				};
			
			}
			
			//创建
			example.bootstrapTable({
				url : baseUrl + "?type="+type,
				pagination : true,
				pageSize : 20,	
				paginationPreText : '上一页',
				paginationNextText : '下一页',
				queryParamsType: "limit",
				queryParams: queryParams,
				//sidePagination: "server", //服务端请求
				columns : columns
			})
			
			
		}
		
		return renderFn;
	})()
	
	
	return tabCountFn;
})