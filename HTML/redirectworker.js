export default {
  async fetch(request) {
    const destinationURL = "https://khanivore.co.uk";
    const statusCode = 301;
    return Response.redirect(destinationURL, statusCode);
  },
};
