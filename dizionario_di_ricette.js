const databaseRicette = [
    { nome: "Frittata veloce", ingredienti: ["uova", "sale", "formaggio"], video: "https://youtube.com" },
    { nome: "Biscotti fatti in casa", ingredienti: ["farina", "burro", "uova"], video: "https://youtube.com" },
    { nome: "Arancini di riso", ingredienti: ["cereali", "cipolla", "farina"], video: "https://youtube.com" },
    { nome: "Porridge", ingredienti: ["cereali", "latte"], video: "https://youtube.com" },
    { nome: "Zuppa di cipolle", ingredienti: ["cipolla", "brodo", "pane"], video: "https://youtube.com" },
    { nome: "Riso al curry", ingredienti: ["cereali", "curry", "verdure"], video: "https://youtube.com" },
    { nome: "Patate al forno", ingredienti: ["patate", "olio", "sale"], video: "https://youtube.com" },
    { nome: "Miele e noci", ingredienti: ["miele", "noci"], video: "https://youtube.com" },
    { nome: "Insalata mista", ingredienti: ["lattuga", "pomodori", "olio"], video: "https://youtube.com" },
    { nome: "Smoothie alla frutta", ingredienti: ["frutta", "yogurt", "miele"], video: "https://youtube.com" },
    { nome: "Pizza margherita", ingredienti: ["farina", "pomodoro", "mozzarella"], video: "https://youtube.com" },
    { nome: "Lasagna", ingredienti: ["pasta", "ragù", "besciamella"], video: "https://youtube.com" },
    { nome: "Torta al cioccolato", ingredienti: ["farina", "uova", "cioccolato"], video: "https://youtube.com" },
    { nome: "Crepes", ingredienti: ["farina", "uova", "latte"], video: "https://youtube.com" },
    { nome: "Polenta", ingredienti: ["farina", "acqua", "sale"], video: "https://youtube.com" },
    { nome: "Tiramisù", ingredienti: ["savoiardi", "caffè", "mascarpone"], video: "https://youtube.com" },
    { nome: "Pancakes", ingredienti: ["farina", "uova", "latte"], video: "https://youtube.com" },
    { nome: "Insalata di riso", ingredienti: ["cereali", "verdure", "olio"], video: "https://youtube.com" },
    { nome: "Besciamella", ingredienti: ["latte", "patate", "uova"], video: "https://youtube.com" },
    { nome: "Salsa olandese", ingredienti: ["burro", "succo di limone", "uovo"], video: "https://youtube.com" },
    { nome: "Risotto alla milanese", ingredienti: ["burro", "zafferano", "cipolla"], video: "https://youtube.com" },
    { nome: "Melanzane alla parmigiana", ingredienti: ["ragù", "melanzane", "formaggio"], video: "https://youtube.com" },
    { nome: "Cacio e pepe", ingredienti: ["formaggio", "pepe nero", "spaghetti"], video: "https://youtube.com" },
    { nome: "Purè di patate", ingredienti: ["patate", "latte", "burro"], video: "https://youtube.com" },
    { nome: "Panna cotta al caffè", ingredienti: ["caffè", "panna"], video: "https://youtube.com" },
    { nome: "Affogato al caffè", ingredienti: ["caffè", "gelato"], video: "https://youtube.com" },
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
