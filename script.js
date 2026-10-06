const files = {
  intro: {
    name: "intro.txt",
    content: `
      <p>ABOUT ME</p>
      <p>Name: Krish Shah<br>Based in: Davis, California<br>From: Ahmedabad, India</p>
      <p>I am a MechE student at UC Davis with a growing interest in computer science and product building.</p>
    `,
  },
  focus: {
    name: "focus.txt",
    content: `
      <p>ENGINEERING / FOCUS</p>
      <p>Current interests:</p>
      <p>- mechanical systems<br>- computer science and data structures<br>- product design and rapid prototyping<br>- CAD, MATLAB, Python, and web development<br>- practical technology for messy real-world systems</p>
      <p>I am especially drawn to work that crosses disciplines. The fun part is usually not knowing whether the answer lives in code, hardware, operations, or some strange combination of all three.</p>
    `,
  },
  experience: {
    name: "experience.txt",
    content: `
      <p>ENGINEERING / EXPERIENCE</p>
      <p>In 2026, I spent part of my summer in Tokyo working with JFE Shoji. Living and working abroad made the internship as much a lesson in adaptability as it was in industry.</p>
      <p>I have also worked around manufacturing and recycling operations in India, where I saw how small process improvements can compound across a factory.</p>
      <p>At UC Davis, my coursework and projects have moved through engineering design, programming, circuits, data structures, linear algebra, and multivariable calculus.</p>
    `,
  },
  marathon: {
    name: "marathon.txt",
    content: `
      <p>ENDURANCE / MARATHON</p>
      <p>In 2026, I completed the San Francisco Marathon. It was my first full marathon and a very direct lesson in patience, pacing, and continuing after the exciting part is over.</p>
      <p>Next horizon: becoming a stronger runner and building toward long-course triathlon. Ambitious? Definitely. That is kind of the point.</p>
    `,
  },
  badminton: {
    name: "badminton.txt",
    content: `
      <p>SPORTS / BADMINTON</p>
      <p>My game is built around placement, drops, and front-court control. I am currently working on turning the back court and smash into actual weapons instead of polite suggestions.</p>
      <p>Current setup: Yonex Astrox 88D Pro.</p>
    `,
  },
  climbing: {
    name: "climbing.txt",
    content: `
      <p>SPORTS / CLIMBING</p>
      <p>I boulder around V4 and occasionally V5, depending on the gym and how charitable the setters are. Rocknasium in Davis is home base.</p>
      <p>Climbing is one of my favorite kinds of problem solving: physical, precise, and completely immune to bluffing.</p>
    `,
  },
  japan: {
    name: "japan_2026.txt",
    content: `
      <p>FIELD NOTES / JAPAN 2026</p>
      <p>Tokyo base. Summer internship. Trains that actually arrive when they say they will. Vegetarian-food detective work. Bouldering gyms. A spontaneous trip to Kawaguchiko and a serious debate with myself about climbing Mount Fuji.</p>
      <p>The month reinforced a simple idea: the fastest way to make the world feel bigger is to learn how to live somewhere unfamiliar.</p>
    `,
  },
  now: {
    name: "now.txt",
    content: `
      <p>NOW</p>
      <p>Location: UC Davis<br>Season: fall 2026</p>
      <p>- studying mechanical engineering and computer science<br>- starting work as a resident advisor<br>- training across badminton, climbing, lifting, and running<br>- building small things on the internet<br>- figuring out the next hard thing</p>
    `,
  },
  contact: {
    name: "contact.txt",
    content: `
      <p>CONTACT</p>
      <p>I am always open to conversations about engineering, ambitious projects, endurance sports, travel, or an unusually good vegetarian meal.</p>
      <p>School: <a class="external" href="https://www.ucdavis.edu/" target="_blank" rel="noreferrer">University of California, Davis</a><br>Status: social links coming soon</p>
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
        <div class="tree-row">├── <span class="folder">about_me</span></div>
        <div class="tree-row">│&nbsp;&nbsp;&nbsp;└── ${fileLink("intro")}</div>
        <div class="tree-row">├── <span class="folder">engineering</span></div>
        <div class="tree-row">│&nbsp;&nbsp;&nbsp;├── ${fileLink("focus")}</div>
        <div class="tree-row">│&nbsp;&nbsp;&nbsp;└── ${fileLink("experience")}</div>
        <div class="tree-row">├── <span class="folder">endurance</span></div>
        <div class="tree-row">│&nbsp;&nbsp;&nbsp;└── ${fileLink("marathon")}</div>
        <div class="tree-row">├── <span class="folder">sports</span></div>
        <div class="tree-row">│&nbsp;&nbsp;&nbsp;├── ${fileLink("badminton")}</div>
        <div class="tree-row">│&nbsp;&nbsp;&nbsp;└── ${fileLink("climbing")}</div>
        <div class="tree-row">├── <span class="folder">field_notes</span></div>
        <div class="tree-row">│&nbsp;&nbsp;&nbsp;└── ${fileLink("japan")}</div>
        <div class="tree-row">├── <span class="folder">currently</span></div>
        <div class="tree-row">│&nbsp;&nbsp;&nbsp;└── ${fileLink("now")}</div>
        <div class="tree-row">└── <span class="folder">contact</span></div>
        <div class="tree-row">&nbsp;&nbsp;&nbsp;&nbsp;└── ${fileLink("contact")}</div>
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
