// const toggleBtn = document.querySelector('.toggleBtn');
// const menu = document.querySelector('.navbar__menu');
// const icons = document.querySelector('.navbar__icons');

// toggleBtn.addEventListener('click', () => {
//     menu.classList.toggle('active');
//     icons.classList.toggle('active');
// });


const toggleBtn = document.querySelector('.toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', (event) => {
    event.preventDefault(); // 클릭 이벤트의 기본 동작을 막음
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
