let gif =[]

document.addEventListener(`click`, event => {
    if(event.target.className ==='cartoon'){
        let cartoon = event.target.dataset.cartoon
        let url = `https://api.giphy.com/v1/gifs/search?api_key=zvKblsxu8EHnNiofZHPJ73ew4MuRsIIY&q=cartoons&limit=10&offset=0&rating=PG-13&lang=en`
   fetch(`https://api.giphy.com/v1/gifs/search?api_key=zvKblsxu8EHnNiofZHPJ73ew4MuRsIIY&q=cartoons&limit=10&offset=0&rating=PG-13&lang=en`)
       .then(result => result.json())
        .then(gifs => {
           document.getElementById(`gpics`).innerHTML = ``
            gifs.data.forEach(gif => {
                let gifElem = document.createElement(`img`)
                gifElem.src = gif.image.original.still.url
                gitElem.dataset.still = gif.url
                gifElem.src = gif.image.original.url
                document.getElementById(`gpics`).append(gifElem)
                
            })
        })
    }else if (event.target.className === `gif`){
        if(event.target.isanimated === `true`){
            event.target.src =event.target.dataset.still
            event.target.isanimated = `false`
        } else {
            event.target.src = event.target.dataset.animated
            event.target.isanimated = `true`
        }
    }
})

document.getElementById(`addcar`).addEventListener(`click`, event => {
    event.preventDefault()
    let btnElem = document.createElement(`button`)
    btnElem.textContent = document.getElementById(`newcar`).value
    btnElem.dataset.cartoon = document.getElementById(`newcar`).value
    btnElem.className = `cartoon`
    document.getElementById(`button`).append(btnElem)
    document.getElementById(`newcar`).value =``
})