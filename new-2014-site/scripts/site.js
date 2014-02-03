function responsiveNav() {
  $(".menu-toggle").click(function(e){
    e.preventDefault();
    $(".page-nav ul").toggle();
    $(this).toggleClass("open");
  });
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function moveElement(el, vert, horz) {
  if (parseInt(el.css('top')) > -1 * el.height() && 
      parseInt(el.css('top')) < $(window).height() + el.height() &&
      parseInt(el.css('left')) > -1 * el.width() && 
      parseInt(el.css('left')) < $(window).width() + el.width())
  {
    el.css({
      top: parseInt(el.css('top')) + vert,
      left: parseInt(el.css('left')) + horz
    });
  }
}


$(function () {
  responsiveNav();

  var $hero = $('#hero .container');

  $hero
    .prepend($('<img/>').addClass('space-junk').addClass('shuttle').attr('src', 'images/background-shuttle.png').css({ top: '23%', left: '5%' }))
    .prepend($('<img/>').addClass('space-junk').addClass('planet').attr('src', 'images/background-planet.png').css({ top: '60%', left: '90%' }))
    .prepend($('<img/>').addClass('space-junk').addClass('satellite').attr('src', 'images/background-satellite.png').css({ top: '53%', left: '4%' }))
    .prepend($('<img/>').addClass('space-junk').addClass('sputnik').attr('src', 'images/background-sputnik.png').css({ top: '23%', left: '89%' }));

  for (var i = 0; i < 10; i++)
  {
    $hero
      .prepend($('<img/>').addClass('space-junk').addClass('star').attr('src', 'images/background-star.png')
        .css({ top: getRandomInt(1, 100) + '%', left: getRandomInt(1, 100) + '%', opacity: 0.3, width: getRandomInt(20, 122) }))
      .prepend($('<img/>').addClass('space-junk').addClass('distant-planet').attr('src', 'images/background-circle.png')
        .css({ top: getRandomInt(1, 100) + '%', left: getRandomInt(1, 100) + '%', width: getRandomInt(5, 36) }));
  }


  $('.dropdown').click(function() {
    $(this).toggleClass('active');
  });

  var intervalcounter = 0;
  
  window.setInterval(function () {
    /* Increment "DATA COLLECTED BY NASA SINCE YOU LOADED THIS PAGE" counter */

    // In the time it took you to read this sentence, NASA gathered approximately 1.73 gigabytes of data from our nearly 100 currently active missions! 
    // - See more at: http://open.nasa.gov/blog/2012/10/04/what-is-nasa-doing-with-big-data-today/#sthash.LtjIKsZ3.dpuf
    // Assume that time to read sentence = 4 seconds => 1.73/4 GB of data per second => 432500 KB / 100 ms
    var $number = $('.counter .number'),
      newnumber = parseInt(parseInt($number.text()) + 432500),
      nzeros = 16 - newnumber.toString().length,
      zeros = '';
    for (var i = 0; i < nzeros; i++)
      zeros += '0';

    $number.html(zeros + '<strong>' + newnumber + '</strong>');

    if (intervalcounter % 10 == 0)
    {
      /* Move space junk */
      moveElement($('.sputnik'), -1, 1);
      moveElement($('.satellite'), -1, 1);
      moveElement($('.planet'), -1, -1);
      moveElement($('.shuttle'), -1, -1);
    }

    if (intervalcounter % 3 == 0)
    {
      /* Fade stars in and out */
      var $stars = $('.star');
      for (var i = 0; i < $('.star').length; i++)
      {
        var $star = $stars.eq(i),
          opacity = $star.css('opacity'),
          change = (opacity < 0 ? 0.1 : (opacity > 1 ? 0.9 : 1 + getRandomInt(-3, 3)/10));
        $star.animate({opacity: change}, 190);
      }
    }
    intervalcounter++;
  }, 100);
});