const weeklySpecials = {
  2: {
    day: "Terca-feira",
    dish: "Moqueca de banana da terra",
    description: "Acompanha arroz branco e farofinha.",
    juice: "Limonada de coco",
  },
  3: {
    day: "Quarta-feira",
    dish: "Franguinho assado",
    description: "Acompanha feijao preto, arroz branco e saladinha.",
    juice: "Pink lemonade",
  },
  4: {
    day: "Quinta-feira",
    dish: "Parmegiana de frango",
    description: "Acompanha espaguete e fritas.",
    juice: "Limonada de jabuticaba",
  },
  5: {
    day: "Sexta-feira",
    dish: "Strogonoff de frango",
    description: "Acompanha arroz e batata palha.",
    juice: "Pinha fresh",
  },
  6: {
    day: "Sabado",
    dish: "Salada Rio Branco",
    description:
      "Mix de folhas, frango grelhado, grao de bico, cebola roxa, tomate cereja, coentro e molho mostarda e mel.",
    juice: "Suco tropical da casa",
  },
};

const serviceDays = [2, 3, 4, 5, 6];
const serviceStartHour = 11;
const serviceEndHour = 15;

const featuredHours = document.querySelector("#featured-hours");
const featuredStatus = document.querySelector("#featured-status");
const featuredDish = document.querySelector("#featured-dish");
const featuredDescription = document.querySelector("#featured-description");
const featuredJuice = document.querySelector("#featured-juice");
const featuredNote = document.querySelector("#featured-note");
const navLinks = [...document.querySelectorAll(".section-nav__link")];
const observedSections = [...document.querySelectorAll("main .section")];

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

function updateFeaturedDish() {
  const now = new Date();
  const dayIndex = now.getDay();
  const activeSpecial = weeklySpecials[dayIndex];
  const isServiceDay = Boolean(activeSpecial);
  const isServiceHour =
    now.getHours() >= serviceStartHour && now.getHours() < serviceEndHour;

  featuredHours.textContent = "Terca a sabado, das 11h as 15h";

  if (isServiceDay && isServiceHour) {
    featuredStatus.textContent = "Disponivel agora";
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
    featuredStatus.textContent = "Disponivel hoje a partir das 11h";
  } else if (isServiceDay) {
    featuredStatus.textContent = "Encerrado por hoje";
  } else {
    featuredStatus.textContent = "Proxima sugestao";
  }

  featuredDish.textContent = upcomingSpecial.dish;
  featuredDescription.textContent = upcomingSpecial.description;
  featuredJuice.textContent = upcomingSpecial.juice;
  featuredNote.textContent = `Proximo prato do dia: ${formatDate(nextDate)}.`;
}

function setActiveNav(id) {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-active", isActive);
  });
}

function observeSections() {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry?.target?.id) {
        setActiveNav(visibleEntry.target.id);
      }
    },
    {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0.2, 0.35, 0.5],
    }
  );

  observedSections.forEach((section) => observer.observe(section));
}

updateFeaturedDish();
observeSections();
