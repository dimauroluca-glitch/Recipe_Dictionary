const databaseRicette = [
    { nome: "Frittata veloce", ingredienti: ["uova", "sale", "formaggio"], video: "https://www.youtube.com/watch?v=xxLq4pHvj3A", tipo: "secondo", temperatura: "caldo", tempo: 15 },
    { nome: "Biscotti fatti in casa", ingredienti: ["farina", "burro", "uova"], video: "https://www.youtube.com/shorts/kUBxg-b6PUw", tipo: "dolce", temperatura: "freddo", tempo: 25 },
    { nome: "Arancini di riso", ingredienti: ["cereali", "cipolla", "farina"], video: "https://www.youtube.com/shorts/BjBSDKO81Ms", tipo: "antipasto", temperatura: "tiepido", tempo: 50 },
    { nome: "Porridge", ingredienti: ["cereali", "latte"], video: "https://www.youtube.com/shorts/lrs10J530o0", tipo: "dolce", temperatura: "caldo", tempo: 10 },
    { nome: "Zuppa di cipolle", ingredienti: ["cipolla", "brodo", "burro"], video: "https://www.youtube.com/watch?v=e-e7DDpu4jE", tipo: "primo", temperatura: "caldo", tempo: 40 },
    { nome: "Riso al curry", ingredienti: ["cereali", "curry", "verdure"], video: "https://www.youtube.com/shorts/jTGANsXQSl4", tipo: "primo", temperatura: "caldo", tempo: 25 },
    { nome: "Patate al forno", ingredienti: ["patate", "olio", "sale"], video: "https://www.youtube.com/shorts/ITzC5ECY9gg", tipo: "secondo", temperatura: "caldo", tempo: 35 },
    { nome: "Miele e noci", ingredienti: ["miele", "noci"], video: "https://www.youtube.com/shorts/dUXTKxr6yLA", tipo: "dolce", temperatura: "freddo", tempo: 5 },
    { nome: "Insalata mista", ingredienti: ["verdure", "pomodoro", "olio"], video: "https://www.youtube.com/watch?v=bsp4ev21gxs", tipo: "secondo", temperatura: "freddo", tempo: 10 },
    { nome: "Smoothie alla frutta", ingredienti: ["frutta", "yogurt", "miele"], video: "https://www.youtube.com/shorts/dP8Vf9m4ly0", tipo: "dolce", temperatura: "freddo", tempo: 5 },
    { nome: "Pizza margherita", ingredienti: ["farina", "pomodoro", "mozzarella"], video: "https://www.youtube.com/shorts/YUNjyDbkZUE", tipo: "primo", temperatura: "caldo", tempo: 30 },
    { nome: "Lasagna", ingredienti: ["pasta", "ragù", "besciamella"], video: "https://www.youtube.com/shorts/dYcXVPIIjEk", tipo: "primo", temperatura: "caldo", tempo: 60 },
    { nome: "Torta al cioccolato", ingredienti: ["farina", "uova", "cioccolato"], video: "https://www.youtube.com/shorts/5eWNEsBXWTg", tipo: "dolce", temperatura: "freddo", tempo: 45 },
    { nome: "Crepes", ingredienti: ["farina", "uova", "latte"], video: "https://www.youtube.com/shorts/YWEQh-l3hg8", tipo: "dolce", temperatura: "tiepido", tempo: 20 },
    { nome: "Polenta", ingredienti: ["farina", "sale"], video: "https://www.youtube.com/shorts/dUtftEfnVlY", tipo: "primo", temperatura: "caldo", tempo: 45 },
    { nome: "Tiramisù", ingredienti: ["savoiardi", "caffè", "mascarpone"], video: "https://www.youtube.com/shorts/8Yz7wREvhAc", tipo: "dolce", temperatura: "freddo", tempo: 20 },
    { nome: "Pancakes", ingredienti: ["farina", "uova", "latte"], video: "https://www.youtube.com/shorts/LtSdqM9l5i4", tipo: "dolce", temperatura: "caldo", tempo: 15 },
    { nome: "Insalata di riso", ingredienti: ["cereali", "verdure", "olio"], video: "https://www.youtube.com/watch?v=tutpq2RM3C0", tipo: "primo", temperatura: "freddo", tempo: 30 },
    { nome: "Besciamella", ingredienti: ["latte", "patate", "uova"], video: "https://www.youtube.com/shorts/YdY5Mu-rJOM", tipo: "antipasto", temperatura: "caldo", tempo: 15 },
    { nome: "Salsa olandese", ingredienti: ["burro", "limone", "uova"], video: "https://www.youtube.com/shorts/IuQIOp13YSY", tipo: "antipasto", temperatura: "tiepido", tempo: 15 },
    { nome: "Risotto alla milanese", ingredienti: ["burro", "zafferano", "cipolla"], video: "https://www.youtube.com/shorts/vLY7OThgQEs", tipo: "primo", temperatura: "caldo", tempo: 30 },
    { nome: "Melanzane alla parmigiana", ingredienti: ["ragù", "melanzane", "formaggio"], video: "https://www.youtube.com/shorts/InSse_GGwzY", tipo: "secondo", temperatura: "caldo", tempo: 50 },
    { nome: "Cacio e pepe", ingredienti: ["formaggio", "pepe", "pasta"], video: "https://www.youtube.com/shorts/4-uiBhdmDuI", tipo: "primo", temperatura: "caldo", tempo: 15 },
    { nome: "Purè di patate", ingredienti: ["patate", "latte", "burro"], video: "https://www.youtube.com/shorts/4UIQQelcWgE", tipo: "secondo", temperatura: "caldo", tempo: 25 },
    { nome: "Panna cotta al caffè", ingredienti: ["caffè", "panna"], video: "https://www.youtube.com/shorts/cXOhcR2g3NQ", tipo: "dolce", temperatura: "freddo", tempo: 15 },
    { nome: "Affogato al caffè", ingredienti: ["caffè", "gelato"], video: "https://www.youtube.com/shorts/FXXWM903I9U", tipo: "dolce", temperatura: "freddo", tempo: 5 },
    { nome: "Crostata di frutta", ingredienti: ["farina", "burro", "frutta"], video: "https://www.youtube.com/shorts/UrJn0TH0EfM", tipo: "dolce", temperatura: "freddo", tempo: 40 },
    { nome: "Minestrone", ingredienti: ["verdure", "brodo", "pasta"], video: "https://www.youtube.com/shorts/yOORcKXCSIY", tipo: "primo", temperatura: "caldo", tempo: 45 },
    { nome: "Gnocchi di patate", ingredienti: ["patate", "farina", "uova"], video: "https://www.youtube.com/shorts/w0hBkAIxBds", tipo: "primo", temperatura: "caldo", tempo: 30 },
    { nome: "Pollo al curry", ingredienti: ["carne", "curry", "latte"], video: "https://www.youtube.com/shorts/ZB9w3DR53xw", tipo: "secondo", temperatura: "caldo", tempo: 25 },
    { nome: "Couscous alle verdure", ingredienti: ["couscous", "verdure", "olio"], video: "https://www.youtube.com/shorts/-siVcrdwDwY", tipo: "primo", temperatura: "tiepido", tempo: 20 },
    { nome: "Frittelle di mele", ingredienti: ["mele", "farina", "uova"], video: "https://www.youtube.com/shorts/BjEIhGPjv7k", tipo: "dolce", temperatura: "caldo", tempo: 20 },
    { nome: "Zuppa di lenticchie", ingredienti: ["lenticchie", "verdure", "brodo"], video: "https://www.youtube.com/shorts/lMzBj2jEXGE", tipo: "primo", temperatura: "caldo", tempo: 45 },
    { nome: "Caponata siciliana", ingredienti: ["melanzane", "pomodoro", "olive"], video: "https://www.youtube.com/shorts/XOnOiCU9ABk", tipo: "antipasto", temperatura: "freddo", tempo: 40 },
    { nome: "Ratatouille", ingredienti: ["melanzane", "verdure", "verdure"], video: "https://www.youtube.com/shorts/VDmOqGHDhKc", tipo: "secondo", temperatura: "caldo", tempo: 45 },
    { nome: "Torta di mele", ingredienti: ["mele", "farina", "uova"], video: "https://www.youtube.com/shorts/SUf7pWLi8rE", tipo: "dolce", temperatura: "tiepido", tempo: 50 },
    { nome: "Brownies al cioccolato", ingredienti: ["cioccolato", "burro", "uova"], video: "https://www.youtube.com/shorts/6blrycMPTe4", tipo: "dolce", temperatura: "freddo", tempo: 30 },
    { nome: "Pasta all'amatriciana", ingredienti: ["pasta", "pomodoro", "guanciale"], video: "https://www.youtube.com/shorts/HgPblcqdGA4", tipo: "primo", temperatura: "caldo", tempo: 20 },
    { nome: "Pasta alla puttanesca", ingredienti: ["pasta", "pomodoro", "olive"], video: "https://www.youtube.com/watch?v=Z59zqJjUG4w", tipo: "primo", temperatura: "caldo", tempo: 20 },
    { nome: "Pasta alla norma", ingredienti: ["pasta", "melanzane", "ricotta"], video: "https://www.youtube.com/shorts/5pTJDwj626Q", tipo: "primo", temperatura: "caldo", tempo: 30 },
    { nome: "Pasta alla bolognese", ingredienti: ["pasta", "ragù", "formaggio"], video: "https://www.youtube.com/shorts/J9yIITFLYow", tipo: "primo", temperatura: "caldo", tempo: 30 },
    { nome: "Pasta alla siciliana", ingredienti: ["pasta", "melanzane", "pomodoro"], video: "https://www.youtube.com/shorts/HyxuJwn-ucM", tipo: "primo", temperatura: "caldo", tempo: 25 },
    { nome: "Pasta alla genovese", ingredienti: ["pasta", "cipolla", "carne"], video: "https://www.youtube.com/shorts/c9Gta7MaZDo", tipo: "primo", temperatura: "caldo", tempo: 90 },
    { nome: "Pasta alla sorrentina", ingredienti: ["pasta", "pomodoro", "mozzarella"], video: "https://www.youtube.com/shorts/kZ-uRWh4F4g", tipo: "primo", temperatura: "caldo", tempo: 25 },
    { nome: "Cannelloni ricotta e spinaci", ingredienti: ["besciamella", "ricotta", "verdure"], video: "https://www.youtube.com/shorts/PWr7c8MaceI", tipo: "primo", temperatura: "caldo", tempo: 45 },
    { nome: "Gulasch ungherese", ingredienti: ["carne", "cipolla", "patate"], video: "https://www.youtube.com/shorts/zBufqt5htjw", tipo: "secondo", temperatura: "caldo", tempo: 90 },
    { nome: "Chili con carne", ingredienti: ["carne", "verdure", "pomodoro"], video: "https://www.youtube.com/shorts/SPakumjssms", tipo: "secondo", temperatura: "caldo", tempo: 60 },
    { nome: "Paella", ingredienti: ["cereali", "frutti di mare", "verdure"], video: "https://www.youtube.com/shorts/6EMK81Cxub0", tipo: "primo", temperatura: "caldo", tempo: 45 },
    { nome: "Banana split", ingredienti: ["gelato", "banana", "panna montata"], video: "https://www.youtube.com/shorts/lEzk_W-XMsY", tipo: "dolce", temperatura: "freddo", tempo: 10 },
    { nome: "Tacos messicani", ingredienti: ["tortilla", "carne", "verdure"], video: "https://www.youtube.com/shorts/Hi7gAfusjcQ", tipo: "secondo", temperatura: "caldo", tempo: 20 },
    { nome: "Moussaka", ingredienti: ["melanzane", "carne", "besciamella"], video: "https://www.youtube.com/watch?v=q5NGOKIu-Sc", tipo: "secondo", temperatura: "caldo", tempo: 75 },
    { nome: "Pasta alla carbonara", ingredienti: ["pasta", "uova", "guanciale"], video: "https://www.youtube.com/shorts/YIsp44Y0QXM", tipo: "primo", temperatura: "caldo", tempo: 15 },
    { nome: "Anelli di funghi", ingredienti: ["funghi", "uova", "farina", "olio"], video: "https://www.youtube.com/shorts/M2aYCBM-2zw", tipo: "antipasto", temperatura: "caldo", tempo: 20 },
    { nome: "Carpaccio di cedro", ingredienti: ["pepe", "cedro", "formaggio"], video: "https://www.youtube.com/shorts/lULqIcg6vRI", tipo: "antipasto", temperatura: "freddo", tempo: 15 },
    { nome: "Risotto alle fragole", ingredienti: ["riso", "frutta", "burro"], video: "https://www.youtube.com/shorts/V1K2eJk2_cE", tipo: "primo", temperatura: "caldo", tempo: 30 },
    { nome: "Maiale in agrodolce", ingredienti: ["carne", "ananas", "pomodoro"], video: "https://www.youtube.com/shorts/kb7DDaDJd-k", tipo: "secondo", temperatura: "caldo", tempo: 35 },
    { nome: "Spaghetti all'assassina", ingredienti: ["pasta", "pomodoro", "olio"], video: "https://www.youtube.com/shorts/YIsp44Y0QXM", tipo: "primo", temperatura: "caldo", tempo: 25 },
    { nome: "Pere al vino rosso e gorgonzola", ingredienti: ["frutta", "formaggio"], video: "https://www.youtube.com/shorts/Ik9k80Bm1bM", tipo: "secondo", temperatura: "tiepido", tempo: 30 },
    { nome: "Guacamole con mango", ingredienti: ["avocado", "cipolla", "mango", "pomodoro"], video: "https://www.youtube.com/shorts/iOZk8j4fp7U", tipo: "antipasto", temperatura: "freddo", tempo: 15 },
    { nome: "Gamberi in salsa rosa", ingredienti: ["frutti di mare", "panna", "verdure"], video: "https://www.youtube.com/shorts/BBn-tBPZ1ZM", tipo: "antipasto", temperatura: "freddo", tempo: 15 },
    { nome: "Scaloppine al limone", ingredienti: ["carne", "farina", "limone", "pepe"], video: "https://www.youtube.com/shorts/9UrxVwMJ0mA", tipo: "secondo", temperatura: "caldo", tempo: 20 },
    { nome: "Mousse di mortadella e pistacchi", ingredienti: ["prosciutto", "ricotta", "pistacchio", "formaggio"], video: "https://www.youtube.com/shorts/qWCFDprizn0", tipo: "antipasto", temperatura: "freddo", tempo: 15 },
    { nome: "Tartare di tonno con avocado e pistacchi", ingredienti: ["tonno", "avocado", "pistacchio"], video: "https://www.youtube.com/shorts/7D6JvprLJW0", tipo: "antipasto", temperatura: "freddo", tempo: 15 },
    { nome: "Involtini di zucchine grigliate con crema di tonno", ingredienti: ["tonno", "verdure", "maionese"], video: "https://www.youtube.com/shorts/zk3gXO6qdTY", tipo: "antipasto", temperatura: "freddo", tempo: 25 },
    { nome: "Uova ripiene alla salsa tonnata", ingredienti: ["uova", "tonno", "maionese"], video: "https://www.youtube.com/shorts/jm1tmCkE3d8", tipo: "antipasto", temperatura: "freddo", tempo: 20 },
    { nome: "Insalata russa", ingredienti: ["maionese", "patate", "verdure"], video: "https://www.youtube.com/shorts/uCTOCNA2q3w", tipo: "antipasto", temperatura: "freddo", tempo: 35 },
    { nome: "Quadrotti di sfoglia con cipolle caramellate", ingredienti: ["cipolla", "formaggio", "uova"], video: "https://www.youtube.com/shorts/2DQFcGqWwLI", tipo: "antipasto", temperatura: "tiepido", tempo: 30 }
];
const boxSuggerimentiIngrediente = document.getElementById("suggerimenti-ingrediente");
const filtroTemperatura = document.getElementById("filtro-temperatura");
const boxSuggerimenti = document.getElementById("suggerimenti-ricerca");
const tuttiGliIngredienti = [...new Set(databaseRicette.flatMap(r => r.ingredienti))].sort();
const barraRicerca = document.getElementById("barra-ricerca");
const grigliaIngredienti = document.getElementById("griglia-ingredienti");
const contenitoreRisultati = document.getElementById("risultati");
const contenitorePreferiti = document.getElementById("preferiti");
const titoloPreferiti = document.getElementById("titolo-preferiti");
const filtroTipo = document.getElementById("filtro-tipo");
let ingredientiSelezionati = localStorage.getItem("frigoIngredienti") ? JSON.parse(localStorage.getItem("frigoIngredienti")) : [];
let preferiti = JSON.parse(localStorage.getItem("ricettePreferite")) || [];
let filtriSenzaAttivi = [];
let tempoMassimoSelezionato = "tutti";
function inizializzaTagIngredienti() {
    const scatolaFrigoHtml = document.getElementById("griglia-ingredienti");
    if (!scatolaFrigoHtml) return;
    scatolaFrigoHtml.innerHTML = "";
    localStorage.setItem("frigoIngredienti", JSON.stringify(ingredientiSelezionati));
    if (!ingredientiSelezionati || ingredientiSelezionati.length === 0) {
        return; 
    }
    ingredientiSelezionati.forEach(ingrediente => {
        const tag = document.createElement("div");
        tag.className = "tag-ingrediente selezionato"; 
        tag.innerHTML = `<span>${ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1)}</span>`;
        tag.addEventListener("click", () => {
            ingredientiSelezionati = ingredientiSelezionati.filter(i => i !== ingrediente);
            inizializzaTagIngredienti(); 
            eseguiRicercaFiltri();       
            mostraPreferiti();           
        });
        scatolaFrigoHtml.appendChild(tag);
    });
}
const inputCercaIngrediente = document.getElementById("cerca-ingrediente");
if (inputCercaIngrediente) {
    inputCercaIngrediente.addEventListener("input", () => {
        const testo = rimuoviAccenti(inputCercaIngrediente.value.toLowerCase().trim());
        boxSuggerimentiIngrediente.innerHTML = ""; 
        if (testo === "") {
            boxSuggerimentiIngrediente.style.setProperty("display", "none", "important");
            return;
        }
        const ingredientiTrovati = tuttiGliIngredienti.filter(ing => 
            rimuoviAccenti(ing.toLowerCase()).includes(testo) && 
            !ingredientiSelezionati.includes(ing)
        ).slice(0, 5);
        if (ingredientiTrovati.length > 0) {
            boxSuggerimentiIngrediente.style.setProperty("display", "block", "important");
            ingredientiTrovati.forEach(ingrediente => {
                const div = document.createElement("div");
                div.className = "voce-suggerimento";
                const nomeFormattato = ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1);
                div.innerHTML = `<span>${nomeFormattato}</span>`;
                div.addEventListener("click", () => {
                    ingredientiSelezionati.push(ingrediente); 
                    inputCercaIngrediente.value = "";         
                    boxSuggerimentiIngrediente.style.setProperty("display", "none", "important"); 
                    inizializzaTagIngredienti(); 
                    eseguiRicercaFiltri();       
                    mostraPreferiti();
                    inputCercaIngrediente.focus(); 
                });
                boxSuggerimentiIngrediente.appendChild(div);
            });
        } else {
            boxSuggerimentiIngrediente.style.setProperty("display", "none", "important");
        }
    });
}
document.addEventListener("click", (e) => {
    if (e.target !== inputCercaIngrediente && e.target !== boxSuggerimentiIngrediente) {
        if (boxSuggerimentiIngrediente) boxSuggerimentiIngrediente.style.setProperty("display", "none", "important");
    }
});
const contatoreRisultati = document.getElementById("contatore-risultati");
function rimuoviAccenti(testo) {
    return testo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const tastoCasuale = document.getElementById("tasto-casuale");
function eseguiRicercaFiltri() {
    const testoCercato = rimuoviAccenti(barraRicerca.value.toLowerCase().trim());
    const tipoSelezionato = filtroTipo.value;
    const temperaturaSelezionata = filtroTemperatura ? filtroTemperatura.value : "tutti";
    const ingredientiSalvatiFrigo = localStorage.getItem("frigoIngredienti");
    if (ingredientiSalvatiFrigo) {
        ingredientiSelezionati = JSON.parse(ingredientiSalvatiFrigo);
    }
    let ricetteFiltrate = databaseRicette.filter(ricetta => {
        const nomeRicettaSenzaAccenti = rimuoviAccenti(ricetta.nome.toLowerCase());
        const corrispondeTesto = nomeRicettaSenzaAccenti.includes(testoCercato);
        const corrispondeTipo = (tipoSelezionato === "tutti" || ricetta.tipo === tipoSelezionato);
        const corrispondeTemperatura = (temperaturaSelezionata === "tutti" || ricetta.temperatura === temperaturaSelezionata);
        const ingMinuscoli = ricetta.ingredienti.map(i => i.toLowerCase().trim());
        if (filtriSenzaAttivi.includes("glutine")) {
            if (ingMinuscoli.some(i => i.includes("farina") || i.includes("pasta") || i.includes("savoiardi") || i.includes("biscotti") || i.includes("pane"))) return false;
        }
        if (filtriSenzaAttivi.includes("lattosio")) {
            if (ingMinuscoli.some(i => i.includes("latte") || i.includes("burro") || i.includes("panna") || i.includes("formaggio") || i.includes("mozzarella") || i.includes("mascarpone") || i.includes("ricotta") || i.includes("besciamella") || i.includes("yogurt"))) return false;
        }
        let minutiCottura = ricetta.tempo;
        if (!minutiCottura) {
            const tipoChiave = ricetta.tipo ? ricetta.tipo.toLowerCase().trim() : "";
            if (tipoChiave === "antipasto") minutiCottura = 15;
            else if (tipoChiave === "dolce") minutiCottura = 20;
            else if (tipoChiave === "primo") minutiCottura = 30;
            else if (tipoChiave === "secondo") minutiCottura = 40;
            else minutiCottura = 25;
        }
        if (tempoMassimoSelezionato !== "tutti") {
            if (minutiCottura > parseInt(tempoMassimoSelezionato)) return false;
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
        ricetteFiltrate.sort((a, b) => b.percentualeFattibilita - a.percentualeFattibilita);
    } else {
        ricetteFiltrate.sort((a, b) => a.nome.localeCompare(b.nome));
    }
    if (testoCercato === "" && ingredientiSelezionati.length === 0 && tipoSelezionato === "tutti" && temperaturaSelezionata === "tutti" && filtriSenzaAttivi.length === 0 && tempoMassimoSelezionato === "tutti") {
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
                <p style="font-size: 0.9rem; opacity: 0.7; margin-bottom: 12px; margin-top: 0;">Prova a cambiare i filtri del tempo o intolleranze.</p>
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
    if (barraRicerca) barraRicerca.value = "";
    if (inputCercaIngrediente) {
        inputCercaIngrediente.value = "";
        inputCercaIngrediente.blur();
    }
    if (filtroTipo) filtroTipo.value = "tutti";
    if (filtroTemperatura) filtroTemperatura.value = "tutti";
    filtriSenzaAttivi = [];
    const pilloleSenza = document.querySelectorAll(".contenitore-intolleranze .pillola-senza");
    pilloleSenza.forEach(p => p.classList.remove("attiva"));
    tempoMassimoSelezionato = "tutti";
    const tutteLePilloleTempo = document.querySelectorAll(".contenitore-tempo-filtro .pillola-senza");
    tutteLePilloleTempo.forEach(p => p.classList.remove("attiva"));
    if (tutteLePilloleTempo && tutteLePilloleTempo) tutteLePilloleTempo.classList.add("attiva");
    ingredientiSelezionati = [];
    localStorage.removeItem("filtroTipo");
    localStorage.removeItem("filtroTemperatura");
    localStorage.removeItem("filtriSenza");
    localStorage.removeItem("filtroTempoMassimo");
    localStorage.removeItem("frigoIngredienti");
    inizializzaTagIngredienti(); 
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
    let minutiCottura = ricetta.tempo;
    if (!minutiCottura) {
        if (tipoChiave === "antipasto") minutiCottura = 15;
        else if (tipoChiave === "dolce") minutiCottura = 20;
        else if (tipoChiave === "primo") minutiCottura = 30;
        else if (tipoChiave === "secondo") minutiCottura = 40;
        else minutiCottura = 25;
    }
    const ingMinuscoli = ricetta.ingredienti.map(i => i.toLowerCase().trim());
    const èSenzaGlutine = !ingMinuscoli.some(i => i.includes("farina") || i.includes("pasta") || i.includes("savoiardi") || i.includes("biscotti") || i.includes("pane"));
    const èSenzaLattosio = !ingMinuscoli.some(i => i.includes("latte") || i.includes("burro") || i.includes("panna") || i.includes("formaggio") || i.includes("mozzarella") || i.includes("mascarpone") || i.includes("ricotta") || i.includes("besciamella") || i.includes("yogurt"));
    let htmlIntolleranze = "";
    if (èSenzaGlutine) {
        htmlIntolleranze += `<span style="font-size: 0.75rem !important; font-weight: 700 !important; color: #2b8a3e !important; background: rgba(43, 138, 62, 0.1) !important; border: 1px solid rgba(43, 138, 62, 0.25) !important; padding: 3px 10px !important; border-radius: 20px !important; display: inline-block !important;">🌾 Senza Glutine</span>`;
    }
    if (èSenzaLattosio) {
        htmlIntolleranze += `<span style="font-size: 0.75rem !important; font-weight: 700 !important; color: #2b8a3e !important; background: rgba(43, 138, 62, 0.1) !important; border: 1px solid rgba(43, 138, 62, 0.25) !important; padding: 3px 10px !important; border-radius: 20px !important; display: inline-block !important;">🥛 Senza Lattosio</span>`;
    }
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
        <div style="margin-bottom: 8px; width: 100%; text-align: left;">
            <span class="badge-tipo" style="font-size: 0.75rem !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; font-weight: 800 !important; color: #ffffff !important; background: ${coloreAttuale.bg} !important; box-shadow: 0 3px 8px ${coloreAttuale.ombra} !important; padding: 4px 10px !important; border-radius: 20px !important; display: inline-block !important; border: none !important;">${tipoTesto}</span>
        </div>
        <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 12px; width: 100%; justify-content: flex-start; align-items: center;">
            <span class="badge-temperatura" style="font-size: 0.75rem !important; font-weight: 700 !important; color: var(--text-color) !important; background: rgba(128, 128, 128, 0.15) !important; border: 1px solid rgba(128, 128, 128, 0.25) !important; padding: 3px 10px !important; border-radius: 20px !important; display: inline-block !important;">${temperaturaTesto}</span>
            <span class="badge-temperatura" style="font-size: 0.75rem !important; font-weight: 700 !important; color: var(--text-color) !important; background: rgba(128, 128, 128, 0.15) !important; border: 1px solid rgba(128, 128, 128, 0.25) !important; padding: 3px 10px !important; border-radius: 20px !important; display: inline-block !important;">⏱️ ${minutiCottura} min</span>
            ${htmlIntolleranze}
        </div>
        <h3 style="margin-top: 5px; margin-bottom: 6px; text-align: left; width: 100%; font-size: 1.25rem;">${ricetta.nome}</h3>
        <p style="text-align: left; width: 100%; margin-bottom: 10px;"><strong>Ingredienti:</strong> ${ingredientiColorati}</p>
        <div style="text-align: left; width: 100%;">
            <span class="badge-video" style="display: inline-block; cursor: pointer; font-size: 0.85rem; font-weight: bold; color: #ff5252;">▶ Guarda la video-ricetta</span>
        </div>
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
    aggiornaContatoreTabPreferiti(); 
    mostraPreferiti();             
    eseguiRicercaFiltri();           
}
const zonaAzionePreferiti = document.getElementById("zona-azione-preferiti");
function aggiornaContatoreTabPreferiti() {
    const btnPreferiti = document.getElementById("tab-preferiti");
    if (btnPreferiti) {
        if (preferiti.length > 0) {
            btnPreferiti.innerHTML = `❤️ Miei Preferiti <span class="badge-contatore-tab">${preferiti.length}</span>`;
        } else {
            btnPreferiti.innerHTML = `❤️ Miei Preferiti`;
        }
    }
}
function mostraPreferiti() {
    const contenitoreZonaAzione = document.getElementById("zona-azione-preferiti");
    const contenitorePreferiti = document.getElementById("preferiti");
    const titoloPreferiti = document.getElementById("titolo-preferiti");
    if (!contenitorePreferiti) return;
    contenitorePreferiti.innerHTML = "";
    if (contenitoreZonaAzione) contenitoreZonaAzione.innerHTML = "";
    if (preferiti.length === 0) {
        if (titoloPreferiti) titoloPreferiti.textContent = "❤️ I Miei Preferiti";
        contenitorePreferiti.innerHTML = `
            <div style="text-align: center; padding: 30px 20px; opacity: 0.7;">
                <p style="font-weight: 600; margin-bottom: 5px;">Il tuo ricettario salvato è vuoto.</p>
                <p style="font-size: 0.85rem; margin-top: 0;">Esplora i piatti e clicca sul cuore per salvare le tue ricette preferite qui!</p>
            </div>
        `;
        return;
    }
    if (titoloPreferiti) {
        titoloPreferiti.innerHTML = `❤️ Le Tue Ricette Preferite <span class="numero-titolo-preferiti">${preferiti.length}</span>`;
    }
    const ingredientiSalvatiFrigo = localStorage.getItem("frigoIngredienti");
    if (ingredientiSalvatiFrigo) {
        ingredientiSelezionati = JSON.parse(ingredientiSalvatiFrigo);
    } else {
        ingredientiSelezionati = [];
    }
    const frigoMinuscolo = ingredientiSelezionati.map(i => i.toLowerCase().trim());
    function aggiornaSoloIlBannerVerde() {
        const vecchioBanner = document.getElementById("banner-pronto-cucina");
        if (vecchioBanner) vecchioBanner.remove();
        let piattiProntiSubito = [];
        const frigoAttuale = ingredientiSelezionati.map(i => i.toLowerCase().trim());
        preferiti.forEach(nomeRicetta => {
            const ricettaTrovata = databaseRicette.find(r => r.nome === nomeRicetta);
            if (ricettaTrovata) {
                const haTutto = ricettaTrovata.ingredienti.every(ing => 
                    frigoAttuale.includes(ing.toLowerCase().trim())
                );
                if (haTutto) piattiProntiSubito.push(ricettaTrovata.nome);
            }
        });
        if (piattiProntiSubito.length > 0 && contenitoreZonaAzione) {
            const divBanner = document.createElement("div");
            divBanner.id = "banner-pronto-cucina";
            divBanner.className = "blocco-spesa-consolidata";
            divBanner.style.cssText = "background: rgba(43, 138, 62, 0.1) !important; border-color: rgba(43, 138, 62, 0.3) !important; margin-bottom: 15px !important;";
            divBanner.innerHTML = `
                <h4 style="margin: 0; font-size: 1rem; color: #40c057 !important; display: flex; align-items: center; gap: 6px;">🟢 Pronta da cucinare!</h4>
                <p style="font-size: 0.85rem; margin: 4px 0 0 0; font-weight: 600;">Hai preso tutto il necessario per preparare: <span style="color: #40c057;">${piattiProntiSubito.join(", ")}</span></p>
            `;
            contenitoreZonaAzione.insertBefore(divBanner, contenitoreZonaAzione.firstChild);
        }
    }
    let tuttiGliIngredientiPreferiti = [];
    preferiti.forEach(nomeRicetta => {
        const ricettaTrovata = databaseRicette.find(r => r.nome === nomeRicetta);
        if (ricettaTrovata) {
            ricettaTrovata.ingredienti.forEach(ing => {
                const ingPulito = ing.toLowerCase().trim();
                if (!tuttiGliIngredientiPreferiti.includes(ingPulito)) {
                    tuttiGliIngredientiPreferiti.push(ingPulito);
                }
            });
        }
    });
    if (contenitoreZonaAzione && tuttiGliIngredientiPreferiti.length > 0) {
        let htmlListaVoci = "";
        tuttiGliIngredientiPreferiti.forEach((ing, i) => {
            const nomeFormattato = ing.charAt(0).toUpperCase() + ing.slice(1);
            const ceLhoGia = frigoMinuscolo.includes(ing);
            const classeComprato = ceLhoGia ? "comprato" : "";
            const attributoChecked = ceLhoGia ? "checked" : "";
            htmlListaVoci += `
                <li class="voce-spesa-item ${classeComprato}" id="item-spesa-${i}" data-ingrediente-nome="${ing}">
                    <input type="checkbox" id="check-spesa-${i}" ${attributoChecked}>
                    <span>${nomeFormattato}</span>
                </li>
            `;
        });
        const divSpesaBox = document.createElement("div");
        divSpesaBox.className = "blocco-spesa-consolidata";
        divSpesaBox.style.position = "relative";
        divSpesaBox.innerHTML = `
            <h4 style="margin: 0; font-size: 1rem; display: flex; align-items: center; gap: 6px;">🛒 Lista della Spesa Intelligente</h4>
            <p style="font-size: 0.8rem; opacity: 0.7; margin: 4px 0 0 0;">Ingredienti necessari combinati (spunta le voci quando le compri):</p>
            <ul class="lista-spesa-voci">${htmlListaVoci}</ul>
            <button id="tasto-condividi-spesa" class="btn-tab" style="width: 100% !important; max-width: none !important; margin-top: 15px !important; padding: 10px 16px !important; font-size: 0.9rem !important; background: linear-gradient(135deg, #ff9233, #ff5252) !important; color: #ffffff !important; border: none !important; box-shadow: 0 4px 12px rgba(255, 82, 82, 0.25) !important;">
                📤 Condividi Lista della Spesa
            </button>
        `;
        contenitoreZonaAzione.appendChild(divSpesaBox);
        const btnCondividi = divSpesaBox.querySelector("#tasto-condividi-spesa");
        if (btnCondividi) {
            btnCondividi.addEventListener("click", async () => {
                let testoCondivisione = "🛒 *LISTA DELLA SPESA* 🛒\nEcco gli ingredienti:\n\n";
                tuttiGliIngredientiPreferiti.forEach(ing => {
                    const inFrigo = ingredientiSelezionati.includes(ing);
                    testoCondivisione += inFrigo ? `✅ ~${ing}~\n` : `▫️ ${ing}\n`;
                });
                if (navigator.share) {
                    try { await navigator.share({ title: 'Lista della Spesa', text: testoCondivisione }); } catch (err) {}
                } else {
                    try { await navigator.clipboard.writeText(testoCondivisione); alert("📋 Copiata!"); } catch (err) {}
                }
            });
        }
        const elementiLista = divSpesaBox.querySelectorAll(".voce-spesa-item");
        elementiLista.forEach(li => {
            const checkbox = li.querySelector('input[type="checkbox"]');
            const nomeIngrediente = li.getAttribute("data-ingrediente-nome");
            li.addEventListener("click", (e) => {
                if (e.target !== checkbox) {
                    checkbox.checked = !checkbox.checked;
                }
                li.classList.toggle("comprato", checkbox.checked);
                const memoriaFresca = localStorage.getItem("frigoIngredienti");
                let ingredientiLocali = memoriaFresca ? JSON.parse(memoriaFresca) : [];
                if (checkbox.checked) {
                    if (!ingredientiLocali.includes(nomeIngrediente)) {
                        ingredientiLocali.push(nomeIngrediente);
                    }
                } else {
                    ingredientiLocali = ingredientiLocali.filter(ing => ing !== nomeIngrediente);
                }
                ingredientiSelezionati = ingredientiLocali;
                localStorage.setItem("frigoIngredienti", JSON.stringify(ingredientiSelezionati));
                if (typeof disegnaPilloleFrigo === "function") disegnaPilloleFrigo();
                if (typeof eseguiRicercaFiltri === "function") eseguiRicercaFiltri();
                aggiornaSoloIlBannerVerde();
            });
        });
    }
    aggiornaSoloIlBannerVerde();
    preferiti.forEach((nomeRicetta, indice) => {
        const ricetta = databaseRicette.find(r => r.nome === nomeRicetta);
        if (ricetta) {
            const scheda = creaSchedaRicetta(ricetta, true);
            scheda.style.animationDelay = `${indice * 0.05}s`;
            contenitorePreferiti.appendChild(scheda);
        }
    });
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
    const sezioneTimer = document.getElementById("sezione-timer");
    const sezionePreferiti = document.getElementById("sezione-preferiti");
    const btnRicette = document.getElementById("tab-ricette");
    const btnTimer = document.getElementById("tab-timer");
    const btnPreferiti = document.getElementById("tab-preferiti");
    if (btnRicette) btnRicette.classList.remove("attivo");
    if (btnTimer) btnTimer.classList.remove("attivo");
    if (btnPreferiti) btnPreferiti.classList.remove("attivo");
    if (sezioneRicette) sezioneRicette.style.display = "none";
    if (sezioneTimer) sezioneTimer.style.display = "none";
    if (sezionePreferiti) sezionePreferiti.style.display = "none";
    if (schedaSelezionata === "ricette") {
        sezioneRicette.style.setProperty("display", "flex", "important");
        sezioneRicette.style.flexDirection = "column";
        sezioneRicette.style.alignItems = "center";
        if (btnRicette) btnRicette.classList.add("attivo");
        const ingredientiSalvatiFrigo = localStorage.getItem("frigoIngredienti");
        if (ingredientiSalvatiFrigo) {
            ingredientiSelezionati = JSON.parse(ingredientiSalvatiFrigo);
        } else {
            ingredientiSelezionati = [];
        }
        if (typeof disegnaPilloleFrigo === "function") {
            disegnaPilloleFrigo(); 
        } else if (typeof inizializzaTagIngredienti === "function") {
            inizializzaTagIngredienti();
        }
        if (typeof eseguiRicercaFiltri === "function") {
            eseguiRicercaFiltri();
        }
    } 
    else if (schedaSelezionata === "timer") {
        sezioneTimer.style.setProperty("display", "flex", "important");
        sezioneTimer.style.flexDirection = "column";
        sezioneTimer.style.alignItems = "center";
        if (btnTimer) btnTimer.classList.add("attivo");
    } 
    else if (schedaSelezionata === "preferiti") {
        sezionePreferiti.style.setProperty("display", "flex", "important");
        sezionePreferiti.style.flexDirection = "column";
        sezionePreferiti.style.alignItems = "center";
        if (btnPreferiti) btnPreferiti.classList.add("attivo");
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
    localStorage.setItem("filtriSenza", JSON.stringify(filtriSenzaAttivi));
    eseguiRicercaFiltri();
}
let tempoRimanenteS = 0;
let countdownIntervallo = null;
let audioCtx = null;
let allarmeIntervalloSuono = null;
const displayTimer = document.getElementById("display-timer");
const btnAvviaTimer = document.getElementById("tasto-avvia-timer");
const btnResetTimer = document.getElementById("tasto-reset-timer");
if (typeof Notification !== "undefined" && Notification.permission !== "granted" && Notification.permission !== "denied") {
    Notification.requestPermission();
}
function aggiornaGraficaDisplay() {
    if (!displayTimer) return;
    const minutes = Math.floor(tempoRimanenteS / 60);
    const seconds = tempoRimanenteS % 60;
    const stringaMinuti = minutes < 10 ? "0" + minutes : minutes;
    const stringaSecondi = seconds < 10 ? "0" + seconds : seconds;
    displayTimer.textContent = stringaMinuti + ":" + stringaSecondi;
}
function impostaMinutiTimer(minutiDaAggiungere) {
    if (displayTimer) displayTimer.classList.remove("allarme-attivo");
    if (tempoRimanenteS <= 0 && btnResetTimer) {
        btnResetTimer.style.setProperty("display", "inline-block", "important");
    }
    tempoRimanenteS += (minutiDaAggiungere * 60);
    if (tempoRimanenteS > 5999) tempoRimanenteS = 5999;
    if (countdownIntervallo) {
        const nuovaScadenza = Date.now() + (tempoRimanenteS * 1000);
        localStorage.setItem("timerScadenzaData", nuovaScadenza);
    } else {
        localStorage.setItem("timerTempoImpostato", tempoRimanenteS);
    }
    aggiornaGraficaDisplay();
}
function riproduciBeepElettronico() {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const oscillatore = audioCtx.createOscillator();
        const guadagnoNode = audioCtx.createGain();
        oscillatore.type = 'square'; 
        oscillatore.frequency.value = 2500; 
        guadagnoNode.gain.setValueAtTime(1.0, audioCtx.currentTime);
        oscillatore.connect(guadagnoNode);
        guadagnoNode.connect(audioCtx.destination);
        oscillatore.start();
        oscillatore.stop(audioCtx.currentTime + 0.08); 
    } catch(e) {
        console.log("Suono bloccato:", e);
    }
}
function avviaSuoneriaInfinita() {
    riproduciBeepElettronico();
    setTimeout(riproduciBeepElettronico, 120);
    setTimeout(riproduciBeepElettronico, 240);
    setTimeout(riproduciBeepElettronico, 360);
    allarmeIntervalloSuono = setInterval(() => {
        riproduciBeepElettronico();
        setTimeout(riproduciBeepElettronico, 120);
        setTimeout(riproduciBeepElettronico, 240);
        setTimeout(riproduciBeepElettronico, 360);
    }, 2000)
    if (typeof Notification !== "undefined" && Notification.permission === "granted") {
        new Notification("⏱️ Timer Cucina Scaduto!", {
            body: "Il tempo di cottura è terminato. Controlla i fornelli!",
            requireInteraction: true 
        });
    }
}
function fermaSuoneriaInfinita() {
    if (allarmeIntervalloSuono) {
        clearInterval(allarmeIntervalloSuono);
        allarmeIntervalloSuono = null;
    }
    localStorage.removeItem("timerScadenzaData");
    localStorage.removeItem("timerTempoImpostato");
    if (displayTimer) displayTimer.classList.remove("allarme-attivo");
    if (btnResetTimer) btnResetTimer.style.setProperty("display", "inline-block", "important");
}
function avviaCicloCountdown() {
    if (countdownIntervallo) clearInterval(countdownIntervallo);
    countdownIntervallo = setInterval(() => {
        const dataScadenza = localStorage.getItem("timerScadenzaData");
        if (!dataScadenza) {
            clearInterval(countdownIntervallo);
            countdownIntervallo = null;
            return;
        }
        const secondiMancanti = Math.ceil((parseInt(dataScadenza) - Date.now()) / 1000);
        if (secondiMancanti <= 0) {
            clearInterval(countdownIntervallo);
            countdownIntervallo = null;
            tempoRimanenteS = 0;
            aggiornaGraficaDisplay();
            if (btnAvviaTimer) {
                btnAvviaTimer.textContent = "🛑 STOP";
                btnAvviaTimer.classList.add("attivo");
            }
            if (displayTimer) displayTimer.classList.add("allarme-attivo");
            if (btnResetTimer) btnResetTimer.style.setProperty("display", "none", "important");
            
            avviaSuoneriaInfinita();
        } else {
            tempoRimanenteS = secondiMancanti;
            aggiornaGraficaDisplay();
        }
    }, 1000);
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
            localStorage.removeItem("timerScadenzaData");
            localStorage.setItem("timerTempoImpostato", tempoRimanenteS);
            btnAvviaTimer.textContent = "▶️ Avvia";
            btnAvviaTimer.classList.remove("attivo");
        } else {
            if (tempoRimanenteS <= 0) return;
            btnAvviaTimer.textContent = "⏸️ Pausa";
            btnAvviaTimer.classList.add("attivo");
            const scadenzaFutura = Date.now() + (tempoRimanenteS * 1000);
            localStorage.setItem("timerScadenzaData", scadenzaFutura);
            avviaCicloCountdown();
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
        localStorage.removeItem("timerScadenzaData");
        localStorage.removeItem("timerTempoImpostato");
        aggiornaGraficaDisplay();
        if (btnAvviaTimer) {
            btnAvviaTimer.textContent = "▶️ Avvia";
            btnAvviaTimer.classList.remove("attivo");
        }
    });
}
(function ripristinaStatoTimerAllAvvio() {
    const dataScadenzaSalvata = localStorage.getItem("timerScadenzaData");
    const tempoImpostatoSalvato = localStorage.getItem("timerTempoImpostato");
    if (dataScadenzaSalvata) {
        const millisecondiMancanti = parseInt(dataScadenzaSalvata) - Date.now();
        if (millisecondiMancanti > 0) {
            tempoRimanenteS = Math.ceil(millisecondiMancanti / 1000);
            aggiornaGraficaDisplay();
            if (btnAvviaTimer) {
                btnAvviaTimer.textContent = "⏸️ Pausa";
                btnAvviaTimer.classList.add("attivo");
            }
            avviaCicloCountdown();
        } else {
            tempoRimanenteS = 0;
            aggiornaGraficaDisplay();
            if (btnAvviaTimer) {
                btnAvviaTimer.textContent = "🛑 STOP";
                btnAvviaTimer.classList.add("attivo");
            }
            if (displayTimer) displayTimer.classList.add("allarme-attivo");
            if (btnResetTimer) btnResetTimer.style.setProperty("display", "none", "important");
            avviaSuoneriaInfinita();
        }
    } else if (tempoImpostatoSalvato) {
        tempoRimanenteS = parseInt(tempoImpostatoSalvato);
        aggiornaGraficaDisplay();
    } else {
        tempoRimanenteS = 0;
        aggiornaGraficaDisplay();
    }
})();
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
function filtraPerTempo(limiteMinuti, elemento) {
    tempoMassimoSelezionato = limiteMinuti;
    const tutteLePilloleTempo = document.querySelectorAll(".contenitore-tempo-filtro .pillola-senza");
    tutteLePilloleTempo.forEach(p => p.classList.remove("attiva"));
    elemento.classList.add("attiva");
    localStorage.setItem("filtroTempoMassimo", tempoMassimoSelezionato);
    eseguiRicercaFiltri(); 
}
function svuotaTuttiIFiltri() {
    barraRicerca.value = "";
    if (inputCercaIngrediente) inputCercaIngrediente.value = "";
    filtroTipo.value = "tutti";
    if (filtroTemperatura) filtroTemperatura.value = "tutti";
    filtriSenzaAttivi = [];
    const pilloleSenza = document.querySelectorAll(".contenitore-intolleranze .pillola-senza");
    pilloleSenza.forEach(p => p.classList.remove("attiva"));
    tempoMassimoSelezionato = "tutti";
    const tutteLePilloleTempo = document.querySelectorAll(".contenitore-tempo-filtro .pillola-senza");
    tutteLePilloleTempo.forEach(p => p.classList.remove("attiva"));
    if (tutteLePilloleTempo[2]) tutteLePilloleTempo[2].classList.add("attiva");
    ingredientiSelezionati = [];
    const tag = document.querySelectorAll(".tag-ingrediente");
    tag.forEach(t => {
        t.classList.remove("selezionato");
        t.style.setProperty("display", "inline-block", "important");
    });
    localStorage.removeItem("filtroTipo");
    localStorage.removeItem("filtroTemperatura");
    localStorage.removeItem("filtriSenza");
    localStorage.removeItem("filtroTempoMassimo");
    localStorage.removeItem("frigoIngredienti");
    eseguiRicercaFiltri();
    mostraPreferiti();
}
const ingredientiSalvatiFrigo = localStorage.getItem("frigoIngredienti");
if (ingredientiSalvatiFrigo) {
    ingredientiSelezionati = JSON.parse(ingredientiSalvatiFrigo);
} else {
    ingredientiSelezionati = [];
}
const tipoSalvato = localStorage.getItem("filtroTipo");
if (tipoSalvato && filtroTipo) filtroTipo.value = tipoSalvato;
const temperaturaSalvata = localStorage.getItem("filtroTemperatura");
if (temperaturaSalvata && filtroTemperatura) filtroTemperatura.value = temperaturaSalvata;
const filtriSenzaSalvati = localStorage.getItem("filtriSenza");
if (filtriSenzaSalvati) {
    filtriSenzaAttivi = JSON.parse(filtriSenzaSalvati);
    const pilloleSenza = document.querySelectorAll(".contenitore-intolleranze .pillola-senza");
    if (pilloleSenza && pilloleSenza.length >= 2) {
        if (filtriSenzaAttivi.includes("glutine")) pilloleSenza[0].classList.add("attiva");
        if (filtriSenzaAttivi.includes("lattosio")) pilloleSenza[1].classList.add("attiva");
    }
}
const tempoSalvatoFiltro = localStorage.getItem("filtroTempoMassimo");
const tutteLePilloleTempo = document.querySelectorAll(".contenitore-tempo-filtro .pillola-senza");
if (tempoSalvatoFiltro) {
    tempoMassimoSelezionato = tempoSalvatoFiltro;
    if (tutteLePilloleTempo && tutteLePilloleTempo.length >= 3) {
        tutteLePilloleTempo.forEach(p => p.classList.remove("attiva"));
        if (tempoMassimoSelezionato === "20") tutteLePilloleTempo[0].classList.add("attiva");
        else if (tempoMassimoSelezionato === "40") tutteLePilloleTempo[1].classList.add("attiva");
        else if (tempoMassimoSelezionato === "tutti") tutteLePilloleTempo[2].classList.add("attiva");
    }
} else {
    if (tutteLePilloleTempo && tutteLePilloleTempo[2]) {
        tutteLePilloleTempo[2].classList.add("attiva");
    }
}
inizializzaTagIngredienti();
eseguiRicercaFiltri();
mostraPreferiti();
cambiaScheda('ricette');
function avviaSlotDefinitiva() {
    const contenitore = document.getElementById("risultati");
    if (!contenitore || !databaseRicette || databaseRicette.length === 0) return;
    let giri = 0;
    const durataTotaleGiri = 25; 
    const btnSlot = document.getElementById("tasto-casuale");
    if (btnSlot) btnSlot.disabled = true;
    contenitore.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; box-sizing: border-box; width: 100%;">
            <div style="font-size: 1.4rem; font-weight: 800; color: #f59f00; letter-spacing: 2px; margin-bottom: 15px;">
                🎰 SPINNING... 🎰
            </div>
            <!-- Questo micro-box conterrà solo il testo che cambia, evitando ricalcoli pesanti -->
            <div id="testo-slot-vortice" style="font-size: 1.7rem; font-weight: 700; color: var(--text-main); font-family: monospace; min-height: 50px; display: flex; justify-content: center; align-items: center; word-break: break-word;">
                Selezionando...
            </div>
        </div>
    `;
    const elementoTestoVortice = document.getElementById("testo-slot-vortice");
    const intervalloSlot = setInterval(() => {
        const indiceCasuale = Math.floor(Math.random() * databaseRicette.length);
        const ricettaCasuale = databaseRicette[indiceCasuale];
        if (elementoTestoVortice && ricettaCasuale) {
            elementoTestoVortice.textContent = ricettaCasuale.nome;
        }
        giri++;
        if (giri >= durataTotaleGiri) {
            clearInterval(intervalloSlot);
            const indiceVincente = Math.floor(Math.random() * databaseRicette.length);
            const piattoVincitore = databaseRicette[indiceVincente];
            contenitore.innerHTML = "";
            const frigoMinuscolo = (ingredientiSelezionati || []).map(ing => ing.toLowerCase().trim());
            piattoVincitore.ingredientiMancanti = piattoVincitore.ingredienti.filter(ing => 
                !frigoMinuscolo.includes(ing.toLowerCase().trim())
            );
            const posseduti = piattoVincitore.ingredienti.length - piattoVincitore.ingredientiMancanti.length;
            piattoVincitore.percentualeFattibilita = Math.round((posseduti / piattoVincitore.ingredienti.length) * 100);
            const indiceRealeDatabase = databaseRicette.indexOf(piattoVincitore);
            const èNeiPreferiti = (preferiti || []).includes(piattoVincitore.nome);
            let schedaEletta = null;
            if (typeof creaSchedaRicetta === "function") {
                schedaEletta = creaSchedaRicetta(piattoVincitore, èNeiPreferiti, indiceRealeDatabase);
            }
            if (schedaEletta) {
                schedaEletta.classList.add("scheda-estratta-slot");
                if (frigoMinuscolo.length > 0 && piattoVincitore.percentualeFattibilita > 0) {
                    const bloccoInfoFrigo = document.createElement("div");
                    bloccoInfoFrigo.style.cssText = "margin-top: 6px; margin-bottom: 6px; font-size: 0.75rem; letter-spacing: 0.5px;";
                    let htmlInfo = `<span class="ingrediente-mappato" style="font-weight: bold; color: #f59f00 !important; display: block; text-transform: uppercase;">🎯 Compatibilità frigo: ${piattoVincitore.percentualeFattibilita}%</span>`;
                    if (piattoVincitore.percentualeFattibilita < 100) {
                        const stringaMancanti = piattoVincitore.ingredientiMancanti.map(ing => ing.charAt(0).toUpperCase() + ing.slice(1)).join(", ");
                        htmlInfo += `<span style="color: #e03131; font-weight: 600; display: block; margin-top: 2px;">❌ Ti manca: ${stringaMancanti}</span>`;
                    } else if (piattoVincitore.percentualeFattibilita === 100) {
                        htmlInfo += `<span style="color: #40c057; font-weight: 600; display: block; margin-top: 2px;">🟢 Puoi farla subito!</span>`;
                    }
                    bloccoInfoFrigo.innerHTML = htmlInfo;
                    const titoloScheda = schedaEletta.querySelector("h3");
                    if (titoloScheda) titoloScheda.after(bloccoInfoFrigo);
                }
                contenitore.appendChild(schedaEletta);
                schedaEletta.scrollIntoView({ behavior: "smooth", block: "center" });
            } else {
                if (typeof barraRicerca !== "undefined" && barraRicerca) {
                    barraRicerca.value = piattoVincitore.nome;
                    if (typeof eseguiRicercaFiltri === "function") eseguiRicercaFiltri();
                }
            }
            if (btnSlot) btnSlot.disabled = false;
        }
    }, 60);
}
