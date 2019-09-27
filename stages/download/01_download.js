const { http } = require("lastejobb");

http.downloadJson(
  "https://data.artsdatabanken.no/Naturvernområde/metadata_med_undertyper.json",
  "vv.json"
);

return;

http.downloadJson(
  "https://github.com/Artsdatabanken/naturvern-kart/raw/master/naturvernomr%C3%A5de_25833.geojson",
  "kart.json"
);

http.downloadJson(
  "https://raw.githubusercontent.com/Artsdatabanken/naturvern/master/naturvernomr%C3%A5de.json",
  "meta.json"
);
