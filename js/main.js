//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch('https://dog.ceo/api/breeds/image/random') //To call an API you need to use fetch and put the link inside the quotes in the parenthesis

.then(res => res.json())
.then(data =>{
    console.log(data)
    let dogPhoto  = document.querySelector('img')
    dogPhoto.src = data.message
})
