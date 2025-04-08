const tabData = {
  tab1: {
    title: "Кардилогия",
    description: "Бесперебойная работа врачей и быстрая реакция вместе с GOMED!",
    advantages: [
      {
        title: "Оптимизация записи пациентов:",
        description: "Управление медицинскими картами и историями болезней...",
      },
      {
        title: "Интеграция с оборудованием:",
        description: "Интеграция с аппаратами и ЭКГ в реальном времени...",
      },
    ],
    price: "от 600 000 cум/месяц",
    image: "/assets/images/cardiolog.png",
  },
  tab2: {
    title: "Неврология",
    description: "GOMED обеспечивает высокий уровень обслуживания...",
    advantages: [
      {
        title: "Телемедицина:",
        description: "Ведение онлайн-консультаций для пациентов...",
      },
      {
        title: "Телемедицина:",
        description: "Ведение онлайн-консультаций для пациентов...",
      },
    ],
    price: "от 700 000 cум/месяц",
    image: "/assets/images/cardiolog.png",
  },
  tab3: {
    title: "Лаборатория",
    description: "GOMED помогает лабораториям повысить эффективность...",
    advantages: [
      {
        title: "Учет проб и анализов:",
        description: "Отслеживание процессов с момента сдачи анализа...",
      },
    ],
    price: "от 800 000 cум/месяц",
    image: "/assets/images/cardiolog.png",
  },
};

const tabButtonsEl = document.getElementById("tabButtons");
const tabContentsEl = document.getElementById("tabContents");
const contentTemplate = document.getElementById("tab-content-template");
const buttonTemplate = document.getElementById("tab-button-template");

function renderButtons() {
  tabButtonsEl.innerHTML = "";

  Object.entries(tabData).forEach(([key, value], index) => {
    const btnClone = buttonTemplate.content.cloneNode(true);
    const button = btnClone.querySelector(".tab-btn");
    const buttonWrapper = btnClone.querySelector(".business__tab");
    button.textContent = value.title;
    button.dataset.tab = key;

    if (index === 0) buttonWrapper.classList.add("active");

    buttonWrapper.addEventListener("click", () => {
      document.querySelectorAll(".business__tab").forEach((b) => b.classList.remove("active"));
      buttonWrapper.classList.add("active");

      renderContent(key);
    });

    tabButtonsEl.appendChild(btnClone);
  });
}

function renderContent(tabId) {
  const data = tabData[tabId];
  const clone = contentTemplate.content.cloneNode(true);

  clone.querySelector("h3").textContent = data.title;
  clone.querySelector(".business__tab-desc > p").textContent = data.description;
  clone.querySelector(".business__tab-footer-price").textContent = data.price;
  clone.querySelector(".business__tab-img img").src = data.image;

  const advantagesWrapper = clone.querySelector(".business__tab-advantages");
  advantagesWrapper.innerHTML = "";

  data.advantages.forEach((adv) => {
    const item = document.createElement("div");
    item.classList.add("business__tab-advantages-item");

    item.innerHTML = `
        <div class="business__tab-advantages-item-img">
          <img src="/assets/icons/check.svg" alt="" />
        </div>
        <div>
          <h4>${adv.title}</h4>
          <p>${adv.description}</p>
        </div>
      `;
    advantagesWrapper.appendChild(item);
  });

  tabContentsEl.innerHTML = "";
  tabContentsEl.appendChild(clone);
}

renderButtons();
renderContent("tab1");
