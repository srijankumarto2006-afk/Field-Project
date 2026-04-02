document.addEventListener('mousemove', (e) => {
    const amount = 20;
    const x = (e.clientX / window.innerWidth) * amount;
    const y = (e.clientY / window.innerHeight) * amount;

    document.querySelector('.burger').style.transform = `translate(${x}px, ${y}px) rotate(-10deg)`;
    document.querySelector('.dimsum').style.transform = `translate(${-x}px, ${-y}px)`;
    document.querySelector('.pizza').style.transform = `translate(${x}px, ${-y}px) rotate(15deg)`;
});