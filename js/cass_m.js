// Create new element if element does not 


let searchbar = document.querySelector("#searchbar")
let limit = 30

document.querySelector("button").addEventListener("click", (e)=> e.preventDefault())

const search = ()=> {

    fetch('https://www.reddit.com/r/' + searchbar.value +'.json?limit=' + limit, {method: 'GET',mode: 'cors', cache: 'no-cache', credentials: 'same-origin'})
    .then((res) => {

        return res.json();
    
    })
    .then((obj) => {
        console.log(obj)
        for (var i = 0; i < obj.data.children.length; i++) {
            if(obj.data.children[i].data.post_hint == "image") {redImage(obj.data.children[i].data.title,  obj.data.children[i].data.url)}

            
        }
    }).catch((err)=> {console.warn(err);})
}
