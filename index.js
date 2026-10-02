const formulario = document.getElementById("careerForm");
const resultado = document.getElementById("result");


const perfis = {

  tecnologia: {
    nome: "Tecnologia e Inovação",

    descricao:
      "Você demonstra interesse por tecnologia, lógica e resolução de problemas.",

    carreiras: [
      "Desenvolvedor de Software",
      "Engenharia de Computação",
      "Ciência de Dados",
      "Inteligência Artificial",
      "Desenvolvimento Web"
    ]
  },

  criatividade: {
    nome: "Criatividade e Comunicação",

    descricao:
      "Você demonstra criatividade e interesse em criar e desenvolver novas ideias.",

    carreiras: [
      "Designer",
      "Publicidade",
      "Produção Audiovisual",
      "UX/UI Design",
      "Criador de Conteúdo"
    ]
  },

  pessoas: {
    nome: "Pessoas e Impacto Social",

    descricao:
      "Você demonstra interesse em ajudar pessoas e trabalhar em equipe.",

    carreiras: [
      "Psicologia",
      "Pedagogia",
      "Recursos Humanos",
      "Comunicação",
      "Serviço Social"
    ]
  },

  negocios: {
    nome: "Negócios e Liderança",

    descricao:
      "Você demonstra interesse por liderança, organização e tomada de decisões.",

    carreiras: [
      "Administração",
      "Marketing",
      "Empreendedorismo",
      "Gestão de Projetos",
      "Economia"
    ]
  },

  ciencias: {
    nome: "Ciência e Investigação",

    descricao:
      "Você demonstra curiosidade e interesse por pesquisa e descobertas.",

    carreiras: [
      "Engenharia",
      "Biologia",
      "Química",
      "Pesquisa Científica",
      "Biotecnologia"
    ]
  }

};


function adicionarPonto(pontos, perfil, valor) {

  if (!pontos[perfil]) {
    pontos[perfil] = 0;
  }

  pontos[perfil] += valor;
}


formulario.addEventListener("submit", function(event) {

  event.preventDefault();


  const interesse =
    document.getElementById("interest").value;

  const habilidade =
    document.getElementById("skill").value;

  const trabalho =
    document.getElementById("work").value;

  const objetivo =
    document.getElementById("goal").value;


  const pontos = {};


  // Interesse vale 3 pontos

  adicionarPonto(
    pontos,
    interesse,
    3
  );


  // Habilidade vale 2 pontos

  const habilidades = {

    logica: "tecnologia",

    criatividade: "criatividade",

    comunicacao: "pessoas",

    lideranca: "negocios",

    analise: "ciencias"

  };


  adicionarPonto(
    pontos,
    habilidades[habilidade],
    2
  );


  // Forma de trabalho vale 2 pontos

  const trabalhos = {

    computador: "tecnologia",

    criativo: "criatividade",

    equipe: "pessoas",

    gestao: "negocios",

    pesquisa: "ciencias"

  };


  adicionarPonto(
    pontos,
    trabalhos[trabalho],
    2
  );


  // Objetivo vale 2 pontos

  const objetivos = {

    inovacao: "tecnologia",

    expressao: "criatividade",

    impacto: "pessoas",

    crescimento: "negocios",

    descoberta: "ciencias"

  };


  adicionarPonto(
    pontos,
    objetivos[objetivo],
    2
  );


  // Descobre o perfil com maior pontuação

  const perfil = Object.keys(pontos)
    .sort((a, b) => pontos[b] - pontos[a])[0];


  const dados = perfis[perfil];


  // Mostra o resultado

  resultado.innerHTML = `

    <h3>
      ✨ Seu perfil: ${dados.nome}
    </h3>

    <p>
      ${dados.descricao}
    </p>

    <br>

    <strong>
      Carreiras que você pode pesquisar:
    </strong>

    <ul>

      ${dados.carreiras
        .map(carreira => `<li>${carreira}</li>`)
        .join("")}

    </ul>

    <br>

    <p>
      💡 A recomendação é baseada nas respostas
      fornecidas e serve como orientação inicial.
    </p>

  `;


  resultado.classList.remove("escondido");


  resultado.scrollIntoView({
    behavior: "smooth"
  });

});
