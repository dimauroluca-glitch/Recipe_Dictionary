const databaseRicette = [
    { nome: "Frittata veloce", ingredienti: ["uova", "sale", "formaggio"], video: "https://www.youtube.com/watch?v=xxLq4pHvj3A", tipo: "secondo", temperatura: "caldo" },
    { nome: "Biscotti fatti in casa", ingredienti: ["farina", "burro", "uova"], video: "https://www.youtube.com/shorts/kUBxg-b6PUw", tipo: "dolce", temperatura: "freddo" },
    { nome: "Arancini di riso", ingredienti: ["cereali", "cipolla", "farina"], video: "https://www.youtube.com/shorts/BjBSDKO81Ms", tipo: "antipasto", temperatura: "tiepido" },
    { nome: "Porridge", ingredienti: ["cereali", "latte"], video: "https://www.youtube.com/shorts/lrs10J530o0", tipo: "dolce", temperatura: "caldo" },
    { nome: "Zuppa di cipolle", ingredienti: ["cipolla", "brodo", "burro"], video: "https://www.youtube.com/watch?v=e-e7DDpu4jE", tipo: "primo", temperatura: "caldo" },
    { nome: "Riso al curry", ingredienti: ["cereali", "curry", "verdure"], video: "https://www.youtube.com/shorts/jTGANsXQSl4", tipo: "primo", temperatura: "caldo" },
    { nome: "Patate al forno", ingredienti: ["patate", "olio", "sale"], video: "https://www.youtube.com/shorts/ITzC5ECY9gg", tipo: "secondo", temperatura: "caldo" },
    { nome: "Miele e noci", ingredienti: ["miele", "noci"], video: "https://www.youtube.com/shorts/dUXTKxr6yLA", tipo: "dolce", temperatura: "freddo" },
    { nome: "Insalata mista", ingredienti: ["verdure", "pomodoro", "olio"], video: "https://www.youtube.com/watch?v=bsp4ev21gxs", tipo: "secondo", temperatura: "freddo" },
    { nome: "Smoothie alla frutta", ingredienti: ["frutta", "yogurt", "miele"], video: "https://www.youtube.com/shorts/dP8Vf9m4ly0", tipo: "dolce", temperatura: "freddo" },
    { nome: "Pizza margherita", ingredienti: ["farina", "pomodoro", "mozzarella"], video: "https://www.youtube.com/shorts/YUNjyDbkZUE", tipo: "primo", temperatura: "caldo" },
    { nome: "Lasagna", ingredienti: ["pasta", "ragù", "besciamella"], video: "https://www.youtube.com/shorts/dYcXVPIIjEk", tipo: "primo", temperatura: "caldo" },
    { nome: "Torta al cioccolato", ingredienti: ["farina", "uova", "cioccolato"], video: "https://www.youtube.com/shorts/5eWNEsBXWTg", tipo: "dolce", temperatura: "freddo" },
    { nome: "Crepes", ingredienti: ["farina", "uova", "latte"], video: "https://www.youtube.com/shorts/YWEQh-l3hg8", tipo: "dolce", temperatura: "tiepido" },
    { nome: "Polenta", ingredienti: ["farina", "sale"], video: "https://www.youtube.com/shorts/dUtftEfnVlY", tipo: "primo", temperatura: "caldo" },
    { nome: "Tiramisù", ingredienti: ["savoiardi", "caffè", "mascarpone"], video: "https://www.youtube.com/shorts/8Yz7wREvhAc", tipo: "dolce", temperatura: "freddo" },
    { nome: "Pancakes", ingredienti: ["farina", "uova", "latte"], video: "https://www.youtube.com/shorts/LtSdqM9l5i4", tipo: "dolce", temperatura: "caldo" },
    { nome: "Insalata di riso", ingredienti: ["cereali", "verdure", "olio"], video: "https://www.youtube.com/watch?v=tutpq2RM3C0", tipo: "primo", temperatura: "freddo" },
    { nome: "Besciamella", ingredienti: ["latte", "patate", "uova"], video: "https://www.youtube.com/shorts/YdY5Mu-rJOM", tipo: "antipasto", temperatura: "caldo" },
    { nome: "Salsa olandese", ingredienti: ["burro", "limone", "uova"], video: "https://www.youtube.com/shorts/IuQIOp13YSY", tipo: "antipasto", temperatura: "tiepido" },
    { nome: "Risotto alla milanese", ingredienti: ["burro", "zafferano", "cipolla"], video: "https://www.youtube.com/shorts/vLY7OThgQEs", tipo: "primo", temperatura: "caldo" },
    { nome: "Melanzane alla parmigiana", ingredienti: ["ragù", "melanzane", "formaggio"], video: "https://www.youtube.com/shorts/InSse_GGwzY", tipo: "secondo", temperatura: "caldo" },
    { nome: "Cacio e pepe", ingredienti: ["formaggio", "pepe", "pasta"], video: "https://www.youtube.com/shorts/4-uiBhdmDuI", tipo: "primo", temperatura: "caldo" },
    { nome: "Purè di patate", ingredienti: ["patate", "latte", "burro"], video: "https://www.youtube.com/shorts/4UIQQelcWgE", tipo: "secondo", temperatura: "caldo" },
    { nome: "Panna cotta al caffè", ingredienti: ["caffè", "panna"], video: "https://www.youtube.com/shorts/cXOhcR2g3NQ", tipo: "dolce", temperatura: "freddo" },
    { nome: "Affogato al caffè", ingredienti: ["caffè", "gelato"], video: "https://www.youtube.com/shorts/FXXWM903I9U", tipo: "dolce", temperatura: "freddo" },
    { nome: "Crostata di frutta", ingredienti: ["farina", "burro", "frutta"], video: "https://www.youtube.com/shorts/UrJn0TH0EfM", tipo: "dolce", temperatura: "freddo" },
    { nome: "Minestrone", ingredienti: ["verdure", "brodo", "pasta"], video: "https://www.youtube.com/shorts/yOORcKXCSIY", tipo: "primo", temperatura: "caldo" },
    { nome: "Gnocchi di patate", ingredienti: ["patate", "farina", "uova"], video: "https://www.youtube.com/shorts/w0hBkAIxBds", tipo: "primo", temperatura: "caldo" },
    { nome: "Pollo al curry", ingredienti: ["carne", "curry", "latte"], video: "https://www.youtube.com/shorts/ZB9w3DR53xw", tipo: "secondo", temperatura: "caldo" },
    { nome: "Couscous alle verdure", ingredienti: ["couscous", "verdure", "olio"], video: "https://www.youtube.com/shorts/-siVcrdwDwY", tipo: "primo", temperatura: "tiepido" },
    { nome: "Frittelle di mele", ingredienti: ["mele", "farina", "uova"], video: "https://www.youtube.com/shorts/BjEIhGPjv7k", tipo: "dolce", temperatura: "caldo" },
    { nome: "Zuppa di lenticchie", ingredienti: ["lenticchie", "verdure", "brodo"], video: "https://www.youtube.com/shorts/lMzBj2jEXGE", tipo: "primo", temperatura: "caldo" },
    { nome: "Caponata siciliana", ingredienti: ["melanzane", "pomodoro", "olive"], video: "https://www.youtube.com/shorts/XOnOiCU9ABk", tipo: "antipasto", temperatura: "freddo" },
    { nome: "Ratatouille", ingredienti: ["melanzane", "verdure", "verdure"], video: "https://www.youtube.com/shorts/VDmOqGHDhKc", tipo: "secondo", temperatura: "caldo" },
    { nome: "Torta di mele", ingredienti: ["mele", "farina", "uova"], video: "https://www.youtube.com/shorts/SUf7pWLi8rE", tipo: "dolce", temperatura: "tiepido" },
    { nome: "Brownies al cioccolato", ingredienti: ["cioccolato", "burro", "uova"], video: "https://www.youtube.com/shorts/6blrycMPTe4", tipo: "dolce", temperatura: "freddo" },
    { nome: "Pasta all'amatriciana", ingredienti: ["pasta", "pomodoro", "guanciale"], video: "https://www.youtube.com/shorts/HgPblcqdGA4", tipo: "primo", temperatura: "caldo" },
    { nome: "Pasta alla puttanesca", ingredienti: ["pasta", "pomodoro", "olive"], video: "https://www.youtube.com/watch?v=Z59zqJjUG4w", tipo: "primo", temperatura: "caldo" },
    { nome: "Pasta alla norma", ingredienti: ["pasta", "melanzane", "ricotta"], video: "https://www.youtube.com/shorts/5pTJDwj626Q", tipo: "primo", temperatura: "caldo" },
    { nome: "Pasta alla bolognese", ingredienti: ["pasta", "ragù", "formaggio"], video: "https://www.youtube.com/shorts/J9yIITFLYow", tipo: "primo", temperatura: "caldo" },
    { nome: "Pasta alla siciliana", ingredienti: ["pasta", "melanzane", "pomodoro"], video: "https://www.youtube.com/shorts/HyxuJwn-ucM", tipo: "primo", temperatura: "caldo" },
    { nome: "Pasta alla genovese", ingredienti: ["pasta", "cipolla", "carne"], video: "https://www.youtube.com/shorts/c9Gta7MaZDo", tipo: "primo", temperatura: "caldo" },
    { nome: "Pasta alla sorrentina", ingredienti: ["pasta", "pomodoro", "mozzarella"], video: "https://www.youtube.com/shorts/kZ-uRWh4F4g", tipo: "primo", temperatura: "caldo" },
    { nome: "Cannelloni ricotta e spinaci", ingredienti: ["besciamella", "ricotta", "verdure"], video: "https://www.youtube.com/shorts/PWr7c8MaceI", tipo: "primo", temperatura: "caldo" },
    { nome: "Gulasch ungherese", ingredienti: ["carne", "cipolla", "patate"], video: "https://www.youtube.com/shorts/zBufqt5htjw", tipo: "secondo", temperatura: "caldo" },
    { nome: "Chili con carne", ingredienti: ["carne", "verdure", "pomodoro"], video: "https://www.youtube.com/shorts/SPakumjssms", tipo: "secondo", temperatura: "caldo" },
    { nome: "Paella", ingredienti: ["cereali", "frutti di mare", "verdure"], video: "https://www.youtube.com/shorts/6EMK81Cxub0", tipo: "primo", temperatura: "caldo" },
    { nome: "Banana split", ingredienti: ["gelato", "banana", "panna montata"], video: "https://www.youtube.com/shorts/lEzk_W-XMsY", tipo: "dolce", temperatura: "freddo" },
    { nome: "Tacos messicani", ingredienti: ["tortilla", "carne", "verdure"], video: "https://www.youtube.com/shorts/Hi7gAfusjcQ", tipo: "secondo", temperatura: "caldo" },
    { nome: "Moussaka", ingredienti: ["melanzane", "carne", "besciamella"], video: "https://www.youtube.com/watch?v=q5NGOKIu-Sc", tipo: "secondo", temperatura: "caldo" },
    { nome: "Pasta alla carbonara", ingredienti: ["pasta", "uova", "guanciale"], video: "https://www.youtube.com/shorts/YIsp44Y0QXM", tipo: "primo", temperatura: "caldo" },
    { nome: "Anelli di funghi", ingredienti: ["funghi", "uova", "farina", "olio"], video: "https://www.youtube.com/shorts/M2aYCBM-2zw", tipo: "antipasto", temperatura: "caldo" },
    { nome: "Carpaccio di cedro", ingredienti: ["pepe", "cedro", "formaggio"], video: "https://www.youtube.com/shorts/lULqIcg6vRI", tipo: "antipasto", temperatura: "freddo" },
    { nome: "Risotto alle fragole", ingredienti: ["riso", "frutta", "burro"], video: "https://www.youtube.com/shorts/V1K2eJk2_cE", tipo: "primo", temperatura: "caldo" },
    { nome: "Maiale in agrodolce", ingredienti: ["carne", "ananas", "pomodoro"], video: "https://www.youtube.com/shorts/kb7DDaDJd-k", tipo: "secondo", temperatura: "caldo" },
    { nome: "Spaghetti all'assassina", ingredienti: ["pasta", "pomodoro", "olio"], video: "https://www.youtube.com/shorts/YIsp44Y0QXM", tipo: "primo", temperatura: "caldo" },
    { nome: "Pere al vino rosso e gorgonzola", ingredienti: ["frutta", "formaggio"], video: "https://www.youtube.com/shorts/Ik9k80Bm1bM", tipo: "secondo", temperatura: "tiepido" },
    { nome: "Guacamole con mango", ingredienti: ["avocado", "cipolla", "mango", "pomodoro"], video: "https://www.youtube.com/shorts/iOZk8j4fp7U", tipo: "antipasto", temperatura: "freddo" },
    { nome: "Gamberi in salsa rosa", ingredienti: ["frutti di mare", "panna", "verdure"], video: "https://www.youtube.com/shorts/BBn-tBPZ1ZM", tipo: "antipasto", temperatura: "freddo" },
    { nome: "Scaloppine al limone", ingredienti: ["carne", "farina", "limone", "pepe"], video: "https://www.youtube.com/shorts/9UrxVwMJ0mA", tipo: "secondo", temperatura: "caldo" },
    { nome: "Mousse di mortadella e pistacchi", ingredienti: ["prosciutto", "ricotta", "pistacchio", "formaggio"], video: "https://www.youtube.com/shorts/qWCFDprizn0", tipo: "antipasto", temperatura: "freddo" },
    { nome: "Tartare di tonno con avocado e pistacchi", ingredienti: ["tonno", "avocado", "pistacchio"], video: "https://www.youtube.com/shorts/7D6JvprLJW0", tipo: "antipasto", temperatura: "freddo" },
    { nome: "Involtini di zucchine grigliate con crema di tonno", ingredienti: ["tonno", "verdure", "maionese"], video: "https://www.youtube.com/shorts/zk3gXO6qdTY", tipo: "antipasto", temperatura: "freddo" },
    { nome: "Uova ripiene alla salsa tonnata", ingredienti: ["uova", "tonno", "maionese"], video: "https://www.youtube.com/shorts/jm1tmCkE3d8", tipo: "antipasto", temperatura: "freddo" },
    { nome: "Insalata russa", ingredienti: ["maionese", "patate", "verdure"], video: "https://www.youtube.com/shorts/uCTOCNA2q3w", tipo: "antipasto", temperatura: "freddo" },
    { nome: "Quadrotti di sfoglia con cipolle caramellate", ingredienti: ["cipolla", "formaggio", "uova"], video: "https://www.youtube.com/shorts/2DQFcGqWwLI", tipo: "antipasto", temperatura: "tiepido" }
];
const filtroTemperatura = document.getElementById("filtro-temperatura");
const boxSuggerimenti = document.getElementById("suggerimenti-ricerca");
const tuttiGliIngredienti = [...new Set(databaseRicette.flatMap(r => r.ingredienti))].sort();
const barraRicerca = document.getElementById("barra-ricerca");
const grigliaIngredienti = document.getElementById("griglia-ingredienti");
const contenitoreRisultati = document.getElementById("risultati");
const contenitorePreferiti = document.getElementById("preferiti");
const titoloPreferiti = document.getElementById("titolo-preferiti");
const filtroTipo = document.getElementById("filtro-tipo");
let ingredientiSelezionati = [];
let preferiti = JSON.parse(localStorage.getItem("ricettePreferite")) || [];
let filtriSenzaAttivi = [];
function inizializzaTagIngredienti() {
    grigliaIngredienti.innerHTML = "";
    tuttiGliIngredienti.forEach(ingrediente => {
        const tag = document.createElement("div");
        tag.className = "tag-ingrediente";
        tag.setAttribute("data-ingrediente", ingrediente.toLowerCase().trim());
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
const inputCercaIngrediente = document.getElementById("cerca-ingrediente");
if (inputCercaIngrediente) {
    inputCercaIngrediente.addEventListener("input", () => {
        const testoFiltro = rimuoviAccenti(inputCercaIngrediente.value.toLowerCase().trim());
        const tuttiITag = document.querySelectorAll(".tag-ingrediente");
        tuttiITag.forEach(tag => {
            const nomeIngredientePura = tag.getAttribute("data-ingrediente") || "";
            const nomeIngredienteSenzaAccenti = rimuoviAccenti(nomeIngredientePura);
            if (nomeIngredienteSenzaAccenti.includes(testoFiltro) || tag.classList.contains("selezionato")) {
                tag.style.setProperty("display", "inline-block", "important");
            } else {
                tag.style.setProperty("display", "none", "important");
            }
        });
    });
}
function creaSchedaRicetta(ricetta, èNeiPreferiti) {
    const bloccoRicetta = document.createElement("div");
    bloccoRicetta.className = "scheda-ricetta";
    bloccoRicetta.addEventListener("click", (e) => {
        if (!e.target.classList.contains("tasto-cuore") && !e.target.classList.contains("ingrediente-mappato")) {
            window.open(ricetta.video, "_blank");
        }
    });
    const etichetteTipi = { antipasto: "🥗 Antipasto", primo: "🍝 Primo", secondo: "🥩 Secondo", dolce: "🍰 Dolce" };
    const tipoChiave = ricetta.tipo ? ricetta.tipo.toLowerCase().trim() : "";
    const tipoTesto = etichetteTipi[tipoChiave] || "Ricetta";
    let temperaturaChiave = ricetta.temperatura ? ricetta.temperatura.toLowerCase().trim() : "";
    if (!temperaturaChiave) {
        const nomeMinuscolo = ricetta.nome.toLowerCase();
        if (tipoChiave === "dolce" || nomeMinuscolo.includes("insalata") || nomeMinuscolo.includes("carpaccio") || nomeMinuscolo.includes("guacamole") || nomeMinuscolo.includes("tartare") || nomeMinuscolo.includes("russa")) {
            temperaturaChiave = "freddo";
        } else if (nomeMinuscolo.includes("arancini") || nomeMinuscolo.includes("crepes") || nomeMinuscolo.includes("pere") || nomeMinuscolo.includes("sfoglia")) {
            temperaturaChiave = "tiepido";
        } else {
            temperaturaChiave = "caldo";
        }
    }
    const iconeTemperatura = { caldo: "🔥 Caldo", freddo: "❄️ Freddo", tiepido: "🌡️ Tiepido" };
    const temperaturaTesto = iconeTemperatura[temperaturaChiave] || "🔥 Caldo";
    const coloriTipi = {
        antipasto: { bg: "linear-gradient(135deg, #2b8a3e, #40c057)", ombra: "rgba(43, 138, 62, 0.3)" }, 
        primo: { bg: "linear-gradient(135deg, #e03131, #ff6b6b)", ombra: "rgba(224, 49, 49, 0.3)" },     
        secondo: { bg: "linear-gradient(135deg, #f59f00, #ffd43b)", ombra: "rgba(245, 159, 0, 0.3)" },   
        dolce: { bg: "linear-gradient(135deg, #7048e8, #845ef7)", ombra: "rgba(112, 72, 232, 0.3)" }     
    };
    const coloreAttuale = coloriTipi[tipoChiave] || { bg: "#888888", ombra: "rgba(0,0,0,0.1)" };
    const iconaCuore = èNeiPreferiti ? "❤️" : "🤍";
    const ingredientiColorati = ricetta.ingredienti.map(ingrediente => {
        const ceLhoInFrigo = ingredientiSelezionati.includes(ingrediente);
        if (ceLhoInFrigo) {
            return `<span class="ingrediente-mappato" style="color: #40c057 !important; font-weight: bold;">${ingrediente}</span>`;
        } else {
            return `<span class="ingrediente-mappato" style="opacity: 0.75;">${ingrediente}</span>`;
        }
    }).join(", ");
    bloccoRicetta.innerHTML = `
        <button class="tasto-cuore" style="position: absolute; top: 15px; right: 15px; background: none !important; border: none !important; font-size: 1.4rem; cursor: pointer; padding: 0; width: auto; box-shadow: none !important; transition: transform 0.2s ease; z-index: 10;">${iconaCuore}</button>
        <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; width: 100%;">
            <!-- Badge della Categoria Sfumato -->
            <span class="badge-tipo" style="font-size: 0.75rem !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; font-weight: 800 !important; color: #ffffff !important; background: ${coloreAttuale.bg} !important; box-shadow: 0 3px 8px ${coloreAttuale.ombra} !important; padding: 4px 10px !important; border-radius: 20px !important; display: inline-block !important; border: none !important;">${tipoTesto}</span>
            <!-- Badge della Temperatura con protezione anti-sparizione -->
            <span class="badge-temperatura" style="font-size: 0.75rem !important; font-weight: 700 !important; color: var(--text-color) !important; background: rgba(128, 128, 128, 0.15) !important; border: 1px solid rgba(128, 128, 128, 0.25) !important; padding: 3px 10px !important; border-radius: 20px !important; display: inline-block !important;">${temperaturaTesto}</span>
        </div>
        <h3 style="margin-top: 5px;">${ricetta.nome}</h3>
        <p><strong>Ingredienti:</strong> ${ingredientiColorati}</p>
        <span class="badge-video">▶ Guarda il video</span>
    `;
    const bottoneCuore = bloccoRicetta.querySelector(".tasto-cuore");
    bottoneCuore.addEventListener("click", (e) => {
        e.stopPropagation();
        bottoneCuore.classList.add("cuore-attivo");
        setTimeout(() => {
            invertiPreferito(ricetta.nome);
        }, 300);
    });
    return bloccoRicetta;
}
const contatoreRisultati = document.getElementById("contatore-risultati");
function rimuoviAccenti(testo) {
    return testo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const tastoCasuale = document.getElementById("tasto-casuale");
function eseguiRicercaFiltri() {
    const testoCercato = rimuoviAccenti(barraRicerca.value.toLowerCase().trim());
    const tipoSelezionato = filtroTipo.value;
    const temperaturaSelezionata = filtroTemperatura ? filtroTemperatura.value : "tutti";
    let ricetteFiltrate = databaseRicette.filter(ricetta => {
        const nomeRicettaSenzaAccenti = rimuoviAccenti(ricetta.nome.toLowerCase());
        const corrispondeTesto = nomeRicettaSenzaAccenti.includes(testoCercato);
        const corrispondeTipo = (tipoSelezionato === "tutti" || ricetta.tipo === tipoSelezionato);
        const corrispondeTemperatura = (temperaturaSelezionata === "tutti" || ricetta.temperatura === temperaturaSelezionata);
        const ingMinuscoli = ricetta.ingredienti.map(i => i.toLowerCase().trim());
        if (filtriSenzaAttivi.includes("glutine")) {
            if (ingMinuscoli.some(i => i.includes("farina") || i.includes("pasta") || i.includes("savoiardi") || i.includes("biscotti") || i.includes("pane"))) {
                return false;
            }
        }
        if (filtriSenzaAttivi.includes("lattosio")) {
            if (ingMinuscoli.some(i => i.includes("latte") || i.includes("burro") || i.includes("panna") || i.includes("formaggio") || i.includes("mozzarella") || i.includes("mascarpone") || i.includes("ricotta") || i.includes("besciamella") || i.includes("yogurt"))) {
                return false;
            }
        }
        if (ingredientiSelezionati.length === 0) {
            ricetta.percentualeFattibilita = 0;
            ricetta.ingredientiMancanti = [];
            return corrispondeTesto && corrispondeTipo && corrispondeTemperatura;
        }
        const frigoMinuscolo = ingredientiSelezionati.map(ing => ing.toLowerCase().trim());
        ricetta.ingredientiMancanti = ricetta.ingredienti.filter(ing => 
            !frigoMinuscolo.includes(ing.toLowerCase().trim())
        );
        const ingredientiPosseduti = ricetta.ingredienti.length - ricetta.ingredientiMancanti.length;
        ricetta.percentualeFattibilita = Math.round((ingredientiPosseduti / ricetta.ingredienti.length) * 100);
        return corrispondeTesto && corrispondeTipo && corrispondeTemperatura && (ricetta.percentualeFattibilita > 0);
    });
    if (ingredientiSelezionati.length > 0) {
        ricetteFiltrate.sort((a, b) => b.percentualeFattibilita - a.percentwakeFattibilita);
    } else {
        ricetteFiltrate.sort((a, b) => a.nome.localeCompare(b.nome));
    }
    if (testoCercato === "" && ingredientiSelezionati.length === 0 && tipoSelezionato === "tutti" && temperaturaSelezionata === "tutti" && filtriSenzaAttivi.length === 0) {
        if (contatoreRisultati) contatoreRisultati.innerHTML = `📚 Totale ricette disponibili: ${ricetteFiltrate.length}`;
    } else {
        if (contatoreRisultati) contatoreRisultati.innerHTML = `🔍 Ricette trovate: ${ricetteFiltrate.length}`;
    }
    contenitoreRisultati.innerHTML = "";
    if (ricetteFiltrate.length === 0) {
        contenitoreRisultati.innerHTML = `
           <div class="blocco-errore-animato" style="text-align: center; width: 100%;">
                <span class="faccina-errore">🍳</span>
                <p class='messaggio-vuoto' style='margin-top: 0; margin-bottom: 8px; font-weight: 600; font-size: 1.1rem;'>Ops! Nessuna ricetta corrisponde...</p>
                <p style="font-size: 0.9rem; opacity: 0.7; margin-bottom: 12px; margin-top: 0;">Prova a disattivare qualche filtro intolleranza o svuota il frigo.</p>
                <span class="link-reset" onclick="svuotaTuttiIFiltri()" style="text-decoration: none; cursor: pointer;">❌ Svuota tutti i filtri</span>
            </div>
        `;
    } else {
        ricetteFiltrate.forEach((ricetta, indice) => {
            const èNeiPreferiti = preferiti.includes(ricetta.nome);
            const scheda = creaSchedaRicetta(ricetta, èNeiPreferiti);
            if (ingredientiSelezionati.length > 0 && ricetta.percentualeFattibilita > 0) {
                const bloccoInfoFrigo = document.createElement("div");
                bloccoInfoFrigo.style.cssText = "margin-top: 6px; margin-bottom: 6px; font-size: 0.75rem; letter-spacing: 0.5px;";
                let htmlInfo = `<span class="ingrediente-mappato" style="font-weight: bold; color: #f59f00 !important; display: block; text-transform: uppercase;">🎯 Compatibilità frigo: ${ricetta.percentualeFattibilita}%</span>`;
                if (ricetta.percentualeFattibilita < 100 && ricetta.ingredientiMancanti.length > 0) {
                    const stringaMancanti = ricetta.ingredientiMancanti.map(ing => ing.charAt(0).toUpperCase() + ing.slice(1)).join(", ");
                    htmlInfo += `<span style="color: #e03131; font-weight: 600; display: block; margin-top: 2px;">❌ Ti manca: ${stringaMancanti}</span>`;
                } else if (ricetta.percentualeFattibilita === 100) {
                    htmlInfo += `<span style="color: #40c057; font-weight: 600; display: block; margin-top: 2px;">🟢 Puoi farla subito!</span>`;
                }
                bloccoInfoFrigo.innerHTML = htmlInfo;
                const titoloScheda = scheda.querySelector("h3");
                if (titoloScheda) titoloScheda.after(bloccoInfoFrigo);
            }
            scheda.style.animationDelay = `${indice * 0.05}s`;
            contenitoreRisultati.appendChild(scheda);
        });
    }
}
function svuotaTuttiIFiltri() {
    barraRicerca.value = "";
    if (inputCercaIngrediente) inputCercaIngrediente.value = "";
    filtroTipo.value = "tutti";
    if (filtroTemperatura) filtroTemperatura.value = "tutti";
    filtriSenzaAttivi = [];
    const pillole = document.querySelectorAll(".pillola-senza");
    pillole.forEach(p => p.classList.remove("attiva"));
    
    ingredientiSelezionati = [];
    const tag = document.querySelectorAll(".tag-ingrediente");
    tag.forEach(t => {
        t.classList.remove("selezionato");
        t.style.setProperty("display", "inline-block", "important");
    });
    eseguiRicercaFiltri();
    mostraPreferiti();
}
tastoCasuale.addEventListener("click", () => {
    if (databaseRicette.length === 0) return;
    const indiceCasuale = Math.floor(Math.random() * databaseRicette.length);
    const ricettaEstratta = databaseRicette[indiceCasuale];
    svuotaTuttiIFiltri();
    contenitoreRisultati.innerHTML = "";
    const èNeiPreferiti = preferiti.includes(ricettaEstratta.nome);
    const scheda = creaSchedaRicetta(ricettaEstratta, èNeiPreferiti);
    contenitoreRisultati.appendChild(scheda);
    contatoreRisultati.innerHTML = `🎲 Ricetta suggerita a sorpresa: 1`;
    setTimeout(() => {
        contenitoreRisultati.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
});
function creaSchedaRicetta(ricetta, èNeiPreferiti) {
    const bloccoRicetta = document.createElement("div");
    bloccoRicetta.className = "scheda-ricetta";
    bloccoRicetta.addEventListener("click", (e) => {
        if (!e.target.classList.contains("tasto-cuore") && !e.target.classList.contains("ingrediente-mappato")) {
            window.open(ricetta.video, "_blank");
        }
    });
    const etichetteTipi = { antipasto: "🥗 Antipasto", primo: "🍝 Primo", secondo: "🥩 Secondo", dolce: "🍰 Dolce" };
    const tipoChiave = ricetta.tipo ? ricetta.tipo.toLowerCase().trim() : "";
    const tipoTesto = etichetteTipi[tipoChiave] || "Ricetta";
    const coloriTipi = {
        antipasto: { bg: "linear-gradient(135deg, #2b8a3e, #40c057)", ombra: "rgba(43, 138, 62, 0.3)" },
        primo: { bg: "linear-gradient(135deg, #e03131, #ff6b6b)", ombra: "rgba(224, 49, 49, 0.3)" },
        secondo: { bg: "linear-gradient(135deg, #f59f00, #ffd43b)", ombra: "rgba(245, 159, 0, 0.3)" },
        dolce: { bg: "linear-gradient(135deg, #7048e8, #845ef7)", ombra: "rgba(112, 72, 232, 0.3)" }
    };
    const coloreAttuale = coloriTipi[tipoChiave] || { bg: "#888888", ombra: "rgba(0,0,0,0.1)" };
    const iconaCuore = èNeiPreferiti ? "❤️" : "🤍";
    const ingredientiColorati = ricetta.ingredienti.map(ingrediente => {
        const ceLhoInFrigo = ingredientiSelezionati.includes(ingrediente);
        if (ceLhoInFrigo) {
            return `<span class="ingrediente-mappato" style="color: #40c057 !important; font-weight: bold;">${ingrediente}</span>`;
        } else {
            return `<span class="ingrediente-mappato" style="opacity: 0.75;">${ingrediente}</span>`;
        }
    }).join(", ");
    bloccoRicetta.innerHTML = `
        <button class="tasto-cuore" style="position: absolute; top: 15px; right: 15px; background: none !important; border: none !important; font-size: 1.4rem; cursor: pointer; padding: 0; width: auto; box-shadow: none !important; transition: transform 0.2s ease; z-index: 10;">${iconaCuore}</button>
        <!-- NUOVO BADGE TRIDIMENSIONALE SFUMATO -->
        <span class="badge-tipo" style="
            font-size: 0.75rem !important; 
            text-transform: uppercase !important; 
            letter-spacing: 0.5px !important; 
            font-weight: 800 !important; 
            color: #ffffff !important; 
            background: ${coloreAttuale.bg} !important; 
            box-shadow: 0 3px 8px ${coloreAttuale.ombra} !important;
            padding: 4px 10px !important; 
            border-radius: 20px !important; 
            display: inline-block !important; 
            margin-bottom: 10px !important;
            border: none !important;
        ">${tipoTesto}</span>
        
        <h3 style="margin-top: 5px;">${ricetta.nome}</h3>
        <p><strong>Ingredienti:</strong> ${ingredientiColorati}</p>
        <span class="badge-video">▶ Guarda il video</span>
    `;
    const bottoneCuore = bloccoRicetta.querySelector(".tasto-cuore");
    bottoneCuore.addEventListener("click", (e) => {
        e.stopPropagation();
        bottoneCuore.classList.add("cuore-attivo");
        setTimeout(() => {
            invertiPreferito(ricetta.nome);
        }, 300);
    });
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
    eseguiRicercaFiltri();
}
function invertiPreferito(nomeRicetta) {
    if (navigator.vibrate) {
        navigator.vibrate(15);
    }
    if (preferiti.includes(nomeRicetta)) {
        preferiti = preferiti.filter(nome => nome !== nomeRicetta);
    } else {
        preferiti.push(nomeRicetta);
    }
    localStorage.setItem("ricettePreferite", JSON.stringify(preferiti));
    mostraPreferiti();
    eseguiRicercaFiltri();
}
const zonaAzionePreferiti = document.getElementById("zona-azione-preferiti");
function aggiornaContatoreTabPreferiti() {
    const btnPreferiti = document.getElementById("tab-preferiti");
    if (btnPreferiti) {
        if (preferiti.length > 0) {
            btnPreferiti.innerHTML = `❤️ I Miei Preferiti <span class="badge-contatore-tab">${preferiti.length}</span>`;
        } else {
            btnPreferiti.innerHTML = `❤️ I Miei Preferiti`;
        }
    }
}
function mostraPreferiti() {
    contenitorePreferiti.innerHTML = "";
    if (zonaAzionePreferiti) zonaAzionePreferiti.innerHTML = "";
    aggiornaContatoreTabPreferiti();
    if (preferiti.length === 0) {
        titoloPreferiti.style.display = "block";
        contenitorePreferiti.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; opacity: 0.7;">
                <p style="font-size: 1.1rem; font-weight: 500; margin-bottom: 8px;">🤍 Non hai ancora aggiunto nessuna ricetta ai tuoi preferiti!</p>
                <p style="font-size: 0.9rem; opacity: 0.8;">Esplora il ricettario e clicca sul cuore in alto a destra delle schede per salvarle qui.</p>
            </div>
        `;
        return;
    }
    titoloPreferiti.style.display = "block";
    const listaPreferitiOrdinata = [...preferiti].sort((a, b) => a.localeCompare(b));
    let tuttiGliIngredientiSpesa = [];
    listaPreferitiOrdinata.forEach((nome, indice) => {
        const ricetta = databaseRicette.find(r => r.nome === nome);
        if (ricetta) {
            const scheda = creaSchedaRicetta(ricetta, true);
            scheda.style.animationDelay = `${indice * 0.05}s`;
            contenitorePreferiti.appendChild(scheda);
            tuttiGliIngredientiSpesa.push(...ricetta.ingredienti);
        }
    });
    const listaSenzaDoppioni = [...new Set(tuttiGliIngredientiSpesa)];
    const frigoPulito = ingredientiSelezionati.map(ing => rimuoviAccenti(ing.toLowerCase().trim()));
    const listaSpesaMancanti = listaSenzaDoppioni.filter(ingrediente => {
        const ingredienteRicettaPulito = rimuoviAccenti(ingrediente.toLowerCase().trim());
        return !frigoPulito.includes(ingredienteRicettaPulito);
    }).sort();
    if (listaSpesaMancanti.length > 0 && zonaAzionePreferiti) {
        zonaAzionePreferiti.style.textAlign = "center";
        zonaAzionePreferiti.style.width = "100%";
        zonaAzionePreferiti.style.display = "block";
        let righeIngredienti = "";
        for (let i = 0; i < listaSpesaMancanti.length; i++) {
            let ing = listaSpesaMancanti[i];
            let ingFormattato = ing.charAt(0).toUpperCase() + ing.slice(1);
            righeIngredienti += "- " + ingFormattato + "\n";
        }
        const testoSpesa = "🛒 *COSE DA COMPRARE*:\n\n" + righeIngredienti;
        const btnCopia = document.createElement("button");
        btnCopia.className = "barra-ricerca";
        btnCopia.style.cssText = "display: inline-block; width: auto; min-width: 220px; margin: 10px 5px; padding: 10px 20px; font-size: 0.85rem; font-weight: bold; cursor: pointer; background-color: #2b8a3e; color: #fff; border: none; border-radius: 6px; box-shadow: 0 3px 8px rgba(43,138,62,0.2); text-align: center;";
        btnCopia.innerHTML = "🛒 Copia cose da comprare";
        btnCopia.addEventListener("click", () => {
            navigator.clipboard.writeText(testoSpesa).then(() => {
                btnCopia.innerHTML = "✅ Lista Copiata!";
                btnCopia.style.backgroundColor = "#40c057";
                setTimeout(() => {
                    btnCopia.innerHTML = "🛒 Copia cose da comprare";
                    btnCopia.style.backgroundColor = "#2b8a3e";
                }, 2000);
            });
        });
        zonaAzionePreferiti.appendChild(btnCopia);
        const btnWhatsApp = document.createElement("button");
        btnWhatsApp.className = "barra-ricerca";
        btnWhatsApp.style.cssText = "display: inline-block; width: auto; min-width: 220px; margin: 10px 5px; padding: 10px 20px; font-size: 0.85rem; font-weight: bold; cursor: pointer; background-color: #075e54; color: #fff; border: none; border-radius: 6px; box-shadow: 0 3px 8px rgba(7,94,84,0.2); text-align: center;";
        btnWhatsApp.innerHTML = "💬 Invia Lista della Spesa";
        btnWhatsApp.addEventListener("click", () => {
            if (navigator.share) {
                navigator.share({ title: 'Lista della Spesa', text: testoSpesa })
                .catch((error) => console.log('Condivisione annullata', error));
            } else {
                const urlRiserva = "https://wa.me" + encodeURIComponent(testoSpesa);
                window.open(urlRiserva, "_blank");
            }
        });
        zonaAzionePreferiti.appendChild(btnWhatsApp);
    } else if (preferiti.length > 0 && zonaAzionePreferiti) {
        zonaAzionePreferiti.innerHTML = "<p style='color: #40c057; font-weight: bold; text-align: center; margin: 10px 0;'>🎉 Hai già tutto nel frigo per cucinare i tuoi preferiti!</p>";
    }
}
filtroTipo.addEventListener("change", eseguiRicercaFiltri);
barraRicerca.addEventListener("input", () => {
    eseguiRicercaFiltri();
    const testo = rimuoviAccenti(barraRicerca.value.toLowerCase().trim());
    boxSuggerimenti.innerHTML = "";
    if (testo === "") {
        boxSuggerimenti.style.setProperty("display", "none", "important");
        return;
    }
    const suggeriti = databaseRicette.filter(r => 
        rimuoviAccenti(r.nome.toLowerCase()).includes(testo)
    ).slice(0, 5);
    if (suggeriti.length > 0) {
        boxSuggerimenti.style.setProperty("display", "block", "important");  
        suggeriti.forEach(ricetta => {
            const div = document.createElement("div");
            div.className = "voce-suggerimento";
            div.textContent = ricetta.nome; 
            div.addEventListener("click", () => {
                barraRicerca.value = ricetta.nome;
                boxSuggerimenti.style.setProperty("display", "none", "important");
                eseguiRicercaFiltri();
                barraRicerca.blur();
                window.location.hash = "risultati";
                setTimeout(() => {
                    history.replaceState("", document.title, window.location.pathname + window.location.search);
                }, 10);
            });
            boxSuggerimenti.appendChild(div);
        });
    } else {
        boxSuggerimenti.style.setProperty("display", "none", "important");
    }
});
document.addEventListener("click", (e) => {
    if (e.target !== barraRicerca && e.target !== boxSuggerimenti) {
        if (boxSuggerimenti) boxSuggerimenti.style.display = "none";
    }
});
inizializzaTagIngredienti();
eseguiRicercaFiltri();
mostraPreferiti();
aggiornaContatoreTabPreferiti();
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
const bottoneTornaSu = document.getElementById("torna-su");
if (bottoneTornaSu) {
    bottoneTornaSu.addEventListener("click", () => {
        const titoloInCima = document.querySelector("h1");
        if (titoloInCima) {
            titoloInCima.scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
            });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
            document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
            document.body.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
}
function saltaAiRisultati() {
    barraRicerca.blur();
    if (inputCercaIngrediente) inputCercaIngrediente.blur();
    
    window.location.hash = "risultati";
    setTimeout(() => {
        history.replaceState("", document.title, window.location.pathname + window.location.search);
    }, 10);
}
barraRicerca.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.keyCode === 13 || e.keyCode === 9) {
        e.preventDefault(); 
        saltaAiRisultati();
    }
});
if (inputCercaIngrediente) {
    inputCercaIngrediente.addEventListener("focus", (e) => {
        if (document.activeElement === inputCercaIngrediente && barraRicerca.value.trim() !== "") {
            e.preventDefault();
            saltaAiRisultati();
        }
    });
}
filtroTipo.addEventListener("change", () => {
    eseguiRicercaFiltri();
    setTimeout(saltaAiRisultati, 150);
});
function cambiaScheda(schedaSelezionata) {
    const sezioneRicette = document.getElementById("sezione-ricette");
    const sezionePreferiti = document.getElementById("sezione-preferiti");
    const btnRicette = document.getElementById("tab-ricette");
    const btnPreferiti = document.getElementById("tab-preferiti");
    if (schedaSelezionata === "ricette") {
        sezioneRicette.style.setProperty("display", "flex", "important");
        sezioneRicette.style.flexDirection = "column";
        sezioneRicette.style.alignItems = "center";
        sezionePreferiti.style.display = "none";
        btnRicette.classList.add("attivo");
        btnPreferiti.classList.remove("attivo");
    } else {
        sezioneRicette.style.display = "none";
        sezionePreferiti.style.setProperty("display", "flex", "important");
        sezionePreferiti.style.flexDirection = "column";
        sezionePreferiti.style.alignItems = "center";
        btnRicette.classList.remove("attivo");
        btnPreferiti.classList.add("attivo");
        mostraPreferiti();
    }
    window.scrollTo({ top: 0, behavior: "instant" });
}
const btnPulisciRicerca = document.getElementById("pulisci-ricerca");
const btnPulisciIngrediente = document.getElementById("pulisci-ingrediente");
if (barraRicerca && btnPulisciRicerca) {
    barraRicerca.addEventListener("input", () => {
        if (barraRicerca.value.trim() !== "") {
            btnPulisciRicerca.style.opacity = "0.6";
            btnPulisciRicerca.style.pointerEvents = "auto";
        } else {
            btnPulisciRicerca.style.opacity = "0";
            btnPulisciRicerca.style.pointerEvents = "none";
        }
    });
    btnPulisciRicerca.addEventListener("click", () => {
        barraRicerca.value = "";
        btnPulisciRicerca.style.opacity = "0";
        btnPulisciRicerca.style.pointerEvents = "none";
        if (boxSuggerimenti) boxSuggerimenti.style.setProperty("display", "none", "important");
        eseguiRicercaFiltri();
        barraRicerca.focus();
    });
}
if (inputCercaIngrediente && btnPulisciIngrediente) {
    inputCercaIngrediente.addEventListener("input", () => {
        if (inputCercaIngrediente.value.trim() !== "") {
            btnPulisciIngrediente.style.opacity = "0.6";
            btnPulisciIngrediente.style.pointerEvents = "auto";
        } else {
            btnPulisciIngrediente.style.opacity = "0";
            btnPulisciIngrediente.style.pointerEvents = "none";
        }
    });
    btnPulisciIngrediente.addEventListener("click", () => {
        inputCercaIngrediente.value = "";
        btnPulisciIngrediente.style.opacity = "0";
        btnPulisciIngrediente.style.pointerEvents = "none";
        const tuttiITag = document.querySelectorAll(".tag-ingrediente");
        tuttiITag.forEach(tag => tag.style.setProperty("display", "inline-block", "important"));
        
        inputCercaIngrediente.focus();
    });
}
const btnSvuotaFrigo = document.getElementById("svuota-frigo");
if (btnSvuotaFrigo) {
    btnSvuotaFrigo.addEventListener("click", () => {
        ingredientiSelezionati = [];
        const tuttiITag = document.querySelectorAll(".tag-ingrediente");
        tuttiITag.forEach(tag => {
            tag.classList.remove("selezionato");
        });
        eseguiRicercaFiltri();
        mostraPreferiti();
    });
}
filtroTipo.addEventListener("change", () => {
    eseguiRicercaFiltri();
    setTimeout(() => {
        const contenitoreRisultati = document.getElementById("risultati");
        if (contenitoreRisultati) {
            contenitoreRisultati.scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
            });
        }
    }, 200);
});
if (filtroTemperatura) {
    filtroTemperatura.addEventListener("change", () => {
        eseguiRicercaFiltri();
        setTimeout(() => {
            const contenitoreRisultati = document.getElementById("risultati");
            if (contenitoreRisultati) {
                contenitoreRisultati.scrollIntoView({ 
                    behavior: "smooth", 
                    block: "start" 
                });
            }
        }, 200);
    });
}
function toggleFiltroSenza(tipo, elemento) {
    if (filtriSenzaAttivi.includes(tipo)) {
        filtriSenzaAttivi = filtriSenzaAttivi.filter(f => f !== tipo);
        elemento.classList.remove("attiva");
    } else {
        filtriSenzaAttivi.push(tipo);
        elemento.classList.add("attiva");
    }
    eseguiRicercaFiltri();
}
let tempoRimanenteS = 0;
let countdownIntervallo = null;
let audioCtx = null;
let allarmeIntervalloSuono = null;
const displayTimer = document.getElementById("display-timer");
const btnAvviaTimer = document.getElementById("tasto-avvia-timer");
const btnResetTimer = document.getElementById("tasto-reset-timer");
function aggiornaGraficaDisplay() {
    if (!displayTimer) return;
    const minuti = Math.floor(tempoRimanenteS / 60);
    const secondi = tempoRimanenteS % 60;
    const stringaMinuti = minuti < 10 ? "0" + minuti : minuti;
    const stringaSecondi = secondi < 10 ? "0" + secondi : secondi;
    displayTimer.textContent = stringaMinuti + ":" + stringaSecondi;
}
function impostaMinutiTimer(minutiDaAggiungere) {
    if (displayTimer) displayTimer.classList.remove("allarme-attivo");
    tempoRimanenteS += (minutiDaAggiungere * 60);
    if (tempoRimanenteS > 5999) tempoRimanenteS = 5999;
    aggiornaGraficaDisplay();
}
function riproduciBeepElettronico() {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const oscillatore = audioCtx.createOscillator();
        const guadagnoNode = audioCtx.createGain();
        oscillatore.type = 'sine';
        oscillatore.frequency.value = 880;
        guadagnoNode.gain.setValueAtTime(1.0, audioCtx.currentTime);
        oscillatore.connect(guadagnoNode);
        guadagnoNode.connect(audioCtx.destination);
        oscillatore.start();
        oscillatore.stop(audioCtx.currentTime + 0.12);
    } catch(e) {
        console.log("Suono bloccato:", e);
    }
}
function avviaSuoneriaInfinita() {
    riproduciBeepElettronico();
    setTimeout(riproduciBeepElettronico, 200);
    allarmeIntervalloSuono = setInterval(() => {
        riproduciBeepElettronico();
        setTimeout(riproduciBeepElettronico, 200);
    }, 2000);
}
function fermaSuoneriaInfinita() {
    if (allarmeIntervalloSuono) {
        clearInterval(allarmeIntervalloSuono);
        allarmeIntervalloSuono = null;
    }
    if (displayTimer) displayTimer.classList.remove("allarme-attivo");
}
if (btnAvviaTimer) {
    btnAvviaTimer.addEventListener("click", () => {
        if (allarmeIntervalloSuono) {
            fermaSuoneriaInfinita();
            btnAvviaTimer.textContent = "▶️ Avvia";
            btnAvviaTimer.classList.remove("attivo");
            return;
        }
        if (countdownIntervallo) {
            clearInterval(countdownIntervallo);
            countdownIntervallo = null;
            btnAvviaTimer.textContent = "▶️ Avvia";
            btnAvviaTimer.classList.remove("attivo");
        }
        else {
            if (tempoRimanenteS <= 0) return;
            btnAvviaTimer.textContent = "⏸️ Pausa";
            btnAvviaTimer.classList.add("attivo");
            countdownIntervallo = setInterval(() => {
                tempoRimanenteS--;
                aggiornaGraficaDisplay();
                if (tempoRimanenteS <= 0) {
                    clearInterval(countdownIntervallo);
                    countdownIntervallo = null;
                    tempoRimanenteS = 0;
                    aggiornaGraficaDisplay();
                    
                    btnAvviaTimer.textContent = "🛑 STOP";
                    btnAvviaTimer.classList.add("attivo");
                    
                    if (displayTimer) displayTimer.classList.add("allarme-attivo");
                    avviaSuoneriaInfinita();
                }
            }, 1000);
        }
    });
}
if (btnResetTimer) {
    btnResetTimer.addEventListener("click", () => {
        if (countdownIntervallo) {
            clearInterval(countdownIntervallo);
            countdownIntervallo = null;
        }
        fermaSuoneriaInfinita();
        tempoRimanenteS = 0;
        aggiornaGraficaDisplay();
        if (btnAvviaTimer) {
            btnAvviaTimer.textContent = "▶️ Avvia";
            btnAvviaTimer.classList.remove("attivo");
        }
    });
}
tempoRimanenteS = 0;
aggiornaGraficaDisplay();
