const nameText = "SoBadUI"

function prepareAnimations(){
	const compName = document.getElementById('comp-name')

	let nameAdvance = 0
	function addLetter(){

		compName.textContent = nameText.slice(0, nameAdvance) + "_"

		if(nameAdvance != nameText.length){
			nameAdvance++
			setTimeout(addLetter, 150)
		}else{
			compName.textContent = nameText
			compName.innerHTML += "<blink>|</blink>"
		}
	}
	setTimeout(addLetter, 1000)
}

addEventListener('load', prepareAnimations)