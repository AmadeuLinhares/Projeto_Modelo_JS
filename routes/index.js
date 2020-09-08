var root = null;
var useHash = false; // Defaults to: false
var hash = "#"; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router
  .on("/", function () {
    $("#root").html(Home());
  })
  .resolve();
