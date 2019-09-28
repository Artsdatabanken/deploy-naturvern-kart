const { io, log, json } = require("lastejobb");
const path = require("path");
const fs = require("fs");

function lastNaturvernMeta() {
  const meta = io.lesDatafil("naturvernområde.json");
  return json.arrayToObject(meta.items, { uniqueKey: "kodeautor" });
}

function lastMetaMedUndertyper() {
  const meta = io.lesDatafil("metadata_med_undertyper.json");
  return json.arrayToObject(meta.items, { uniqueKey: "kode" });
}

const vv = lastMetaMedUndertyper();
const meta = lastNaturvernMeta();
const kart = io.lesDatafil("kart.json");
delete kart.$schema;

const features = kart.features;
fs.mkdirSync("build/Naturvernområde", { recursive: true });
features.forEach(feature => {
  kart.features = [feature];
  const props = feature.properties;
  const mk = meta[props.id];
  if (!mk) return log.error("Mangler meta for " + props.id);
  kart.name = mk.tittel.nob;
  feature.properties = Object.assign({}, props, mk);
  const vv1 = vv[mk.kode];
  const dir = path.join("build", vv1.url);
  fs.mkdirSync(dir, { recursive: true });
  const fn = path.join("." + vv1.url, "polygon.32633.geojson");
  io.skrivBuildfil(fn, kart);
});
