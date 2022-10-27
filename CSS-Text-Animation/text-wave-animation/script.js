const text = document.querySelectorAll('.text');

text.forEach( text => {
    text.innerHTML = text.textContent
    .split('')
    .map((letter, index) => 
        `<span style="transition-delay: ${index * 25}ms">${letter}</span>`
    )
    .join('');
})