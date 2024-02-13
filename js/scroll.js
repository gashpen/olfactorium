navLink.forEach(elem => {
    elem.addEventListener('click', (e) => {
      if (elem.id === 'home') { 
        e.preventDefault()
        header.scrollIntoView({
          block: 'nearest', 
          behavior: 'smooth', 
        });
      }
      if (elem.id === 'about') {
        e.preventDefault()
        about.scrollIntoView({ 
          block: 'nearest',
          behavior: 'smooth',
        });
      }
      if (elem.id === 'new') {
        e.preventDefault()
        newSection.scrollIntoView({ 
          block: 'nearest', 
          behavior: 'smooth', 
        });
      }
      if (elem.id === 'stock') {
        e.preventDefault()
        stockSection.scrollIntoView({ 
          block: 'nearest', 
          behavior: 'smooth',
        });
      }
      if (elem.id === 'top_sales') {
        e.preventDefault()
        topSalesSection.scrollIntoView({ 
          block: 'nearest', 
          behavior: 'smooth',
        });
      }
    })
  })