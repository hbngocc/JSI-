const root = document.querySelector("#root")
let html = "";
async function getAPI() {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    for (let i = 0; i < data.length; i++) {
        let img = data[i].thumbnailUrl;
        html +=`
          <img src=${img} />
        `;
    }
    root.innerHTML = html;
}
getAPI();