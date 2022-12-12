let question = document.querySelectorAll('h3');
let answer = document.querySelectorAll('.answer');
let arrow = document.querySelectorAll('.img-arrow')

for(let i = 0; i < question.length; i++) {
    question[i].addEventListener('click', () => {
        if (answer[i].style.display == 'flex') {
            answer[i].style.display = 'none';
            answer[i].style.animation = '1s linear';
            arrow[i].style.rotate = '360deg';
        } else {
            answer[i].style.display = 'flex';
            answer[i].style.animation = '1s linear';
            arrow[i].style.rotate = '180deg';
        }
    })
};
