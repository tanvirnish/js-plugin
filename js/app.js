// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(about, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#06b9d5',
    trailColor: '#009688',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#999',
        position: 'absolute',
        right: '0',
        top: '-20px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  

  new Vivus('mysignature', {duration: 200});

  var typed = new Typed('.type', {
    strings: [
       
       'Time Management',
       'Avoid Distractions',
       ' Keep Studies As Your Priority',
       ' iTake Part In Classroom & School Activities',
       'Set Smart Goals',
       
       
    ],
    typeSpeed:100,
    loop:true,
   
  });


//   $(window).ready(function(){
//     let preloader = $(`.preloader`);
//     preloader.delay(3500).fadeOut(500);
//  });



  bar.animate(.80);  // Number from 0.0 to 1.0
  $("html").niceScroll({

    cursorcolor:"#009688",
    cursorborder:"1px solid #7F5FA2",

  });
  AOS.init();

