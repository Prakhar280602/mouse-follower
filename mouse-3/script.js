document.addEventListener('mousemove', (event) => {
    const follower = document.querySelector('.follower');
    follower.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});
