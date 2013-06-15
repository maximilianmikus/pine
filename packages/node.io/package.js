Package.describe({
  summary: "A distributed data scraping and processing framework"
});

Npm.depends({"node.io": "0.5.1"});

Package.on_use(function (api) {
  api.add_files("nodeio.js", "server");
});