const databaseRicette = [
    { nome: "Frittata veloce", ingredienti: ["uova", "sale", "formaggio"], video: "https://www.youtube.com/watch?v=xxLq4pHvj3A" },
    { nome: "Biscotti fatti in casa", ingredienti: ["farina", "burro", "uova"], video: "https://www.youtube.com/shorts/kUBxg-b6PUw" },
    { nome: "Arancini di riso", ingredienti: ["cereali", "cipolla", "farina"], video: "https://www.youtube.com/watch?v=byhhYm3aFm8" },
    { nome: "Porridge", ingredienti: ["cereali", "latte"], video: "https://www.youtube.com/shorts/lrs10J530o0" },
    { nome: "Zuppa di cipolle", ingredienti: ["cipolla", "brodo", "pane"], video: "https://www.youtube.com/shorts/8ScJIpFvIBI" },
    { nome: "Riso al curry", ingredienti: ["cereali", "curry", "verdure"], video: "https://www.youtube.com/shorts/jTGANsXQSl4" },
    { nome: "Patate al forno", ingredienti: ["patate", "olio", "sale"], video: "https://www.youtube.com/shorts/ITzC5ECY9gg" },
    { nome: "Miele e noci", ingredienti: ["miele", "noci"], video: "https://www.youtube.com/watch?v=RVLQ37YTW3s" },
    { nome: "Insalata mista", ingredienti: ["lattuga", "pomodori", "olio"], video: "https://www.youtube.com/shorts/96X9HBmyHow" },
    { nome: "Smoothie alla frutta", ingredienti: ["frutta", "yogurt", "miele"], video: "https://www.youtube.com/shorts/dP8Vf9m4ly0" },
    { nome: "Pizza margherita", ingredienti: ["farina", "pomodoro", "mozzarella"], video: "https://www.youtube.com/shorts/YUNjyDbkZUE" },
    { nome: "Lasagna", ingredienti: ["pasta", "ragù", "besciamella"], video: "https://www.youtube.com/shorts/eekXLQTqd10" },
    { nome: "Torta al cioccolato", ingredienti: ["farina", "uova", "cioccolato"], video: "https://www.youtube.com/shorts/5eWNEsBXWTg" },
    { nome: "Crepes", ingredienti: ["farina", "uova", "latte"], video: "https://www.youtube.com/shorts/YWEQh-l3hg8" },
    { nome: "Polenta", ingredienti: ["farina", "acqua", "sale"], video: "https://www.youtube.com/shorts/dUtftEfnVlY" },
    { nome: "Tiramisù", ingredienti: ["savoiardi", "caffè", "mascarpone"], video: "https://www.youtube.com/shorts/8Yz7wREvhAc" },
    { nome: "Pancakes", ingredienti: ["farina", "uova", "latte"], video: "https://www.youtube.com/shorts/LtSdqM9l5i4" },
    { nome: "Insalata di riso", ingredienti: ["cereali", "verdure", "olio"], video: "https://www.youtube.com/shorts/KWd_xJtbxYQ" },
    { nome: "Besciamella", ingredienti: ["latte", "patate", "uova"], video: "https://www.youtube.com/shorts/YdY5Mu-rJOM" },
    { nome: "Salsa olandese", ingredienti: ["burro", "succo di limone", "uovo"], video: "https://www.youtube.com/shorts/IuQIOp13YSY" },
    { nome: "Risotto alla milanese", ingredienti: ["burro", "zafferano", "cipolla"], video: "https://www.youtube.com/shorts/vLY7OThgQEs" },
    { nome: "Melanzane alla parmigiana", ingredienti: ["ragù", "melanzane", "formaggio"], video: "https://www.youtube.com/shorts/InSse_GGwzY" },
    { nome: "Cacio e pepe", ingredienti: ["formaggio", "pepe nero", "spaghetti"], video: "https://www.youtube.com/shorts/4-uiBhdmDuI" },
    { nome: "Purè di patate", ingredienti: ["patate", "latte", "burro"], video: "https://www.youtube.com/shorts/6E3e4i9LDWw" },
    { nome: "Panna cotta al caffè", ingredienti: ["caffè", "panna"], video: "https://www.youtube.com/shorts/cXOhcR2g3NQ" },
    { nome: "Affogato al caffè", ingredienti: ["caffè", "gelato"], video: "https://www.youtube.com/shorts/FXXWM903I9U" },
];
const menuTendina = document.getElementById("Ingredienti");
const bottoneCerca = document.getElementById("bottone-cerca");
const contenitoreRisultati = document.getElementById("risultati");
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
            const bloccoRicetta = document.createElement("a");
            bloccoRicetta.href = ricetta.video;
            bloccoRicetta.target = "_blank"; 
            bloccoRicetta.className = "scheda-ricetta";
            bloccoRicetta.innerHTML = `
                <h3>${ricetta.nome}</h3>
                <p><strong>Ingredienti:</strong> ${ricetta.ingredienti.join(", ")}</p>
                <span class="badge-video">▶ Guarda il video</span>
            `;
            contenitoreRisultati.appendChild(bloccoRicetta);
        });
    }
});
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
