let searchinput = document.getElementById("search-input");
let searchBtn = document.getElementById("searchBtn");

const getData = async (searchValue) => {
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`);
    const jsonData = await data.json();

    document.querySelector("#data-container").innerHTML=""; // when user enter a word again then the first search word detail will remove and then new word details show
    

    let div = document.createElement("div");
    div.classList.add("detail")
    div.innerHTML = `
    <h2 class="text-2xl font-bold">Word: <span> ${jsonData[0].word} </span></h2>
    <p class="mt-4">${jsonData[0].meanings[0].partOfSpeech}</p>
    <p class="mt-4">Meaning: <span class="text-[rgb(92,91,91)]"> ${jsonData[0].meanings[0].definitions[0].definition} </span></p>
    <p class="mt-4">Example: 
        <span class="text-[rgb(92,91,91)]">
          ${jsonData[0].meanings[0].definitions[0].example == undefined ? "Not Found" : jsonData[0].meanings[0].definitions[0].example}
        </span>
    </p>
    <p class="mt-4">Synonyms: <span class="text-[rgb(92,91,91)]">${jsonData[0].meanings[0].synonyms}</span></p>
    <a href="${jsonData[0].sourceUrls[0]}" target="_blank" class="py-2 px-5 bg-orange-600 text-white text-xl relative top-3">Read more</a>
    `
    document.querySelector("#data-container").appendChild(div)

    console.log(jsonData);
    console.log(jsonData[0].word);
    console.log(jsonData[0].meanings[0].definitions[0].definition);
}

searchBtn.addEventListener("click", ()=>{
    let searchValue = searchinput.value;
    if(searchValue == ""){
        alert('Enter Word!')
    } else{
        getData(searchValue);
    }
})
