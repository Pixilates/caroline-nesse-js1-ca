
const spell = document.querySelector(".spell");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("slug");

// const url = "https://api.open5e.com/spells/acid-arrow";
const url = "https://api.open5e.com/spells/" + id;


async function singleSpell() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        spell.innerHTML = `<h1>${json.name}</h1>
                          <p>${json.desc}</p>
                          <h3>At higher level: </h3><p>${json.higher_level}</p>
                          <h3>Range: </h3><p>${json.range}</p>
                          <h3>Components: </h3><p>${json.components}</p>
                          <h3>Duration: </h3><p>${json.duration}</p>`;

    } catch (error) {
        spell.innerHTML = message("Oops! An error has occurred", error);
    }
}

singleSpell();
