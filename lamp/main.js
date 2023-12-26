function handleLight() {
    let lamp = document.getElementById("lamp");
    let title = document.getElementById("button");
    let body = document.body;

    if(title.innerHTML.trim() == "On") {
       lamp.src = "assets/lighton.png";
       title.innerHTML = "Off";
       body.style.backgroundColor = "#FFF";
       return;
    }

    lamp.src = "assets/lightoff.png";
    body.style.backgroundColor = "#333";
    title.innerHTML = "On";
}