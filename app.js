(function () {
  "use strict";

  const tabsEl = document.getElementById("tabs");
  const contentEl = document.getElementById("content");
  const searchInput = document.getElementById("searchInput");
  const printBtn = document.getElementById("printBtn");
  const installBtn = document.getElementById("installBtn");
  const offlineBadge = document.getElementById("offlineBadge");

  let activeId = null;
  let deferredInstallPrompt = null;

  function escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
  }

  function renderTabs(query) {
    const filter = (query || "").trim().toLowerCase();
    const matches = EMERGENCIES.filter(function (emergency) {
      if (!filter) return true;
      return (
        emergency.title.toLowerCase().includes(filter) ||
        emergency.keywords.some(function (keyword) {
          return keyword.toLowerCase().includes(filter);
        })
      );
    });

    tabsEl.innerHTML = "";

    if (matches.length === 0) {
      contentEl.innerHTML =
        '<div class="empty-state"><span class="big">🔍</span>No emergencies match your search.<br />Try “burn”, “choking”, “seizure”, or “bleeding”.</div>';
      return;
    }

    matches.forEach(function (emergency) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "tab";
      button.dataset.id = emergency.id;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-selected", "false");
      button.innerHTML =
        '<span class="tab-icon" aria-hidden="true">' +
        emergency.icon +
        "</span><span>" +
        escapeHtml(emergency.title) +
        "</span>";
      button.addEventListener("click", function () {
        selectEmergency(emergency.id);
      });
      tabsEl.appendChild(button);
    });

    const activeStillVisible = matches.some(function (emergency) {
      return emergency.id === activeId;
    });

    if (!activeStillVisible) {
      activeId = matches[0].id;
    }

    selectEmergency(activeId);
  }

  function selectEmergency(id) {
    const emergency = EMERGENCIES.find(function (item) {
      return item.id === id;
    });

    if (!emergency) return;

    activeId = id;

    document.querySelectorAll(".tab").forEach(function (button) {
      const isActive = button.dataset.id === id;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    renderEmergency(emergency);
    contentEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderEmergency(emergency) {
    contentEl.innerHTML =
      '<article class="guide">' +
      '<header class="guide-header">' +
      '<span class="guide-icon" aria-hidden="true">' + emergency.icon + "</span>" +
      "<div>" +
      "<h2>" + escapeHtml(emergency.title) + "</h2>" +
      '<p class="guide-summary">' + escapeHtml(emergency.summary) + "</p>" +
      "</div>" +
      "</header>" +
      '<aside class="callout callout-emergency">' +
      "<strong>📞 Call emergency services (911) immediately if:</strong>" +
      "<ul>" +
      emergency.callEmergency.map(function (item) {
        return "<li>" + escapeHtml(item) + "</li>";
      }).join("") +
      "</ul>" +
      "</aside>" +
      '<section class="guide-section">' +
      "<h3>👀 Recognize the signs</h3>" +
      '<ul class="list list-checks">' +
      emergency.symptoms.map(function (item) {
        return "<li>" + escapeHtml(item) + "</li>";
      }).join("") +
      "</ul>" +
      "</section>" +
      '<section class="guide-section">' +
      "<h3>🩹 First aid — step by step</h3>" +
      '<ol class="list list-steps">' +
      emergency.steps.map(function (item) {
        return "<li>" + escapeHtml(item) + "</li>";
      }).join("") +
      "</ol>" +
      "</section>" +
      '<section class="guide-section">' +
      "<h3>🧰 Med kit items to use</h3>" +
      '<div class="chips">' +
      emergency.medKit.map(function (item) {
        return '<span class="chip">' + escapeHtml(item) + "</span>";
      }).join("") +
      "</div>" +
      "</section>" +
      '<section class="guide-section guide-section-warn">' +
      "<h3>⛔ Do NOT</h3>" +
      '<ul class="list list-warn">' +
      emergency.precautions.map(function (item) {
        return "<li>" + escapeHtml(item) + "</li>";
      }).join("") +
      "</ul>" +
      "</section>" +
      "</article>";
  }

  searchInput.addEventListener("input", function () {
    renderTabs(searchInput.value);
  });

  printBtn.addEventListener("click", function () {
    window.print();
  });

  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    deferredInstallPrompt = event;
    installBtn.hidden = false;
  });

  installBtn.addEventListener("click", async function () {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installBtn.hidden = true;
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker
        .register("./sw.js")
        .then(function () {
          offlineBadge.textContent = "✓ Offline-ready";
          offlineBadge.style.background = "rgba(34, 197, 94, 0.25)";
        })
        .catch(function () {
          offlineBadge.textContent = "Offline mode unavailable";
        });
    });
  } else {
    offlineBadge.textContent = "Offline mode unavailable";
  }

  renderTabs("");
})();
// --- PWA Custom Installation Logic ---
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

// 1. Listen for the browser's installation eligibility signal
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome from showing its default banner automatically
  e.preventDefault();
  // Stash the event trigger so it can be deployed on our button click
  deferredPrompt = e;
  // Reveal your custom "Install App" button by unhiding it
  if (installBtn) {
    installBtn.removeAttribute('hidden');
  }
});

// 2. Trigger the install prompt when your user clicks the button
if (installBtn) {
  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    
    // Show the native system install installation prompt
    deferredPrompt.prompt();
    
    // Wait for the user to accept or dismiss the option
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User installation choice: ${outcome}`);
    
    // Reset our deferred variable; the prompt can only be used once
    deferredPrompt = null;
    
    // Re-hide the button since the setup is processed
    installBtn.setAttribute('hidden', '');
  });
}

// 3. Completely hide the button if the app is successfully installed
window.addEventListener('appinstalled', () => {
  console.log('Fast & Furious PWA was successfully installed.');
  deferredPrompt = null;
  if (installBtn) {
    installBtn.setAttribute('hidden', '');
  }
});

