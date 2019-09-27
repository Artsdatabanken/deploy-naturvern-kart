const { io, json } = require("lastejobb");
const path = require("path");
const fs = require("fs");

function lastMeta() {
  const meta = io.lesDatafil("meta.json");
  return json.arrayToObject(meta.items, { uniqueKey: "kodeautor" });
}
function lastVV() {
  const meta = io.lesDatafil("vv.json");
  return json.arrayToObject(meta.data, { uniqueKey: "kode" });
}

const vv = lastVV();
const meta = lastMeta();
const kart = io.lesDatafil("kart.json");
delete kart.$schema;

const features = kart.features;
fs.mkdirSync("build/Naturvernområde", { recursive: true });
features.forEach(feature => {
  kart.features = [feature];
  const props = feature.properties;
  const mk = meta[props.id];
  kart.name = mk.navn.nob;
  feature.properties = Object.assign({}, props, mk);
  const vv1 = vv[mk.kode];
  const dir = path.join("build", vv1.url);
  fs.mkdirSync(dir, { recursive: true });
  const fn = path.join(dir, "polygon.32633.geojson");
  fs.writeFileSync(fn, JSON.stringify(kart));
});
