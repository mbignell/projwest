// Variable used to keep track of what page to open or collapse to
let currentPage = 0;

// On document being fully loaded or resized, set the height of the body
// If the page is not an isolated-page (Shop/Overview) , set the position
$( document ).ready(function() {
    setHeight()
    if (currentPage < 20) {
      setProjectPosition(currentPage);
    }
});

$( window ).resize(function() {
    setHeight()
    if (currentPage < 20) {
      setProjectPosition(currentPage);
    }
});

// TODO
// get attribute day = 1
// on video click, pause video

// Gets and sets the height of the window, resets if video or shop
function setHeight() {
  let pageWidth = $('.projects').innerWidth() + ($(window).width()*8/10) - 220;
  console.log($(window).width());
  console.log("pageWidth " + pageWidth)
  $('body').css("height", pageWidth);
  $('body.video-page').css("height","100vh");
  let shopHeight = $('.shop-internal').height();
  $('body.shop-page').css("height",shopHeight);
}

let pageOffset = 0;

// When the user scrolls, move the projects div left
$(document).on("scroll", function() {
  // If window is > 800px, do this, otherwise user scrolls normally
  if ($(window).width() > 800) {
    let left;

    if ($('body').hasClass('project-page')) {

      let scrollTop = window.pageYOffset;
      var bottom =  20 + scrollTop
      $('.selected .project-overview').css("bottom", bottom)

    } else if ($('body').hasClass('video-page')) {
      console.log('chillin')
    } else if ($('body').hasClass('shop-page')) {
      console.log('chillin')
    } else {
      // scroll behavior
      var scrollTop = pageOffset + $(document).scrollTop();
      // console.log("ideal " + scrollTop);
      // console.log("actual " + $(document).scrollTop());

      console.log(scrollTop)


      left = -1 * scrollTop
      $(".projects").css("left", left)

      var introLeft = -1 * scrollTop * 0.05
      $(".introduction").css("left", introLeft)

      // add so you can also scroll horizontally

      // line on links
      var projectWidth = $(".project").width();
      var linkWidth = $('.project-links').width();
      // for each project width, scroll 1/15 of link Width
      // don't start until
      var lineLeft = ( $(window).width()/ -15 ) + (scrollTop / 15 ) - (projectWidth/15);
      // console.log(lineLeft);
      if (lineLeft > 0) {
        $('.background-line').css("left", lineLeft)
      }
    }
    // video play behavior
    // if (left > 200 && left < 1000) {
    //
    // }

  }
})

function ajaxAction (data, day, folder, selectedProject) {
  pageOffset = 0;

  $(".collapse").attr("day", day);
  $(".project-body").fadeOut(300, function() { $(this).remove(); });
  $(".project").removeClass("selected")
  $(".project").addClass("not-selected")
  selectedProject.removeClass('not-selected')
  selectedProject.addClass('selected')
  $('body').addClass('project-page')
  window.history.pushState(null, null, folder);

  console.log('day' + day)
  currentPage = day;

  setProjectPosition(day)

  const projectContent = $(data).find("div.project-body").html()
  const projectFull = "<div class='project-body'>" + projectContent + "</div>";

  const overview = selectedProject.children( ".project-overview" )
  $( projectFull ).insertAfter( overview );
  console.log("this is the AjaxAction function")
}

$( ".projects" ).on( "click", ".not-selected", function( event ) {
  event.preventDefault();
  const selectedProject = $(this)
  const day = $(this).attr("day")
  const folder = "/day" + day
  const href = folder + "/index.html"

  $.ajax({
    url: href,
    success: function (data) {

      console.log("it's registering not selected")

      ajaxAction (data, day, folder, selectedProject);
    }
  })

})

$('.project-links a').on("click", function() {
  event.preventDefault()

  const day = $(this).attr("href")
  const folder = "/day" + day
  const href = folder + "/index.html"

  const dataString ="*[day='" + day + "']";
  const selectedProject = $(dataString);

  $.ajax({
    url: href,
    success: function (data) {

      ajaxAction (data, day, folder, selectedProject);

    }
  })
})

// TODO fix
$('.projwest-overview-vid').on("click", function() {
  console.log('hey you clicked')
  cleanProjectState();
})

function cleanProjectState() {
  $(".project").removeClass("selected")
  $(".project").addClass("not-selected")
  $('body').removeClass('project-page')
  $('body').removeClass('video-page')
  $('body').removeClass('shop-page')
  $(".project-body").remove();
  $(".projwest-overview-vid").remove();
  $(".shop-internal").remove();
  setHeight()
  currentPage = 0;

  let href = "/"
  window.history.pushState(null, null, "/")
};

function returnHome() {
  cleanProjectState()
  window.scrollTo(0,0)
  pageOffset = 0;
  $(".project-body").html("");
  $(".projects").css("left", 0)
  $(".introduction").css("left", 0)
  $(".projects").addClass("leftTransition").delay(600).queue(function(next){
      $(this).removeClass("leftTransition");
      next();
  });
}

$('.logo').on("click", function() {
  if ( $('body').hasClass('only-video-page') || $('body').hasClass('only-shop-page') ) {
    // business as usual
  } else {
    event.preventDefault()
    returnHome();
  }
})

function collapseProject(currentDay) {
  event.preventDefault();
  let leftValue = setProjectPosition(currentDay);
  let scrollValue = leftValue * -1;
  pageOffset = scrollValue;
  document.documentElement.pageYOffset = pageOffset + "px";
  cleanProjectState()
}

// Top Collapse Link
$('.collapse').on("click", function(event) {
  let currentDay = $(this).attr("day");
  collapseProject(currentDay)
})
// Bottom area collapse link, added dynamically
$( ".project" ).on( "click", ".collapse", function( event ) {
  let currentDay = $(this).attr("day");
  collapseProject(currentDay)
});

$( ".project" ).on( "click", ".bottom-project-link", function( event ) {
  event.preventDefault()
  const day = $(this).attr("href")
  currentPage = day;
  const folder = "/day" + day
  const href = folder + "/index.html"

  const dataString ="*[day='" + day + "']";
  const selectedProject = $(dataString);

  $.ajax({
    url: href,
    success: function (data) {

      ajaxAction (data, day, folder, selectedProject);

    }
  })
})

function setProjectPosition(day) {
  if (day == 0) {
    returnHome();
  } else if ($(window).width() > 800) {

    let fixedLeftValue;
    const windowWidth = $(window).width();

    if (windowWidth > 2399) {
      fixedLeftValue = (((day - 1) * 1400) + (windowWidth * 0.8) - ((windowWidth - 1800) * 0.5)) * -1
    } else if (windowWidth > 2000) {
      fixedLeftValue = (((day - 1) * (windowWidth * 0.5)) + (windowWidth * 0.8) - ((windowWidth - 1800) * 0.5)) * -1
    } else {
      fixedLeftValue = (((day - 1) * (windowWidth * 0.5)) + (windowWidth * 0.8) - (windowWidth * 0.05)) * -1
    }

    $(".projects").css("left", fixedLeftValue)
    $(".projects").addClass("leftTransition").delay(600).queue(function(next){
        $(this).removeClass("leftTransition");
        next();
    });

    return fixedLeftValue;
  } else {
    console.log("mobile scroll")
    // let scrollTopPosition = 0;
    // const windowWidth = $(window).width();

    // scrollTopPosition = scroll to the top of the .project with the dataattribute = day

    // day.offset()

    // $(".projects").css("left", scrollTopPosition)
    // $(".projects").addClass("topTransition").delay(600).queue(function(next){
    //     $(this).removeClass("topTransition");
    //     next();
    // });

    return scrollTopPosition;
  }
}

$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}

$('.play-link').on('click', function(){
  event.preventDefault()

  const name = "overview"
  const href = "overview/index.html"

  $.ajax({
    url: href,
    success: function (data) {

      $('body').addClass('video-page')
      window.history.pushState(null, null, name);
      let data2 = $(data);

      let videoInfo = data2.filter(".page-video-container").html()
      $( videoInfo ).insertAfter( $('.projects') ).fadeIn(3000);

    }
  })
})

$('.shop-link').on('click', function(){
  event.preventDefault()
  const name = "shop"
  const href = "shop/index.html"

  $.ajax({
    url: href,
    success: function (data) {

      // $(".collapse").attr("day", 0);

      $('body').addClass('shop-page')
      window.history.pushState(null, null, name);
      // console.log(data)
      let data3 = $(data);

      let shopItems = data3.filter(".page-shop-container").html()
      $( shopItems ).hide();
      $( shopItems ).insertAfter( $('.projects') )
      $( shopItems ).fadeIn(3000);
      setHeight()

    }
  })
})

$('.project-overview-vid video').each(function(){
    if ($(this).is(":in-viewport")) {
        $(this)[0].play();
    } else {
        $(this)[0].pause();
    }
})

$( "body" ).on( "click", ".projwest-overview-vid", function( event ) {
  console.log('test');
})
// function change(state) {
//     if(state === null) { // initial page
//         $("div").text("Original");
//     } else { // page added with pushState
//         $("div").text(state.url);
//     }
// }
//
// $(window).on("popstate", function(e) {
//     change(e.originalEvent.state);
// });
//
// (function(original) { // overwrite history.pushState so that it also calls
//                       // the change function when called
//     history.pushState = function(state) {
//         change(state);
//         return original.apply(this, arguments);
//     };
// })(history.pushState);

var ticking = false;
var lastScrollLeft = 0;
$(window).scroll(function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {

            var documentScrollLeft = $(document).scrollLeft();
            if (lastScrollLeft != documentScrollLeft) {
                console.log('scroll x');
                lastScrollLeft = documentScrollLeft;
            }

            ticking = false;
        });
        ticking = true;
    }
});
