particlesJS("particles-js", {
   particles: {
      number: {
         value: 80,
         density: {
            enable: true,
            value_area: 800,
         },
      },
      color: {
         value: "#ffffff",
      },
      shape: {
         type: "circle",
         stroke: {
            width: 0,
            color: "#000000",
         },
         polygon: {
            nb_sides: 5,
         },
         image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
         },
      },
      opacity: {
         value: 0.5,
         random: false,
         anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
         },
      },
      size: {
         value: 1,
         random: true,
         anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
         },
      },
      line_linked: {
         enable: true,
         distance: 150,
         color: "#ffffff",
         opacity: 0.5,
         width: 2.5,
      },
      move: {
         enable: true,
         speed: 2,
         direction: "none",
         random: true,
         straight: false,
         out_mode: "out",
         attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
         },
      },
   },
   interactivity: {
      detect_on: "canvas",
      events: {
         onhover: {
            enable: true,
            mode: "repulse",
         },
         onclick: {
            enable: true,
            mode: "push",
         },
         resize: true,
      },
      modes: {
         grab: {
            distance: 400,
            line_linked: {
               opacity: 1,
            },
         },
         bubble: {
            distance: 400,
            size: 1,
            duration: 2,
            opacity: 8,
            speed: 3,
         },
         repulse: {
            distance: 100,
         },
         push: {
            particles_nb: 4,
         },
         remove: {
            particles_nb: 2,
         },
      },
   },
   retina_detect: true,
});

// Change the collor of navbar collapse
const slideLout = "slide-left-out";
const slideLin = "slide-left-in";

const slideRout = "slide-right-out";
const slideRin = "slide-right-in";

$(".see-more").click(function (event) {
   var section = "#" + event.target.dataset.value;
   $("#all-services").addClass(slideRout);
   setTimeout(function () {
      $("#all-services").hide();
      $(section).removeClass("inactive-information-section");
      $(section).addClass("active-information-section");
      $(section).addClass(slideLin);
      setTimeout(function () {
         $(section).removeClass(slideLin);
      }, 600);
   }, 400);
});

$(".close-see-more").click(function (event) {
   var section = "#" + event.target.dataset.value;
   $("#all-services").removeClass(slideRout);
   $(section).removeClass("active-information-section");
   $(section).addClass(slideLout);
   setTimeout(function () {
      $(section).removeClass(slideLout);
      $(section).addClass("inactive-information-section");
      $("#all-services").addClass(slideRin);
      $("#all-services").show();
      // resizeServicesSection("allServices");
      setTimeout(function () {
         $("#all-services").removeClass(slideRin);
      }, 600);
   }, 600);
});

window.smoothScroll = function (target) {
   var scrollContainer = target;
   do {
      //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
   } while (scrollContainer.scrollTop == 0);

   var targetY = 0;
   do {
      //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop - 20;
   } while ((target = target.offsetParent));

   scroll = function (c, a, b, i) {
      i++;
      if (i > 30) return;
      c.scrollTop = a + ((b - a) / 30) * i;
      setTimeout(function () {
         scroll(c, a, b, i);
      }, 20);
   };
   // start scrolling
   scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

$(".collapse").on("show.bs.collapse", function (event) {
   collapseAllExcept(event.target.id);
});

collapseAllExcept = (ignoreId) => {
   let collapsibleIdArray = ["assesment", "analysis", "design", "development", "deploy"];
   collapsibleIdArray.filter((id) => id !== ignoreId);
   collapsibleIdArray.forEach((id) => {
      $("#" + id).collapse("hide");
   });
};

//easter eggs
dogoModalCounter = 0;
openDoggoModalAfter10Clicks = () => {
   dogoModalCounter++;
   if (dogoModalCounter > 10) {
      $("#doggoModal").modal({ show: true });
   }
};

$("#software-development-card").popover({
   placement: "top",
   html: true,
   trigger: "hover", //<--- you need a trigger other than manual
   delay: {
      show: "2000",
      hide: "100",
   },
   content: function () {
      return $("#content-wrapper1").html();
   },
});

let isFormComplete = (form) => {
   if (form[0].value.trim() === "") {
      return false;
   }
   if (form[1].value.trim() === "") {
      return false;
   }
   if (form[2].value.trim() === "") {
      return false;
   }
   return true;
};

$("#contact-form").submit(function (e) {
   e.preventDefault(); // avoid to execute the actual submit of the form.

   var form = $(this);
   var url = "contactform.php";

   if (isFormComplete(form[0])) {
      const mappedData = {
         name: form[0][0].value.trim(),
         email: form[0][1].value.trim(),
         message: form[0][2].value.trim(),
      }
      $.ajax({
         type: "POST",
         url: url,
         data: JSON.stringify(mappedData), // serializes the form's elements.
         success: function (data) {
            alert(data); // show response from the php script.
         },
      });
   }
});
