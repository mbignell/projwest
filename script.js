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

// Gets and sets the height of the window, resets if video or shop
function setHeight() {
  let pageWidth = $('.projects').innerWidth() + ($(window).width()*8/10) - 220;
  $('body').css("height", pageWidth);
  $('body.video-page').css("height","100vh");
  let shopHeight = $('.shop-internal').height();
  $('body.shop-page').css("height",shopHeight);
}

function isElementInViewport(el) {
  var rect = el[0].getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document. documentElement.clientWidth)
  );
}

let pageOffset = 0;
let left = 0;

// When the user scrolls, move the projects div left
$(document).on("scroll", function() {
  // If window is > 800px, do this, otherwise user scrolls normally
  if ($(window).width() > 800) {
    if ($('body').hasClass('project-page')) {

      let scrollTop = window.pageYOffset;
      var bottom =  20 + scrollTop
      $('.selected .project-overview').css("bottom", bottom)

      checkVideosPlaying();

    } else if ($('body').hasClass('video-page')) {
      console.log('chillin')
    } else if ($('body').hasClass('shop-page')) {
      console.log('chillin')
    } else {
      // scroll behavior
      var scrollTop = pageOffset + $(document).scrollTop();

      checkVideosPlaying();

      left = -1 * scrollTop
      $(".projects").css("left", left)

      var introLeft = -1 * scrollTop * 0.05
      $(".introduction").css("left", introLeft)

      // // line on links
      // var projectWidth = $(".project").width();
      // var linkWidth = $('.project-links').width();
      // for each project width, scroll 1/15 of link Width
      // var lineLeft = ( $(window).width()/ -15 ) + (scrollTop / 15 ) - (projectWidth/15);
      // console.log(lineLeft);
      // if (lineLeft > 0) {
      //   $('.background-line').css("left", lineLeft)
      // }
    }
  }
})

let day1playing=0;
let day2playing=0;
let day3playing=0;
let day4playing=0;
let day5playing=0;
let day6playing=0;
let day7playing=0;
let day8playing=0;
let day9playing=0;
let day10playing=0;
let day11playing=0;
let day12playing=0;
let day13playing=0;
let day14playing=0;
let day15playing=0;

const vidday1 = document.getElementById("vidday1");
const vidday2 = document.getElementById("vidday2");
const vidday3 = document.getElementById("vidday3");
const vidday4 = document.getElementById("vidday4");
const vidday5 = document.getElementById("vidday5");
const vidday6 = document.getElementById("vidday6");
const vidday7 = document.getElementById("vidday7");
const vidday8 = document.getElementById("vidday8");
const vidday9 = document.getElementById("vidday9");
const vidday10 = document.getElementById("vidday10");
const vidday11 = document.getElementById("vidday11");
const vidday12 = document.getElementById("vidday12");
const vidday13 = document.getElementById("vidday13");
const vidday14 = document.getElementById("vidday14");
const vidday15 = document.getElementById("vidday15");

function checkVideosPlaying() {
  if(isElementInViewport($("#video_day1")) && (day1playing==0)) {
    vidday1.play();
    day1playing=1;
  } else if (!isElementInViewport($("#video_day1")) && (day1playing==1)) {
    vidday1.pause();
    day1playing=0;
  }
  if(isElementInViewport($("#video_day2")) && (day2playing==0)) {
    vidday2.play();
    day2playing=1;
  } else if (!isElementInViewport($("#video_day2")) && (day2playing==1)) {
    vidday2.pause();
    day2playing=0;
  }
  if(isElementInViewport($("#video_day3")) && (day3playing==0)) {
    vidday3.play();
    day3playing=1;
  } else if (!isElementInViewport($("#video_day3")) && (day3playing==1)) {
    vidday3.pause();
    day3playing=0;
  }
  if(isElementInViewport($("#video_day4")) && (day4playing==0)) {
    vidday4.play();
    day4playing=1;
  } else if (!isElementInViewport($("#video_day4")) && (day4playing==1)) {
    vidday4.pause();
    day4playing=0;
  }
  if(isElementInViewport($("#video_day5")) && (day5playing==0)) {
    vidday5.play();
    day5playing=1;
  } else if (!isElementInViewport($("#video_day5")) && (day5playing==1)) {
    vidday5.pause();
    day5playing=0;
  }
  if(isElementInViewport($("#video_day6")) && (day6playing==0)) {
    vidday6.play();
    day6playing=1;
  } else if (!isElementInViewport($("#video_day5")) && (day6playing==1)) {
    vidday6.pause();
    day6playing=0;
  }
  if(isElementInViewport($("#video_day7")) && (day7playing==0)) {
    vidday7.play();
    day7playing=1;
  } else if (!isElementInViewport($("#video_day7")) && (day7playing==1)) {
    vidday7.pause();
    day7playing=0;
  }
  if(isElementInViewport($("#video_day7")) && (day8playing==0)) {
    vidday8.play();
    day8playing=1;
  } else if (!isElementInViewport($("#video_day8")) && (day8playing==1)) {
    vidday8.pause();
    day8playing=0;
  }
  if(isElementInViewport($("#video_day9")) && (day9playing==0)) {
    vidday9.play();
    day9playing=1;
  } else if (!isElementInViewport($("#video_day9")) && (day9playing==1)) {
    vidday9.pause();
    day9playing=0;
  }
  if(isElementInViewport($("#video_day10")) && (day10playing==0)) {
    vidday10.play();
    day10playing=1;
  } else if (!isElementInViewport($("#video_day10")) && (day10playing==1)) {
    vidday10.pause();
    day10playing=0;
  }
  if(isElementInViewport($("#video_day11")) && (day11playing==0)) {
    vidday11.play();
    day11playing=1;
  } else if (!isElementInViewport($("#video_day11")) && (day11playing==1)) {
    vidday11.pause();
    day11playing=0;
  }
  if(isElementInViewport($("#video_day12")) && (day12playing==0)) {
    vidday12.play();
    day12playing=1;
  } else if (!isElementInViewport($("#video_day12")) && (day12playing==1)) {
    vidday12.pause();
    day12playing=0;
  }
  if(isElementInViewport($("#video_day13")) && (day13playing==0)) {
    vidday13.play();
    day13playing=1;
  } else if (!isElementInViewport($("#video_day13")) && (day13playing==1)) {
    vidday13.pause();
    day13playing=0;
  }
  if(isElementInViewport($("#video_day14")) && (day14playing==0)) {
    vidday14.play();
    day14playing=1;
  } else if (!isElementInViewport($("#video_day14")) && (day14playing==1)) {
    vidday14.pause();
    day14playing=0;
  }
  if(isElementInViewport($("#video_day15")) && (day15playing==0)) {
    vidday15.play();
    day15playing=1;
  } else if (!isElementInViewport($("#video_day15")) && (day15playing==1)) {
    vidday15.pause();
    day15playing=0;
  }
}

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
  event.preventDefault();
  let currentDay = $(this).attr("day");
  collapseProject(currentDay)
})
// Bottom area collapse link, added dynamically
$( ".project" ).on( "click", ".collapse", function( event ) {
  event.preventDefault();
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

      $('body').addClass('shop-page')
      window.history.pushState(null, null, name);
      let data3 = $(data);

      let shopItems = data3.filter(".page-shop-container").html()
      $( shopItems ).hide();
      $( shopItems ).insertAfter( $('.projects') )
      $( shopItems ).fadeIn(3000);
      setHeight()

    }
  })
})

var expect = require('chai').expect

  describe('clone', function () {
      var clone = require('./clone.js')
      it('some description string', function () {
      let carColors = {
        car1: 1,
        car2: 2
      }
      clone(carColors);
        // YOUR CODE HERE
        expect({car1: 1, car2: 2}).to.eql({car1: 1, car2: 2});
    });
  })


$('.team-link').on('click', function(){
  event.preventDefault()
  let fixedLeftValue;
  const windowWidth = $(window).width();
  console.log('test')

  if (windowWidth > 2399) {
    fixedLeftValue = ((16 * 1400) + (windowWidth * 0.8)) * -1
  } else if (windowWidth > 2000) {
    fixedLeftValue = ((16 * (windowWidth * 0.5)) + (windowWidth * 0.8)) * -1
  } else {
    fixedLeftValue = ((16 * (windowWidth * 0.5)) + (windowWidth * 0.8)) * -1
  }
  console.log(fixedLeftValue)

  window.scrollTo(0,fixedLeftValue)

  $(".projects").css("left", fixedLeftValue)
  $(".projects").addClass("leftTransition").delay(600).queue(function(next){
      $(this).removeClass("leftTransition");
      next();
  });
})

// TODO fix
$('.projwest-overview-vid').on("click", function() {
  console.log('hey you clicked')
  cleanProjectState();
})

$( "body" ).on( "click", ".projwest-overview-vid", function( event ) {
  console.log('test');
})
