const productsElem = document.getElementById("products")
const addProductButton = document.getElementById("tilføjProdukt");
const EAN = document.getElementById('EAN')
const antal = document.getElementById('antal')
const changeCam = document.getElementById('changeCamera')
addProductButton.addEventListener('click', (e) => {
    e.preventDefault();
    productsElem.appendChild(document.createTextNode(`${EAN.value} - ${antal.value} stk`))
    EAN.value = ""
    antal.value = ""
    var div = document.createElement('div')
    div.classList.add('break')
    productsElem.appendChild(div)
})
changeCam.addEventListener('click', (e) => {
    e.preventDefault()
    currCamera += 1;
    Qr.stop();
    startScan();
})
//qr functionality
const scanBtn = document.getElementById("cameraInput")
const inputField = document.getElementById("EAN")
var Qr = new Html5Qrcode("qrElem")
//camera change functionality
let currCamera = 0
scanBtn.addEventListener('click', () => {
    changeCam.classList.toggle('hidden')
    startScan()
})
function startScan(){
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            var obj = {}
            obj.qrbox = { width: 500, height: 500 }
            Html5Qrcode.getCameras().then((e) => {
                console.log(e)
                if(currCamera >= e.length ){
                    currCamera = 0
                }
                Qr.start(e[currCamera].id, obj, (succ) => {
                    inputField.value = succ
                    console.log(succ)
                    changeCam.classList.toggle('hidden')
                    Qr.stop()
                },
                (err) => { console.log(err) })
            })
            .catch(e => console.log(e))
        })
        .catch(function (err) {
            console.log(err)
        });
    }
}