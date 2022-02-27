const url = "https://api.open5e.com/spells/";

const container = document.querySelector(".container");

async function dndSpells() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        const results = json.results;

        console.log(json);

        container.innerHTML = "";

        for(let i = 0; i < results.length; i++) {
            container.innerHTML += `<a href="details.html?id=${results[i].name}">
                                    <h2>${results[i].name}:</h2>
                                    <h3>${results[i].level}</h3>
                                    <p>${results[i].desc}</p>
                                    <img src="images/Line.png" />
                                    </a>`;
                                    
            if (i === 10) { 
                break;
            }
        }

    } catch (error) {
        container.innerHTML = message("Oops! An error has occurred", error);
    }
}


dndSpells();


