// & Nav
let documents_nav = document.getElementById("documents-nav")
documents_nav.addEventListener("click", (e) => {
    if (e.target.className == "mb") {
        expandNav(e.target.id)
    }
})

// & Tutorial slides
let tutorial_slideshows = document.getElementsByClassName("tutorial-slideshow-outer")

for (i=0; i<tutorial_slideshows.length; i++) {
    tutorial_slideshows[i].addEventListener("click", (e) => {
        if (e.target.classList.contains("arrow")) {
            let tutorial_slides = e.target.offsetParent.getElementsByClassName("tutorial-slide")
            let tutorial_index = e.target.offsetParent.classList[1]
            tutorial_index = Number(tutorial_index.replace("slide-", ""))
            if ((e.target.classList.contains("right-arrow")) && (tutorial_index < tutorial_slides.length)) {
                tutorial_index = tutorial_index + 1
            }
            if ((e.target.classList.contains("left-arrow")) && (tutorial_index > 1)) {
                tutorial_index = tutorial_index - 1
            }
            e.target.offsetParent.getElementsByClassName("slide-number")[0].textContent = `Page ${tutorial_index} of ${tutorial_slides.length}`
            tutorial_index = String("slide-" + tutorial_index)
            e.target.offsetParent.classList.replace(String(e.target.offsetParent.classList[1]), tutorial_index)
        }
    })
}


// & Functions

function expandNav(id) {
    id = id.replace("mb-", "")
    documents_nav.classList.toggle(id)
}

