function blinker() {
	if (document.getElementById("blink")) {
		var d = document.getElementById("blink");
		d.style.color = d.style.color == "#198908" ? "#021e07" : "#198908";
		setTimeout("blinker()", 900);
	}
}
