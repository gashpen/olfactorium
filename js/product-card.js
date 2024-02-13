const menuBtn = document.querySelector(".menu-icon");
const modal = document.querySelector(".modal_menu");
const privacyModal = document.querySelector('.privacy_modal')
const navMenu = document.querySelector('.nav_menu');
const closeIcon = document.querySelectorAll('.close_icon');
const privacyPolicy = document.querySelector('.footer_privacy_policy');
const modalPolicy = document.querySelector('.privacy_modal-wrap');
const closePrivacy = document.querySelector('.t-popup__close-icon');

menuBtn.addEventListener('click', (e) => {
  if (e.target === menuBtn) {
    modal.classList.remove('d-none')
    navMenu.style.transform = `translateX(${window.innerWidth - 400}px)`
    window.addEventListener('resize', (e) => {
      navMenu.style.transform = `translateX(${window.innerWidth - 400}px)`
    });

  }
})
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('d-none');
    navMenu.style.transform = `translateX(${window.innerWidth}px)`
  }
})

closeIcon.forEach(elem=>{
  elem.addEventListener('click', (e) => {
    if (e.target === elem) {
      modal.classList.add('d-none')
      navMenu.style.transform = `translateX(${window.innerWidth}px)`
      modalProductWidget.style.opacity = '0'
      modalProductWidget.style.visibility = 'hidden'
      productCardModal.style.transform = `translateX(${window.innerWidth}px)`
    }
  })
})


privacyPolicy.addEventListener('click', (e) => {
  if (e.target === privacyPolicy) {
    modalPolicy.style.visibility = 'visible'
  }
})
closePrivacy.addEventListener('click', (e) => {
  if (e.target === closePrivacy) {
    modalPolicy.style.visibility = 'hidden'
  }
})
modalPolicy.addEventListener('click', (e) => {
  if (e.target === modalPolicy) {
    modalPolicy.style.visibility = 'hidden'
  }
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {// настройки для разных разрешений
    360: {
      slidesPerView: 'auto',
      spaceBetween: 8
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});

const imageElement = document.querySelectorAll('.widget_change-img');
const targetElement = document.querySelector('.main_product-img-wrap');
const imageProduct = document.querySelector('.main_product-img');

imageElement.forEach(elem => {
  const imageUrl = elem.getAttribute('src');
  const img = document.createElement(`img`);
  elem.addEventListener('mouseover', function () {
    img.classList.add('main_changet_img')
    img.src = `${imageUrl}`
    targetElement.insertBefore(img, imageProduct);
    imageProduct.classList.add('d-none')
  });
  elem.addEventListener('click', (e) => {
    if (e.target === elem) {
      img.classList.add('main_changet_img')
      img.src = `${imageUrl}`
      targetElement.insertBefore(img, imageProduct);
      imageProduct.classList.add('d-none')
    }
  })
  elem.addEventListener('mouseout', function () {
    elem.closest('.main_product-img-widget').querySelector('.main_changet_img').remove();
    imageProduct.classList.remove('d-none');
  })
})

const textGetPopup = document.querySelector('.text_get-popup');
const modalProductWidget = document.querySelector('.modal_product-widget');
const productCardModal = document.querySelector('.product_card-description-modal');
textGetPopup.addEventListener('click', (e) => {
  if (e.target === textGetPopup) {
    modalProductWidget.style.opacity = '1'
    modalProductWidget.style.visibility = 'visible'
    productCardModal.style.transform = `translateX(${window.innerWidth - 700}px)`
    window.addEventListener('resize', (e) => {
      productCardModal.style.transform = `translateX(${window.innerWidth - 700}px)`
    });
  }
})
modalProductWidget.addEventListener('click', (e) => {
  if (e.target === modalProductWidget) {
    modalProductWidget.style.opacity = '0'
    modalProductWidget.style.visibility = 'hidden'
    productCardModal.style.transform = `translateX(${window.innerWidth}px)`
  }
})
const btnOther = document.querySelectorAll('.product_widget-other-btn');
const head = document.querySelectorAll('.product_widget-descr-head');

if (window.innerWidth <= 1199) {
  btnOther[0].classList.add('d-none')
  head[1].classList.add('d-none')
}
if (window.innerWidth >= 1199) {
  btnOther[1].classList.add('d-none')
  head[0].classList.add('d-none')
}

window.addEventListener('resize', (e) => {

  if (innerWidth <= 1199) {
    head[1].classList.add('d-none');
    head[0].classList.remove('d-none');
    btnOther[0].classList.add('d-none');
    btnOther[1].classList.remove('d-none');
  }
  if (innerWidth >= 1199) {
    head[0].classList.add('d-none')
    head[1].classList.remove('d-none')
    btnOther[1].classList.add('d-none')
    btnOther[0].classList.remove('d-none')
  }
})

