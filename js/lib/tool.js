// JavaScript Document


define(["jquery","bootstrap-dialog"],function(jquery,BootstrapDialog){
	
	(function( $ ){
	
	$.fn.collapsible = function( option ){
		
		var defaults = {
			minHeight : 0, 
			colse : "collapsible-colse",
			setCollapsible : "collapsible-true"
			
		};
		
		var options = $.extend( {} ,  defaults , option );
	
		return this.each(function(){
			
			var This = $(this);
			var oUl = This.find("ul.range");
			var minHeight = options.minHeight || oUl.find("li").outerHeight(true);
			var ulHeight = (function(){ 
				var isColse = This.hasClass( options.colse );
				This.removeClass(options.colse);
				var a = oUl.outerHeight();
				if( isColse ) This.addClass( options.colse );
				return a;
			})();
			var iconCossapsible = $("<div class='collapsible-more up'></div>");
			iconCossapsible.on('click',function(){
				This.toggleClass( defaults.colse );
				This.find(".collapsible-more").toggleClass( "up" );
			})
			
			if( ulHeight > minHeight)
			{
				This.addClass( options.colse , options.setCollapsible )	;
				This.prepend( iconCossapsible );
			}
		})
	}
	
})(jquery);

;(function($){
	
	$.fn.pills = function( option ){
		
		var defaults = {
			afterSelect : function( value ){ 
				console.log( value )
			}
		};
		
		var options = $.extend( defaults , option )
		
		return this.each(function(){
			var This = $(this);
			var pills = This.find("li.pill");
			This.on("click","a",function(){
				$(this).addClass("active").parent().siblings(".pill").find("a").removeClass("active");
				options.afterSelect( $(this).attr('type') );
			})
		});
	}
	
})(jquery);
	
		
	return {
		collapsible : $.fn.collapsible,
		pills : $.fn.pills
	}
})


