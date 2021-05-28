// scroll event
window.addEventListener('scroll', function(e) {
    // console.log(e);
    // console.log(window.scrollY);
    if (window.scrollY > 140) {
        document.querySelector('._otdka.fixed-logo').style.display = "block";
        document.querySelector('._b2fxuo').style.display = "flex";
        document.querySelector('._19h9w7f').style.display = "flex";
        document.querySelector('.tab-layout').style.display = "none";
        document.getElementById("header-searchbox").classList.add("fixed--header");
    } else {
        document.querySelector('._otdka.fixed-logo').style.display = "none";
        document.querySelector('._b2fxuo').style.display = "none";
        document.querySelector('._19h9w7f').style.display = "none";
        document.querySelector('.tab-layout').style.display = "block";
        document.getElementById("header-searchbox").classList.remove("fixed--header");
    }
});

// mouseenter <==> mouseleave
// mouseover <==> mouseout

document.querySelector('button._b2fxuo').addEventListener("mouseenter", function(){
    console.log('mouseover');
});

// Window.requestAnimationFrame()

// mouse over
let searchDetails = document.querySelectorAll('.input-form-group li');
searchDetails.forEach(function(e){
    e.addEventListener("mouseenter", function(el){
        // console.log(el.target);
        // console.log(Array.from(searchDetails).indexOf(el.target));
        // searchDetails ==> NodeList(4) [li.place, li.cheak, li.cheak, li.guest-search]
        // ArrayLike, 배열처럼 생긴 객체.
        // console.log(searchDetails[Array.from(searchDetails).indexOf(el.target)-1]);
        el.target.classList.add("remove");
        if (searchDetails[Array.from(searchDetails).indexOf(el.target)-1]) {
            searchDetails[Array.from(searchDetails).indexOf(el.target)-1].classList.add('remove');
        }
        // falsy value
        // 0
        // ""
        // null
        // undefined
        // NaN
    });
    e.addEventListener("mouseleave", function(el) {
        el.target.classList.remove("remove");
        if (searchDetails[Array.from(searchDetails).indexOf(el.target)-1]) {
            searchDetails[Array.from(searchDetails).indexOf(el.target)-1].classList.remove('remove');
        }
    });
});

// button search
let btnSearch = document.querySelector('button.search');
btnSearch.addEventListener("mouseenter", function(el) {
    el.target.parentElement.classList.add("white");
    document.querySelectorAll("li.cheak").forEach(function(element){
        element.classList.remove("remove");
    });
    document.querySelector(".guest-search").classList.remove("remove");
});
btnSearch.addEventListener("mouseleave", function(el) {
    el.target.parentElement.classList.remove("white");
});

document.querySelector('.guest-search').addEventListener("mouseover", function(event){
    // document.querySelectorAll("li.cheak").forEach(function(element){
    //     element.classList.add("remove");
    // });
    document.querySelectorAll("li.cheak")[1].classList.add("remove");
});

document.querySelector('.guest-search').addEventListener("mouseleave", function(event){
    document.querySelectorAll("li.cheak")[1].classList.remove("remove");
});




/** 낮 밤, 메인 이미지 변경 */
// day or night , 1. 낮인지 밤인지 체크

var timer = (new Date()).getHours();
let imgUrl = "https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=2560";
if ((timer <= 9) || (18 < timer)) { // 18 ~ 다음날 9시 까지 (night image)
    // 2. imgUrl 변경
    document.querySelectorAll('.main-visual-box picture source').forEach(function(el){
        // console.log(el);
        el.srcset = imgUrl;
    });
    
    // 3. 메인 이미지 영역 Full Width
    document.querySelector('.main-visual-box').style.width = "100%"
    
    // 4. 메인 이미지 padding-top: 0
    document.querySelector('.main-visual').style.paddingTop = "0"
}
// console.dir(document.getElementById("FMP-target"));
/** 낮 밤, 메인 이미지 변경 */





// place popup
document.querySelector('.input-form-group .place').addEventListener("click", function(event) {
    event.stopPropagation();
    document.querySelector('.place-pop').style.display = "block";
    document.querySelector('.cheak-pop').style.display = "none";
    document.querySelector('.guest-pop').style.display = "none";
});

// cheak-pop popup
document.querySelectorAll('.input-form-group .cheak').forEach(function(el){
    el.addEventListener("click", function(event) {
        event.stopPropagation();
        document.querySelector('.cheak-pop').style.display = "block";
        document.querySelector('.place-pop').style.display = "none";
        document.querySelector('.guest-pop').style.display = "none";
    });
});

// cheak-pop popup
document.querySelector('.input-form-group .guest').addEventListener("click", function(event) {
    event.stopPropagation();
    document.querySelector('.guest-pop').style.display = "block";
    document.querySelector('.cheak-pop').style.display = "none";
    document.querySelector('.place-pop').style.display = "none";
});

// stopPropagation 추가
document.querySelector('.place-pop').addEventListener("click", function(event){
    event.stopPropagation();
});
document.querySelector('.cheak-pop').addEventListener("click", function(event){
    event.stopPropagation();
});
document.querySelector('.guest-pop').addEventListener("click", function(event){
    event.stopPropagation();
});

// menu close
window.onclick = function() {
    document.querySelector('.place-pop').style.display = "none";
    document.querySelector('.cheak-pop').style.display = "none";
    document.querySelector('.guest-pop').style.display = "none";
}

// plus - minus
document.querySelector('.plus.adult').addEventListener("click", function(event){
    event.stopPropagation();
    let personAdult = document.querySelector('.person.adult'); 
    personAdult.innerText = Number(personAdult.innerText) + 1;
    /** 추가기능 8명 이상은 count X */
});
document.querySelector('.plus.children').addEventListener("click", function(event){
    event.stopPropagation();
    let personChildren = document.querySelector('.person.children'); 
    personChildren.innerText = Number(personChildren.innerText) + 1;
    /** 추가기능 8명 이상은 count X */
});
document.querySelector('.plus.kids').addEventListener("click", function(event){
    event.stopPropagation();
    let personKids = document.querySelector('.person.kids'); 
    personKids.innerText = Number(personKids.innerText) + 1;
    /** 추가기능 8명 이상은 count X */
});