var i;

// start height
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const htop = document.querySelector('.header__top');
let oldWidth = window.innerWidth;
const docheight = document.documentElement
docheight.style.setProperty('--height', `${window.innerHeight}px`);
const appHeight = () => {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    docheight.style.setProperty('--height', `${window.innerHeight}px`);
    if (!document.querySelector('.has-scroll-smooth')) {
      if (window.scrollY < htop.scrollHeight) {
        docheight.style.setProperty('--hscroll', `${htop.scrollHeight - window.scrollY}px`);
      } else {
        docheight.style.setProperty('--hscroll', `0px`);
      }
    }
  }
  oldWidth = window.innerWidth;
}
window.addEventListener('resize', appHeight);
appHeight();
// end height

// start plus minus
var productinput = document.querySelector(".product__input input");
if(productinput){
  document.querySelectorAll('.product__count .product__minus').forEach(function (element) {
    element.addEventListener('click', function(event) {
      event.preventDefault();
      let input = this.parentElement.querySelector('.product__input input');
      let count = parseInt(input.value) - 1;
      count = count < 1 ? 1 : count;
      input.value = count;
    });
  });
  document.querySelectorAll('.product__count .product__plus').forEach(function (element) {
    element.addEventListener('click', function(event) {
      let inputMax = this.parentElement.querySelector('.product__input input').getAttribute('max');
      event.preventDefault();
      let input = this.parentElement.querySelector('.product__input input');
      let count = parseInt(input.value) + 1;
      count = count > parseInt(inputMax) ? parseInt(inputMax) : count;
      input.value = parseInt(count);
    });
  });
  document.querySelectorAll('.product__count .product__input input').forEach(function (element) {
    element.addEventListener("change", function(event) {
      let inputMax = this.parentElement.querySelector('.product__input input').getAttribute('max');
      event.preventDefault();
      if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
      }
      if (this.value == "") {
        this.value = 1;
      }
      if (this.value > parseInt(inputMax)) {
        this.value = parseInt(inputMax);
      }
    });
  });
}
var productsinput = document.querySelector(".products__input input");
if(productsinput){
  document.querySelectorAll('.products__count .products__minus').forEach(function (element) {
    element.addEventListener('click', function(event) {
      event.preventDefault();
      let input = this.parentElement.querySelector('.products__input input');
      let count = parseInt(input.value) - 1;
      count = count < 1 ? 1 : count;
      input.value = count;
    });
  });
  document.querySelectorAll('.products__count .products__plus').forEach(function (element) {
    element.addEventListener('click', function(event) {
      let inputMax = this.parentElement.querySelector('.products__input input').getAttribute('max');
      event.preventDefault();
      let input = this.parentElement.querySelector('.products__input input');
      let count = parseInt(input.value) + 1;
      count = count > parseInt(inputMax) ? parseInt(inputMax) : count;
      input.value = parseInt(count);
    });
  });
  document.querySelectorAll('.products__count .products__input input').forEach(function (element) {
    element.addEventListener("change", function(event) {
      let inputMax = this.parentElement.querySelector('.products__input input').getAttribute('max');
      event.preventDefault();
      if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
      }
      if (this.value == "") {
        this.value = 1;
      }
      if (this.value > parseInt(inputMax)) {
        this.value = parseInt(inputMax);
      }
    });
  });
}
// end plus minus

// start year
const year = document.querySelector('.footer__year');
if(year){
  const currentYear = new Date().getFullYear();
  year.insertAdjacentText('beforebegin', currentYear);
  year.remove();
}
// end year

// start navbar
const overlay = document.querySelector('.overlay');
const overlaypopup = document.querySelector('.overlay__popup');

const headerlinks = document.querySelector('.header__links');
const headerbuttons = document.querySelector('.header__buttons');

const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');

const htlitem = document.querySelectorAll(".header__top_flex .header__top_item");
const htlinfo = document.querySelectorAll(".header__top_flex .header__top_info");

// start cart__accordion_block
const headertoplink = document.querySelector('.header__top_link');
const headertoplinks = document.getElementsByClassName("header__top_link");
if (headertoplink) {
  for (i = 0; i < headertoplinks.length; i++) {
    headertoplinks[i].onclick = function(e) {
      const headertoplinksNext = this.nextElementSibling;
      if (headertoplinksNext && this.parentElement.classList.contains("active")) {
        this.parentElement.classList.remove("active");
        headertoplinksNext.style.maxHeight = null;
      } else if (headertoplinksNext) {
        e.preventDefault();
        htlitem.forEach(n => n.classList.remove('active'));
        htlinfo.forEach(n => n.style.maxHeight = null);
        headertoplinksNext.style.maxHeight = headertoplinksNext.scrollHeight + "px";
        this.parentElement.classList.add("active");
      }
    };
  }
  window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.header__top_list')) {
      htlitem.forEach(n => n.classList.remove('active'));
      htlinfo.forEach(n => n.style.maxHeight = null);
    }
  })
}
// end cart__accordion_block

// start header active
const headertop = document.querySelector('.header__top');
if (oldWidth > 1280) {
  window.addEventListener("scroll", () => {
    if (Math.round(window.pageYOffset) > headertop.clientHeight) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  })
}
// end header active

// кнопка header__catalog_button
const headertopoverlay = document.querySelector('.header__top_overlay');
const headerbottomoverlay = document.querySelector('.header__bottom_overlay');
const headercatalogbutton = document.querySelector('.header__catalog_button');
const headercatalogpopup = document.querySelector('.header__catalog_popup');
const headerbottomblock = document.querySelector('.header__bottom_block');
const headersearchcatalog = document.querySelector('.header__search_catalog');
const headersearch = document.querySelector('.header__search');
const headersearchinput = document.querySelector('.header__search_input');

headersearchinput.oninput = function(){
  if (this.value === '') {
    headertopoverlay.classList.add("active");
    headerbottomoverlay.classList.add("active");
    headerbottomblock.classList.add("active");
    headersearchcatalog.classList.remove("active");
    headersearch.classList.add("active");
    docheight.classList.add("noscroll");
    headerbottomblock.style.maxHeight = headersearch.scrollHeight + "px";
  } else {
    headertopoverlay.classList.add("active");
    headerbottomoverlay.classList.add("active");
    headerbottomblock.classList.add("active");
    headersearchcatalog.classList.add("active");
    headersearch.classList.remove("active");
    docheight.classList.add("noscroll");
    headerbottomblock.style.maxHeight = headersearchcatalog.scrollHeight + "px";
  }
}

headersearchinput.addEventListener('click', function() {
  if (headersearch.children[0].children[0].children[0] && headersearch.children[0].children[0].children[0].hasChildNodes() === true) {
    overlay.classList.remove("active");
    burger.classList.remove("active");
    headercatalogbutton.classList.remove("active");
    headercatalogpopup.classList.remove("active");
    headertopoverlay.classList.add("active");
    headerbottomoverlay.classList.add("active");
    headerbottomblock.classList.add("active");
    headersearchcatalog.classList.remove("active");
    headersearch.classList.add("active");
    docheight.classList.add("noscroll");
    headerbottomblock.style.maxHeight = headersearch.scrollHeight + "px";
  } else {
    overlay.classList.remove("active");
    burger.classList.remove("active");
    headercatalogbutton.classList.remove("active");
    headercatalogpopup.classList.remove("active");
    headertopoverlay.classList.add("active");
    headerbottomoverlay.classList.add("active");
    headerbottomblock.classList.add("active");
    headersearchcatalog.classList.add("active");
    headersearch.classList.remove("active");
    docheight.classList.add("noscroll");
    headerbottomblock.style.maxHeight = headersearchcatalog.scrollHeight + "px";
  }
})

headercatalogbutton.addEventListener('click', function() {
  if (headercatalogbutton.classList.contains("active")) {
    overlay.classList.remove("active");
    burger.classList.remove("active");
    headercatalogbutton.classList.remove("active");
    headercatalogpopup.classList.remove("active");
    headertopoverlay.classList.remove("active");
    headerbottomoverlay.classList.remove("active");
    headerbottomblock.classList.remove("active");
    headersearchcatalog.classList.remove("active");
    headersearch.classList.remove("active");
    docheight.classList.remove("noscroll");
    headerbottomblock.style.maxHeight = null;
  } else {
    overlay.classList.add("active");
    burger.classList.remove("active");
    headercatalogbutton.classList.add("active");
    headercatalogpopup.classList.add("active");
    headertopoverlay.classList.remove("active");
    headerbottomoverlay.classList.remove("active");
    headerbottomblock.classList.remove("active");
    headersearchcatalog.classList.remove("active");
    headersearch.classList.remove("active");
    docheight.classList.add("noscroll");
    headerbottomblock.style.maxHeight = null;
  }
})
// end header__catalog_button

// start счетчик hscroll
if (!document.querySelector('.has-scroll-smooth')) {
  window.addEventListener('scroll', function() {
    if (window.scrollY < htop.scrollHeight) {
      docheight.style.setProperty('--hscroll', `${htop.scrollHeight - window.scrollY}px`);
    } else {
      docheight.style.setProperty('--hscroll', `0px`);
    }
  });
  if (window.scrollY < htop.scrollHeight) {
    docheight.style.setProperty('--hscroll', `${htop.scrollHeight - window.scrollY}px`);
  } else {
    docheight.style.setProperty('--hscroll', `0px`);
  }
}
// end счетчик hscroll

// start счетчик header__subnav_list
const subnav = document.querySelectorAll('.header__subnav_list'); 
[...subnav].forEach(function (li) { 
  for (let [index, elem] of [...li.children].entries()){ 
    elem.style.setProperty('--inc-step', index+1); 
  } 
});
// end счетчик header__subnav_list

// start hover menu
var hover = document.querySelector('.header__nav_list'),
elemHover = false;

hover.addEventListener('mouseover', function(e) {
  if(elemHover) return;
  var target = e.target.closest('.header__nav_item');
  if(!target) return;
  elemHover = target;
  var parent = target.closest('.header__nav_list'),
  old = parent.querySelector('.active')
  if(old) old.classList.remove('active')
  target.classList.add('active')
})
hover.addEventListener('mouseout', function(e) {
  if(!elemHover) return
  var target = e.target.closest('.header__nav_item');
  elemHover = null;
})
// end hover menu

// кнопка headeroverlay
headertopoverlay.addEventListener('click', function() {
  overlay.classList.remove("active");
  burger.classList.remove("active");
  headertopoverlay.classList.remove("active");
  headerbottomoverlay.classList.remove("active");
  headerbottomblock.classList.remove("active");
  headersearchcatalog.classList.remove("active");
  headersearch.classList.remove("active");
  docheight.classList.remove("noscroll");
  headerbottomblock.style.maxHeight = null;
})
headerbottomoverlay.addEventListener('click', function() {
  overlay.classList.remove("active");
  burger.classList.remove("active");
  headertopoverlay.classList.remove("active");
  headerbottomoverlay.classList.remove("active");
  headerbottomblock.classList.remove("active");
  headersearchcatalog.classList.remove("active");
  headersearch.classList.remove("active");
  docheight.classList.remove("noscroll");
  headerbottomblock.style.maxHeight = null;
})
// end headeroverlay

// кнопка header__burger
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    overlay.classList.remove("active");
    // menu.classList.remove("active");
    burger.classList.remove("active");
    docheight.classList.remove("noscroll");
  } else {
    overlay.classList.add("active");
    // menu.classList.add("active");
    burger.classList.add("active");
    docheight.classList.add("noscroll");
  }
})
// end header__burger

// кнопка overlay
overlay.addEventListener('click', function() {
  overlay.classList.remove("active");
  burger.classList.remove("active");
  headercatalogbutton.classList.remove("active");
  headercatalogpopup.classList.remove("active");
  headerbottomblock.classList.remove("active");
  headersearchcatalog.classList.remove("active");
  headersearch.classList.remove("active");
  docheight.classList.remove("noscroll");
  headerbottomblock.style.maxHeight = null;
})
// end overlay

// start login__popup
const loginpopup = document.querySelector('.login__popup');
if(loginpopup){
  const headerpersonal = document.querySelector('.header__personal');
  const loginclose = document.querySelector('.login__close');
  const loginreg = document.querySelector('.login__button_reg');
  const loginback = document.querySelector('.login__button_back');
  const loginform = document.querySelector('.login__form');
  const regform = document.querySelector('.reg__form');
  const loginlogged = document.querySelector('.login__logged');
  const registrationform = document.querySelector('.registration__form');
  const registrationback = document.querySelector('.registration__button_back');
  
  headerpersonal.addEventListener('click', function() {
    if (!loginpopup.classList.contains("active")) {
      if (!registrationform.classList.contains("active")) {
        loginform.classList.remove("hidden");
      }
      regform.classList.remove("active");
      loginlogged.classList.remove("active");
      overlaypopup.classList.add("active");
      loginpopup.classList.add("active");
      docheight.classList.add("noscroll");
    }
  })
  
  loginclose.addEventListener('click', function() {
    if (loginpopup.classList.contains("active")) {
      overlaypopup.classList.remove("active");
      loginpopup.classList.remove("active");
      docheight.classList.remove("noscroll");
    }
  })
  
  loginreg.addEventListener('click', function() {
    loginform.classList.add("hidden");
    regform.classList.add("active");
  })
  
  loginback.addEventListener('click', function() {
    loginform.classList.remove("hidden");
    regform.classList.remove("active");
  })
  
  registrationback.addEventListener('click', function() {
    registrationform.classList.remove("active");
    regform.classList.add("active");
  })
}
// end login__popup

// start overlaypopup
const cfpopup = document.querySelector('.catalog__filter_popup');
const personalpopup = document.querySelector(".personal__popup");
const articlepopup = document.querySelector(".article__popup");
overlaypopup.addEventListener('click', function() {
  if(cfpopup){cfpopup.classList.remove("active")};
  if(personalpopup){personalpopup.classList.remove("active")};
  if(articlepopup){articlepopup.classList.remove("active")};
  if(loginpopup.classList.contains("active")){loginpopup.classList.remove("active")};
  overlaypopup.classList.remove("active");
  docheight.classList.remove("noscroll");
})
// end header__burger

// start collapse
var headerscollapse = document.getElementsByClassName("header__subnav_collapse");
  
for (i = 0; i < headerscollapse.length; i++) {
  headerscollapse[i].onclick = function(e) {
    if (this.parentElement.classList.contains("active")) {
      this.parentElement.classList.remove("active");
    } else {
      this.parentElement.classList.add("active");
    }
  };
}
// end collapse

// start menu catalog
const homecategorylist = document.querySelector('.catalog_category__list');
if(homecategorylist) {
  const headernl = document.getElementsByClassName("catalog_category__link");
  for (i = 0; i < headernl.length; i++) {
    headernl[i].onclick = function(e) {
      if (!this.parentElement.classList.contains("active")) {
        const headernlNext = this.parentElement.nextElementSibling;
        const headernsl = document.getElementsByClassName("catalog_category__sublist");
        const headernlActive = document.getElementsByClassName("catalog_category__link active");
  
        if (headernlNext && headernlNext.classList.contains("active")) {
          this.parentElement.classList.remove("active");
          headernlNext.classList.remove("active");
          headernlNext.style.maxHeight = null;
        } else if (headernlNext) {
          // for (var q = 0; q < headernlActive.length; q++) {
          //   headernlActive[q].classList.remove("active");
          //   headernsl[q].classList.remove("active");
          // }
          // for (var p = 0; p < headernsl.length; p++) {
          //   this.classList.remove("active");
          //   headernsl[p].classList.remove("active");
          //   headernsl[p].style.maxHeight = null;
          // }
          e.preventDefault();
          headernlNext.style.maxHeight = headernlNext.scrollHeight + "px";
          headernlNext.classList.add("active");
          this.parentElement.classList.add("active");
        }
      }
    };
  }
  const headernlarrow = document.getElementsByClassName("catalog_category__arrow");
  for (i = 0; i < headernlarrow.length; i++) {
    headernlarrow[i].onclick = function(e) {
      const headernlarrowNext = this.parentElement.nextElementSibling;
      e.preventDefault();
      if (headernlarrowNext && headernlarrowNext.classList.contains("active")) {
        this.parentElement.classList.remove("active");
        headernlarrowNext.classList.remove("active");
        headernlarrowNext.style.maxHeight = null;
      } else if (headernlarrowNext) {
        headernlarrowNext.style.maxHeight = headernlarrowNext.scrollHeight + "px";
        headernlarrowNext.classList.add("active");
        this.parentElement.classList.add("active");
      }
    };
  }
  const headernsl = document.getElementsByClassName("catalog_category__sublink");
  for (i = 0; i < headernsl.length; i++) {
    headernsl[i].onclick = function(e) {
      if (!this.parentElement.classList.contains("active")) {
        const headernslNext = this.parentElement.nextElementSibling;
        const headernssl = document.getElementsByClassName("catalog_category__subsublist");
        const headernslActive = document.getElementsByClassName("catalog_category__sublink active");
  
        if (headernslNext && headernslNext.classList.contains("active")) {
          this.parentElement.classList.remove("active");
          headernslNext.classList.remove("active");
          headernslNext.style.maxHeight = null;
        } else if (headernslNext) {
          // for (var q = 0; q < headernslActive.length; q++) {
          //   headernslActive[q].classList.remove("active");
          //   headernssl[q].classList.remove("active");
          // }
          // for (var p = 0; p < headernssl.length; p++) {
          //   this.classList.remove("active");
          //   headernssl[p].classList.remove("active");
          //   headernssl[p].style.maxHeight = null;
          // }
          e.preventDefault();
          headernslNext.parentElement.parentElement.style.maxHeight = (headernslNext.parentElement.parentElement.scrollHeight + headernslNext.scrollHeight) + "px";
          headernslNext.style.maxHeight = headernslNext.scrollHeight + "px";
          headernslNext.classList.add("active");
          this.parentElement.classList.add("active");
        }
      }
    };
  }
  const headernslarrow = document.getElementsByClassName("catalog_category__subarrow");
  for (i = 0; i < headernslarrow.length; i++) {
    headernslarrow[i].onclick = function(e) {
      const headernslarrowNext = this.parentElement.nextElementSibling;
      if (headernslarrowNext && headernslarrowNext.classList.contains("active")) {
        this.parentElement.classList.remove("active");
        headernslarrowNext.classList.remove("active");
        headernslarrowNext.style.maxHeight = null;
      } else if (headernslarrowNext) {
        e.preventDefault();
        headernslarrowNext.parentElement.parentElement.style.maxHeight = (headernslarrowNext.parentElement.parentElement.scrollHeight + headernslarrowNext.scrollHeight) + "px";
        headernslarrowNext.style.maxHeight = headernslarrowNext.scrollHeight + "px";
        headernslarrowNext.classList.add("active");
        this.parentElement.classList.add("active");
      }
    };
  }
}
// end menu catalog

// start catalog__button
var catalogb = document.getElementsByClassName("catalog__button");

for (i = 0; i < catalogb.length; i++) {
  catalogb[i].onclick = function(e) {
    var catalogn = this.nextElementSibling;
    var catalogp = this.parentElement;
    var catalogsbi = document.getElementsByClassName("catalog__button_item");
    var catalogsl = document.getElementsByClassName("catalog__sublist");
    var catalogba = document.getElementsByClassName("catalog__button active");

    if (catalogn.style.maxHeight) {
      catalogn.style.maxHeight = null;
      this.classList.remove("active");
      catalogn.classList.remove("active");
      catalogp.classList.remove("active");
    } else {
      for (var q = 0; q < catalogba.length; q++) {
        catalogba[q].classList.remove("active");
        catalogsl[q].classList.remove("active");
        catalogsl[q].classList.remove("active");
      }
      for (var p = 0; p < catalogsl.length; p++) {
        this.classList.remove("active");
        catalogsl[p].classList.remove("active");
        catalogsbi[p].classList.remove("active");
        catalogsl[p].style.maxHeight = null;
      }
      catalogn.style.maxHeight = (catalogn.scrollHeight + 16.5) + "px";
      catalogn.classList.add("active");
      catalogp.classList.add("active");
      this.classList.add("active");
    }
  };
}
// end catalog__button

// start hero
const heroSlider = document.querySelector('.hero__swiper');
if(heroSlider){
  var aboutusThumbs = new Swiper('.hero__swiper', {
    loop: false,
    slidesPerView: 1,
    loopedSlides: 1,
    spaceBetween: 40,
    speed: 1500,
    slideToClickedSlide: true,
    allowTouchMove: true,
    navigation: {
      nextEl: '.hero__next',
      prevEl: '.hero__prev',
    },
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },
    breakpoints: {
      1280: {
        spaceBetween: 20,
      },
    },
  });
}
// end hero

// start products
const productsSlider = document.querySelector('.products__swiper');
if(productsSlider){
  var aboutusThumbs = new Swiper('.products__swiper', {
    loop: false,
    slidesPerView: 5,
    loopedSlides: 5,
    spaceBetween: 20,
    speed: 1000,
    slideToClickedSlide: false,
    allowTouchMove: true,
    breakpoints: {
      580: {
        slidesPerView: 2,
        loopedSlides: 2,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 3,
        loopedSlides: 3,
        spaceBetween: 10,
      },
    },
  });
}
// end products

// start product
const productSlider = document.querySelector('.product__swiper');
if(productSlider){
  var productThumbs = new Swiper('.product__thumbs_swiper', {
    direction: 'vertical',
    spaceBetween: 10,
    slidesPerView: 4,
    loop: false,
    freeMode: true,
    loopedSlides: 4,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      580: {
        direction: 'horizontal',
      },
    },
  });
  var productSlide = new Swiper('.product__swiper', {
    spaceBetween: 10,
    loop: false,
    speed: 1000,
    loopedSlides: 4,
    thumbs: {
      swiper: productThumbs,
    },
  });
}
// end product

// start product
const shopsSlider = document.querySelector('.shop__page_swiper');
if(shopsSlider){
  var shopsSlide = new Swiper('.shop__page_swiper', {  
    slidesPerView: 'auto',
    spaceBetween: 10,
    speed: 6000,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    breakpoints: {
      1600: {
        spaceBetween: 5,
      },
    },
  });
}
// end product

// start slider catalog
if (document.querySelector(".catalog_slider__swiper")) {
  document.querySelectorAll(".catalog_slider__swiper").forEach((n) => {
    const slider = new Swiper(n.querySelector(".catalog_slider__slider"), {
      loop: false,
      slidesPerView: 'auto',
      speed: 500,
      spaceBetween: 20,
      slideToClickedSlide: true,
      allowTouchMove: true,
      navigation: {
        nextEl: n.querySelector(".catalog_slider__next"),
        prevEl: n.querySelector(".catalog_slider__prev"),
      },
    });
  });
}
// end slider catalog

// start slider catalog
if (document.querySelector(".catalog_product_slider")) {
  document.querySelectorAll(".catalog_product_slider").forEach((n) => {
    const cpslider = new Swiper(n.querySelector(".catalog_product_slider__swiper"), {
      loop: false,
      slidesPerView: 'auto',
      speed: 500,
      spaceBetween: 10,
      allowTouchMove: true,
      slideToClickedSlide: false,
      touchRatio: 0.2,
      navigation: {
        nextEl: n.querySelector(".compare_product_slider__next_all"),
        prevEl: n.querySelector(".compare_product_slider__prev_all"),
      },
      breakpoints: {
        1280: {
          slidesPerView: 4,
        },
        1: {
          slidesPerView: 'auto',
          spaceBetween: 20,
        },
      },
    });
  });
}
// end slider catalog

// start other__slider
const productsliders = document.querySelector(".catalog_product__slider");
if(productsliders){
  var productthumbs = new Swiper(".catalog_product__thumbs", {
    loop: false,
    initialSlide: 0,
    slidesPerView: 5,
    spaceBetween: 10,
    direction: "vertical",
  });

  var videocount = {val: 0};
  var videocounts = function(e) {
    if (document.querySelector("video")) {
      e.val = 1;
    } else {
      e.val = 0;
    }
  };

  videocounts(videocount);
  var productslider = new Swiper(".catalog_product__slider", {
    loop: false,
    initialSlide: videocount.val,
    slidesPerView: 1,
    spaceBetween: 20,
    zoom: true,
    zoom: {
      maxRatio: 3,
      minRatio: 1
    },
    pagination: {
      el: '.catalog_product__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".catalog_product__slider_next",
      prevEl: ".catalog_product__slider_prev",
    },
    on: {
      transitionStart: function(){
        var videos = document.querySelectorAll('.catalog_product__slider_video');
        Array.prototype.forEach.call(videos, function(video){
          video.pause();
          video.currentTime = 0;
        });
      },
      transitionEnd: function(){
        var activeIndex = this.activeIndex;
        var activeSlide = document.getElementsByClassName('catalog_product__slider_item')[activeIndex];
        if (document.querySelector("video")) {
          var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
          if (activeSlideVideo) {activeSlideVideo.play();}
        }
      },
    },
    thumbs: {
      swiper: productthumbs,
    },
  });

  productslider.on('slideChangeTransitionStart', function() {
    productthumbs.slideTo(productslider.activeIndex);
  });
  
  productthumbs.on('transitionStart', function(){
    productslider.slideTo(productthumbs.activeIndex);
  });
}
// end other__slider

// start catalog_product__color_slider
if (document.querySelector(".catalog_product__color_slider")) {
  const slider = new Swiper(document.querySelector(".catalog_product__color_slider"), {
    loop: false,
    slidesPerView: 'auto',
    speed: 500,
    spaceBetween: 10,
    allowTouchMove: true,
    slideToClickedSlide: false,
    freeMode: true,
  });
}
// end catalog_product__color_slider

// start hover catalog_subsection
var hover = document.querySelectorAll(".catalog_subsection__images");
elemHover = false;
hover.forEach((hovers) => {
  hovers.addEventListener("mouseover", function (e) {
    if (elemHover) {return};
    var target = e.target.closest(".catalog_subsection__image");
    if (!target) {return};
    elemHover = target;
    var parent = target.closest(".catalog_subsection__images");
    var parentb = target.closest(".catalog_subsection__item_link");
    var old = parent.querySelector(".active");
    var oldb = parentb.querySelector(".catalog_subsection__image_block .active");
    if (old) {
      old.classList.remove("active");
      oldb.classList.remove("active")
    };
    target.classList.add("active");
    var indexb = target ? [...target.parentNode.children].indexOf(target) : -1;
    target.parentNode.parentNode.children[1].children[indexb].classList.add("active");
  });
  hovers.addEventListener("mouseout", function (e) {
    if (!elemHover) return;
    elemHover = null;
  });
  hovers.addEventListener("mouseleave", function () {
    let parent = this;
    let elems = parent.children;
    let els = parent.parentNode.children[1].children;

    for (let elem of elems) {elem.classList.remove("active")};
    for (let el of els) {el.classList.remove("active")};
    if(this.parentNode.children[1].children[0]){this.parentNode.children[1].children[0].classList.add("active")};
    if(this.children[0]){this.children[0].classList.add("active");}
  });
});
// end hover catalog_subsection

// start select
const cstb = document.querySelector('.catalog_subsection__top_button');
const csl = document.querySelector('.catalog_subsection__list');
if (cstb) {
  cstb.addEventListener('click', function() {
    if (cstb.classList.contains("active")) {
      cstb.classList.remove("active");
      csl.classList.remove("active");
    } else {
      cstb.classList.add("active");
      csl.classList.add("active");
    }
  })
}
// end hover catalog_subsection

// start select
const btnincarts = document.querySelector('.btn__incart');
if(btnincarts) {
  const btnincart = document.getElementsByClassName("btn__incart");
  for (i = 0; i < btnincart.length; i++) {
    btnincart[i].onclick = function(e) {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        this.children[0].innerText = "В корзину";
      } else {
        this.classList.add("active");
        this.children[0].innerText = "В корзине";
      }
    };
  }
  const btninfavorite = document.getElementsByClassName("catalog_subsection__favorite");
  for (i = 0; i < btninfavorite.length; i++) {
    btninfavorite[i].onclick = function(e) {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        this.classList.add("active");
      }
    };
  }
  const btnincomparison = document.getElementsByClassName("catalog_subsection__comparison");
  for (i = 0; i < btnincomparison.length; i++) {
    btnincomparison[i].onclick = function(e) {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        this.children[0].innerText = "В корзину";
      } else {
        this.classList.add("active");
        this.children[0].innerText = "В корзине";
      }
    };
  }
}
// end hover catalog_subsection

// start select
const SELECT = '[data-select]'
const SELECT_LIST = '[data-select-list]'
const SELECT_ARROW = '[data-select-arrow]'
const SELECT_ACTION = '[data-select-action]'
const SELECT_TITLE = '[data-select-title]'
const SELECT_INPUT = '[data-select-input]'
const SELECT_ITEM = 'selectItem'
const OPEN_SELECT = 'selectOpen'

class Select {
  static attach() {
    document.querySelectorAll(SELECT)
      .forEach(select => new Select().init(select))
  }

  init(select) {
    if (this.findSelect(select)) {
      this.applyListener()
    }
  }

  applyListener() {
    document.querySelector('*').addEventListener('click', e => {
      const element = this.select.contains(e.target) && e.target.closest(SELECT_ACTION)

      if (this.isCallSelectElement(element)) {
        if (this.isOpened()) {
          this.closeSelectList();
        } else {
          this.openSelectList()
        }
      }

      if (this.isCallSelectItemElement(element)) {
        this.addSelectedValue(element)
      }

      if (this.isCallSelectElement(element) !== true && this.selectOverlayIsClickedElement(element) !== true) {
        this.closeSelectList()
      }
    })
  }

  isCallSelectElement(element, target) {
    return element && OPEN_SELECT in element.dataset
  }

  isCallSelectItemElement(element, target) {
    return element && SELECT_ITEM in element.dataset
  }

  findSelect(select) {

    if (select) {
      this.select = select
      this.selectList = this.select.querySelector(SELECT_LIST)
      this.selectArrow = this.select.querySelector(SELECT_ARROW)
      this.selectTitle = this.select.querySelector(SELECT_TITLE)
      this.selectInput = this.select.querySelector(SELECT_INPUT)
      return true
    }
    return false
  }

  isOpened() {
    return this.selectList.classList.contains('form__select_list_opened')
  }

  openSelectList() {
    this.selectList.style.maxHeight = this.selectList.scrollHeight + "px";
    this.selectList.classList.add('form__select_list_opened')
    this.selectArrow.classList.add('form__select_arrow_rotate')
  }

  closeSelectList() {
    this.selectList.style.maxHeight = null;
    this.selectList.classList.remove('form__select_list_opened')
    this.selectArrow.classList.remove('form__select_arrow_rotate')
  }

  addSelectedValue(element) {
    this.selectTitle.innerHTML = element.innerHTML;
    this.selectInput.value = element.innerHTML;
    element.parentNode.parentNode.classList.add("success");
    element.parentNode.parentNode.classList.remove("error");
    this.selectInput.setAttribute('value', this.selectInput.value);
  }

  selectOverlayIsClickedElement(element, target) {
    return element && 'select' in element.dataset
  }
}

Select.attach()
// end select

// start menu catalog
const csff = document.querySelector('.catalog_subsection__filter_form');
if(csff) {
  const csfb = document.getElementsByClassName("catalog_subsection__filter_button");
  for (i = 0; i < csfb.length; i++) {
    csfb[i].onclick = function(e) {
      const csfbNext = this.nextElementSibling;
      if (csfbNext && csfbNext.classList.contains("active")) {
        this.classList.remove("active");
        csfbNext.classList.remove("active");
        csfbNext.style.maxHeight = null;
      } else if (csfbNext) {
        csfbNext.style.maxHeight = csfbNext.scrollHeight + "px";
        csfbNext.classList.add("active");
        this.classList.add("active");
      }
    };
  }
  const csfp = document.querySelector('.catalog_subsection__filter_popup');
  const csfpb = document.querySelector('.catalog_subsection__filter_popup_button');
  csfpb.addEventListener('click', function() {
    if (csfp.classList.contains("active")) {
      csfp.classList.remove("active");
      document.documentElement.classList.remove("noscroll");
    } else {
      csfp.classList.add("active");
      document.documentElement.classList.add("noscroll");
    }
  })
  const csfc = document.querySelector('.catalog_subsection__filter_close');
  csfc.addEventListener('click', function() {
    if (csfp.classList.contains("active")) {
      csfp.classList.remove("active");
      document.documentElement.classList.remove("noscroll");
    } else {
      csfp.classList.add("active");
      document.documentElement.classList.add("noscroll");
    }
  })
}
// end menu catalog

// start range slider
const rangeslider = document.getElementById("filterPrice");
const rangesfilterInputs = document.querySelectorAll(".catalog_subsection__filter_range_input");
const frclear = document.querySelector(".catalog_subsection__filter_clear");
const csffInputs = [...document.querySelectorAll('.catalog_subsection__filter_form .catalog_subsection__filter_input')];

if (rangeslider){
  const rangeMin = parseInt(rangeslider.dataset.min);
  const rangeMax = parseInt(rangeslider.dataset.max);
  const rangestep = parseInt(rangeslider.dataset.step);
  noUiSlider.create(rangeslider, {
      start: [rangeMin, rangeMax],
      connect: true,
      step: rangestep,
      range: {
          'min': Math.round(rangeMin),
          'max': Math.round(rangeMax)
      },
      format: {
        to: value => Math.round(value),
        from: value => Math.round(value),
      }
  });

  rangeslider.noUiSlider.on('update', (values, handle) => { 
    rangesfilterInputs[handle].value = values[handle]; 
  });
  
  rangesfilterInputs.forEach((input, indexInput) => { 
    input.addEventListener('change', () => {
      rangeslider.noUiSlider.setHandle(indexInput, input.value);
    })
  });
  
  const pricemin = document.getElementById('price_min');
  const pricemax = document.getElementById('price_max');
  const priceminl = pricemin.getAttribute('maxl').length;
  const pricemaxl = pricemax.getAttribute('maxl').length;
  pricemin.oninput = function(){this.value = this.value.substr(0, priceminl);}
  pricemax.oninput = function(){this.value = this.value.substr(0, pricemaxl);}

  frclear.addEventListener("click", function () {
    rangeslider.noUiSlider.reset();
    for(var i = 0;i < csffInputs.length; i++) {csffInputs[i].checked = false;};
  });
}
// end range slider

// start product
const productDesc = document.querySelector('.catalog_product__info_description_button');
const productDescBlock = document.querySelector('.catalog_product__info_description');
const productChar = document.querySelector('.catalog_product__info_characteristics_button');
const productCharBlock = document.querySelector('.catalog_product__info_characteristics');
const productDoc = document.querySelector('.catalog_product__info_documentation_button');
const productDocBlock = document.querySelector('.catalog_product__info_documentation');
const productChars = document.querySelector('.catalog_product__characteristic_button');
if (productChar && productCharBlock && productDesc && productDescBlock && productDoc && productDocBlock) {
  productChar.addEventListener('click', function() {
    if (!productChar.classList.contains("active")) {
      productChar.classList.add("active");
      productCharBlock.classList.add("active");
      productDesc.classList.remove("active");
      productDescBlock.classList.remove("active");
      productDoc.classList.remove("active");
      productDocBlock.classList.remove("active");
    }
  })

  productChars.addEventListener('click', function() {
    productChar.classList.add("active");
    productCharBlock.classList.add("active");
    productDesc.classList.remove("active");
    productDescBlock.classList.remove("active");
    productDoc.classList.remove("active");
    productDocBlock.classList.remove("active");
    productChar.scrollIntoView();
  })
  
  productDesc.addEventListener('click', function() {
    if (!productDesc.classList.contains("active")) {
      productDesc.classList.add("active");
      productDescBlock.classList.add("active");
      productChar.classList.remove("active");
      productCharBlock.classList.remove("active");
      productDoc.classList.remove("active");
      productDocBlock.classList.remove("active");
    }
  })
  
  productDoc.addEventListener('click', function() {
    if (!productDoc.classList.contains("active")) {
      productDoc.classList.add("active");
      productDocBlock.classList.add("active");
      productChar.classList.remove("active");
      productCharBlock.classList.remove("active");
      productDesc.classList.remove("active");
      productDescBlock.classList.remove("active");
    }
  })

  const cpcb = document.getElementsByClassName("catalog_product__color_button");
  const cpcbActive = document.querySelectorAll(".catalog_product__color_buttons .catalog_product__color_button");
  for (i = 0; i < cpcb.length; i++) {
    cpcb[i].onclick = function(e) {
      if (!this.classList.contains("active")) {
        cpcbActive.forEach((n) => n.classList.remove("active"));
        document.querySelector('.catalog_product__color span').innerHTML = this.getAttribute('color');
        this.classList.add("active");
      }
    };
  }

  const productincart = document.querySelector('.catalog_product__incart');
  productincart.addEventListener('click', function() {
    if (productincart.classList.contains("active")) {
      this.children[0].innerText = "В корзину";
      this.classList.remove("active");
    } else {
      this.children[0].innerText = "В корзине";
      this.classList.add("active");
    }
  })

  const productdesccomp = document.querySelector('.catalog_product__desktop_comparison');
  const productmobcomp = document.querySelector('.catalog_product__mobile_comparison');
  productdesccomp.addEventListener('click', function() {
    if (productdesccomp.classList.contains("active")) {
      this.children[1].innerText = "Сравнить";
      productmobcomp.children[1].innerText = "Сравнить";
      this.classList.remove("active");
      productmobcomp.classList.remove("active");
    } else {
      this.children[1].innerText = "В cравнении";
      productmobcomp.children[1].innerText = "В cравнении";
      this.classList.add("active");
      productmobcomp.classList.add("active");
    }
  })
  productmobcomp.addEventListener('click', function() {
    if (productmobcomp.classList.contains("active")) {
      this.children[1].innerText = "Сравнить";
      productdesccomp.children[1].innerText = "Сравнить";
      this.classList.remove("active");
      productdesccomp.classList.remove("active");
    } else {
      this.children[1].innerText = "В cравнении";
      productdesccomp.children[1].innerText = "В cравнении";
      this.classList.add("active");
      productdesccomp.classList.add("active");
    }
  })

  const productdescfav = document.querySelector('.catalog_product__desktop_favorite');
  const productmobfav = document.querySelector('.catalog_product__mobile_favorite');
  productdescfav.addEventListener('click', function() {
    if (productdescfav.classList.contains("active")) {
      this.children[1].innerText = "В избранное";
      productmobfav.children[1].innerText = "В избранное";
      this.classList.remove("active");
      productmobfav.classList.remove("active");
    } else {
      this.children[1].innerText = "В избранном";
      productmobfav.children[1].innerText = "В избранном";
      this.classList.add("active");
      productmobfav.classList.add("active");
    }
  })
  productmobfav.addEventListener('click', function() {
    if (productmobfav.classList.contains("active")) {
      this.children[1].innerText = "В избранное";
      productdescfav.children[1].innerText = "В избранное";
      this.classList.remove("active");
      productdescfav.classList.remove("active");
    } else {
      this.children[1].innerText = "В избранном";
      productdescfav.children[1].innerText = "В избранном";
      this.classList.add("active");
      productdescfav.classList.add("active");
    }
  })

  const csfb = document.getElementsByClassName("catalog_product__info_link");
  for (i = 0; i < csfb.length; i++) {
    csfb[i].onclick = function(e) {
      const csfbNext = this.nextElementSibling;
      if (csfbNext && csfbNext.classList.contains("active")) {
        this.classList.remove("active");
        csfbNext.classList.remove("active");
        csfbNext.style.maxHeight = null;
      } else if (csfbNext) {
        csfbNext.style.maxHeight = csfbNext.scrollHeight + "px";
        csfbNext.classList.add("active");
        this.classList.add("active");
      }
    };
  }
}
// end product

// start slider compare
if (document.querySelector(".compare_product_slider__flex")) {
  document.querySelectorAll(".compare_product_slider__flex").forEach((n) => {
    const cslslider = new Swiper(n.querySelector(".compare_product_slider__left"), {
      loop: false,
      slidesPerView: 1,
      speed: 500,
      spaceBetween: 20,
      allowTouchMove: true,
      slideToClickedSlide: false,
      touchRatio: 0.2,
      navigation: {
        nextEl: n.querySelector(".compare_product_slider__left_next"),
        prevEl: n.querySelector(".compare_product_slider__left_prev"),
      },
      pagination: {
        el: n.querySelector(".compare_product_slider__left_pagination"),
        type: "fraction",
      },
      breakpoints: {
        993: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
    if (document.querySelector(".comparison__item")) {
      document.querySelectorAll(".comparison__item").forEach((n) => {
        const cslswiper = new Swiper(n.querySelector(".comparison__sublist_left"), {
          loop: false,
          slidesPerView: 1,
          speed: 300,
          spaceBetween: 10,
          allowTouchMove: true,
          slideToClickedSlide: false,
          touchRatio: 0.5,
          breakpoints: {
            993: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          },
        });
        cslslider.on('slideChangeTransitionStart', function() {
          cslswiper.slideTo(cslslider.activeIndex);
        });
        cslswiper.on('transitionStart', function(){
          cslslider.slideTo(cslswiper.activeIndex);
        });
      });
    }
  });
}
if (document.querySelector(".compare_product_slider__flex")) {
  document.querySelectorAll(".compare_product_slider__flex").forEach((n) => {
    const csrslider = new Swiper(n.querySelector(".compare_product_slider__right"), {
      loop: false,
      slidesPerView: 1,
      speed: 500,
      spaceBetween: 20,
      allowTouchMove: true,
      slideToClickedSlide: false,
      touchRatio: 0.2,
      navigation: {
        nextEl: n.querySelector(".compare_product_slider__right_next"),
        prevEl: n.querySelector(".compare_product_slider__right_prev"),
      },
      pagination: {
        el: n.querySelector(".compare_product_slider__right_pagination"),
        type: "fraction",
      },
      breakpoints: {
        993: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
    if (document.querySelector(".comparison__item")) {
      document.querySelectorAll(".comparison__item").forEach((n) => {
        const csrswiper = new Swiper(n.querySelector(".comparison__sublist_right"), {
          loop: false,
          slidesPerView: 1,
          speed: 300,
          spaceBetween: 10,
          allowTouchMove: true,
          slideToClickedSlide: false,
          touchRatio: 0.5,
          breakpoints: {
            993: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          },
        });
        csrslider.on('slideChangeTransitionStart', function() {
          csrswiper.slideTo(csrslider.activeIndex);
        });
        csrswiper.on('transitionStart', function(){
          csrslider.slideTo(csrswiper.activeIndex);
        });
      });
    }
  });
}
// end slider compare

// start plus minus
var productinput = document.querySelector(".product__input input");
if (productinput) {
  document.querySelectorAll(".product__count .product__minus").forEach(function (element) {
    element.addEventListener("click", function (event) {
      let inputMax = this.parentElement.querySelector(".product__input input").getAttribute("max");
      event.preventDefault();
      let input = this.parentElement.querySelector(".product__input input");
      let count = parseInt(input.value) - 1;
      count = count < 1 ? 1 : count;
      if (inputMax == "0") count = 0;
      input.value = count;
    });
  });
  document.querySelectorAll(".product__count .product__plus").forEach(function (element) {
    element.addEventListener("click", function (event) {
      let inputMax = this.parentElement.querySelector(".product__input input").getAttribute("max");
      event.preventDefault();
      let input = this.parentElement.querySelector(".product__input input");
      let count = parseInt(input.value) + 1;
      count = count > parseInt(inputMax) ? parseInt(inputMax) : count;
      input.value = parseInt(count);
    });
  });
  document.querySelectorAll(".product__count .product__input input").forEach(function (element) {
    element.addEventListener("change", function (event) {
      let inputMax = this.parentElement.querySelector(".product__input input").getAttribute("max");
      event.preventDefault();
      if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, "");
      }
      if (this.value == "") {
        this.value = 1;
      }
      if (this.value > parseInt(inputMax)) {
        this.value = parseInt(inputMax);
      }
    });
  });
}
var productsinput = document.querySelector(".products__input input");
if (productsinput) {
  document.querySelectorAll(".products__count .products__minus").forEach(function (element) {
    element.addEventListener("click", function (event) {
      let inputMax = this.parentElement.querySelector(".products__input input").getAttribute("max");
      event.preventDefault();
      let input = this.parentElement.querySelector(".products__input input");
      let count = parseInt(input.value) - 1;
      count = count < 1 ? 1 : count;
      if (parseInt(inputMax) == 0) count = 0;
      input.value = count;
    });
  });
  document.querySelectorAll(".products__count .products__plus").forEach(function (element) {
    element.addEventListener("click", function (event) {
      let inputMax = this.parentElement.querySelector(".products__input input").getAttribute("max");
      event.preventDefault();
      let input = this.parentElement.querySelector(".products__input input");
      let count = parseInt(input.value) + 1;
      count = count > parseInt(inputMax) ? parseInt(inputMax) : count;
      input.value = parseInt(count);
    });
  });
  document.querySelectorAll(".products__count .products__input input").forEach(function (element) {
    element.addEventListener("change", function (event) {
      let inputMax = this.parentElement.querySelector(".products__input input").getAttribute("max");
      event.preventDefault();
      if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, "");
      }
      if (this.value == "") {
        this.value = 1;
      }
      if (this.value > parseInt(inputMax)) {
        this.value = parseInt(inputMax);
      }
    });
  });
}
// end plus minus

// start comparison
const comparison = document.querySelector(".comparison__block");
if (comparison) {
  const cl = document.getElementsByClassName("comparison__link");
  for (i = 0; i < cl.length; i++) {
    cl[i].onclick = function(e) {
      const clNext = this.nextElementSibling;
      if (clNext && clNext.classList.contains("active")) {
        this.classList.remove("active");
        clNext.classList.remove("active");
        clNext.style.maxHeight = null;
      } else if (clNext) {
        let clNextHeight = [clNext.children[0].scrollHeight, clNext.children[1].scrollHeight, 0];
        let maxHeight = Math.max.apply(null, clNextHeight);
        clNext.style.maxHeight = maxHeight + "px";
        clNext.classList.add("active");
        this.classList.add("active");
      }
    };
  }
}
// end comparison

// start cart__block
const cartblock = document.querySelector(".cart__block");
if (cartblock) {
  if (window.scrollY > 100) {
    cartblock.classList.remove("active");
  } else {
    cartblock.classList.add("active");
  }
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      cartblock.classList.remove("active");
    } else {
      cartblock.classList.add("active");
    }
  });
}
// end cart__block



































// start like
let pfavorites = document.querySelectorAll(".products__favorites");
for (let i = 0; i < pfavorites.length; i++) {
  pfavorites[i].onclick = function(e) {
    if (this.classList.contains("added")) {
      this.classList.remove("added");
    } else {
      this.classList.add("added");
    }
    e.preventDefault();
  }
}
// end like

// start product accordion
const pdescrbutton = document.querySelector(".product__descr_button");
const pcharacterbutton = document.querySelector(".product__character_button");
const pdeliverybutton = document.querySelector(".product__delivery_button");
const previewsbutton = document.querySelector('.product__reviews_button');
const pbutton = document.querySelectorAll(".product__blocks .product__button");

const pdescr = document.querySelector('.product__descr');
const pcharacter = document.querySelector('.product__character');
const pdelivery = document.querySelector('.product__delivery');
const previews = document.querySelector('.product__reviews');
const pinfo = document.querySelectorAll(".product__blocks .product__information");
const pinformation = document.querySelector(".product__information");
const pinformations = document.querySelector(".product__informations_blocks");

const pibutton = document.querySelector('.product__information_button');
const preview = document.querySelector('.product__reviews_block');
const previewform = document.querySelector('.product__reviews_forms');

if(pinformation){
  pdescrbutton.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      pinformations.classList.remove("hidden");
      pbutton.forEach(n => n.classList.remove('active'));
      pinfo.forEach(n => n.classList.remove('active'));
      pinfo.forEach(n => n.style.maxHeight = null);
      pdescr.classList.add("active");
      pdescr.style.maxHeight = (pdescr.scrollHeight * 1) + "px";
      this.classList.add("active");
      if (!preview.classList.contains("active")) {
        preview.classList.add("active");
        preview.style.maxHeight = (preview.scrollHeight * 1) + "px";
        previewform.classList.remove("active");
        previewform.style.maxHeight = null;
      }
    }
  })
  pcharacterbutton.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      pinformations.classList.remove("hidden");
      pbutton.forEach(n => n.classList.remove('active'));
      pinfo.forEach(n => n.classList.remove('active'));
      pinfo.forEach(n => n.style.maxHeight = null);
      pcharacter.classList.add("active");
      pcharacter.style.maxHeight = (pcharacter.scrollHeight * 1) + "px";
      this.classList.add("active");
      if (!preview.classList.contains("active")) {
        preview.classList.add("active");
        preview.style.maxHeight = (preview.scrollHeight * 1) + "px";
        previewform.classList.remove("active");
        previewform.style.maxHeight = null;
      }
    }
  })
  pdeliverybutton.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      pinformations.classList.remove("hidden");
      pbutton.forEach(n => n.classList.remove('active'));
      pinfo.forEach(n => n.classList.remove('active'));
      pinfo.forEach(n => n.style.maxHeight = null);
      pdelivery.classList.add("active");
      pdelivery.style.maxHeight = (pdelivery.scrollHeight * 1) + "px";
      this.classList.add("active");
      if (!preview.classList.contains("active")) {
        preview.classList.add("active");
        preview.style.maxHeight = (preview.scrollHeight * 1) + "px";
        previewform.classList.remove("active");
        previewform.style.maxHeight = null;
      }
    }
  })
  previewsbutton.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      pinformations.classList.add("hidden");
      pbutton.forEach(n => n.classList.remove('active'));
      pinfo.forEach(n => n.classList.remove('active'));
      pinfo.forEach(n => n.style.maxHeight = null);
      previews.classList.add("active");
      previews.style.maxHeight = (previews.scrollHeight * 1) + "px";
      this.classList.add("active");
      if (!preview.classList.contains("active")) {
        preview.classList.add("active");
        preview.style.maxHeight = (preview.scrollHeight * 1) + "px";
        previewform.classList.remove("active");
        previewform.style.maxHeight = null;
      }
    } else {
      if (!preview.classList.contains("active")) {
        preview.classList.add("active");
        preview.style.maxHeight = (preview.scrollHeight * 1) + "px";
        previewform.classList.remove("active");
        previewform.style.maxHeight = null;
      }
    }
  })
  document.addEventListener("DOMContentLoaded", function() {
    if (preview.classList.contains("active")) {preview.style.maxHeight = (preview.scrollHeight * 1) + "px";}
    if (pdescr.classList.contains("active")) {pdescr.style.maxHeight = (pdescr.scrollHeight * 1) + "px";}
    if (pcharacter.classList.contains("active")) {pcharacter.style.maxHeight = (pcharacter.scrollHeight * 1) + "px";}
    if (pdelivery.classList.contains("active")) {pdelivery.style.maxHeight = (pdelivery.scrollHeight * 1) + "px";}
    if (previews.classList.contains("active")) {previews.style.maxHeight = (previews.scrollHeight * 1) + "px";}
  });
  window.onresize = function () {
    var newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
      if (preview.classList.contains("active")) {preview.style.maxHeight = (preview.scrollHeight * 1) + "px";}
      if (pdescr.classList.contains("active")) {pdescr.style.maxHeight = (pdescr.scrollHeight * 1) + "px";}
      if (pcharacter.classList.contains("active")) {pcharacter.style.maxHeight = (pcharacter.scrollHeight * 1) + "px";}
      if (pdelivery.classList.contains("active")) {pdelivery.style.maxHeight = (pdelivery.scrollHeight * 1) + "px";}
      if (previews.classList.contains("active")) {previews.style.maxHeight = (previews.scrollHeight * 1) + "px";}
    }
  };
  pibutton.addEventListener('click', function() {
    if (preview.classList.contains("active")) {
      preview.classList.remove("active");
      preview.style.maxHeight = null;
      previewform.classList.add("active");
      previews.style.maxHeight = null;
      previewform.style.maxHeight = (previewform.scrollHeight * 1) + "px";
    } else {
      previewform.classList.remove("active");
      previewform.style.maxHeight = null;
      previews.style.maxHeight = null;
      preview.classList.add("active");
      preview.style.maxHeight = (preview.scrollHeight * 1) + "px";
    }
  })
}
// end product accordion

// start personal popup
const personalbuttonpopup = document.querySelector(".personal__button_popup");
const personalpopupclose = document.querySelector(".personal__popup_close");
if(personalpopup) {
  personalbuttonpopup.addEventListener('click', function() {
    if (!personalpopup.classList.contains("active")) {
      personalpopup.classList.add("active");
      overlaypopup.classList.add("active");
      docheight.classList.add("noscroll");
    }
  })
  personalpopupclose.addEventListener('click', function() {
    if (personalpopup.classList.contains("active")) {
      personalpopup.classList.remove("active");
      overlaypopup.classList.remove("active");
      docheight.classList.remove("noscroll");
    }
  })
}
// end personal popup

// start personal buttons
const pbuttondata = document.querySelector(".personal__button_data");
const pbuttonhistory = document.querySelector(".personal__button_history");
const pbuttonchange = document.querySelector(".personal__button_change");
const pbuttonexit = document.querySelector('.personal__button_exit');
const pbuttons = document.querySelectorAll(".personal__block .personal__button");

const pdata = document.querySelector('.personal__data');
const phistory = document.querySelector('.personal__history');
const pchange = document.querySelector('.personal__change');
const pblocks = document.querySelectorAll(".personal__block .personal__blocks");

if(pbuttondata){
  pbuttondata.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      pbuttons.forEach(n => n.classList.remove('active'));
      pblocks.forEach(n => n.classList.remove('active'));
      pdata.classList.add("active");
      this.classList.add("active");
      if (personalpopup.classList.contains("active")) {
        personalbuttonpopup.innerHTML = this.innerHTML;
        personalpopup.classList.remove("active");
        overlaypopup.classList.remove("active");
        docheight.classList.remove("noscroll");
      }
    }
  })
  pbuttonhistory.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      pbuttons.forEach(n => n.classList.remove('active'));
      pblocks.forEach(n => n.classList.remove('active'));
      phistory.classList.add("active");
      this.classList.add("active");
      if (personalpopup.classList.contains("active")) {
        personalbuttonpopup.innerHTML = this.innerHTML;
        personalpopup.classList.remove("active");
        overlaypopup.classList.remove("active");
        docheight.classList.remove("noscroll");
      }
    }
  })
  pbuttonchange.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      pbuttons.forEach(n => n.classList.remove('active'));
      pblocks.forEach(n => n.classList.remove('active'));
      pchange.classList.add("active");
      this.classList.add("active");
      if (personalpopup.classList.contains("active")) {
        personalbuttonpopup.innerHTML = this.innerHTML;
        personalpopup.classList.remove("active");
        overlaypopup.classList.remove("active");
        docheight.classList.remove("noscroll");
      }
    }
  })
}
// end personal buttons

// start personal accordion
if(phistory) {
  var phistoryb = document.getElementsByClassName("personal__history_button");
  for (i = 0; i < phistoryb.length; i++) {
    phistoryb[i].onclick = function(e) {
      var phistoryAccordion = this.nextElementSibling;
      var coursephistoryAccordion = document.getElementsByClassName("personal__history_info");
      var coursephistoryAccordionActive = document.getElementsByClassName("personal__history_button active");

      if (phistoryAccordion.style.maxHeight) {
        phistoryAccordion.style.maxHeight = null;
        this.classList.remove("active");
        phistoryAccordion.classList.remove("active");
      } else {
        for (var q = 0; q < coursephistoryAccordionActive.length; q++) {
          coursephistoryAccordionActive[q].classList.remove("active");
          coursephistoryAccordion[q].classList.remove("active");
        }
        for (var p = 0; p < coursephistoryAccordion.length; p++) {
          this.classList.remove("active");
          coursephistoryAccordion[p].classList.remove("active");
          coursephistoryAccordion[p].style.maxHeight = null;
        }
        phistoryAccordion.style.maxHeight = (phistoryAccordion.scrollHeight * 2) + "px";
        phistoryAccordion.classList.add("active");
        this.classList.add("active");
      }
    };
  }
}
// end personal accordion

// start product btn
const productbtn = document.querySelector('.product__btn');
if(productbtn) {
  var productb = document.getElementsByClassName("product__btn");
  for (i = 0; i < productb.length; i++) {
    productb[i].onclick = function(e) {
      if (this.classList.contains("added")) {
        this.classList.remove("added");
        this.children[0].children[1].innerText = "В корзину";
      } else {
        this.classList.add("added");
        this.children[0].children[1].innerText = "Добавлен";
      }
    };
  }
}
// end product btn

// start products btn
const productsbtn = document.querySelector('.products__cart');
if(productsbtn) {
  var productsb = document.getElementsByClassName("products__cart");
  for (i = 0; i < productsb.length; i++) {
    productsb[i].onclick = function(e) {
      if (this.classList.contains("added")) {
        this.classList.remove("added");
        this.children[1].innerText = "В корзину";
      } else {
        this.classList.add("added");
        this.children[1].innerText = "Добавлен";
      }
    };
  }
}
// end products btn

// start cart__accordion_block
const cartab = document.querySelector(".cart__accordion_block");
if (cartab) {
  const cartah = document.getElementsByClassName("cart__accordion_head");
  for (i = 0; i < cartah.length; i++) {
    cartah[i].onclick = function(e) {
      const cartahNext = this.nextElementSibling;
      if (cartahNext && this.parentElement.classList.contains("active")) {
        this.parentElement.classList.remove("active");
        cartahNext.style.maxHeight = null;
      } else if (cartahNext) {
        cartahNext.style.maxHeight = cartahNext.scrollHeight + "px";
        this.parentElement.classList.add("active");
      }
    };
  }
}
// end cart__accordion_block

// start yandex map
const maps = document.getElementById("map");
if(maps) {
  var myMap,ymaps;
  function init() {
    myMap = document.getElementById("map");
    if (!myMap) return;
    myMap = new ymaps.Map(myMap, {
      center: [55.753215, 37.622504],
      zoom: 9, 
      controls: []
      },{
      zoomControlPosition: { right: 0, top: 0 },
      zoomControlSize: 'auto'
    });

    if(oldWidth <= 1200){
      myMap.behaviors.disable('drag');
    }

    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');

    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);

    function zoomIn() {
      const currentZoom = myMap.getZoom();
      myMap.setZoom(currentZoom + 1);
    }
  
    function zoomOut() {
      const currentZoom = myMap.getZoom();
      myMap.setZoom(currentZoom - 1);
    }

    var data = {
      'points': [{
        "infoPoint": '<div id="mapmoscow" class="map__point{% if properties.active %} map__active{% endif %}">\
        <span class="map__icon"><svg width="65" height="102" viewBox="0 0 65 102" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63.8393 32.5C63.8393 36.7317 61.8977 43.07 58.8514 50.3394C55.8262 57.5585 51.7844 65.5313 47.7309 72.9656C43.6794 80.3962 39.6264 87.27 36.5855 92.2873C35.0653 94.7955 33.7988 96.8386 32.9127 98.254C32.7642 98.4911 32.6265 98.7106 32.5 98.9116C32.3735 98.7106 32.2358 98.4911 32.0873 98.254C31.2012 96.8386 29.9347 94.7955 28.4145 92.2873C25.3736 87.27 21.3206 80.3962 17.2691 72.9656C13.2156 65.5313 9.17384 57.5585 6.14864 50.3394C3.10235 43.07 1.16071 36.7317 1.16071 32.5C1.16071 15.1918 15.1918 1.16071 32.5 1.16071C49.8082 1.16071 63.8393 15.1918 63.8393 32.5Z" fill="currentColor" stroke="currentColor" stroke-width="2.32143"/><path d="M26.3302 47.4792C26.3305 47.4891 26.3306 47.4991 26.3307 47.5092L26.3302 47.4792ZM30.2476 14.7983L30.2431 14.7969C30.2091 14.7866 30.1524 14.7696 30.0862 14.7497C29.9763 14.7168 29.8404 14.676 29.74 14.6452C26.52 13.6815 22.9263 14.7593 20.7139 17.357C20.2321 17.9253 19.9585 18.3358 19.4155 19.3525C19.1712 19.8132 18.739 21.1092 18.5429 22.0483C17.9863 24.7263 18.3191 27.3431 19.7655 30.8896C20.2532 32.0837 20.5432 32.7112 22.1733 36.0808C24.1466 40.157 25.1089 42.5835 25.8772 45.4543C25.9625 45.7739 26.0712 46.2196 26.1579 46.5925C26.1622 46.6114 26.1666 46.6301 26.1709 46.6488C26.5542 46.401 27.0237 46.1059 27.2995 45.9399C29.0188 44.9064 30.9243 43.98 33.0389 43.1433C34.4038 42.6026 35.3362 42.2647 38.1868 41.2657C41.4182 40.132 43.0602 39.4367 44.5718 38.5818C47.2221 37.0836 48.8455 35.3376 50.0871 32.67C50.1912 32.4464 50.2677 32.2334 50.4748 31.5125C51.1738 29.076 50.7573 26.415 49.3329 24.2829C48.6103 23.2033 47.5973 22.253 46.5252 21.6439L46.5225 21.6424C45.7744 21.214 45.3932 21.0449 45.1093 20.9631C44.9713 20.9254 44.702 20.8471 44.511 20.7911C42.2657 20.1434 39.7918 20.4832 37.6902 21.7475C37.6691 21.7607 37.6484 21.7735 37.6283 21.786C37.5685 21.8232 37.5138 21.8573 37.4662 21.8875C37.434 21.9079 37.4104 21.9232 37.3947 21.9337L37.393 21.9347L37.3779 21.946C37.3096 21.9964 37.1963 22.0708 37.0456 22.1189C36.8869 22.1696 36.6387 22.2046 36.3707 22.0934C36.1027 21.9821 35.9522 21.7816 35.8761 21.6334C35.8038 21.4927 35.7764 21.3599 35.764 21.276L35.7628 21.2678L35.7617 21.2595C35.7255 20.9803 35.4987 20.2047 35.2632 19.6331L35.2622 19.6306C34.5282 17.8334 33.1949 16.3239 31.5458 15.4087C31.372 15.3133 31.1276 15.1786 31.0032 15.1073C30.8264 15.0102 30.4858 14.8681 30.2522 14.7997L30.2476 14.7983Z" fill="white"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">“Satisfaction”<br> ул. Орджоникидзе, д. 1</div>\
          </div>\
        </div>',
        "latitude": 55.710839,
        "longitude": 37.605068,
        },
      ],
    };

    var mapCoordinates = new ymaps.GeoObjectCollection();

    var results = [];
    data.points.forEach(function(item, index){
      results.push(createPlacemark(item));
    });
    myMap.geoObjects.add(mapCoordinates);
    myMap.behaviors.disable('scrollZoom');

    function createPlacemark(item) {
      var options = Object();
      var squareLayout = ymaps.templateLayoutFactory.createClass(item.infoPoint);
      var place = new ymaps.Placemark([item.latitude, item.longitude],{hintContent: false}, {
        iconLayout: squareLayout,
        iconShape: {   
          type: 'Rectangle',
          coordinates: [
            [-55, -50], [30, 50]
          ]
        }
      });
      mapCoordinates.add(place);
    }
    var thatCoordinates;
    mapCoordinates.events.add('click', function (e) {
      var that = e.get('target').properties.get('active');
      mapCoordinates.each(function(item, index){
        item.properties.set('active', false);
        if(e.get('target') == item && !that){
          e.get('target').properties.set('active', true);
          thatCoordinates = e.get('coords');
        }
      });

      var mapmoscow = document.getElementById('mapmoscow');
      if (mapmoscow.classList.contains("map__active")) {
        myMap.setCenter([55.710839,37.605068],17);
      } else {
        myMap.setCenter([55.753215,37.622504],9);
      };
    });
  }
  if (ymaps != undefined) ymaps.ready(init);
}
// end yandex map
// end map