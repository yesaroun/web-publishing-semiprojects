let curPos = 0 // 현재 보고 있는 이미지의 인덱스 변호
let position = 0;   // 현재 .images의 위치값
const IMAGE_WIDTH = 640;    // 한번 움직일 때 이동해야 할 거리

// 요소 선택
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = document.querySelector(".images");

function prev() {
    if(curPos > 0){
        nextBtn.removeAttribute("disabled");
        position += IMAGE_WIDTH;

        images.style.transform = `translateX(${position}px)`;
        curPos -= 1;
    }
    if(curPos === 0){ // 이미지 index값 0 되면 prev 못하게
        prevBtn.setAttribute("disabled", 'true');
    }
}
function next(){
    if(curPos < 3) {
        prevBtn.removeAttribute("disabled");
        position -= IMAGE_WIDTH;

        images.style.transform = `translateX(${position}px)`;
        curPos += 1;
    }
    if (curPos === 3){
        nextBtn.setAttribute("disabled", "true");
    }
}
function init(){
    prevBtn.setAttribute("disabled", "true");
    prevBtn.addEventListener("click", prev);
    nextBtn.addEventListener("click", next);
}

init();