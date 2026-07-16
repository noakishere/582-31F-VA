import getFestivalData from "./api.js";

import { Artist } from "./Artist.js";

import { Performances } from "./Performance.js";

import { FeaturedPerformance } from "./FeaturedPerformance.js";

import "./PerformanceCards.js";

import { renderLoading, renderErrors, renderPerformance } from "./ui.js";

const loadButton = document.getElementById("load-festival");

const searchInput = document.getElementById("search");

const stageFilter = document.getElementById("stage-filter");

const ticketsFilter = document.getElementById("ticket-filter");

const featuredFilter = document.getElementById("featured-only");

const sortSelect = document.getElementById("sort-filter");

const resetButton = document.getElementById("reset");

let performances;

async function loadLineup() {
  renderLoading;

  loadButton.disabled = true;

  try {
    const data = getFestivalData();

    const artists = data.artists.map(
      (item) => new Artist(item.id, item.name, item.country, item.genre),
    );

    performances = data.performances.map((item) => {
      const artist = artists.filter((artist) => artist.id === item.artistId);

      if (item.featured) {
        return new FeaturedPerformance(
          item.id,
          item.title,
          artist,
          item.stage,
          item.time,
          item.ticketPrice,
          item.ticketsRemaining,
          item.featured,
        );
      }

      return new Performances(
        item.id,
        item.title,
        artist,
        item.stage,
        item.time,
        item.ticketPrice,
        item.ticketsRemaining,
      );
    });

    renderPerformance(performances);

    searchInput.disabled = false;
    stageFilter.disabled = false;
    ticketsFilter.disabled = false;
    featuredFilter.disabled = false;
    sortSelect.disabled = false;
    resetButton.disabled = false;
  } catch (error) {
    console.log("Lineup loaded:", error);

    renderErrors(error.message);
  }

  loadButton.disabled = true;
}

function applyFilters() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const stage = stageFilter.value;

  const availableOnly = ticketsFilter.checked;

  const featuredOnly = featuredFilter.checked;

  const sort = sortSelect.value;

  let visiblePerformances = performances.filter((performance) => {
    const matchesSearch =
      searchTerm === "" ||
      performance.title.toLowerCase().includes(searchTerm) ||
      performance.artist.name.toLowerCase().includes(searchTerm);

    const matchesStage = stage === "" || performance.stage === stage;

    const matchesTickets = !availableOnly || performance.hasTickets;

    const matchesFeatured = !featuredOnly || performance.featured;

    return matchesSearch && matchesStage && matchesTickets && matchesFeatured;
  });

  visiblePerformances = [...visiblePerformances];

  if (sort === "time-asc") {
    visiblePerformances.sort((a, b) => a.time.localeCompare(b.time));
  }

  if (sort === "price-asc") {
    visiblePerformances.sort((a, b) => a.ticketPrice - b.ticketPrice);
  }

  if (sort === "price-desc") {
    visiblePerformances.sort((a, b) => b.ticketPrice - a.ticketPrice);
  }

  if (sort === "artist-asc") {
    visiblePerformances.sort((a, b) =>
      a.artist.name.localeCompare(b.artist.name),
    );
  }

  renderPerformances(visiblePerformances);
}

function resetFilters() {
  searchInput.value = "";
  stageFilter.value = "";
  ticketsFilter.value = false;
  featuredFilter.value = false;
  sortSelect.value = "time-asc";

  applyFilters();
}

loadButton.addEventListener("click", loadLineup);

searchInput.addEventListener("change", applyFilters);

stageFilter.addEventListener("input", applyFilters);

ticketsFilter.addEventListener("change", applyFilters);

featuredFilter.addEventListener("change", applyFilters);

sortSelect.addEventListener("change", applyFilters);

resetButton.addEventListener("click", resetFilters);
