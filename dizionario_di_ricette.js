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
const menuTendina = document.getElementById("Ingredienti");
const bottoneCerca = document.getElementById("bottone-cerca");
const contenitoreRisultati = document.getElementById("risultati");
const contenitorePreferiti = document.getElementById("preferiti");
const titoloPreferiti = document.getElementById("titolo-preferiti");
let preferiti = JSON.parse(localStorage.getItem("ricettePreferite")) || [];
function creaSchedaRicetta(ricetta, èNeiPreferiti) {
    const bloccoRicetta = document.createElement("div");
    bloccoRicetta.className = "scheda-ricetta";
    bloccoRicetta.style.position = "relative";
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
function invertiPreferito(nomeRicetta) {
    if (preferiti.includes(nomeRicetta)) {
        preferiti = preferiti.filter(nome => nome !== nomeRicetta);
    } else {
        preferiti.push(nomeRicetta);
    }
    localStorage.setItem("ricettePreferite", JSON.stringify(preferiti));
    mostraPreferiti();
    aggiornaRicercaAttuale();
}
function mostraPreferiti() {
    contenitorePreferiti.innerHTML = "";
    if (preferiti.length === 0) {
        titoloPreferiti.style.display = "none";
        return;
    }
    titoloPreferiti.style.display = "block";
    preferiti.forEach(nome => {
        const ricetta = databaseRicette.find(r => r.nome === nome);
        if (ricetta) {
            const scheda = creaSchedaRicetta(ricetta, true);
            contenitorePreferiti.appendChild(scheda);
        }
    });
}
function aggiornaRicercaAttuale() {
    const ingredienteScelto = menuTendina.value;
    const ricetteTrovate = databaseRicette.filter(ricetta => 
        ricetta.ingredienti.includes(ingredienteScelto)
    );
    if (contenitoreRisultati.innerHTML !== "" && !contenitoreRisultati.firstChild.classList?.contains("messaggio-vuoto")) {
        contenitoreRisultati.innerHTML = "";
        ricetteTrovate.forEach(ricetta => {
            const èNeiPreferiti = preferiti.includes(ricetta.nome);
            const scheda = creaSchedaRicetta(ricetta, èNeiPreferiti);
            contenitoreRisultati.appendChild(scheda);
        });
    }
}
bottoneCerca.addEventListener("click", function() {
    const ingredienteScelto = menuTendina.value;
    const ricetteTrovate = databaseRicette.filter(ricetta => 
        ricetta.ingredienti.includes(ingredienteScelto)
    );
    contenitoreRisultati.innerHTML = "";
    if (ricetteTrovate.length === 0) {
        contenitoreRisultati.innerHTML = "<p class='messaggio-vuoto'>Nessuna ricetta trovata.</p>";
    } else {
        ricetteTrovate.forEach(ricetta => {
            const èNeiPreferiti = preferiti.includes(ricetta.nome);
            const scheda = creaSchedaRicetta(ricetta, èNeiPreferiti);
            contenitoreRisultati.appendChild(scheda);
        });
    }
});
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
