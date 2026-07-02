const databaseRicette = [
    { nome: "Frittata veloce", ingredienti: ["uova", "sale", "formaggio"], video: "https://www.youtube.com/watch?v=xxLq4pHvj3A", tipo: "secondo" },
    { nome: "Biscotti fatti in casa", ingredienti: ["farina", "burro", "uova"], video: "https://www.youtube.com/shorts/kUBxg-b6PUw", tipo: "dolce" },
    { nome: "Arancini di riso", ingredienti: ["cereali", "cipolla", "farina"], video: "https://www.youtube.com/shorts/BjBSDKO81Ms", tipo: "antipasto" },
    { nome: "Porridge", ingredienti: ["cereali", "latte"], video: "https://www.youtube.com/shorts/lrs10J530o0", tipo: "dolce" },
    { nome: "Zuppa di cipolle", ingredienti: ["cipolla", "brodo", "burro"], video: "https://www.youtube.com/watch?v=e-e7DDpu4jE", tipo: "primo" },
    { nome: "Riso al curry", ingredienti: ["cereali", "curry", "verdure"], video: "https://www.youtube.com/shorts/jTGANsXQSl4", tipo: "primo" },
    { nome: "Patate al forno", ingredienti: ["patate", "olio", "sale"], video: "https://www.youtube.com/shorts/ITzC5ECY9gg", tipo: "secondo" },
    { nome: "Miele e noci", ingredienti: ["miele", "noci"], video: "https://www.youtube.com/shorts/dUXTKxr6yLA", tipo: "dolce" },
    { nome: "Insalata mista", ingredienti: ["verdure", "pomodoro", "olio"], video: "https://www.youtube.com/watch?v=bsp4ev21gxs", tipo: "secondo" },
    { nome: "Smoothie alla frutta", ingredienti: ["frutta", "yogurt", "miele"], video: "https://www.youtube.com/shorts/dP8Vf9m4ly0", tipo: "dolce" },
    { nome: "Pizza margherita", ingredienti: ["farina", "pomodoro", "mozzarella"], video: "https://www.youtube.com/shorts/YUNjyDbkZUE", tipo: "primo" },
    { nome: "Lasagna", ingredienti: ["pasta", "ragù", "besciamella"], video: "https://www.youtube.com/shorts/dYcXVPIIjEk", tipo: "primo" },
    { nome: "Torta al cioccolato", ingredienti: ["farina", "uova", "cioccolato"], video: "https://www.youtube.com/shorts/5eWNEsBXWTg", tipo: "dolce" },
    { nome: "Crepes", ingredienti: ["farina", "uova", "latte"], video: "https://www.youtube.com/shorts/YWEQh-l3hg8", tipo: "dolce" },
    { nome: "Polenta", ingredienti: ["farina", "sale"], video: "https://www.youtube.com/shorts/dUtftEfnVlY", tipo: "primo" },
    { nome: "Tiramisù", ingredienti: ["savoiardi", "caffè", "mascarpone"], video: "https://www.youtube.com/shorts/8Yz7wREvhAc", tipo: "dolce" },
    { nome: "Pancakes", ingredienti: ["farina", "uova", "latte"], video: "https://www.youtube.com/shorts/LtSdqM9l5i4", tipo: "dolce" },
    { nome: "Insalata di riso", ingredienti: ["cereali", "verdure", "olio"], video: "https://www.youtube.com/watch?v=tutpq2RM3C0", tipo: "primo" },
    { nome: "Besciamella", ingredienti: ["latte", "patate", "uova"], video: "https://www.youtube.com/shorts/YdY5Mu-rJOM", tipo: "antipasto" },
    { nome: "Salsa olandese", ingredienti: ["burro", "succo di limone", "uova"], video: "https://www.youtube.com/shorts/IuQIOp13YSY", tipo: "antipasto" },
    { nome: "Risotto alla milanese", ingredienti: ["burro", "zafferano", "cipolla"], video: "https://www.youtube.com/shorts/vLY7OThgQEs", tipo: "primo" },
    { nome: "Melanzane alla parmigiana", ingredienti: ["ragù", "melanzane", "formaggio"], video: "https://www.youtube.com/shorts/InSse_GGwzY", tipo: "secondo" },
    { nome: "Cacio e pepe", ingredienti: ["formaggio", "pepe nero", "pasta"], video: "https://www.youtube.com/shorts/4-uiBhdmDuI", tipo: "primo" },
    { nome: "Purè di patate", ingredienti: ["patate", "latte", "burro"], video: "https://www.youtube.com/shorts/4UIQQelcWgE", tipo: "secondo" },
    { nome: "Panna cotta al caffè", ingredienti: ["caffè", "panna"], video: "https://www.youtube.com/shorts/cXOhcR2g3NQ", tipo: "dolce" },
    { nome: "Affogato al caffè", ingredienti: ["caffè", "gelato"], video: "https://www.youtube.com/shorts/FXXWM903I9U", tipo: "dolce" },
    { nome: "Crostata di frutta", ingredienti: ["farina", "burro", "frutta"], video: "https://www.youtube.com/shorts/UrJn0TH0EfM", tipo: "dolce" },
    { nome: "Minestrone", ingredienti: ["verdure", "brodo", "pasta"], video: "https://www.youtube.com/shorts/yOORcKXCSIY", tipo: "primo" },
    { nome: "Gnocchi di patate", ingredienti: ["patate", "farina", "uova"], video: "https://www.youtube.com/shorts/w0hBkAIxBds", tipo: "primo" },
    { nome: "Pollo al curry", ingredienti: ["carne", "curry", "latte"], video: "https://www.youtube.com/shorts/ZB9w3DR53xw", tipo: "secondo" },
    { nome: "Couscous alle verdure", ingredienti: ["couscous", "verdure", "olio"], video: "https://www.youtube.com/shorts/-siVcrdwDwY", tipo: "primo" },
    { nome: "Frittelle di mele", ingredienti: ["mele", "farina", "uova"], video: "https://www.youtube.com/shorts/BjEIhGPjv7k", tipo: "dolce" },
    { nome: "Zuppa di lenticchie", ingredienti: ["lenticchie", "verdure", "brodo"], video: "https://www.youtube.com/shorts/lMzBj2jEXGE", tipo: "primo" },
    { nome: "Caponata siciliana", ingredienti: ["melanzane", "pomodoro", "olive"], video: "https://www.youtube.com/shorts/XOnOiCU9ABk", tipo: "antipasto" },
    { nome: "Ratatouille", ingredienti: ["melanzane", "verdure", "verdure"], video: "https://www.youtube.com/shorts/VDmOqGHDhKc", tipo: "secondo" },
    { nome: "Torta di mele", ingredienti: ["mele", "farina", "uova"], video: "https://www.youtube.com/shorts/SUf7pWLi8rE", tipo: "dolce" },
    { nome: "Brownies al cioccolato", ingredienti: ["cioccolato", "burro", "uova"], video: "https://www.youtube.com/shorts/6blrycMPTe4", tipo: "dolce" },
    { nome: "Pasta all'amatriciana", ingredienti: ["pasta", "pomodoro", "guanciale"], video: "https://www.youtube.com/shorts/HgPblcqdGA4", tipo: "primo" },
    { nome: "Pasta alla puttanesca", ingredienti: ["pasta", "pomodoro", "olive"], video: "https://www.youtube.com/watch?v=Z59zqJjUG4w", tipo: "primo" },
    { nome: "Pasta alla norma", ingredienti: ["pasta", "melanzane", "ricotta"], video: "https://www.youtube.com/shorts/5pTJDwj626Q", tipo: "primo" },
    { nome: "Pasta alla bolognese", ingredienti: ["pasta", "ragù", "formaggio"], video: "https://www.youtube.com/shorts/J9yIITFLYow", tipo: "primo" },
    { nome: "Pasta alla siciliana", ingredienti: ["pasta", "melanzane", "pomodoro"], video: "https://www.youtube.com/shorts/HyxuJwn-ucM", tipo: "primo" },
    { nome: "Pasta alla genovese", ingredienti: ["pasta", "cipolla", "carne"], video: "https://www.youtube.com/shorts/c9Gta7MaZDo", tipo: "primo" },
    { nome: "Pasta alla sorrentina", ingredienti: ["pasta", "pomodoro", "mozzarella"], video: "https://www.youtube.com/shorts/kZ-uRWh4F4g", tipo: "primo" },
    { nome: "Cannelloni ricotta e spinaci", ingredienti: ["besciamella", "ricotta", "verdure"], video: "https://www.youtube.com/shorts/PWr7c8MaceI", tipo: "primo" },
    { nome: "Gulasch ungherese", ingredienti: ["carne", "cipolla", "patate"], video: "https://www.youtube.com/shorts/zBufqt5htjw", tipo: "secondo" },
    { nome: "Chili con carne", ingredienti: ["carne", "verdure", "pomodoro"], video: "https://www.youtube.com/shorts/SPakumjssms", tipo: "secondo" },
    { nome: "Paella", ingredienti: ["cereali", "frutti di mare", "verdure"], video: "https://www.youtube.com/shorts/6EMK81Cxub0", tipo: "primo" },
    { nome: "Banana split", ingredienti: ["gelato", "banana", "panna montata"], video: "https://www.youtube.com/shorts/lEzk_W-XMsY", tipo: "dolce" },
    { nome: "Tacos messicani", ingredienti: ["tortilla", "carne", "verdure"], video: "https://www.youtube.com/shorts/Hi7gAfusjcQ", tipo: "secondo" },
    { nome: "Moussaka", ingredienti: ["melanzane", "carne", "besciamella"], video: "https://www.youtube.com/watch?v=q5NGOKIu-Sc", tipo: "secondo" },
    { nome: "Pasta alla carbonara", ingredienti: ["pasta", "uova", "guanciale"], video: "https://www.youtube.com/shorts/YIsp44Y0QXM", tipo: "primo" },
];
const tuttiGliIngredienti = [...new Set(databaseRicette.flatMap(r => r.ingredienti))].sort();
const barraRicerca = document.getElementById("barra-ricerca");
const grigliaIngredienti = document.getElementById("griglia-ingredienti");
const contenitoreRisultati = document.getElementById("risultati");
const contenitorePreferiti = document.getElementById("preferiti");
const titoloPreferiti = document.getElementById("titolo-preferiti");
const filtroTipo = document.getElementById("filtro-tipo");
let ingredientiSelezionati = [];
let preferiti = JSON.parse(localStorage.getItem("ricettePreferite")) || [];
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
        if (!e.target.classList.contains("tasto-cuore")) {
            window.open(ricetta.video, "_blank");
        }
    });
    const etichetteTipi = { antipasto: "Antipasto", primo: "Primo", secondo: "Secondo", dolce: "Dolce" };
    const tipoChiave = ricetta.tipo ? ricetta.tipo.toLowerCase().trim() : "";
    const tipoTesto = etichetteTipi[tipoChiave] || "Ricetta";
    const coloriTipi = {
        antipasto: { testo: "#2b8a3e", bordo: "rgba(43, 138, 62, 0.4)" },
        primo: { testo: "#e03131", bordo: "rgba(224, 49, 49, 0.4)" },
        secondo: { testo: "#f59f00", bordo: "rgba(245, 159, 0, 0.4)" },
        dolce: { testo: "#9c36b5", bordo: "rgba(156, 54, 181, 0.4)" }
    };
    const coloreAttuale = coloriTipi[tipoChiave] || { testo: "currentColor", bordo: "rgba(255,255,255,0.3)" };
    const iconaCuore = èNeiPreferiti ? "❤️" : "🤍";
    bloccoRicetta.innerHTML = `
        <button class="tasto-cuore" style="position: absolute; top: 15px; right: 15px; background: none !important; border: none !important; font-size: 1.4rem; cursor: pointer; padding: 0; width: auto; box-shadow: none !important;">${iconaCuore}</button>
        <span class="badge-tipo" style="
            font-size: 0.7rem !important; 
            text-transform: uppercase !important; 
            letter-spacing: 1px !important; 
            font-weight: 700 !important; 
            color: ${coloreAttuale.testo} !important; 
            border: 1px solid ${coloreAttuale.bordo} !important; 
            padding: 3px 8px !important; 
            border-radius: 4px !important; 
            display: inline-block !important; 
            margin-bottom: 8px !important;
            background-color: rgba(255, 255, 255, 0.05) !important;
        ">${tipoTesto}</span>
        <h3 style="margin-top: 5px;">${ricetta.nome}</h3>
        <p><strong>Ingredienti:</strong> ${ricetta.ingredienti.join(", ")}</p>
        <span class="badge-video">▶ Guarda il video</span>
    `;
    const bottoneCuore = bloccoRicetta.querySelector(".tasto-cuore");
    bottoneCuore.addEventListener("click", () => invertiPreferito(ricetta.nome));
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
    let ricetteFiltrate = databaseRicette.filter(ricetta => {
        const nomeRicettaSenzaAccenti = rimuoviAccenti(ricetta.nome.toLowerCase());
        const corrispondeTesto = nomeRicettaSenzaAccenti.includes(testoCercato);
        const corrispondeIngredienti = ingredientiSelezionati.every(ingrediente => 
            ricetta.ingredienti.includes(ingrediente)
        );
        const corrispondeTipo = (tipoSelezionato === "tutti" || ricetta.tipo === tipoSelezionato);
        return corrispondeTesto && corrispondeIngredienti && corrispondeTipo;
    });
    ricetteFiltrate.sort((a, b) => a.nome.localeCompare(b.nome));
    if (testoCercato === "" && ingredientiSelezionati.length === 0 && tipoSelezionato === "tutti") {
        contatoreRisultati.innerHTML = `📚 Totale ricette disponibili: ${ricetteFiltrate.length}`;
    } else {
        contatoreRisultati.innerHTML = `🔍 Ricette trovate: ${ricetteFiltrate.length}`;
    }
    contenitoreRisultati.innerHTML = "";
    if (ricetteFiltrate.length === 0) {
        contenitoreRisultati.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <p class='messaggio-vuoto' style='margin-bottom: 5px;'>Nessuna ricetta corrisponde ai filtri selezionati.</p>
                <span class="link-reset" onclick="svuotaTuttiIFiltri()">❌ Svuota tutti i filtri</span>
            </div>
        `;
    } else {
        ricetteFiltrate.forEach((ricetta, indice) => {
            const èNeiPreferiti = preferiti.includes(ricetta.nome);
            const scheda = creaSchedaRicetta(ricetta, èNeiPreferiti);
            scheda.style.animationDelay = `${indice * 0.05}s`;
            contenitoreRisultati.appendChild(scheda);
        });
    }
}
function svuotaTuttiIFiltri() {
    barraRicerca.value = "";
    if (inputCercaIngrediente) inputCercaIngrediente.value = "";
    filtroTipo.value = "tutti";
    ingredientiSelezionati = [];
    const tag = document.querySelectorAll(".tag-ingrediente");
    tag.forEach(t => {
        t.classList.remove("selezionato");
        t.style.display = "inline-block";
    });
    eseguiRicercaFiltri();
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
    const etichetteTipi = { antipasto: "Antipasto", primo: "Primo", secondo: "Secondo", dolce: "Dolce" };
    const tipoChiave = ricetta.tipo ? ricetta.tipo.toLowerCase().trim() : "";
    const tipoTesto = etichetteTipi[tipoChiave] || "Ricetta";
    const coloriTipi = {
        antipasto: { testo: "#2b8a3e", bordo: "rgba(43, 138, 62, 0.4)" }, 
        primo: { testo: "#e03131", bordo: "rgba(224, 49, 49, 0.4)" },     
        secondo: { testo: "#f59f00", bordo: "rgba(245, 159, 0, 0.4)" },   
        dolce: { testo: "#9c36b5", bordo: "rgba(156, 54, 181, 0.4)" }     
    };
    const coloreAttuale = coloriTipi[tipoChiave] || { testo: "currentColor", bordo: "rgba(255,255,255,0.3)" };
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
        <button class="tasto-cuore" style="position: absolute; top: 15px; right: 15px; background: none !important; border: none !important; font-size: 1.4rem; cursor: pointer; padding: 0; width: auto; box-shadow: none !important; transition: transform 0.2s ease;">${iconaCuore}</button>
        <span class="badge-tipo" style="
            font-size: 0.7rem !important; 
            text-transform: uppercase !important; 
            letter-spacing: 1px !important; 
            font-weight: 700 !important; 
            color: ${coloreAttuale.testo} !important; 
            border: 1px solid ${coloreAttuale.bordo} !important; 
            padding: 3px 8px !important; 
            border-radius: 4px !important; 
            display: inline-block !important; 
            margin-bottom: 8px !important;
            background-color: rgba(255, 255, 255, 0.05) !important;
        ">${tipoTesto}</span>
        
        <h3 style="margin-top: 5px;">${ricetta.nome}</h3>
        <p><strong>Ingredienti:</strong> ${ingredientiColorati}</p>
        <span class="badge-video">▶ Guarda il video</span>
    `;
    const bottoneCuore = bloccoRicetta.querySelector(".tasto-cuore");
    bottoneCuore.addEventListener("click", () => {
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
const zonaAzionePreferiti = document.getElementById("zona-azione-preferiti");
function mostraPreferiti() {
    contenitorePreferiti.innerHTML = "";
    if (zonaAzionePreferiti) zonaAzionePreferiti.innerHTML = "";

    if (preferiti.length === 0) {
        titoloPreferiti.style.display = "none";
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
        const btnSpesa = document.createElement("button");
        btnSpesa.className = "barra-ricerca";
        btnSpesa.style.cssText = "display: inline-block; width: auto; min-width: 220px; margin: 10px auto; padding: 10px 20px; font-size: 0.85rem; font-weight: bold; cursor: pointer; background-color: #2b8a3e; color: #fff; border: none; border-radius: 6px; box-shadow: 0 3px 8px rgba(43,138,62,0.2); text-align: center;";
        btnSpesa.innerHTML = "🛒 Copia cose da comprare";
        btnSpesa.addEventListener("click", () => {
            const testoSpesa = "🛒 *COSE DA COMPRARE (Ti mancano nel frigo)*:\n\n" + listaSpesaMancanti.map(ing => `- ${ing.charAt(0).toUpperCase() + ing.slice(1)}`).join("\n");
            navigator.clipboard.writeText(testoSpesa).then(() => {
                btnSpesa.innerHTML = "✅ Lista Copiata!";
                btnSpesa.style.backgroundColor = "#40c057";
                setTimeout(() => {
                    btnSpesa.innerHTML = "🛒 Copia cose da comprare";
                    btnSpesa.style.backgroundColor = "#2b8a3e";
                }, 2000);
            });
        });
        zonaAzionePreferiti.appendChild(btnSpesa);
    } else if (preferiti.length > 0 && zonaAzionePreferiti) {
        zonaAzionePreferiti.innerHTML = "<p style='color: #40c057; font-weight: bold; text-align: center; margin: 10px 0;'>🎉 Hai già tutto nel frigo per cucinare i tuoi preferiti!</p>";
    }
}
filtroTipo.addEventListener("change", eseguiRicercaFiltri);
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
const bottoneTornaSu = document.getElementById("torna-su");
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
function saltaAiRisultati() {
    barraRicerca.blur();
    window.location.hash = "risultati";
    setTimeout(() => {
        history.replaceState("", document.title, window.location.pathname + window.location.search);
    }, 10);
}
barraRicerca.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        saltaAiRisultati();
    }
});
filtroTipo.addEventListener("change", () => {
    setTimeout(saltaAiRisultati, 150);
});
