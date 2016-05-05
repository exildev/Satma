/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var map;
function marker_click() {
    var over = document.getElementById("overlay");
    var cont = document.getElementById("overlay-content");
    console.log("click");
    over.removeAttribute("hide");
    console.log("remove");
    window.setTimeout(function () {
        cont.setAttribute("show", "");
    }, 500);
}

var markers = [];
function marker_red(lat, lng, label) {
    var myLatlng = new google.maps.LatLng(lat, lng);
    marker = new CustomMarker({
        animation: google.maps.Animation.DROP,
        latlng: myLatlng,
        map: map,
        args: {
            width: 100,
            height: 100,
            speed: 990,
            background: 'rgba(200, 0, 0, .4)',
            label: label,
            waves: 4
        },
        icon: 'assets/images/pins/peligro.png'
    });

    marker.addListener('click', function () {
        marker_click();
    });
    markers.push(marker);
}

function marker_yellow(lat, lng, label) {
    var myLatlng = new google.maps.LatLng(lat, lng);
    marker = new CustomMarker({
        animation: google.maps.Animation.DROP,
        latlng: myLatlng,
        map: map,
        args: {
            width: 100,
            height: 100,
            speed: 950,
            background: 'rgba(180, 220, 10, .4)',
            label: label,
            waves: 2
        },
        icon: 'assets/images/pins/precaucion.png'
    });

    marker.addListener('click', function () {
        marker_click();
    });
    markers.push(marker);
}

function marker_orange(lat, lng, label) {
    var myLatlng = new google.maps.LatLng(lat, lng);
    marker = new CustomMarker({
        animation: google.maps.Animation.DROP,
        latlng: myLatlng,
        map: map,
        args: {
            width: 100,
            height: 100,
            speed: 950,
            background: 'rgba(230, 156, 15, .4)',
            label: label,
            waves: 2
        },
        icon: 'assets/images/pins/precaucion.png'
    });

    marker.addListener('click', function () {
        marker_click();
    });
    markers.push(marker);
}

function marker_green(lat, lng, label) {
    var myLatlng = new google.maps.LatLng(lat, lng);
    marker = new CustomMarker({
        animation: google.maps.Animation.DROP,
        latlng: myLatlng,
        map: map,
        args: {
            width: 100,
            height: 100,
            speed: 950,
            background: 'rgba(100, 200, 100, .4)',
            label: label,
            waves: 0
        },
        icon: 'assets/images/pins/calma.png'
    });

    marker.addListener('click', function () {
        marker_click();
    });
    markers.push(marker);
}
function init() {

    if (window.google) {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 10.4259077, lng: -75.5443052},
            zoom: 14
        });
        marker_red(10.433405, -75.530778, 'C01');
        marker_yellow(10.4308353, -75.5378157, 'C02');
        marker_orange(10.4252643, -75.5411197, 'C03');
        marker_orange(10.4269077, -75.5492452, 'C04');
        marker_yellow(10.4229853, -75.5359707, 'C05');
        marker_yellow(10.4218702, -75.5236944, 'C06');
        marker_yellow(10.4169811, -75.5396205, 'C07');
        marker_yellow(10.4286413, -75.5372577, 'C08');
        marker_red(10.4199968, -75.5226645, 'C09');
        marker_red(10.4236999, -75.5400498, 'C10');
        marker_red(10.414169, -75.5510393, 'C11');
        marker_red(10.4473207, -75.5225807, 'C12');
    }
    chart();
    overlay();
}

function overlay() {

    var over = document.getElementById("overlay");
    var cont = document.getElementById("overlay-content");
    //cont.setAttribute("show", "");
    if (cont) {
        cont.onclick = function () {
            cont.noclose = true;
            return false;
        };
    }
    if (over) {
        over.onclick = function () {
            console.log("");
            if (!cont.noclose) {
                cont.removeAttribute("show");
                window.setTimeout(function () {
                    over.setAttribute("hide", "");
                }, 500);
            }
            cont.noclose = false;
        };
    }

}

function chart() {

    var randomScalingFactor = function () {
        return Math.round(Math.random() * 10 + 1);
    };

    var dates = [];
    for (var i = 0; i < 4; i++) {
        var temp_Data = {
            labels: dates,
            datasets: [
                {
                    label: "Medida",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [
                    ]
                }
            ]
        };
        var grafica = document.getElementById("grafica" + i);
        if (grafica) {
            var ctx4 = grafica.getContext("2d");

            window["grafica" + i] = new Chart(ctx4).Line(temp_Data, {
                responsive: true
            });
        }
    }
    function redo() {
		var socket = io('http://grana2.co:7000/');
		socket.on('connect', function (data) {
			console.log("conectado");
		});
		var cont = 0;
		socket.on('sensor', function (data) {
			var t = data['timestamp'].split('T')[1].split('.')[0];
		    if (data['p'] === 'temp'){
				for (var i = 0; i < 4; i++) {
	        		if (window["grafica" + i]) {
		        		if (cont > 5){
			            	window["grafica" + i].removeData();
		        		}
			            window["grafica" + i].addData([data['v']], t);
		        	}
		        }
			    cont++;
			}
			console.log(t, data['v'], data['p']);
		});
	}
    redo();
    var dates5 = [];
    var datas5 = [];
    $.ajax({
		'url': 'http://grana2.co:7000/signal/aaaa::800:f5ff:d92c:26d3/temp/2016-02-27T00:35:25.433Z/2016-02-27T00:40:06.893Z',
		'type': 'get',
		'success': function (data){
			var data = JSON.parse(data);
			for (var i = 0; i < data.length; i++){
				dates5.push(data[i]["timestamp"].split('T')[1]);
				datas5.push(data[i]["v"]);
			}
			console.log(data[0]);
			run_data5();
		},
		'error': function(error) {
			console.log(error);
		}
    });
    function run_data5(){
	    var lineChartData = {
	        labels: dates5,
	        datasets: [
	            {
	                label: "Medida",
	                fillColor: "rgba(151,187,205,0.2)",
	                strokeColor: "rgba(151,187,205,1)",
	                pointColor: "rgba(151,187,205,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(151,187,205,1)",
	                data: datas5
	            }
	        ]
	    };
	    var canvas5 = document.getElementById("canvas5");
	    if (canvas5) {
	        var ctx5 = canvas5.getContext("2d");

	        window.myLine = new Chart(ctx5).Line(lineChartData, {
	            responsive: true
	        });
	    }
	}

    var pieData = [
        {
            value: 300,
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        },
        {
            value: 40,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        },
        {
            value: 120,
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        }

    ];

    var pie = document.getElementById("pie");
    if (pie) {
        new Chart(pie.getContext("2d")).Pie(pieData);
    }
    var noti = document.getElementById("noti");
    var mar;
    window.show_alert = function (){
        mar = Math.round(Math.random()*(markers.length-1));
        console.log(mar);
        noti.className = "";
        var fir = document.getElementById("first");
        fir.style.color = markers[mar].args.background.replace(".4", "1");
        fir.getElementsByTagName("i")[0].style.color = markers[mar].args.background.replace(".4", "1");
    };
    var lis = noti.getElementsByTagName("li");
    
    for (var i = 0; i < lis.length; i++){
        lis[i].onclick = function (){
           noti.className = "hide"; 
           
           markers[mar].set_show_waves(true);
           map.panTo(markers[mar].getPosition());
        };
    }
    var alarm = document.getElementById("alarm");
    alarm.onclick = function (){
        
        window.show_alert();
    };
}
