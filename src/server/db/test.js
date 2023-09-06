const { getShowByTitle } = require("./shows"); // Adjust the path if needed

(async () => {
  try {
    console.log("Before calling getShowByTitle");
    const shows = await getShowByTitle("Under the Dome"); // Use an existing show title
    console.log("Found shows:", shows);
  } catch (error) {
    console.error("Error:", error);
  }
  console.log("After calling getShowByTitle");
})();
