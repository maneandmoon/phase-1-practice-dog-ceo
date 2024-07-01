console.log('%c HI', 'color: firebrick');

function dogCeo() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch (imgUrl)
        .then(resp => resp.json())
        .then(json => renderImg(json))
}

function renderImg(images) {
    const loc = document.querySelector('div')
    images.message.forEach(Image => {
        const img = document.createElement('img');
        img.src = Image;
        //img.innerHTML = Image.message;
        loc.appendChild(img)
    });
}

document.addEventListener('DOMContentLoaded', () => {
    dogCeo()

})

function loadBreeds () {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch ("https://dog.ceo/api/breeds/list/all")
    .then (resp => resp.json())
    .then (data => {
        breedList = Object.keys(data.message)

        breedList.forEach(breed => {
            renderBreed (breed)
        })
    
    })

dogList.innerHTML = ''

dogList.addEventListener("click", event => {
    if (event.target.matches("li")) {
    event.target.style.color = "red"
    }
  })
  const dogList = document.querySelector("#dog-breeds")
  const dropdown = document.querySelector("#breed-dropdown")
  let breedList = []

  dropdown.addEventListener("change", event => {

    const letter = event.target.value
  
    const filteredBreeds = breedList.filter(function(breed) {
      return breed.startsWith(letter)
    })
  

filteredBreeds.forEach(function(breed) {
      renderBreed(breed)
    })
  
    console.log(filteredBreeds)
  })


}




