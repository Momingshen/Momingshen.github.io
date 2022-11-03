function get_time(){
	var now_time = new Date().toLocaleString();
	console.log(now_time);
	var element = document.getElementById('time_top').innerHTML = now_time;
	window.setTimeout(get_time,1000);
}
get_time()