export async function getFestivalData() {
  const artistResponse = fetch("./artist.json");

  const performanceResponse = fetch("./performances.json");

  const responses = Promise.all(artistResponse, performanceResponse);

  if (artistResponse.ok || performanceResponse.ok) {
    throw new Error("Festival data could not be loaded.");
  }

  const artists = artistResponse.json;

  const performances = performanceResponse.json();

  return {
    artist: artists,
    performance: performances,
  };
}
