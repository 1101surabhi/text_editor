const addText = () => {
    let whiteArea = document.getElementById("white-area") ;
    const textSize = document.getElementById('size').value + 'px';
    const textColor = document.getElementById('colors').value;
    const fontFamily = document.getElementById('font').innerText;
    console.log(textColor) ;

    const textElement = document.createElement('div') ;
    textElement.contentEditable = true;
    textElement.className = 'draggable';
    textElement.innerHTML = 'Type here';
    textElement.style.fontSize =  textSize ;
    textElement.style.color = textColor ;
    textElement.style.fontFamily = fontFamily ;
    textElement.style.display = "inline-block" ;
    textElement.style.width = "fit-content" ;
    textElement.classList.add("draggable") ;
    textElement.classList.add("textElements") ;

    whiteArea.appendChild(textElement);

    //draggable
    textElement.addEventListener('mousedown', function (e) {
        let offsetX = e.clientX - textElement.getBoundingClientRect().left;
        let offsetY = e.clientY - textElement.getBoundingClientRect().top;

        function dragMove(moveEvent) {
            let x = moveEvent.clientX - offsetX;
            let y = moveEvent.clientY - offsetY

            const containerRect = whiteArea.getBoundingClientRect();

            if (x >= containerRect.left && x + textElement.clientWidth <= containerRect.right &&
                y >= containerRect.top && y + textElement.clientHeight <= containerRect.bottom) {
                textElement.style.left = x + 'px';
                textElement.style.top = y + 'px';
            }
        }

        function dragEnd() {
          document.removeEventListener('mousemove', dragMove);
          document.removeEventListener('mouseup', dragEnd);
        }

        document.addEventListener('mousemove', dragMove);
        document.addEventListener('mouseup', dragEnd);
    });
}

// dropwdown
const dropwdown = document.querySelectorAll(".dropdown") ;
dropwdown.forEach((dropwdown) => {
    const select = dropwdown.querySelector(".select") ;
    const caret = dropwdown.querySelector(".caret") ;
    const menu = dropwdown.querySelector(".menu") ;
    const options = dropwdown.querySelectorAll(".options") ;
    const selected = dropwdown.querySelector(".selected") ;

    select.addEventListener("click", () => {
        select.classList.toggle("select-clicked") ;
        caret.classList.toggle("caret-rotate") ;
        menu.classList.toggle("menu-open") ;
    })

    options.forEach((option) => {
        option.addEventListener("click", () => {
            selected.innerHTML = option.innerHTML ;
            select.classList.remove("select-clicked") ;
            caret.classList.remove("caret-rotate") ;
            menu.classList.remove("menu-open") ;
            options.forEach((option) => {
                option.classList.remove("active") ;
            })
            option.classList.add("active") ;
        })
    })
})

//change font
const toggleFontMenu = () => {
    let fontMenu = document.getElementById('font-menu');
    fontMenu.classList.toggle('menu-open');
}

const changeFont = (font) => {
    let selectedFont = document.getElementById('font');
    selectedFont.innerText = font;
    toggleFontMenu();
}