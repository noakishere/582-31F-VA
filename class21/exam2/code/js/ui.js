import { Performance } from "./Performance.js";

const performanceContainer = document.getElementById("performances");

const statusOutput = document.getElementById("status");

const performanceCount = document.getElementById("performance-count");

const ticketCount = document.getElementById("available-tickets");

const averagePrice = document.getElementById("average-price");

export function renderLoading() {
  statusOutput.textContent = "Festival lineup loaded successfully.";

  performanceContainer.innerHTML = "";

  performanceCount.textContent = "0";
  ticketCount.textContent = "0";
  averagePrice.textContent = "$0.00";
}

export function renderError(error) {
  statusOutput.textContent = `Error: ${error}`;

  performanceCount.textContent = "0";
}

export function renderPerformances(performance) {
  performanceContainer.innerHTML = "";

  if (!performance) {
    statusOutput.textContent =
      "No performances match " + "the current filters.";

    return;
  }

  performance.forEach((item) => {
    const card = document.createElement("performance");

    card.data = item;

    performanceContainer.appendChild(card);
  });

  statusOutput.textContent = "Festival lineup loaded successfully.";

  performanceCount.textContent = performances.length;

  ticketCount.textContent = Performance.totalAvailableTickets(performance);

  averagePrice.textContent = Performance.averagePrice;
}
