var mode = "https://"
document.getElementById("mode").onchange = function(){
		if(this.selectedIndex === 0){
			mode = "https://"
		}else if(this.selectedIndex === 1){
			mode = "http://"
		}else if(this.selectedIndex === 2){
			mode = "file:///"
		}
	}
	window.addEventListener('keydown', function(e){
		if (e.key === 'Enter'){
			var newScript = document.createElement('iframe');
			newScript.src = ""+mode+""+document.getElementById("url").value+""
			newScript.style = "width: 100%; height: 100%"
			var scene = document.getElementById('browser')
			var tabs = 2
			if(scene.hasChildNodes() === true){
				scene.replaceChild(newScript, scene.childNodes[0])				
			} else {
				scene.appendChild(newScript);
			}
		}
		console.log(e.key)
	})
