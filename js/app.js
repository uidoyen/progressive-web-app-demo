(function() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => {
          console.log("service worker registered");
          checkForPageUpdate(res);
        })
        .catch(err => console.log("service worker not registered", err));
    });
  }

  function checkForPageUpdate(reg) {
    reg.addEventListener("updatefound", () => {
      if (navigator.serviceWorker.controller) {
        var newWorker = reg.installing;
        newWorker.onstatechange = () => {
          switch (newWorker.state) {
            case "installed":
              console.log("New update found.");
              break;
            case "redundant":
              throw new Error(
                "The installing service worker became redundant."
              );
          }
        };
      }
    });
  }
})();
