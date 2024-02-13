const openMenu = document.querySelectorAll('.filter_name');
const filterPrice = document.querySelector('.filter-price-show');
const filterChapter = document.querySelector('.filter-chapter-show');
const filterType = document.querySelector('.filter-type-show');
const filterBrand = document.querySelector('.filter-brand-show');
const filterGroup = document.querySelector('.filter-group-show');
const filterArrow = document.querySelectorAll('.filter_arrow')
const open = document.querySelectorAll('.open-button');

openMenu.forEach(elem => {
    elem.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-price')) {
            filterPrice.classList.toggle('form_catalog-type-wrap-show');
            e.target.firstElementChild.classList.toggle('rotate_arrow');
            return
        }
        if (e.target.classList.contains('filter_arrow')) {
            e.target.classList.toggle('rotate_arrow')
            filterPrice.classList.toggle('form_catalog-type-wrap-show');
        }
        if (e.target.classList.contains('filter-chapter')) {
            filterChapter.classList.toggle('form_catalog-type-wrap-show')
            e.target.firstElementChild.classList.toggle('rotate_arrow');
            return
        }
        if (e.target.classList.contains('filter_arrow')) {
            e.target.classList.toggle('rotate_arrow')
            filterChapter.classList.toggle('form_catalog-type-wrap-show');
        }
        if (e.target.classList.contains('filter-type')) {
            filterType.classList.toggle('form_catalog-type-wrap-show')
            e.target.firstElementChild.classList.toggle('rotate_arrow');
            return
        }
        if (e.target.classList.contains('filter_arrow')) {
            e.target.classList.toggle('rotate_arrow')
            filterType.classList.toggle('form_catalog-type-wrap-show');
        }
        if (e.target.classList.contains('filter-brand')) {
            filterBrand.classList.toggle('form_catalog-type-wrap-show')
            e.target.firstElementChild.classList.toggle('rotate_arrow');
            return
        }
        if (e.target.classList.contains('filter_arrow')) {
            e.target.classList.toggle('rotate_arrow')
            filterBrand.classList.toggle('form_catalog-type-wrap-show');
        }
        if (e.target.classList.contains('filter-group')) {
            filterGroup.classList.toggle('form_catalog-type-wrap-show')
            e.target.firstElementChild.classList.toggle('rotate_arrow');
            return
        }
        if (e.target.classList.contains('filter_arrow')) {
            e.target.classList.toggle('rotate_arrow')
            filterGroup.classList.toggle('form_catalog-type-wrap-show');
        }

    })
});

let marginLeft = 140;
open.forEach(elem => {
   
    if (innerWidth >= 640) {
        marginLeft *= 1.42
        elem.style.marginLeft = `${marginLeft}px`
        console.log(innerWidth)
    }
})