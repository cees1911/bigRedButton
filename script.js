const bigRedButton = document.getElementById("drukknop");
const modal = document.getElementById("modal__container");
const span = document.getElementById("close");

const max = youtubeVideos.length;
const min = 0;
console.log(max, "videos");

function getRandomNumber(min, max) {
  let randomNumber = 0;
  randomNumber = Math.floor(Math.random() * (max - min));
  playVideo(randomNumber);
}

function playVideo(randomNumber) {
  console.log(youtubeVideos[randomNumber].title);

  if (!youtubeVideos[randomNumber].nietEmbed) {
    modal.style.display = "block";

    const heading = document.createElement("h2");
    heading.textContent = youtubeVideos[randomNumber].title;
    const modalHeading = document.getElementById("modal__container-header");
    modalHeading.appendChild(heading);

    const videoContent = document.createElement("IFRAME");
    videoContent.setAttribute("src", youtubeVideos[randomNumber].embed);
    videoContent.setAttribute("height", "500");
    videoContent.setAttribute("width", "900");
    const modalVideo = document.getElementById("modal__container-video");
    modalVideo.appendChild(videoContent);
  }
}

// event listeners

bigRedButton.addEventListener("click", () => {
  console.log("er is geklikt");
  getRandomNumber(min, max);
});

span.onclick = function () {
  modal.style.display = "none";
  window.location.reload(true);
};
