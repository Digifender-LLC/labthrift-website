(function () {
  var KEY = "labthrift-theme";
  var PAPER = { light: "#f4efe4", dark: "#1c1914" };
  var mq = window.matchMedia("(prefers-color-scheme: dark)");

  function stored() {
    try {
      var t = localStorage.getItem(KEY);
      return t === "dark" || t === "light" ? t : "system";
    } catch (e) {
      return "system";
    }
  }

  function resolved(mode) {
    if (mode === "dark" || mode === "light") return mode;
    return mq.matches ? "dark" : "light";
  }

  function setThemeColor(mode) {
    var color = PAPER[resolved(mode)];
    var metas = document.querySelectorAll('meta[name="theme-color"]');
    var primary = null;
    for (var i = 0; i < metas.length; i++) {
      if (!metas[i].media) primary = metas[i];
    }
    if (!primary) {
      primary = document.createElement("meta");
      primary.setAttribute("name", "theme-color");
      document.head.appendChild(primary);
    }
    primary.setAttribute("content", color);
  }

  function labelFor(mode) {
    if (mode === "dark") return "Dark";
    if (mode === "light") return "Light";
    return "Auto";
  }

  function ariaFor(mode) {
    if (mode === "system") return "Use dark theme";
    if (mode === "dark") return "Use light theme";
    return "Use system theme";
  }

  function apply(mode) {
    document.documentElement.dataset.theme = mode;
    setThemeColor(mode);
    var buttons = document.querySelectorAll("[data-theme-toggle]");
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      btn.textContent = labelFor(mode);
      btn.setAttribute("aria-label", ariaFor(mode));
      if (mode === "system") btn.removeAttribute("aria-pressed");
      else btn.setAttribute("aria-pressed", mode === "dark" ? "true" : "false");
    }
  }

  function cycle(mode) {
    if (mode === "system") return "dark";
    if (mode === "dark") return "light";
    return "system";
  }

  function persist(mode) {
    try {
      if (mode === "system") localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, mode);
    } catch (e) {}
  }

  function onReady() {
    var mode = stored();
    apply(mode);
    var buttons = document.querySelectorAll("[data-theme-toggle]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        var next = cycle(stored());
        persist(next);
        apply(next);
      });
    }
    var onScheme = function () {
      if (stored() === "system") apply("system");
    };
    if (mq.addEventListener) mq.addEventListener("change", onScheme);
    else if (mq.addListener) mq.addListener(onScheme);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }
})();
