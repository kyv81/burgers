// hamburger menu

$(document).ready(function () {

  var hamb = $('.hamburger-menu');

  $('.hamburger-menu__link').on('click touchstart', function(e) {
    e.preventDefault();
    hamb.addClass('active');
  })

  $('.hamburger-menu__close, .nav__link--hamburger').on('click touchstart', function(e) {
    e.preventDefault();
    hamb.removeClass('active');
  })

})


// one page scroll

// $(function() {
//
//   var sections = $('.section'),
//       display = $('.maincontent'),
//       inScroll = false;
//
//   var scrollToSection = function (sectionEq) {
//       position = 0;
//
//       if (!inScroll) {
//
//         inScroll = true;
//
//         position = (sections.eq(sectionEq).index() * -100) + '%';
//
//         sections.eq(sectionEq).addClass('active').
//             siblings().removeClass('active');
//
//         display.css({
//           'transform' : 'translate3d(0, ' + position + ', 0)'
//         });
//
//         setTimeout(function () {
//             inScroll = false;
//
//             $('.fixed-menu__item').eq(sectionEq).addClass('active').
//               siblings().removeClass('active');
//
//         }, 1300)
//
//       }
//
//
//   }
//
//   $('.wrapper').on('wheel', function(e) {
//
//     var deltaY = e.originalEvent.deltaY,
//         activeSection = sections.filter('.active'),
//         nextSection = activeSection.next(),
//         prevSection = activeSection.prev();
//
//
//
//     if (deltaY > 0) { // скроллим вниз
//
//         if (nextSection.length) {
//           scrollToSection(nextSection.index());
//         }
//     }
//
//     if (deltaY < 0) { // скроллим вверх
//         if (prevSection.length) {
//           scrollToSection(prevSection.index());
//         }
//     }
//
//   });
//
  // $('.down-arrow').on('click', function (e) {
  //   e.preventDefault();
  //
  //   scrollToSection(1);
  //
  // })
//
//   $('.fixed-menu__link, .nav__link, .btn').on('click', function (e) {
//     e.preventDefault();
//
//     var href = parseInt($(this).attr('href'));
//
//     scrollToSection(href);
//
//   });
//
//   $(document).on('keydown', function (e) {
//
//     var activeSection = sections.filter('.active'),
//         nextSection = activeSection.next(),
//         prevSection = activeSection.prev();
//
//     console.log('keydown');
//
//     switch (e.keyCode) {
//       case 40 : // листаем вниз
//           if (nextSection.length) {
//             scrollToSection(nextSection.index());
//           }
//           break;
//
//       case 38 : // листаем вверх
//           if (prevSection.length) {
//             scrollToSection(prevSection.index());
//           }
//           break;
//     }
//
//   })
//
// });


$(function() {

	var sections = $('section'),
			main = $('.maincontent'),
			isInScroll = false;
			md = new MobileDetect(window.navigator.userAgent),
			isMobile = md.mobile();


	var performTransition = function(sectionEq){
		if (isInScroll) return
			isInScroll = true;
			var position = (sectionEq * -100) + '%';

			main.css({
				'transform' : 'translateY(' + position + ')',
				'-webkit-transform' : 'translateY(' + position + ')'
			})

			sections.eq(sectionEq).addClass('active')
			.siblings().removeClass('active');

			setTimeout(function() {
				isInScroll = false;
				$('.fixed-menu__item').eq(sectionEq).addClass('active')
				.siblings().removeClass('active');
			}, 800);
		};


	var defineSections = function(sections) {
		var activeSection = sections.filter('.active');
		return {
			activeSection: activeSection,
			nextSection: activeSection.next(),
			prevSection: activeSection.prev()
		}
	}


	var scrollToSection = function(direction){
		var section = defineSections(sections);

		if (direction == 'up' && section.nextSection.length)  { // скроллим вверх
			performTransition(section.nextSection.index());
		}
		if (direction == 'down' && section.prevSection.length)  { // скроллим вниз
			performTransition(section.prevSection.index());
		}
	}

	$('.wrapper').on({
		wheel: function(e) {
			var deltaY = e.originalEvent.deltaY;
			var direction = deltaY > 0
			? 'up'
			: 'down';
			scrollToSection(direction)
		},
		touchmove: function(e){
			e.preventDefault();
		}
	});


	$(document).on('keydown', function(e){
		var section = defineSections(sections);

		switch (e.keyCode) {
      case 40: //вверх
      if (section.nextSection.length) {
      	performTransition(section.nextSection.index());
      }
      break;
      case 38: //вниз
      if (section.prevSection.length) {
      	performTransition(section.prevSection.index());
      }
      break;
    }
  });


	$('[data-scroll-to]').on('click touchstart', function(e){
		e.preventDefault();

		var elem = $(e.target),
		sectionNum = parseInt(elem.attr('data-scroll-to'));
		performTransition(sectionNum);
	});


	if (isMobile) {
		$(window).swipe({
			swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
				scrollToSection(direction);
			}
		});
	}


});


// acco vertical

$(function() {

	$('.team__link').on('click', function(e) {
		e.preventDefault();

		var elem = $(e.target),
		item = elem.closest('.team__item'),
		content = item.find('.team__desc'),
		items = item.siblings(),
		other = items.find('.team__desc');

		if (!item.hasClass('active')) {
			  items.removeClass('active')
			  item.addClass('active')

		} else {
			  item.removeClass('active')

		}

	});
});


// acco horizontal

$(function() {

	$('.menu__link').on('click', function(e) {
		e.preventDefault();

		var elem = $(e.target),
		item = elem.closest('.menu__item'),
		content = item.find('.menu__desc'),
		items = item.siblings(),
		other = items.find('.menu__desc');

		if (!item.hasClass('active')) {
			  items.removeClass('active')
			  item.addClass('active')

		} else {
			  item.removeClass('active')

		}

	});
});


// yandex map

function init() {

	var	myMap = new ymaps.Map("map", {
			center: [59.942037, 30.326865],
			zoom: 12,
			controls: []
		});

	myMap.behaviors.disable('drag');
	myMap.behaviors.disable('scrollZoom');

	var coords = [
		[59.972641, 30.311758], [59.946128, 30.386945],
		[59.893901, 30.317251], [59.916146, 30.493895]
	],
		myCollection = new ymaps.GeoObjectCollection({}, {
		draggable: false,
		iconLayout: 'default#image',
		iconImageHref: 'img/icons/map-marker.svg',
		iconImageSize: [46, 57],
		iconImageOffset: [-26, -52]
	});

	for (var i = 0; i < coords.length; i++) {
		myCollection.add(new ymaps.Placemark(coords[i]));
	}
	myMap.geoObjects.add(myCollection);
	}
	ymaps.ready(init);

// modal fancybox

    $('.modalbox').fancybox();
