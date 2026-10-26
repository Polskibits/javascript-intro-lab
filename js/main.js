(function(){
    document.getElementById("myHeading").innerHTML = "Name";
    document.querySelector('nav ul li').setAttribute('class', 'currentPage');
    const myBtn = document.getElementById("myTestBtn");
    myBtn.addEventListener("click", (ev) => {
        console.dir(ev);
    });


    let colourButtons = document.querySelectorAll(".colPicker");
    colourButtons.forEach(colBtn => {
        colBtn.addEventListener("click", (ev) => {
            let backCol = ev.target.innerHTML;
            backCol = backCol.toLowerCase(); //takes the colour
            backCol = backCol + "Back"; //adds back to string to create the match case for the css identifiers
            document.body.setAttribute("class", backCol);
    });

        // js/main.js
    let imageAr = [
        'images/view1.jpg',
        'images/view2.jpg',
        'images/view3.jpg',
        'images/view4.jpg',
        'images/view5.jpg',
        'images/view6.jpg'
    ];

    let currentIndex = 0;

    function chgImage() {
    currentIndex++;
    if (currentIndex >= imageAr.length) {
        currentIndex = 0;
    }
    document.getElementById('myImages').setAttribute('src', imageAr[currentIndex]);
    }

setInterval(chgImage, 2000);

    }) // end of colour button function
})(); //end of function 

