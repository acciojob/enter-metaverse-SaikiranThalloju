//your JS code here. If required.
const button = document.getElementbyId("enterBtn");
const para = document.getElementbyId("status");

button.addEventListener("click", () => {
	para.innerHTML = "<h1>Entered Metaverse</h1>";
})