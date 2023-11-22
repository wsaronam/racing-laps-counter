let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let peopleEntered = 0

function increment() {
	peopleEntered += 1
	countEl.innerText = peopleEntered
}

function save() {
	saveEl.textContent += peopleEntered + " - "
	peopleEntered = 0
	countEl.innerText = 0
}

