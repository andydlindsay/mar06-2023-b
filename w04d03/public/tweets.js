/*
<article class="tweet">
  <div class="tweet-header">
    <h2>Author: Dean</h2>
    <h2>Id: ghi</h2>
  </div>
  <h2 class="tweet-content">Content: Lots of good thoughts about things</h2>
</article>
*/

// $('h2') // selector
// $('<h2>') // create a DOM element <h2></h2>

// const $h2 = $('<h2>'); // <h2></h2>
// $h2.addClass('heading'); // <h2 class="heading"></h2>
// $h2.text(textFromUser); // <h2 class="heading">Welcome to our site</h2>

// $(`
//   <div>
//     <h2 class="green-text">Some content</h2>
//   </div>
// `);

// const tweet = {
//   id: 'mno',
//   author: 'Fred',
//   content: 'talk about fishing'
// };

$(document).ready(() => {
// $(() => {

  const createTweet = (tweet) => {
    const $tweet = $(`
      <article class="tweet">
        <div class="tweet-header">
          <h2>Author: ${tweet.author}</h2>
          <h2>Id: ${tweet.id}</h2>
        </div>
        <h2 class="tweet-content">Content: ${tweet.content}</h2>
      </article>
    `);

    return $tweet;
  };

  // grab the tweet-container section in the DOM
  const $tweetContainer = $("#tweet-container");

  const fetchTweets = () => {
    $.ajax({
      method: 'GET',
      url: '/tweets',
    }).then((tweets) => {
      console.log(tweets);

      $tweetContainer.empty();
  
      for (const tweet of tweets) {
        const $tweet = createTweet(tweet);
        $tweetContainer.prepend($tweet);
      }
    });
  };

  // fetch the tweets on initial load
  fetchTweets();

  // grab the form from the DOM
  const $form = $('#new-tweet-form');

  // add a submit event handler to the form
  $form.on('submit', (event) => {
    event.preventDefault(); // stop the browser from refreshing the page
    
    console.log('the form has submitted');

    const urlencoded = $form.serialize(); // gives us back urlencoded data
    console.log(urlencoded);

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: urlencoded
    }).then((newTweet) => {
      console.log(newTweet);
      // fetch the tweets again
      fetchTweets();
    });
  });
});
