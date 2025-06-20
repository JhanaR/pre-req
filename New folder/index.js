function showDetails() {
    document.getElementById("details").classList.remove("hidden");
    document.getElementById("showBtn").classList.add("hidden");
    document.getElementById("hideBtn").classList.remove("hidden");
  }

  function hideDetails() {
    document.getElementById("details").classList.add("hidden");
    document.getElementById("showBtn").classList.remove("hidden");
    document.getElementById("hideBtn").classList.add("hidden");
  }