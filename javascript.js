const compare = /[0-9]{5}-[\d]{3}/g;
function verificarcep() {
  document.getElementById("loader").style.display = "block";
  const field = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${field}/json/`;

  if (!field.match(compare)) {
    document.getElementById("cepinvalido").classList.add("error");
    document.getElementById("loader").style.display = "none";
    return;
  }
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.uf === undefined) throw new err();

      document.getElementById("loader").style.display = "none";
      document.getElementById("rua").value = data.logradouro;
      document.getElementById("bairro").value = data.bairro;
      document.getElementById("cidade").value = data.localidade;
      document.getElementById("UF").value = data.uf;
      document.getElementById("ibge").value = data.ibge;
      document.getElementById("ddd").value = data.ddd;
      
    })
    .catch((err) => {
      document.getElementById("cepinvalido").classList.add("error");
      document.getElementById("form").reset();
      document.getElementById("loader").style.display = "none";
    });
}