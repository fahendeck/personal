function redImage(title, image) {
    content = document.createElement("div")
    content.innerHTML = `
    <div id="box">
    <div id="title">${title}</div><img id="image" src="${image}" onclick="imageFS(${image})"> 
    <div id="icon"><a href="${image}" style="" download><i class="fa fa-picture-o" aria-hidden="true"></i></a></div>
    </div>` 
    document.querySelector("._").appendChild(content)
}


function redVideo(title, video) {
    document.querySelector("._").append(`title: ${title} video: ${video}`)

}

function ImageFS(image) {
    document.querySelector(".fus").innerHTML = `<div id="fullscreen"><img src="${image}"></div>`
}