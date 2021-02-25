// DOM Elements
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".mobile-modal");
const form = document.getElementById("form");
let input = document.querySelector("input");
const small = document.querySelector("small");

new ClipboardJS(".copy");

// Hamburger menu
hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// URL Class
class URL {
  constructor(fullUrl, shortenUrl) {
    this.fullUrl = fullUrl;
    this.shortenUrl = shortenUrl;
  }
}

// UI Class
class UI {
  static displayURL() {
    const urls = Store.getURLs();

    urls.forEach((url) => UI.addURLToList(url));
  }

  static clearFields() {
    document.querySelector("input").value = "";
  }

  static addURLToList(url) {
    const list = document.querySelector(".link-cards");
    const card = document.createElement("div");
    card.classList.add("flex-between");
    card.classList.add("link-card");

    card.innerHTML = `
      <div>
        <h4>${url.fullUrl}</h4>
      </div>
      <div class="flex">
        <h4 class="link-text">${url.shortenUrl}</h4>
        <button data-clipboard-text="${url.shortenUrl}" class="btn btn-lg btn-square copy">Copy</button>
      </div>
    `;

    list.appendChild(card);
  }
}

// LocalStorage Class
class Store {
  static getURLs() {
    let urls;
    if (localStorage.getItem("urls") === null) {
      urls = [];
    } else {
      urls = JSON.parse(localStorage.getItem("urls"));
    }
    return urls;
  }

  static addURL(url) {
    const urls = Store.getURLs();
    urls.push(url);
    localStorage.setItem("urls", JSON.stringify(urls));
  }
}

// Display all Urls
document.addEventListener("DOMContentLoader", UI.displayURL());

// Add new url
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const urlValue = input.value;

  // Validate
  if (urlValue === "") {
    small.classList.toggle("show");
    input.classList.toggle("show");
  } else {
    // API call
    postData("https://rel.ink/api/links/", { url: urlValue }).then((data) => {
      const shortenURL = `https://rel.ink/${data["hashid"]}`;
      console.log(shortenURL);

      // Instintiate new url card
      const url = new URL(urlValue, shortenURL);

      // Add to UI
      UI.addURLToList(url);

      // Add url to locals torage
      Store.addURL(url);

      // Clear field
      UI.clearFields();
    });
  }
});

// Copy to Clipboard
const copy = document.querySelectorAll(".copy");

copy.forEach((cop) => {
  cop.addEventListener("click", (e) => {
    const el = e.target;
    el.innerText = "Copied";
    el.style.backgroundColor = "var(--dark-violet)";
  });
});

// API POST Function
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
