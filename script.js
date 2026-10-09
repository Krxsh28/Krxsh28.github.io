const files = {
  intro: {
    name: "intro.txt",
    content: `
      <p>ABOUT ME</p>
      <p>Name: Krish Shah<br>Based in: Davis, California<br>From: Ahmedabad, India</p>
      <p>I am a MechE student at UC Davis with a growing interest in computer science and product building.</p>
    `,
  },
};

const app = document.querySelector("#app");

function fileLink(key) {
  return `<a class="file" href="#${key}">${files[key].name}</a>`;
}

function renderHome() {
  app.innerHTML = `
    <section class="home" aria-label="Krish Shah personal directory">
      <h1>krish shah</h1>
      <div aria-label="Directory tree">
        <div class="tree-row">└── <span class="folder">about_me</span></div>
        <div class="tree-row">&nbsp;&nbsp;&nbsp;&nbsp;└── ${fileLink("intro")}</div>
      </div>
      <p class="prompt">krish@ucdavis:~$ open a file<span class="cursor">_</span></p>
      <p class="updated">last updated: september 2026</p>
    </section>
  `;
  document.title = "Krish Shah";
}

function renderFile(key) {
  const file = files[key];
  app.innerHTML = `
    <section class="file-page">
      <nav class="file-nav" aria-label="File navigation">
        <a class="back" href="#">← cd ..</a>
        <span class="path">~/${file.name}</span>
      </nav>
      <article class="content">${file.content}</article>
      <a class="back" href="#">return_home.sh</a>
    </section>
  `;
  document.title = `${file.name} — Krish Shah`;
  window.scrollTo(0, 0);
}

function render() {
  const key = window.location.hash.slice(1);
  if (key && files[key]) {
    renderFile(key);
  } else {
    renderHome();
  }
}

window.addEventListener("hashchange", render);
render();
