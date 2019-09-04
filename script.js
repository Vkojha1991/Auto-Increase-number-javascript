function animation(){
	var i=0
	floats = [];
  	while (i < 1) {
      i = (i + 1).toFixed(1);
      var anim = setInterval(function () { 
        var x = floats.push(i);
        if(x == 100){
          clearInterval(anim);
        }
        document.getElementById('increased').innerHTML = x;
      }, 100);
  	}
}
animation();