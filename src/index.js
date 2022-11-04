// const API = 'http://localhost:3000/quotes?_embed=likes'
const quoteCard = document.getElementById('quote-card')
const quoteList = document.getElementById('quote-list') 

fetch('http://localhost:3000/quotes?_embed=likes')
.then(response => response.json())
.then((quotes) => {
    renderQuotes(quotes)
    console.log(quotes)
    debugger
    })

function renderQuotes(quotes) {
    // step 1 : create elements
    const card = document.querySelector('#quote-list');
    const list = document.createElement('li');
    const quote = document.createElement('p');
    const author = document.createElement('footer")
    const blockquote = document.createElement
    for (let i = 0; i < quotes.length; i++) {
        renderQuote(quotes)
    }
}

const renderQuote = (quote) => {
    const newQuote = document.getElementById('mb-0')
    const quoteBy = document.getElementById('blockquote-footer')
    const likeButton = document.getElementById('btn-success')
    const deleteButton = document.getElementById('btn-danger')
    
    newQuote.textContent = quote.quote
    quoteBy.textContent = quote.author
    likeButton.textContent = 'likes.quoteId'
    deleteButton.textContent = 'likes.id'

    
    
    quoteCard.append(newQuote, quoteBy, likeButton, deleteButton)
    quoteList.append(quoteCard)

    console.log (renderQuote())
}


const init = () => {
    // renderQuotes()
    // renderQuote()
}
// 
init()
