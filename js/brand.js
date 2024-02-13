const learnMoreBrand = document.querySelector('.learn_more-about_brand');
const modalProductWidget = document.querySelector('.modal_product-widget');
const modalAboutBrand = document.querySelector('.modal_about-brand-wrap');
const closeAboutIcon = document.querySelector('.about_close-icon');

function getScreenCenter() {
    // Получаем размеры видимой области окна браузера
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    
    // Вычисляем середину видимой области
    const centerX = viewportWidth / 2;
    const centerY = viewportHeight / 2;
    
    // Возвращаем результат
    return { x: centerX, y: centerY };
  }
  const screenCenter = getScreenCenter();
  
learnMoreBrand.addEventListener('click', (e) => {

    if (e.target === learnMoreBrand) {
        modalProductWidget.style.opacity = '1'
        modalProductWidget.style.visibility = 'visible'
        modalAboutBrand.style.opacity = '1'
        modalAboutBrand.style.visibility = 'visible'
        modalAboutBrand.style.scale = '1'
        modalAboutBrand.style.transform = `translateY(${screenCenter.y - 200}px) `
    }
})


modalProductWidget.addEventListener('click', (e) => {
    if (e.target === modalProductWidget) {
        modalProductWidget.style.opacity = '0'
        modalProductWidget.style.visibility = 'hidden'
        modalAboutBrand.style.opacity = '0'
        modalAboutBrand.style.visibility = 'hidden'
        modalAboutBrand.style.scale = '0.8'
        modalAboutBrand.style.transform = `translateY(${screenCenter.y }px)`
    }
})
closeAboutIcon.addEventListener('click',(e)=>{
    if(e.target === closeAboutIcon){
        modalProductWidget.style.opacity = '0'
        modalProductWidget.style.visibility = 'hidden'
        modalAboutBrand.style.opacity = '0'
        modalAboutBrand.style.visibility = 'hidden'
        modalAboutBrand.style.scale = '0.8'
        modalAboutBrand.style.transform = `translateY(${screenCenter.y }px)`
    }
})

