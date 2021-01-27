const body = document.querySelector("body");
const fakeRange = document.querySelector("#fakeRange");
const fill = document.querySelector("#fill");
const thumb = document.querySelector("#thumb");
const priceSpan = document.querySelector("#money");
const pageViews = document.querySelector("#views");
const range = document.querySelector(".range");


let isThumbClicked = false;

let thumbReleased = () => isThumbClicked = false;
let thumbClicked = (e) => {
    isThumbClicked = true;
    initialCoord = e.x;
}
let widthToPercentage = (currentPoint, width) => {
    return currentPoint / width;
}
let updateRange = (percentage) => {
    fill.style.width = percentage * 100 + "%";
    thumb.style.left = percentage * 100 + "%";
}
let updatePrice = (percentage) => {
    console.log(percentage);
    if(isYearly()) priceSpan.textContent = (percentage * 100 * 2 * 10).toFixed(2);
    else priceSpan.textContent = (percentage * 100 * 2).toFixed(2);
}
let updatePageViews = (percentage) => {
    pageViews.textContent = Math.floor(percentage * 100 * 5);
}
let moveRange = (amount) => {
    range.value = amount;
}
let moveThumb = (e) => {
    if(isThumbClicked){
        let width = fakeRange.offsetWidth;
        let fakeRangeDimensions = {left: fakeRange.getBoundingClientRect().left, right: fakeRange.getBoundingClientRect().right}
        let currentX = e.x - fakeRangeDimensions.left;
        let upperBound = e.x - fakeRangeDimensions.right;

        if(currentX < 1) currentX = 1;
        if(upperBound > 0) currentX = width;

        let percentage = widthToPercentage(currentX, width);

        updatePageViews(percentage);
        updatePrice(percentage);
        updateRange(percentage);
        moveRange(Math.floor(percentage * 100));
    }
}


thumb.addEventListener("mousedown", thumbClicked);
body.addEventListener("mouseup", thumbReleased);
body.addEventListener("mousemove", moveThumb);
range.addEventListener("input", () => {
    updatePageViews(range.value / 100);
    updatePrice(range.value / 100);
    updateRange(range.value / 100);
});

thumb.addEventListener("touchstart", thumbClicked);
body.addEventListener("touchcancel", thumbReleased);
body.addEventListener("touchmove", (e) => moveThumb({x: e.touches[0].pageX}));