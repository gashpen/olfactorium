const slider = document.querySelector('.header_search-links');
let isDown = false;
let startX;
let scrollLeft;
if (slider) {
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX); //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
}


const menuBtn = document.querySelector(".menu-icon");
const modal = document.querySelector(".modal_menu");
const privacyModal = document.querySelector('.privacy_modal')
const navMenu = document.querySelector('.nav_menu');
const closeIcon = document.querySelector('.close_icon');
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

closeIcon.addEventListener('click', (e) => {
  if (e.target === closeIcon) {
    modal.classList.add('d-none')
    navMenu.style.transform = `translateX(${window.innerWidth}px)`
  }
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

const navLink = document.querySelectorAll('.nav_link');
const header = document.querySelector('.header_wrap');
const aroma = document.querySelector('.main_aroma-change');
const about = document.querySelector('.main_about-company');
const newSection = document.querySelector('.new_section');
const stockSection = document.querySelector('.stock_section');
const topSalesSection = document.querySelector('.top_sales-section');

  