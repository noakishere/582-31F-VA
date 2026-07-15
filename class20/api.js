// Exporting the function
// it allows another module to import it
export async function getEvents() {
  // send the request
  const response = await fetch("./events.json");

  // check that it's been valid
  if (!response.ok) {
    throw new Error(
      `Unable to load events. 
            HTTP status: ${response.status}`,
    );
  }

  // parse and return
  return response.json();

  // option 2 for return
  //   const data = await response.json();
  //   return data;

  // why dont we do this instead?
  // the error can be caught here, but returns "undefined"
  // which this makes debugging extremely difficult!
  //   try {
  //     const response = await fetch("./events.json");

  //     return response.json();
  //   } catch (error) {
  //     console.error(error);
  //   }
}
