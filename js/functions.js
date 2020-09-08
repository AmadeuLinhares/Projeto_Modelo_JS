function checkStartRaking(start) {
  if ($(start).hasClass("checkedStar")) {
    let removeClass = $(start).next();
    $(start).hasClass("checkedStar") && start.classList.remove("checkedStar");

    while (removeClass.length > 0) {
      $(removeClass[0]).hasClass("checkedStar") &&
        removeClass[0].classList.remove("checkedStar");
      removeClass = $(removeClass[0]).next();
    }
  } else {
    let elements = $(start).next();
    start.classList.toggle("checkedStar");
    while (elements.length > 0) {
      elements[0].classList.toggle("checkedStar");
      elements = $(elements[0]).next();
    }
  }
}

function RenderSliderRanger() {
  var slider = document.getElementById("test-slider");
  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    step: 1,
    orientation: "horizontal", // 'horizontal' or 'vertical'
    range: {
      min: 0,
      max: 100,
    },
    format: wNumb({
      decimals: 0,
    }),
  });
}
