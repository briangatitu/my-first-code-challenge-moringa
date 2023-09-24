function checkSpeed() {
	const speedInput = document.getElementById("speed-input");
	const speed = Number(speedInput.value);
	const speedLimit = 70;//checks the value of speed if less or equal to speedLimit. If it is, it sets the "output" to "Ok".
	const kmPerPoint = 5;//represents points charged per km while exceeding limit
    

	if (speed <= speedLimit) {
		document.getElementById("output").textContent = "Ok";
	} else {
		const points = Math.floor((speed - speedLimit) / kmPerPoint);//for every 5kmperhour exceeding the speed limit, user is charged 1 point for it
		if (points >= 10) {//if points exceeds 10, the license of user is removed
			document.getElementById("output").textContent = "License removed";
		} else {
			document.getElementById("output").textContent = `Points: ${points}`;
		}
	}
}