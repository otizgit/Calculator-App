const key1 = document.querySelector(".key1");
const key2 = document.querySelector(".key2");
const key3 = document.querySelector(".key3");
const toggle = document.querySelector(".toggle");
const numbers = document.querySelector(".numbers");
const tog1 = document.querySelector(".tog1");
const tog2 = document.querySelector(".tog2");
const tog3 = document.querySelector(".tog3");
const root = document.querySelector(":root");

const keys = Array.from(document.getElementsByClassName("key"));
const tab = document.querySelector(".tab");

tog1.addEventListener("click", toggle1);
key1.addEventListener("click", toggle1);

function toggle1() {
  // ! Backgrounds
  root.style.setProperty("--mainbackground", "hsl(222, 26%, 31%)");
  root.style.setProperty(
    "--togglebackground_keypadbackground",
    "hsl(223, 31%, 20%)"
  );
  root.style.setProperty("--screenbackground", "hsl(224, 36%, 15%)");

  // ? Keys
  root.style.setProperty("--delkeybackground", "hsl(225, 21%, 49%)");
  root.style.setProperty("--delkeyactive", "hsl(225, 21%, 69%)");
  root.style.setProperty("--delkeyshadow", "hsl(224, 28%, 35%)");
  root.style.setProperty("--keybackground_toggle", "hsl(6, 63%, 50%)");
  root.style.setProperty("--keybackground_toggle_active", "hsl(6, 63%, 60%)");
  root.style.setProperty("--equalkeyshadow", "hsl(6, 70%, 34%)");
  root.style.setProperty("--mainkeybackground", "hsl(30, 25%, 89%)");
  root.style.setProperty("--mainkeyshadow", "hsl(28, 16%, 65%)");

  //* Texts
  root.style.setProperty("--maintext", "hsl(221, 14%, 31%)");
  root.style.setProperty("--tabtext", "hsl(0, 0%, 100%)");
  root.style.setProperty("--equal", "hsl(0, 0%, 100%)");
  root.style.setProperty("--keyWhite", "hsl(0, 0%, 100%)");

  // Display toggle
  tog1.classList.remove("remove");
}

tog2.addEventListener("click", toggle2);
key2.addEventListener("click", toggle2);

function toggle2() {
  // ! Backgrounds
  root.style.setProperty("--mainbackground", "hsl(0, 0%, 90%)");
  root.style.setProperty(
    "--togglebackground_keypadbackground",
    "hsl(0, 5%, 81%)"
  );
  root.style.setProperty("--screenbackground", "hsl(0, 0%, 93%)");

  // ? Keys
  root.style.setProperty("--delkeybackground", "hsl(185, 42%, 37%)");
  root.style.setProperty("--delkeyactive", "hsl(185, 42%, 60%)");
  root.style.setProperty("--delkeyshadow", "hsl(185, 58%, 25%)");
  root.style.setProperty("--keybackground_toggle", "hsl(25, 98%, 40%)");
  root.style.setProperty("--keybackground_toggle_active", "hsl(25, 98%, 60%)");
  root.style.setProperty("--equalkeyshadow", "hsl(25, 99%, 27%)");
  root.style.setProperty("--mainkeybackground", "hsl(45, 7%, 89%)");
  root.style.setProperty("--mainkeyshadow", "hsl(35, 11%, 61%)");

  //* Texts
  root.style.setProperty("--maintext", "hsl(60, 10%, 19%)");
  root.style.setProperty("--tabtext", "hsl(60, 10%, 19%)");
  root.style.setProperty("--keyWhite", "hsl(0, 0%, 100%)");

  // Display toggle
  tog2.classList.add("display");
}

tog3.addEventListener("click", toggle3);
key3.addEventListener("click", toggle3);

function toggle3() {
  // ! Backgrounds
  root.style.setProperty("--mainbackground", "hsl(268, 75%, 9%)");
  root.style.setProperty(
    "--togglebackground_keypadbackground",
    "hsl(268, 71%, 12%)"
  );
  root.style.setProperty("--screenbackground", "hsl(268, 71%, 12%)");

  // ? Keys
  root.style.setProperty("--delkeybackground", "hsl(281, 89%, 26%)");
  root.style.setProperty("--delkeyactive", "hsl(281, 89%, 45%)");
  root.style.setProperty("--delkeyshadow", "hsl(285, 91%, 52%)");
  root.style.setProperty("--keybackground_toggle", "hsl(176, 100%, 44%)");
  root.style.setProperty("--keybackground_toggle_active", "hsl(176, 100%, 64%)");
  root.style.setProperty("--equalkeyshadow", "hsl(177, 92%, 70%)");
  root.style.setProperty("--mainkeybackground", "hsl(268, 47%, 21%)");
  root.style.setProperty("--mainkeyshadow", "hsl(290, 70%, 36%)");

  //* Texts
  root.style.setProperty("--maintext", "hsl(52, 100%, 62%)");
  root.style.setProperty("--tabtext", "hsl(52, 100%, 62%)");
  root.style.setProperty("--equal", "hsl(198, 20%, 13%)");
  root.style.setProperty("--keyWhite", "hsl(281, 80%, 35%)");

  // Display toggle
  tog3.classList.add("display");
}

toggle.onclick = function (e) {
  if (e.target !== toggle && e.target !== tog1) {
    tog1.classList.add("remove");
  }
  if (e.target !== toggle && e.target !== tog2) {
    tog2.classList.remove("display");
  }
  if (e.target !== toggle && e.target !== tog3) {
    tog3.classList.remove("display");
  }
};

numbers.onclick = function (e) {
  if (e.target !== numbers && e.target !== key1) {
    tog1.classList.add("remove");
  }
  if (e.target !== numbers && e.target !== key2) {
    tog2.classList.remove("display");
  }
  if (e.target !== numbers && e.target !== key3) {
    tog3.classList.remove("display");
  }
};

keys.map((key) => {
  key.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "RESET":
        tab.innerText = "";
        tab.classList.remove("animate");
        break;
      case "DEL":
        if (tab.innerText) {
          tab.innerText = tab.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          tab.innerText = eval(tab.innerText);
        } catch {
          tab.innerText = "ERROR!";
          tab.classList.add("animate");
        }
        break;
      default:
        tab.innerText += e.target.innerText;
    }
  });
});
