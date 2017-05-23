
require.config({
	baseUrl : "js/lib",
	paths : {
		"jquery" : "jquery-1.11.3.min",
		"particle" : "particles.min",
		"placeholder" : "jquery.enplaceholder",
		"bootstrap" : "bootstrap.min",
		"bootstrap-dialog" : "bootstrap-dialog.min",
		"validate" : "jquery.validate.min",
		"validatezh" : "messages_zh"
	},
	shim : {
		"placeholder" : {
			deps : ['jquery'],
			exports : 'jQuery.fn.placeholder' 	
		},
		"bootstrap" : {
			deps : ['jquery']
		} 
	}
}); 

//页面配置	
require(["jquery","bootstrap","particle","placeholder","validate","validatezh","bootstrap-dialog"],function($,bootstrap,particle,placeholder,validate,validatezh,BootstrapDialog){
		
	//粒子插件	
	particlesJS('particles',
	  {
		"particles": {
		  "number": {
			"value": 80,
			"density": {
			  "enable": true,
			  "value_area": 800
			}
		  },
		  "color": {
			"value": "#ffffff"
		  },
		  "shape": {
			"type": "circle",
			"stroke": {
			  "width": 0,
			  "color": "#000000"
			},
			"polygon": {
			  "nb_sides": 5
			}
		  },
		  "opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
			  "enable": false,
			  "speed": 1,
			  "opacity_min": 0.1,
			  "sync": false
			}
		  },
		  "size": {
			"value": 5,
			"random": true,
			"anim": {
			  "enable": false,
			  "speed": 20,
			  "size_min": 0.1,
			  "sync": false
			}
		  },
		  "line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		  },
		  "move": {
			"enable": true,
			"speed": 3,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"attract": {
			  "enable": false,
			  "rotateX": 600,
			  "rotateY": 1200
			}
		  }
		},
		"interactivity": {
		  "detect_on": "canvas",
		  "events": {
			"onhover": {
			  "enable": false,
			  "mode": "repulse"
			},
			"onclick": {
			  "enable": true,
			  "mode": "push"
			},
			"resize": true
		  },
		  "modes": {
			"grab": {
			  "distance": 400,
			  "line_linked": {
				"opacity": 1
			  }
			},
			"bubble": {
			  "distance": 400,
			  "size": 40,
			  "duration": 2,
			  "opacity": 8,
			  "speed": 3
			},
			"repulse": {
			  "distance": 200
			},
			"push": {
			  "particles_nb": 4
			},
			"remove": {
			  "particles_nb": 2
			}
		  }
		},
		"retina_detect": true,
		"config_demo": {
		  "hide_card": false,
		  "background_color": "#b61924",
		  "background_image": "",
		  "background_position": "50% 50%",
		  "background_repeat": "no-repeat",
		  "background_size": "cover"
		}
	  }
	);
	
	//placeholder增强工具
	$('#search-bar').placeholder({isUseSpan:true});
	
	//search-type
	$("#search-type .range").on('click',function(){

		$(this).addClass("active").find("input").attr('checked',"checked");
		$(this).siblings().removeClass("active").find("input").removeAttr("checked");

		return false;
	})

	// 判断是否为合法字符(a-zA-Z0-9-_)
    jQuery.validator.addMethod("isRightfulString", function(value, element) {       
         return this.optional(element) || /^[A-Za-z0-9_-]+$/.test(value);       
    }, "判断是否为合法字符(a-zA-Z0-9-_)"); 

	//验证表单
	$("#search-form").validate({
		submitHandler : function(form){
			console.log("提交");
			form.submit();
		},
		groups : {

		},
		onfocusout : false,
		onkeyup : false,
		errorPlacement:function(error, element) { 
			if( element.attr("name") == "key" )
			{
				BootstrapDialog.show({
					type : "type-danger",
					size : "size-small",
					title : error.text(),
					cssClass : "dialogtip"
				});
			}
		},
		rules : {
			key : {
				required : true,
				minlength : 2,
				maxlength : 16,
				isRightfulString : true
			}
		},
		messages : {
			key : {
				required : "请输入有效的关键字",
				minlength : "您输入的关键字过短",
				maxlength : "您输入的关键字过长",
				isRightfulString : "存在非法字符"
			}
		} 
	});
	
	
})	

