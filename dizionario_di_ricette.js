const databaseRicette = [
    { nome: "Frittata veloce", ingredienti: ["uova", "sale", "formaggio"], video: "https://www.youtube.com/watch?v=xxLq4pHvj3A" },
    { nome: "Biscotti fatti in casa", ingredienti: ["farina", "burro", "uova"], video: "https://www.youtube.com/shorts/kUBxg-b6PUw" },
    { nome: "Arancini di riso", ingredienti: ["cereali", "cipolla", "farina"], video: "https://www.youtube.com/shorts/BjBSDKO81Ms" },
    { nome: "Porridge", ingredienti: ["cereali", "latte"], video: "https://www.youtube.com/shorts/lrs10J530o0" },
    { nome: "Zuppa di cipolle", ingredienti: ["cipolla", "brodo", "pane"], video: "https://www.youtube.com/watch?v=e-e7DDpu4jE" },
    { nome: "Riso al curry", ingredienti: ["cereali", "curry", "verdure"], video: "https://www.youtube.com/shorts/jTGANsXQSl4" },
    { nome: "Patate al forno", ingredienti: ["patate", "olio", "sale"], video: "https://www.youtube.com/shorts/ITzC5ECY9gg" },
    { nome: "Miele e noci", ingredienti: ["miele", "noci"], video: "https://www.youtube.com/shorts/dUXTKxr6yLA" },
    { nome: "Insalata mista", ingredienti: ["lattuga", "pomodoro", "olio"], video: "https://www.youtube.com/watch?v=bsp4ev21gxs" },
    { nome: "Smoothie alla frutta", ingredienti: ["frutta", "yogurt", "miele"], video: "https://www.youtube.com/shorts/dP8Vf9m4ly0" },
    { nome: "Pizza margherita", ingredienti: ["farina", "pomodoro", "mozzarella"], video: "https://www.youtube.com/shorts/YUNjyDbkZUE" },
    { nome: "Lasagna", ingredienti: ["pasta", "ragù", "besciamella"], video: "https://www.youtube.com/shorts/dYcXVPIIjEk" },
    { nome: "Torta al cioccolato", ingredienti: ["farina", "uova", "cioccolato"], video: "https://www.youtube.com/shorts/5eWNEsBXWTg" },
    { nome: "Crepes", ingredienti: ["farina", "uova", "latte"], video: "https://www.youtube.com/shorts/YWEQh-l3hg8" },
    { nome: "Polenta", ingredienti: ["farina", "sale"], video: "https://www.youtube.com/shorts/dUtftEfnVlY" },
    { nome: "Tiramisù", ingredienti: ["savoiardi", "caffè", "mascarpone"], video: "https://www.youtube.com/shorts/8Yz7wREvhAc" },
    { nome: "Pancakes", ingredienti: ["farina", "uova", "latte"], video: "https://www.youtube.com/shorts/LtSdqM9l5i4" },
    { nome: "Insalata di riso", ingredienti: ["cereali", "verdure", "olio"], video: "https://www.youtube.com/watch?v=tutpq2RM3C0" },
    { nome: "Besciamella", ingredienti: ["latte", "patate", "uova"], video: "https://www.youtube.com/shorts/YdY5Mu-rJOM" },
    { nome: "Salsa olandese", ingredienti: ["burro", "succo di limone", "uova"], video: "https://www.youtube.com/shorts/IuQIOp13YSY" },
    { nome: "Risotto alla milanese", ingredienti: ["burro", "zafferano", "cipolla"], video: "https://www.youtube.com/shorts/vLY7OThgQEs" },
    { nome: "Melanzane alla parmigiana", ingredienti: ["ragù", "melanzane", "formaggio"], video: "https://www.youtube.com/shorts/InSse_GGwzY" },
    { nome: "Cacio e pepe", ingredienti: ["formaggio", "pepe nero", "spaghetti"], video: "https://www.youtube.com/shorts/4-uiBhdmDuI" },
    { nome: "Purè di patate", ingredienti: ["patate", "latte", "burro"], video: "https://www.youtube.com/shorts/4UIQQelcWgE" },
    { nome: "Panna cotta al caffè", ingredienti: ["caffè", "panna"], video: "https://www.youtube.com/shorts/cXOhcR2g3NQ" },
    { nome: "Affogato al caffè", ingredienti: ["caffè", "gelato"], video: "https://www.youtube.com/shorts/FXXWM903I9U" },
    { nome: "Crostata di frutta", ingredienti: ["farina", "burro", "frutta"], video: "https://www.youtube.com/shorts/UrJn0TH0EfM" },
    { nome: "Minestrone", ingredienti: ["verdure", "brodo", "pasta"], video: "https://www.youtube.com/shorts/yOORcKXCSIY" },
    { nome: "Gnocchi di patate", ingredienti: ["patate", "farina", "uova"], video: "https://www.youtube.com/shorts/w0hBkAIxBds" },
    { nome: "Pollo al curry", ingredienti: ["pollo", "curry", "latte di cocco"], video: "https://www.youtube.com/shorts/ZB9w3DR53xw" },
    { nome: "Couscous alle verdure", ingredienti: ["couscous", "verdure", "olio"], video: "https://www.youtube.com/shorts/-siVcrdwDwY" },
    { nome: "Frittelle di mele", ingredienti: ["mele", "farina", "uova"], video: "https://www.youtube.com/shorts/BjEIhGPjv7k" },
    { nome: "Zuppa di lenticchie", ingredienti: ["lenticchie", "verdure", "brodo"], video: "https://www.youtube.com/shorts/lMzBj2jEXGE" },
    { nome: "Caponata siciliana", ingredienti: ["melanzane", "pomodoro", "olive"], video: "https://www.youtube.com/shorts/XOnOiCU9ABk" },
    { nome: "Ratatouille", ingredienti: ["melanzane", "zucchine", "peperoni"], video: "https://www.youtube.com/shorts/VDmOqGHDhKc" },
    { nome: "Torta di mele", ingredienti: ["mele", "farina", "uova"], video: "https://www.youtube.com/shorts/SUf7pWLi8rE" },
    { nome: "Brownies al cioccolato", ingredienti: ["cioccolato", "burro", "uova"], video: "https://www.youtube.com/shorts/6blrycMPTe4" },
    { nome: "Pasta all'amatriciana", ingredienti: ["spaghetti", "pomodoro", "guanciale"], video: "https://www.youtube.com/shorts/HgPblcqdGA4" },
    { nome: "Pasta alla puttanesca", ingredienti: ["spaghetti", "pomodoro", "olive"], video: "https://www.youtube.com/watch?v=Z59zqJjUG4w" },
    { nome: "Pasta alla norma", ingredienti: ["spaghetti", "melanzane", "ricotta salata"], video: "https://www.youtube.com/shorts/5pTJDwj626Q" },
    { nome: "Pasta alla bolognese", ingredienti: ["spaghetti", "ragù", "parmigiano"], video: "https://www.youtube.com/shorts/J9yIITFLYow" },
    { nome: "Pasta alla siciliana", ingredienti: ["spaghetti", "melanzane", "pomodoro"], video: "https://www.youtube.com/shorts/HyxuJwn-ucM" },
    { nome: "Pasta alla genovese", ingredienti: ["spaghetti", "cipolla", "carne"], video: "https://www.youtube.com/shorts/c9Gta7MaZDo" },
    { nome: "Pasta alla sorrentina", ingredienti: ["spaghetti", "pomodoro", "mozzarella"], video: "https://www.youtube.com/shorts/kZ-uRWh4F4g" }
];
const tuttiGliIngredienti = [...new Set(databaseRicette.flatMap(r => r.ingredienti))].sort();
const barraRicerca = document.getElementById("barra-ricerca");
const grigliaIngredienti = document.getElementById("griglia-ingredienti");
const contenitoreRisultati = document.getElementById("risultati");
const contenitorePreferiti = document.getElementById("preferiti");
const titoloPreferiti = document.getElementById("titolo-preferiti");
let ingredientiSelezionati = [];
let preferiti = JSON.parse(localStorage.getItem("ricettePreferite")) || [];
function inizializzaTagIngredienti() {
    grigliaIngredienti.innerHTML = "";
    tuttiGliIngredienti.forEach(ingrediente => {
        const tag = document.createElement("div");
        tag.className = "tag-ingrediente";
        tag.innerHTML = `<span>${ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1)}</span>`;
        
        tag.addEventListener("click", () => {
            if (ingredientiSelezionati.includes(ingrediente)) {
                ingredientiSelezionati = ingredientiSelezionati.filter(i => i !== ingrediente);
                tag.classList.remove("selezionato");
            } else {
                ingredientiSelezionati.push(ingrediente);
                tag.classList.add("selezionato");
            }
            eseguiRicercaFiltri();
        });
        grigliaIngredienti.appendChild(tag);
    });
}
function creaSchedaRicetta(ricetta, èNeiPreferiti) {
    const bloccoRicetta = document.createElement("div");
    bloccoRicetta.className = "scheda-ricetta";
    bloccoRicetta.addEventListener("click", (e) => {
        if (!e.target.classList.contains("tasto-cuore")) {
            window.open(ricetta.video, "_blank");
        }
    });
    const iconaCuore = èNeiPreferiti ? "❤️" : "🤍";
    bloccoRicetta.innerHTML = `
        <button class="tasto-cuore" style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 1.4rem; cursor: pointer; padding: 0; width: auto; box-shadow: none;">${iconaCuore}</button>
        <h3>${ricetta.nome}</h3>
        <p><strong>Ingredienti:</strong> ${ricetta.ingredienti.join(", ")}</p>
        <span class="badge-video">▶ Guarda il video</span>
    `;
    const bottoneCuore = bloccoRicetta.querySelector(".tasto-cuore");
    bottoneCuore.addEventListener("click", () => invertiPreferito(ricetta.nome));
    return bloccoRicetta;
}
function eseguiRicercaFiltri() {
    const testoCercato = barraRicerca.value.toLowerCase().trim();
    if (testoCercato === "" && ingredientiSelezionati.length === 0) {
        contenitoreRisultati.innerHTML = "<p class='messaggio-vuoto'>Digita qualcosa o seleziona gli ingredienti che hai nel frigo!</p>";
        return;
    }
    const ricetteFiltrate = databaseRicette.filter(ricetta => {
        const corrispondeTesto = ricetta.nome.toLowerCase().includes(testoCercato);
        const corrispondeIngredienti = ingredientiSelezionati.every(ingrediente => 
            ricetta.ingredienti.includes(ingrediente)
        );
        return corrispondeTesto && corrispondeIngredienti;
    });
    contenitoreRisultati.innerHTML = "";
    if (ricetteFiltrate.length === 0) {
        contenitoreRisultati.innerHTML = "<p class='messaggio-vuoto'>Nessuna ricetta corrisponde ai filtri selezionati.</p>";
    } else {
        ricetteFiltrate.forEach((ricetta, indice) => {
            const èNeiPreferiti = preferiti.includes(ricetta.nome);
            const scheda = creaSchedaRicetta(ricetta, èNeiPreferiti);
            scheda.style.animationDelay = `${indice * 0.05}s`;
            contenitoreRisultati.appendChild(scheda);
        });
    }
}
function invertiPreferito(nomeRicetta) {
    if (preferiti.includes(nomeRicetta)) {
        preferiti = preferiti.filter(nome => nome !== nomeRicetta);
    } else {
        preferiti.push(nomeRicetta);
    }
    localStorage.setItem("ricettePreferite", JSON.stringify(preferiti));
    mostraPreferiti();
    eseguiRicercaFiltri();
}
function mostraPreferiti() {
    contenitorePreferiti.innerHTML = "";
    if (preferiti.length === 0) {
        titoloPreferiti.style.display = "none";
        return;
    }
    titoloPreferiti.style.display = "block";
    preferiti.forEach((nome, indice) => {
        const ricetta = databaseRicette.find(r => r.nome === nome);
        if (ricetta) {
            const scheda = creaSchedaRicetta(ricetta, true);
            scheda.style.animationDelay = `${indice * 0.05}s`;
            contenitorePreferiti.appendChild(scheda);
        }
    });
}
barraRicerca.addEventListener("input", eseguiRicercaFiltri);
inizializzaTagIngredienti();
eseguiRicercaFiltri();
mostraPreferiti();
const tastoTema = document.getElementById("tasto-tema");
const temaSalvato = localStorage.getItem("tema");
if (temaSalvato) {
    document.documentElement.setAttribute("data-theme", temaSalvato);
    tastoTema.textContent = temaSalvato === "light" ? "☀️ Tema Chiaro" : "🌙 Tema Scuro";
}
tastoTema.addEventListener("click", () => {
    const temaAttuale = document.documentElement.getAttribute("data-theme");
    if (temaAttuale === "light") {
        document.documentElement.removeAttribute("data-theme");
        tastoTema.textContent = "🌙 Tema Scuro";
        localStorage.setItem("tema", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        tastoTema.textContent = "☀️ Tema Chiaro";
        localStorage.setItem("tema", "light");
    }
});
