
printPyramid(10);

function printPyramid(height) {
	
	
	const pyramid = document.getElementById("pyramid");
	const construction = document.getElementById("construction");
	
	for (var f = 1; f<=height; f++){
	
	let div = document.createElement('div');
	pyramid.append(div);
	for (var z = 0; z<=height; z++){
		let block = document.createElement('div');
		block.className = "block";
		if(height-z <= f){
			block.setAttribute("style", "background-color: red;")
		}
		div.append(block);
	}
		
	}
	
}


