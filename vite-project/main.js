import axios from "axios";
const btn = document.getElementById("btn");
const outPut = document.getElementById("quoteContainer");

const API_URL = "https://animechan.vercel.app/api/quotes";

let quotes = [];

const getQuotes = async () => {
            try {
              const response = await axios.get(API_URL)
              displayQuotes(response.data)
            }
            catch(err) {
              console.log(err)
            }
}

btn.addEventListener("click", async function() {   //I used async because it is async above
  await getQuotes();
});

const displayQuotes = (quotesObjects) => {
      let html = "";

      const test = quotesObjects.forEach(element => {
        // html += `<div class="items"><p>Anime: ${element.anime}</p><p>Character: ${element.character}</p><p>Quote: ${element.quote}</p></div>`
        html += `<div class="items"><p class="item">"${element.quote}" -<span class = "character">${element.character}</span>`
        console.log(element.quote)
      })

      outPut.innerHTML =html;
}
