$(document).ready(function () {
    // Smooth scrolling
    $('a[href^="#"]').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate(
        {
          scrollTop: $($.attr(this, 'href')).offset().top
        },
        800
      );
    });

    // Highlight current section on scroll
    $(window).scroll(function () {
      var scrollDistance = $(window).scrollTop();

      // Assign active class to nav links while scrolling
      $('section').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
          $('#navbar .nav-item.active').removeClass('active');
          $('#navbar .nav-item').eq(i).addClass('active');
        }
      });
    });
  });

async function typeSentence(sentence, eleRef) {
  letters = sentence.split("");
  let i=0;
  while(i<letters.length) {
    await MsWait(300)
    $(eleRef).append(letters[i]);
    i++;
  }
}

function MsWait(secs) {
  return new Promise(resolve => setTimeout(resolve, secs));
}