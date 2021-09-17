nomesAnimes = [];
urlsImagensCapas = [];

function adicionarAnime() {
  var NomeAnimeFavorito = document
    .getElementById("nomeAnime")
    .value.toUpperCase();
  var UrlAnimeFavorito = document.getElementById("urlCapaAnime").value;
  if (NomeAnimeFavorito == "") {
    alert("Campo nome vazio!");
  } else if (UrlAnimeFavorito == "") {
    alert("Campo endereço de imagem vazio!");
  } else {
    if (UrlAnimeFavorito.endsWith(".jpg")) {
      validarNomeUrls(NomeAnimeFavorito, UrlAnimeFavorito);
    } else {
      alert("Insira um endereço de imagem válido! ('.jpg')");
    }
  }

  document.getElementById("nomeAnime").value = "";
  document.getElementById("urlCapaAnime").value = "";
  console.log(nomesAnimes);
  console.log(urlsImagensCapas);
}

function listarAnime() {
  for (i = 0; i < nomesAnimes.length; i++) {
    var elementoAnimeFavorito =
      "<p>" +
      nomesAnimes[i] +
      ": <br><img src=" +
      urlsImagensCapas[i] +
      "></p>";
    var elementoListaAnime = document.getElementById("listaAnime");
    elementoListaAnime.innerHTML =
      elementoListaAnime.innerHTML + elementoAnimeFavorito;
  }
}

function validarNomeUrls(nome, url) {
  if (nomesAnimes.includes(nome)) {
    alert("Esse anime já foi adicionado!");
  } else if (urlsImagensCapas.includes(url)) {
    alert("Esse url já foi adicionado!");
  } else {
    nomesAnimes.push(nome);
    urlsImagensCapas.push(url);
  }
}
