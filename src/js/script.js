

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/arrow_icon.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/right_arrow.svg"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
        ]
      });
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      $('.catalog-item__link').each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');

          })
      })

      $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');

        })
    })
  });
      

// number - числа, цена, зар.плата, все данные связанные с цифрами 
// sting (строка) - записать необходимо через "", '', ``, это любые данные которые мы можем передать словами
// true/false - булиновые данные, которые имеют две степени вариации, да или нет. 
// null - тип данных, котороых не существует на странице
// undefined - тип данных, который существует, но никакого значения не имеет 
/* let obj = { - объект с данными в текстовом или числовом виде с правильным синтаксисом 
    name: 'apple',
    color: 'green',
    weight: '' 
} */
// symbol - технический тип данных 
//alert (1213) - информация для пользователя в всплывающем окне
//console.log(1234) - информация для разработчика, которая будет видная только в консоли 
//let isChecked = true,
//    isClose = false;

// console.log(isChecked && isClose); - оператор "и"
// console.log(isChecked || isClose); оператор "или"

//if (2*4 == 8*1) {
//    console.log('Верно') - оператор "если"
//} else {
//    console.log('Ошибка')
//}

//let answer = confirm('авпоро')
//if (answer) {
//    console.log('Верно')
//} else {
//    console.log('Ошибка')
//}

//for (let i = 1; i < 8; i++) { - операция цикл, действия будут выполняться пока не достигнут //установленных границ
//    console.log(i)
//}

/* function logging() { - функции нужны для того, чтобы выполнять какие-либо действия на странице заданные через эту функцию
    console.log(222)
}

logging(); */
