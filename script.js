const quoteEl = document.querySelector('#quote')
const authorEl = document.querySelector('.author')
const card = document.querySelector('#card')
const url = `https://api.quotable.io/random`

fetch(url, {
    'method': "GET",
    'mode': 'cors',
    'headers': {
        'content-type': 'application/json',
        'charset': 'UTF-8',
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
        quoteEl.innerHTML = `${content}`
        authorEl.innerHTML = `${author}`
      })
    }
  )

  .catch(function(err) {
    console.log('Fetch Error :-S', err)
  });

card.classList.remove('invisible')