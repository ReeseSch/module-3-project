console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`Thanks for your personal info! We'll totally use it responsibly...`);
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

// let duckImg = document.getElementById(`#duckImg`)

document.getElementById("duckImg").addEventListener(`mouseover`, function () {
	alert(`Congradulations! You found the duck! Please take a moment to enjoy this cute and inconveniently placed picture!`)
})