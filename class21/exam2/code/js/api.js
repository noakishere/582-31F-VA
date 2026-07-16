export default async function getFestivalData() {
  const [artistResponse, performanceResponse] = await Promise.all([
    fetch("./artists.json"),
    fetch("./performances.json"),
  ]);

  if (!artistResponse.ok) {
    throw new Error(
      `Artists could not be loaded. HTTP ${artistResponse.status}`,
    );
  }

  if (!performanceResponse.ok) {
    throw new Error(
      `Performances could not be loaded. HTTP ${performanceResponse.status}`,
    );
  }

  const [artists, performances] = await Promise.all([
    artistResponse.json(),
    performanceResponse.json(),
  ]);

  return {
    artists,
    performances,
  };
}
