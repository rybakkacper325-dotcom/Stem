const games = [
    {
        title: "Magnetic Pawns",
        image: "images/Magnetic Pawns.png",
        page: "games/Magnetic Pawns.html",
        desc: "Magnetic Pawns to gra o przesuwaniu bloczków w tą grę zagrasz nawet na ziemniaku dosłownie."
    }
];

const container = document.getElementById("games");

games.forEach(game => {
    container.innerHTML += `
        <div class="card">
            <img src="${game.image}">
            <h2>${game.title}</h2>
            <p>${game.desc}</p>
            <a href="${game.page}">Zobacz grę</a>
        </div>
    `;
});
