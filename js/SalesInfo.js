let salesTeam = document.querySelector("#salesTeam");
let supportTeam = document.querySelector("#supportTeam");

addPictures(salesTeam);
addPictures(supportTeam);

function addPictures(group) {
    for (let i = 0; i < 4; i++) {
        let responsive = document.createElement("div");
        responsive.classList.add("responsive");

        let gallery = document.createElement("div");
        gallery.classList.add("gallery");

        let img = document.createElement("img");
        img.src = "..//img/Medarbejderinfo/None.jpg"
        img.alt = "Blank picture"

        let desc = document.createElement("div");
        desc.classList.add("desc");
        desc.textContent = "Blank person";

        gallery.appendChild(img);
        gallery.appendChild(desc);
        responsive.appendChild(gallery);
        group.appendChild(responsive);
    }
}