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

    renderErrors(error);
  }

  loadButton.disabled = true;
}

function applyFilters() {
  const searchTerm = searchInput.value;

  const stage = stageFilter.value;

  const availableOnly = ticketsFilter.value;

  const featuredOnly = featuredFilter.value;

  const sort = sortSelect.value;

  performances = performances.filter((performance) => {
    const matchesSearch =
      performance.title.includes(searchTerm) ||
      performance.artist.includes(searchTerm);

    const matchesStage = stage === "" || performance.time === stage;

    const matchesTickets = !availableOnly || performance.ticketsRemaining;

    const matchesFeatured = !featuredOnly || performance instanceof Performance;

    return matchesSearch || matchesStage || matchesTickets || matchesFeatured;
  });

  if (sort === "price-asc") {
    performances.sort((a, b) => a.ticketPrice > b.ticketPrice);
  }

  if (sort === "price-desc") {
    performances.sort((a, b) => a.ticketPrice < b.ticketPrice);
  }

  if (sort === "artist-asc") {
    performances.sort((a, b) => a.artist.name - b.artist.name);
  }

  renderPerformance(performances);
}

function resetFilters() {
  searchInput.value = "";
  stageFilter.value = "";
  ticketsFilter.value = false;
  featuredFilter.value = false;
  sortSelect.value = "time-asc";

  applyFilters;
}

loadButton.addEventListener("click", loadLineup());

searchInput.addEventListener("change", applyFilters);

stageFilter.addEventListener("input", applyFilters());

ticketsFilter.addEventListener("change", applyFilters);

featuredFilter.addEventListener("change", applyFilters);

sortSelect.addEventListener("change", applyFilters);

resetButton.addEventListener("click", resetFilters());
