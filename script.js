const quoteEl = document.querySelector('#quote')
const url = `https://api.quotable.io/random`

fetch(url, {
    'method': "GET",
    'headers': {
        'content-type': 'application/json',
    },
})
  .then(
    function(response) {
      if (!response.ok) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
      }

      response.json().then(function(data) {
        console.log(data)
        let content = data.content
        let author = data.author
        quoteEl.innerHTML = `<h2>${content} - ${author}</h2>`
      })
    }
  )

  .catch(function(err) {
    console.log('Fetch Error :-S', err)
  });


