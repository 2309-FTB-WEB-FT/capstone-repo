const { getShowByName } = require('./shows'); // Adjust the path if needed

(async () => {
    try {
        console.log('Before calling getShowByName');
        const shows = await getShowByName('Under the Dome'); // Use an existing show title
        console.log('Found shows:', shows);
    } catch (error) {
        console.error('Error:', error);
    }
    console.log('After calling getShowByName');
})();
