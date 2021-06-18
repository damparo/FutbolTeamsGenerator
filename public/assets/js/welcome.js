const landingGif = $("#welcome");

// Storing our giphy API URL for a random messi image
const queryURL =
  "https://api.giphy.com/v1/gifs/random?api_key=fNB3DLC6bFRFCtlcJ3MWYBuemtukLu5O&tag=messi";

// Perfoming an AJAX GET request to our queryURL
$.ajax({
  url: queryURL,
  method: "GET",
})

  // After the data from the AJAX request comes back
  .then(function (response) {
      console.log(response);
    // Saving the image_original_url property
    var imageUrl = response.data.image_original_url;

    // Creating and storing an image tag
    var messiImage = $("<img>");

    // Setting the catImage src attribute to imageUrl
    messiImage.attr("src", imageUrl);
    messiImage.attr("alt", "messi image");

    // Prepending the catImage to the images div
    landingGif.prepend(messiImage);
  });
