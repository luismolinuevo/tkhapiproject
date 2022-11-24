import axios from "axios";
//get my elements
const btn = document.getElementById("btn");
const outPut = document.getElementById("quoteContainer");

//my api url
const API_URL = "https://animechan.vercel.app/api/quotes";

//fetch from api with axios. 
//I use async await to wait for the promise(data) before the rest of the code
const getQuotes = async () => { 
            try {
              const response = await axios.get(API_URL)
              displayQuotes(response.data)
            }
            catch(err) {
              console.log(err)
            }
}

//actionlister to track button click
btn.addEventListener("click", async function() {   //I used async because it is async above
  await getQuotes();
});

const displayQuotes = (quotesObjects) => {
      let html = "";

      //foreach loop
      const test = quotesObjects.forEach(element => {  
        html += `<div class="items"><p class="item">"${element.quote}" -<span class = "character">${element.character}</span>`
      })

      outPut.innerHTML = html;
}
