let json_ar = [
    {
        "name": "Bill Gates",
        "worth": "$90B",
        "birth_year": "1955",
        "source": "microsoft",
        "country": "USA",
        "image": "https://specials-images.forbesimg.com/imageserve/59d502f931358e542c034e76/200x200.jpg?background=000000&cropX1=245&cropX2=2420&cropY1=636&cropY2=2813"
    },

    {
        "name": "Warren Buffett",
        "worth": "$84B",
        "birth_year": "1931",
        "source": "Berkshire Hathaway",
        "country": "USA",
        "image": "https://specials-images.forbesimg.com/imageserve/59d5055931358e542c034ead/200x200.jpg?background=000000&cropX1=46&cropX2=693&cropY1=159&cropY2=806"
    },
    {
        "name": "Mark Zuckerberg",
        "worth": "$71B",
        "birth_year": "1984",
        "source": "Facebook",
        "country": "USA",
        "image": "https://specials-images.forbesimg.com/imageserve/59d5062131358e542c034eb7/200x200.jpg?background=000000&cropX1=419&cropX2=1409&cropY1=53&cropY2=1044"
    },
    {
        "name": "Larry Ellison",
        "worth": "$57B",
        "birth_year": "1945",
        "source": "Sun, Oracle",
        "country": "USA",
        "image": "https://specials-images.forbesimg.com/imageserve/59d5069b31358e542c034ec1/200x200.jpg?background=000000&cropX1=0&cropX2=2000&cropY1=227&cropY2=2228"
    },
    {
        "name": "Michael Bloomberg",
        "worth": "$50B",
        "birth_year": "1942",
        "source": "Bloomberg",
        "country": "USA",
        "image": "https://specials-images.forbesimg.com/imageserve/58c1d278a7ea431f321add1f/200x200.jpg?background=000000&cropX1=0&cropX2=744&cropY1=40&cropY2=784"
    }
]



let mybox = document.getElementById('mybox') as HTMLDivElement

json_ar.forEach((mp) => {

    const richdiv = document.createElement('div')
    mybox.appendChild(richdiv)
    richdiv.id = `${mp.name}`

    richdiv.innerHTML = `
   <div class="card">
  <img src="${mp.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${mp.name}</h5>
    <p class="card-text">source:${mp.source} <br>country:${mp.country} <br>year of birth:${mp.birth_year} <br>worth:${mp.worth}</p>

  </div>
</div>
    `


    richdiv.addEventListener('click', () => {
        // json_ar.filter((r) => r !== mp)
        let x = document.getElementById(richdiv.id) as HTMLDivElement
        x.remove()
    })
    // return richdiv
})










