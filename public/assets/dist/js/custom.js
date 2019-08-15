
function zalert(type = 'success' , title = "ALERT !" , text= "Success"){

	Swal.fire({
		type: type,
		title: title,
		text: text,
	})
}

function toast(type = 'success' , title ="Processing Data ... " , position = 'top-end' , timer = 2000){
const Toast = Swal.mixin({
	toast: true,
	position: position,
	showConfirmButton: false,
	timer: timer,
	showCloseButton: true
});

Toast.fire({
	type: type,
	title: title
})
}

function error( title ="Error" , position = 'top' ){
	const Toast = Swal.mixin({
		toast: true,
		position: position,
		showConfirmButton: false,
		timer: false,
		showCloseButton: true
	});
	
	Toast.fire({
		type: 'error',
		title: title
	})
}
	

function hidetoast(){
	$('.swal2-container').hide();
}
function hidebbox(){
	$('.bootbox').modal('hide');
}

function checkmail(mail) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	
	if(!mail.match(emailReg)){
		return true
	} 
	else return false;      
}

function number(val){
	val  = val+'';
	return parseFloat(val.replace( /[^\d\.\-]/g, ""));
}

function comma(val){

	nStr = number(val);
	nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}


var json_decode = function(text){
	try {
		var temp = JSON.parse(text);
	}
	catch(err) {
		var temp = [];
	}
	return temp;
}

var json_encode = function (json){
	return JSON.stringify(json);
}

function popup(url, h, w) {
	var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
	var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;
	
	var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
	
	var h 	= (h && h > 0)?h:570;
	var w 	= (w && w > 0)?w:1024;
	
	var systemZoom = width / window.screen.availWidth;
	var left = (width - w) / 2 / systemZoom + dualScreenLeft
	var top = (height - h) / 2 / systemZoom + dualScreenTop
	var newWindow = window.open(url, "_blank", 'scrollbars=yes, width=' + w / systemZoom + ', height=' + h / systemZoom + ', top=' + top + ', left=' + left);
	
	if (window.focus) newWindow.focus();
	return newWindow;
}

 function round(val,decimals) { 
	var y = number(val);
		y = (Math.abs(y) > 0.000000001)?y:0;
		if( decimals === 0 ){
			decimals = 0;
		}else{
			decimals = (decimals)?decimals:2;
		}
	var d = decimals*1+8;
		d = (d > 12)?12:d;
		y = Number(Math.round((y).toFixed(d)+'e'+d)+'e-'+d).toFixed(d);
		res = Number(Math.round((y+"").replace(/[^0-9.-]/g,'')+'e'+decimals)+'e-'+decimals).toFixed(decimals); 
		return number(res);
};

function dialog( title ,html, callback, confirm = 'SUBMIT' , cancel = "CANCEL"){

	bootbox.dialog({
		title: title ,
		message: html,
		buttons: {
			cancel: {
				label: cancel,
				className: 'btn-danger',
				callback: function(){
					callback(false);
					hidetoast();
				}
			},
	
			ok: {
				label: confirm,
				className: 'btn-success',
				callback: function(){
					callback(true)
					return false;
				}
			}
		}
	});

	
	
}


// <><><><><><><> Select Textarea and input with name <><><><><><><><><> //
function $$($data){

	var firstchar = $data.charAt(0);
	
    if(firstchar == '%'){
		var data = $data.slice(1);
		var ol = $("textarea[name="+data+"]");
		return ol;
    }
    else{
   	 	var ol = $("input[name="+$data+"]");
		return ol;
	}
}
// <><><><><><><><><><><><><><><><> //


class Database {
	constructor() {
		this.url = null; //initial url
		this.table = null; //initial table
		this.hash = null; //initial hash
	}
	// <><><><><><><> Send Function <><><><><><><><><> //
	send (method, data, callback = null) {
		var self = this;
		//check url and table is set or not
		if (self.url == null || self.table == null) {
			throw "Please Set db Table and API url";
		}
		var json = {};
		json['hash'] = self.hash;
		json[method] = method;
		json['data'] = data;
		json['table'] = self.table;
		json = JSON.stringify(json);
		$.ajax({
			url: self.url,
			method: 'post',
			dataType: "json",
			data: { json: json },
			success: function (res) {
				if (callback != null) {
					callback(res);
				}
			}
		});
	};
	// <><><><><><><><><><><><><><><><> //
}

$.fn.allowNumOnly = function() {
	$(this).keypress(function(event){
		console.log(event);
		if(event.which != 8 && isNaN(String.fromCharCode(event.which)) || event.keyCode == 32){
				event.preventDefault(); //stop character from entering input
			}
	})
	
}

$.allowNumOnly =  function (el){
    element = el.split(',');

    $.each(element ,function(index, el){
        $$(el).allowNumOnly();
    })


}


function log(a){
	for (var i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}
	
