// 1. Menu Mobile (Hamburguer)
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fechar menu ao clicar num link (no celular)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// 2. Animação de Surgir ao Rolar a Página (Scroll Reveal)
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100; // Distância antes de aparecer

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
// Aciona a função ao rolar a página
window.addEventListener("scroll", reveal);
// Aciona uma vez ao carregar para mostrar os elementos do topo
reveal();
// 3. Lógica da Linha do Tempo Interativa (Foco em 100 Anos)
const timelineData = {
  1926: {
    title: "1926 - A Era do Rádio e Telégrafo",
    text: "O rádio dominava as casas, reunindo famílias para ouvir notícias e radionovelas. Comunicações urgentes à distância eram feitas via telégrafo (Código Morse), e ligações telefônicas dependiam de telefonistas conectando fios manualmente.",
  },
  1950: {
    title: "Anos 1950 - A Era de Ouro da Televisão",
    text: "A televisão se populariza nos lares, adicionando a imagem à comunicação de massa. O mundo passa a 'ver' os acontecimentos em casa, mudando radicalmente o jornalismo, a publicidade e o entretenimento.",
  },
  1969: {
    title: "1969 - O Nascimento da ARPANET",
    text: "A primeira mensagem é enviada entre computadores em universidades nos EUA. Essa rede militar e acadêmica foi a semente que décadas depois, daria origem à internet que usamos hoje.",
  },
  1973: {
    title: "1973 - A Primeira Chamada de Celular",
    text: "Martin Cooper, pesquisador da Motorola, faz a primeira ligação de um telefone móvel nas ruas de Nova York. O aparelho era um protótipo gigantesco que pesava mais de 1 kg.",
  },
  1983: {
    title: "1983 - O Primeiro Celular Comercial",
    text: "A Motorola lança o DynaTAC 8000x para o público. Ele custava uma fortuna e a bateria durava apenas 30 minutos de conversa, mas marcou o início oficial da mobilidade na comunicação pessoal.",
  },
  1992: {
    title: "1992 - O Primeiro SMS da História",
    text: "Um engenheiro envia a mensagem 'Merry Christmas' (Feliz Natal) de um computador para um celular no Reino Unido. Nascia o SMS, que revolucionaria a comunicação rápida por texto.",
  },
  1990: {
    title: "Fim dos Anos 90 - A World Wide Web",
    text: "A internet se torna visual e acessível ao público com o 'www'. E-mails substituem as cartas tradicionais e programas como ICQ e MSN Messenger inauguram a febre das mensagens instantâneas.",
  },
  2004: {
    title: "2004 - O Boom das Redes Sociais",
    text: "O surgimento de plataformas como Orkut e Facebook começa a conectar milhões de pessoas globalmente. A comunicação deixa de ser apenas 'um para um' e passa a ser colaborativa e em rede.",
  },
  2007: {
    title: "2007 - A Revolução dos Smartphones",
    text: "O lançamento do iPhone consolida a era dos smartphones: internet, música, câmera e telefone em uma única tela sensível ao toque. A internet passa a viver definitivamente no nosso bolso.",
  },
  2009: {
    title: "2009 - O Fenômeno WhatsApp",
    text: "Lançamento de aplicativos de mensagens via internet (como o WhatsApp), que aos poucos substituem o SMS tradicional, popularizando o envio de áudios, fotos e vídeos de forma gratuita e instantânea.",
  },
  2026: {
    title: "2026 - Hiperconexão e IA",
    text: "Hoje a comunicação é instantânea, global e multimodal. Vivemos a era das redes 5G, videochamadas em alta definição, tradução simultânea e assistentes de Inteligência Artificial interagindo conosco.",
  },
};

function showTimeline(year, event) {
  const contentDiv = document.getElementById("tl-content");
  contentDiv.innerHTML = `<h3>${timelineData[year].title}</h3><p>${timelineData[year].text}</p>`;

  contentDiv.style.opacity = 0;
  setTimeout(() => {
    contentDiv.style.opacity = 1;
    contentDiv.style.transition = "opacity 0.5s ease";
  }, 50);

  const buttons = document.querySelectorAll(".tl-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));

  event.target.classList.add("active");
}
// Mostrar elementos do topo ao carregar
window.addEventListener("load", reveal);

// 4. Botão Voltar ao Topo
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// 5. Modo Escuro
const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    darkBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }
});
