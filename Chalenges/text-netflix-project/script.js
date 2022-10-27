const text = document.querySelectorAll('.text');

text.forEach( text => {
    text.innerHTML = text.textContent
    .split('')
    .map((letter, index) => 
        `<span style="animation-delay: ${index * 0.05 }s">${letter}</span>`
    )
    .join('');
})