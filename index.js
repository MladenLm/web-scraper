const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const PORT = 8000;

const app = express();
const url = 'https://opensea.io/'

axios(url)
.then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    $('.Price--amoun', html).each(function(){
        const price = $(this).text()
    })
    console.log($)
}).catch(err => console.log(err))

app.listen(PORT, () => console.log('server running on PORT' + PORT))