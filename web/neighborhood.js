let foodArr = [`India Palace`, `Umami`, `Texas Roadhouse`, `Lovely Pho`, `J Dawgs`, `Mo' Bettahs`]
const randomFood = Math.floor(Math.random() * foodArr.length);
console.log(foodArr[randomFood])

document.getElementById("foodBtn").addEventListener(`click`, function() {
	alert(`You should go to ${foodArr[randomFood]}! You're welcome!`)
})
