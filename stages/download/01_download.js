const { http } = require("lastejobb");

http.downloadJson(
  "https://data.artsdatabanken.no/Naturvernområde/metadata_med_undertyper.json",
  "metadata_med_undertyper.json"
);

http.downloadJson(
  "https://github.com/Artsdatabanken/naturvern-kart/raw/master/naturvernområde_25833.geojson",
  "kart.json"
);

http.downloadJson(
  "https://raw.githubusercontent.com/Artsdatabanken/naturvern/master/type.json",
  "naturvernområde.json"
);
