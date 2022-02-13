document.querySelectorAll(".accordion-question").forEach((item) => {
    item.addEventListener("click", (event) => {
        let accCollapse = item.nextElementSibling;
        //accordion is closed and we want to open it
        if (!item.classList.contains("open")) {
            accCollapse.style.display = "block";
            let accHeight = accCollapse.clientHeight;

            setTimeout(() => {
                accCollapse.style.height = accHeight + "px";
                accCollapse.style.display = "";
            }, 1);

            accCollapse.classList = "accordion-collapse collapsing";

            // after x amount of time remove class 'collapsing' and add class 'open'
            setTimeout(() => {
                accCollapse.classList = "accordion-collapse collapse open";
            }, 300);
        } else {
            //accordion is open and we want to close it. remove open class and add collapsing
            accCollapse.classList = "accordion-collapse collapsing";

            setTimeout(() => {
                accCollapse.style.height = "0px";
            }, 1);
            //after x amount of time remove class 'collapsing' and add class 'collapse'
            setTimeout(() => {
                accCollapse.classList = "accordion-collapse collapse";
                accCollapse.style.height = ""; //cancels the height
            }, 300);
        }
        item.classList.toggle("open");
    });
});

/*
HIGH LEVEL OVERVIEW OF HEIGHT TRANSITION:
Step 1: set the collapse div's display to block (so we can give a height)
Step 2: one second timeout: we're able to pass a height value (since display is block).
    - After height value is assigned we change the display back to it's default (hidden).
Step 3: accordion-collapse.open reassigns a display:block
If accordion open:
Step 1: .accordtion-collapse.collapsing sets display to hidden
Step 2: one second timeout: we explicitly tell javascipt the accordion-collapse div is 0px tall
Step 3: accordion-collapse sets display to none.
Step 4: accCollapse.style.height = ''; sets the height back to default (0px);
*/
