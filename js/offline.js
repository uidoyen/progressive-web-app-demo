(function() {
  "use strict";
  const body = document.querySelector("body");
  document.addEventListener("DOMContentLoaded", function() {
    console.log("document loaded");
    if (!navigator.onLine) {
      console.log("offline");
      updateSWStatus();
    }
  });

  function updateSWStatus() {
    if (navigator.onLine) {
      console.log("remove app_offline");
      body.classList.remove("app_offline");
    } else {
      console.log("add app_offline");
      body.classList.add("app_offline");
    }
  }
})();
