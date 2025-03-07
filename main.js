
var letterContent = "Chúc cậu 8/3 thật vui vẻ và tràn ngập niềm vui! 🎉 Mong rằng cậu luôn rạng rỡ, hạnh phúc và đạt được mọi điều mà cậu mong muốn. Dù công việc có bận rộn đến đâu, cũng đừng quên dành chút thời gian để thư giãn và tận hưởng những khoảnh khắc đẹp trong ngày nhé! 😊 Tớ hy vọng sẽ có dịp cùng cậu đi dạo ở một nơi thật yên bình, nơi mà cả hai có thể thoải mái trò chuyện và tận hưởng những phút giây ý nghĩa! ✨"


durationWrite = 50 



function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".openBtn");
    const audio = document.getElementById("bgMusic");

    button.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();  // Phát nhạc nếu đang tạm dừng
            button.textContent = "Dừng nhạc"; 
        } else {
            audio.pause(); // Dừng nhạc nếu đang phát
            button.textContent = "Chạm vào đây đi";
        }
    });
});