const serviceDays = [2, 3, 4, 5, 6];
const serviceStartHour = 11;
const serviceEndHour = 15;

const featuredHours = document.querySelector("#featured-hours");
const featuredStatus = document.querySelector("#featured-status");
const featuredDish = document.querySelector("#featured-dish");
const featuredDescription = document.querySelector("#featured-description");
const featuredJuice = document.querySelector("#featured-juice");
const featuredNote = document.querySelector("#featured-note");
const weekStrip = document.querySelector("#week-strip");
const navLinks = [...document.querySelectorAll(".section-nav__link")];
const menuSectionsContainer = document.querySelector("#menu-sections");

const artMap = {
  branch: "./assets/crops/branch.png",
  cup: "./assets/crops/cup.png",
  bottle: "./assets/crops/bottle.png",
  martini: "./assets/crops/martini.png",
  shell: "./assets/crops/shell.png",
};

const wineFlagMap = {
  argentina: "argentina",
  chile: "chile",
  espanha: "spain",
  italia: "italy",
  portugal: "portugal",
  franca: "france",
};

const wineTitleMap = {
  espumantes: "ESPUMANTE",
  brancos: "BRANCOS",
  roses: "ROSÉS",
  tintos: "TINTOS",
  "formatos especiais": "FORMATOS ESPECIAIS",
  fortificados: "FORTIFICADOS",
};

const winePageLayout = [
  ["Espumantes", "Brancos", "Rosés"],
  ["Tintos", "Formatos Especiais", "Fortificados"],
];

function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getNextServiceDay(baseDate, startOffset = 0) {
  const probe = new Date(baseDate);

  for (let step = 0; step < 7; step += 1) {
    probe.setDate(baseDate.getDate() + startOffset + step);
    if (serviceDays.includes(probe.getDay())) {
      return new Date(probe);
    }
  }

  return baseDate;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
  }).format(date);
}

function renderMenuItem(item) {
  return `
    <article class="menu-item">
      <div class="menu-item__row">
        <h4 class="menu-item__name">${item.name}</h4>
        ${item.price ? `<strong class="menu-item__price">${item.price}</strong>` : ""}
      </div>
      ${item.description ? `<p class="menu-item__description">${item.description}</p>` : ""}
      ${item.note ? `<p class="menu-item__note">${item.note}</p>` : ""}
    </article>
  `;
}

function renderItemColumns(items, columns = 1) {
  if (columns <= 1 || items.length < 4) {
    return `<div class="menu-list">${items.map(renderMenuItem).join("")}</div>`;
  }

  const chunkSize = Math.ceil(items.length / columns);
  const chunks = [];

  for (let index = 0; index < columns; index += 1) {
    chunks.push(items.slice(index * chunkSize, index * chunkSize + chunkSize));
  }

  return `
    <div class="menu-list-columns">
      ${chunks
        .filter((chunk) => chunk.length)
        .map(
          (chunk) => `<div class="menu-list">${chunk.map(renderMenuItem).join("")}</div>`
        )
        .join("")}
    </div>
  `;
}

function renderBlockGroup(group) {
  return `
    <section class="menu-group">
      <div class="menu-group__header">
        <h3 class="menu-group__title">${group.title}</h3>
        ${group.note ? `<p class="menu-group__note">${group.note}</p>` : ""}
      </div>
      <div class="menu-blocks">
        ${group.blocks
          .map((block) => {
            if (block.items) {
              return `
                <article class="menu-block">
                  <h4 class="menu-block__title">${block.label}</h4>
                  <div class="menu-list">${block.items.map(renderMenuItem).join("")}</div>
                </article>
              `;
            }

            return `
              <article class="menu-block">
                <h4 class="menu-block__title">${block.label}</h4>
                <p class="menu-block__text">${block.text}</p>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderWineGroup(group) {
  const normalizedTitle = slugify(group.title);
  const groupTitle = wineTitleMap[normalizedTitle] || group.title.toUpperCase();

  return `
    <section class="wine-group">
      <h3 class="wine-group__title">${groupTitle}</h3>
      <div class="wine-country-list">
        ${group.countries
          .map(
            (country) => `
              <article class="wine-country-block">
                <div class="wine-country-block__head">
                  <img
                    class="wine-country-block__pin"
                    src="./assets/wine/pins/${wineFlagMap[slugify(country.country)]}.png"
                    alt=""
                    aria-hidden="true"
                  />
                  <h4 class="wine-country-block__title">${country.country}</h4>
                </div>
                <div class="wine-country-block__items">
                  ${country.items
                    .map(
                      (item) => `
                        <div class="wine-line">
                          <span class="wine-line__name">${item.name}</span>
                          <strong class="wine-line__price">${item.price}</strong>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderWineSection(section) {
  const groupsByTitle = new Map(
    section.groups.map((group) => [slugify(group.title), group])
  );

  const pages = winePageLayout.map((titles) =>
    titles
      .map((title) => groupsByTitle.get(slugify(title)))
      .filter(Boolean)
  );

  return `
    <section class="menu-section menu-section--wine" id="${section.id}" aria-labelledby="${section.id}-label">
      <h2 class="sr-only" id="${section.id}-label">${section.title}</h2>
      <div class="wine-pages">
        ${pages
          .map(
            (pageGroups) => `
              <article class="wine-page">
                <img
                  class="wine-page__rail"
                  src="./assets/wine/bottle-rail-clean.png"
                  alt=""
                  aria-hidden="true"
                />
                <div class="wine-page__panel">
                  <img
                    class="wine-page__header"
                    src="./assets/wine/header-wide.png"
                    alt="Frege Carta de Vinhos"
                  />
                  <div class="wine-page__groups">
                    ${pageGroups.map(renderWineGroup).join("")}
                  </div>
                  <img
                    class="wine-page__footer"
                    src="./assets/wine/diawine-clean.png"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderStandardGroup(group) {
  return `
    <section class="menu-group">
      <div class="menu-group__header">
        <h3 class="menu-group__title">${group.title}</h3>
        ${group.note ? `<p class="menu-group__note">${group.note}</p>` : ""}
      </div>
      ${renderItemColumns(group.items, group.columns || 1)}
    </section>
  `;
}

function renderSection(section) {
  if (section.theme === "wine") {
    return renderWineSection(section);
  }

  const sectionArts = (section.arts || (section.art ? [section.art] : []))
    .filter((art) => artMap[art])
    .map(
      (art) =>
        `<img class="menu-section__art menu-section__art--${art}" src="${artMap[art]}" alt="" aria-hidden="true" />`
    )
    .join("");

  return `
    <section class="menu-section menu-section--${section.id}" id="${section.id}">
      ${sectionArts}
      <div class="section-heading">
        <div>
          <span class="section-heading__eyebrow">${section.eyebrow}</span>
          <h2 class="section-heading__title">${section.title}</h2>
          ${section.note ? `<p class="section-heading__note">${section.note}</p>` : ""}
        </div>
      </div>
      <div class="menu-groups">
        ${section.groups
          .map((group) => {
            if (group.type === "blocks") {
              return renderBlockGroup(group);
            }

            if (group.type === "wine") {
              return renderWineGroup(group);
            }

            return renderStandardGroup(group);
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderSections() {
  menuSectionsContainer.innerHTML = menuSections.map(renderSection).join("");
}

function renderWeekStrip() {
  const order = [2, 3, 4, 5, 6];
  const today = new Date().getDay();

  weekStrip.innerHTML = order
    .map((day) => {
      const item = weeklySpecials[day];
      const active = today === day ? " week-card--active" : "";

      return `
        <article class="week-card${active}">
          <span class="week-card__day">${item.day}</span>
          <strong class="week-card__dish">${item.dish}</strong>
          <span class="week-card__juice">${item.juice}</span>
        </article>
      `;
    })
    .join("");
}

function updateFeaturedDish() {
  const now = new Date();
  const dayIndex = now.getDay();
  const activeSpecial = weeklySpecials[dayIndex];
  const isServiceDay = Boolean(activeSpecial);
  const isServiceHour =
    now.getHours() >= serviceStartHour && now.getHours() < serviceEndHour;

  featuredHours.textContent = "Terça a sábado, das 11h às 15h";

  if (isServiceDay && isServiceHour) {
    featuredStatus.textContent = "Disponível agora";
    featuredDish.textContent = activeSpecial.dish;
    featuredDescription.textContent = activeSpecial.description;
    featuredJuice.textContent = activeSpecial.juice;
    featuredNote.textContent = `${activeSpecial.day}: prato executivo com suco do dia.`;
    return;
  }

  const searchOffset = isServiceDay && now.getHours() >= serviceEndHour ? 1 : 0;
  const nextDate = getNextServiceDay(now, searchOffset);
  const upcomingSpecial = weeklySpecials[nextDate.getDay()];

  if (isServiceDay && now.getHours() < serviceStartHour) {
    featuredStatus.textContent = "Disponível hoje a partir das 11h";
  } else if (isServiceDay) {
    featuredStatus.textContent = "Encerrado por hoje";
  } else {
    featuredStatus.textContent = "Próxima sugestão";
  }

  featuredDish.textContent = upcomingSpecial.dish;
  featuredDescription.textContent = upcomingSpecial.description;
  featuredJuice.textContent = upcomingSpecial.juice;
  featuredNote.textContent = `Próximo prato do dia: ${formatDate(nextDate)}.`;
}

function setActiveNav(id) {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-active", isActive);
  });
}

function observeSections() {
  const sections = [...document.querySelectorAll("main > .menu-section, #menu-sections > .menu-section")];

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

      if (visibleEntry && visibleEntry.target && visibleEntry.target.id) {
        setActiveNav(visibleEntry.target.id);
      }
    },
    {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0.2, 0.35, 0.5],
    }
  );

  sections.forEach((section) => observer.observe(section));
}

renderSections();
renderWeekStrip();
updateFeaturedDish();
observeSections();
