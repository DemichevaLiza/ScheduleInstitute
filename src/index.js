import './index.css'


document.addEventListener('DOMContentLoaded', () => {
  const timeBlocks = document.querySelectorAll('.M_TimeBlock');

  timeBlocks.forEach(block => {
    const arrowContainer = block.querySelector('.A_ArrowContainer');

    // Проверяем, найден ли элемент
    if (arrowContainer) {
      arrowContainer.addEventListener('click', () => {
        block.classList.toggle('active'); // Переключаем класс active

        const contentBlock = block.querySelector('.M_ContentBlock');
        if (block.classList.contains('active')) {
          contentBlock.style.display = 'block'; // Показываем содержимое
        } else {
          contentBlock.style.display = 'none'; // Скрываем содержимое
        }
      });
    } else {
      console.error('A_ArrowContainer не найден для:', block);
    }
  });
});


const day24Btn = document.querySelector('.day24');
const day25Btn = document.querySelector('.day25');
const timeline24 = document.querySelector('.timeline24');
const timeline25 = document.querySelector('.timeline25');

// Изначально активна 24 октября
day24Btn.classList.add('active');
timeline24.classList.add('active');

day24Btn.addEventListener('click', () => {
  day24Btn.classList.add('active');
  day25Btn.classList.remove('active');

  timeline24.classList.add('active');
  timeline25.classList.remove('active');
});

day25Btn.addEventListener('click', () => {
  day25Btn.classList.add('active');
  day24Btn.classList.remove('active');

  timeline25.classList.add('active');
  timeline24.classList.remove('active');
});

