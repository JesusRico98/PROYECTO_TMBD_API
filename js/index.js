
const API_KEY = 'api_key=966ded80b34a074daaa1d769de871d69&language=es-MX';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;


const main = document.getElementById('main');
const form =  document.getElementById('form');
const search = document.getElementById('search');
const tagsEl = document.getElementById('tags');

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const current = document.getElementById('current')
const carrucel_item = document.getElementById('carrucel_item')
let currentPage = 1;
let nextPage = 2;
let prevPage = 3;
let lastUrl = '';
let totalPages = 100;






getMovies(API_URL);

function getMovies(url) {
  lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        if(data.results.length !== 0){
            
            showcarrucel(data.results);
            currentPage = data.page;
            nextPage = currentPage + 1;
            prevPage = currentPage - 1;
            totalPages = data.total_pages;

          

          


        }else{
            main.innerHTML= `<h1 class="no-results">No Se ENCONTRO</h1>`
        }
       
    })

}

function showcarrucel(data){
   /* carrucel_item.innerHTML=' ';*/

    data.forEach(movie=>{
        const{title,poster_path,overview,}= movie;
        const carrucelEL=document.createElement('div');
        carrucelEL.classList.add('carousel-item');
        carrucelEL.innerHTML = `
        <div class="container" style="align-items: center display: flex;">
        <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1099x488" }"  width="377" height="517" style="margin-left: 400px ;" alt="${title}">

      

       </div>
   
   `
   carrucel_item.append(carrucelEL);

    })

}