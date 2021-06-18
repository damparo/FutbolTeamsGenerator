const landingGif = $("#welcome");

// Storing our giphy API URL for a random messi image
// const queryURL =
//   'https://api.giphy.com/v1/gifs/random?api_key={process.env.APP_GIF_API_KEY}&tag=fcbarcelona-messi-leo';

// Perfoming an AJAX GET request to our queryURL
// $.ajax({
//   url: queryURL,
//   method: "GET",
// })

  // After the data from the AJAX request comes back
//   .then(function (response) {
//       console.log(response);
    // Saving the image_original_url property
    // var imageUrl = response.data.image_original_url;

    const imageUrl = "https://media.giphy.com/media/TjAcxImn74uoDYVxFl/giphy.gif";

    // Creating and storing an image tag
    const messiImage = $("<img>");

    // Setting the catImage src attribute to imageUrl
    messiImage.attr("src", imageUrl).width('380px')
    .height('380px');
    messiImage.attr("alt", "messi image");

    // Prepending the catImage to the images div
    landingGif.prepend(messiImage);
//   });
