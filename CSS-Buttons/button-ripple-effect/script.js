const buttons = document.querySelectorAll('a');

// Crea un elemento span cada vez que se haga click en el button
buttons.forEach(element => {
    element.onclick = function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripple = document.createElement('span');

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        this.appendChild(ripple);

        setTimeout( () => { ripple.remove() }, 600);  // 1s = 1000ms
    }
});