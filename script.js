//header
let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');

searchbtn.addEventListener('click',()=>{
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
});

//home

let videobtn = document.querySelectorAll('.vid-btn');

videobtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})