window.onload = function (){
    const header = document.querySelector('.header');
    const menu = document.querySelector('.header__menu');
    const hamburger = document.querySelector('.header__hamburger');

    const menu_product = document.querySelector('.menu__product');
    const drop_product = document.querySelector('.drop__product');
    const menu_company = document.querySelector('.menu__company');
    const drop_company = document.querySelector('.drop__company');
    const menu_connect = document.querySelector('.menu__connect');
    const drop_connect = document.querySelector('.drop__connect');
    const product_arrow = document.querySelector('.product__arrow');
    const company_arrow = document.querySelector('.company__arrow');
    const connect_arrow = document.querySelector('.connect__arrow');

    const header_product = document.querySelector('.header__product');
    const hdrop_product = document.querySelector('.hdrop__product');
    const header_company = document.querySelector('.header__company');
    const hdrop_company = document.querySelector('.hdrop__company');
    const header_connect = document.querySelector('.header__connect');
    const hdrop_connect = document.querySelector('.hdrop__connect');
    const product_lightarrow = document.querySelector('.product__lightarrow');
    const company_lightarrow = document.querySelector('.company__lightarrow');
    const connect_lightarrow = document.querySelector('.connect__lightarrow');
    
    const body = document.querySelector('body');

    //event opening hamburgermenu
    hamburger.addEventListener('click', function(){
        if(!header.classList.contains('open')){
            header.classList.add('open');
            menu.classList.remove('fade-out');
            menu.classList.add('fade-in');
            body.classList.add('menuopen');
        }
        else {
            header.classList.remove('open');
            menu.classList.remove('fade-in');
            menu.classList.add('fade-out');
            body.classList.remove('menuopen');
        }
        
    });

    //event dropmenu and dark arrow rotating
    menu_product.addEventListener('mouseover', function(){
        drop_product.classList.remove('drop-out');
        drop_product.classList.add('drop-in');
        product_arrow.classList.add('rotate');
    })

    menu_product.addEventListener('mouseout', function(){
        drop_product.classList.remove('drop-in');
        drop_product.classList.add('drop-out');
        product_arrow.classList.remove('rotate');
    })

    menu_company.addEventListener('mouseover', function(){
        drop_company.classList.remove('drop-out');
        drop_company.classList.add('drop-in');
        company_arrow.classList.add('rotate');
    })

    menu_company.addEventListener('mouseout', function(){
        drop_company.classList.remove('drop-in');
        drop_company.classList.add('drop-out');
        company_arrow.classList.remove('rotate');
    })

    menu_connect.addEventListener('mouseover', function(){
        drop_connect.classList.remove('drop-out');
        drop_connect.classList.add('drop-in');
        connect_arrow.classList.add('rotate');
    })

    menu_connect.addEventListener('mouseout', function(){
        drop_connect.classList.remove('drop-in');
        drop_connect.classList.add('drop-out');
        connect_arrow.classList.remove('rotate');
    })


    //event drop menu from top and light arrow rotating
    header_product.addEventListener('mouseover', function(){
        hdrop_product.classList.remove('drop-out');
        hdrop_product.classList.add('drop-in');
        product_lightarrow.classList.add('rotate');
    })

    header_product.addEventListener('mouseout', function(){
        hdrop_product.classList.remove('drop-in');
        hdrop_product.classList.add('drop-out');
        product_lightarrow.classList.remove('rotate');
    })

    header_company.addEventListener('mouseover', function(){
        hdrop_company.classList.remove('drop-out');
        hdrop_company.classList.add('drop-in');
        company_lightarrow.classList.add('rotate');
    })

    header_company.addEventListener('mouseout', function(){
        hdrop_company.classList.remove('drop-in');
        hdrop_company.classList.add('drop-out');
        company_lightarrow.classList.remove('rotate');
    })

    header_connect.addEventListener('mouseover', function(){
        hdrop_connect.classList.remove('drop-out');
        hdrop_connect.classList.add('drop-in');
        connect_lightarrow.classList.add('rotate');
    })

    header_connect.addEventListener('mouseout', function(){
        hdrop_connect.classList.remove('drop-in');
        hdrop_connect.classList.add('drop-out');
        connect_lightarrow.classList.remove('rotate');
    })

}