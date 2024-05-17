async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


async function displayCharacters() {
    const characters = await fetchData('https://swapi.dev/api/people/');
    const charactersList = document.getElementById('characters');
    charactersList.innerHTML = `<h2>Characters</h2>`;
    characters.results.forEach(character => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="characters.html">${character.name}</a>`;
        charactersList.appendChild(li);
    });
}


async function displayFilms() {
    const films = await fetchData('https://swapi.dev/api/films/');
    const filmsList = document.getElementById('films');
    filmsList.innerHTML = `<h2>Films</h2>`;
    films.results.forEach(film => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="films.html">${film.title}</a>`;
        filmsList.appendChild(li);
    });
}


if (document.title === "Star Wars API Explorer") {
    displayCharacters();
    displayFilms();
} else if (document.title === "Star Wars Characters") {
    displayCharacters();
} else if (document.title === "Star Wars Films") {
    displayFilms();
}



