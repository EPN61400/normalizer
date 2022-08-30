/* `A travers ses personnages hauts en couleur, l'imitateur Pascal Fleury offre un regard à la fois tendre et plein de dérision sur la société d’aujourd’hui.
« Rires avant tout » en quelques lignes… Le plus célèbre gendarme de Saint-Tropez alias Michel Galabru, un tantinet agacé par le comportement des citoyens, le mari idéal alias Régis Laspalès, empêtré dans ses problèmes de couple, le grand séducteur, Jean-Paul Belmondo, évoquant ses conquêtes féminines et ses infidélités, sans oublier les confidences d’un curé de campagne, interprété par un Fernandel impertinent, nous livrant sans vergogne, les petits secrets de famille et son regard sur le progrès.
Le tableau ne serait pas complet sans l’incontournable Bourvil, provincial naïf et gentil, débarquant dans la capitale avec ses anecdotes sur son beau-frère maladroit et sa belle-mère envahissante…
​Chansons, jeux de mots, gags, quiproquos s’enchaînent sans relâche dans ce spectacle provoquant bonne humeur et cascades de rire.`;*/

var btnNormalize = document.getElementById("normalize");
var resultArea = document.getElementById("result");

function normalizer(el) {
  var combiningText = document.getElementById("combining_text");
  el.textContent = combiningText.value.normalize("NFC").replaceAll("’", "'");
}

btnNormalize.addEventListener("click", function () {
  normalizer(resultArea);
});
