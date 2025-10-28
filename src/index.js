import './index.css'


// document.addEventListener('DOMContentLoaded', () => {
//   const timeBlocks = document.querySelectorAll('.M_TimeBlock');

//   timeBlocks.forEach(block => {
//     const arrowContainer = block.querySelector('.A_ArrowContainer');

//     // Проверяем, найден ли элемент
//     if (arrowContainer) {
//       arrowContainer.addEventListener('click', () => {
//         block.classList.toggle('active'); // Переключаем класс active

//         const contentBlock = block.querySelector('.M_ContentBlock');
//         if (block.classList.contains('active')) {
//           contentBlock.style.display = 'block'; // Показываем содержимое
//         } else {
//           contentBlock.style.display = 'none'; // Скрываем содержимое
//         }
//       });
//     } else {
//       console.error('A_ArrowContainer не найден для:', block);
//     }
//   });
// });


// document.addEventListener('DOMContentLoaded', () => {
//   const timeBlocks = document.querySelectorAll('.M_TimeBlock');
//   const arrowBlock = document.querySelectorAll('.A_ArrowContainer');
//   timeBlocks.forEach(block => {
//     const arrowContainer = block.querySelector('.A_ArrowContainer2');

//     // Проверяем, найден ли элемент
//     if (arrowContainer) {
//       arrowContainer.addEventListener('click', () => {
//         block.classList.toggle('active'); // Переключаем класс active

//         const contentBlock = block.querySelector('.M_ContentBlock');
//         if (block.classList.contains('active')) {
//           contentBlock.style.display = 'block'; // Показываем содержимое
//         } else {
//           contentBlock.style.display = 'none'; // Скрываем содержимое
//         }
//       });
//       const arrowBlock = block.querySelector('.A_ArrowContainer');
//       if (block.classList.contains('active')) {
//         contentBlock.style.display = 'block'; // Показываем содержимое
//       } else {
//         contentBlock.style.display = 'none'; // Скрываем содержимое
//       }
//     } else {
//       console.error('A_ArrowContainer2 не найден для:', block);
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const timeBlocks = document.querySelectorAll('.M_TimeBlock');

  timeBlocks.forEach(block => {
    const arrow1 = block.querySelector('.A_ArrowContainer');   // первая стрелка
    const arrow2 = block.querySelector('.A_ArrowContainer2');  // вторая стрелка
    const contentBlock = block.querySelector('.M_ContentBlock');

    // Изначально скрываем первую стрелку и контент
    if (arrow1) arrow1.style.display = 'none';
    if (contentBlock) contentBlock.style.display = 'none';

    // --- ВТОРАЯ СТРЕЛКА ---
    if (arrow2) {
      arrow2.addEventListener('click', () => {
        const isActive = block.classList.toggle('active');

        if (isActive) {
          // Если активен — показываем контент и первую стрелку
          if (contentBlock) contentBlock.style.display = 'block';
          if (arrow1) arrow1.style.display = 'flex';
        } else {
          // Если не активен — скрываем контент и первую стрелку
          if (contentBlock) contentBlock.style.display = 'none';
          if (arrow1) arrow1.style.display = 'none';
        }
      });
    }

    // --- ПЕРВАЯ СТРЕЛКА ---
    if (arrow1) {
      arrow1.addEventListener('click', () => {
        // При клике скрываем контент и саму себя
        if (contentBlock) contentBlock.style.display = 'none';
        arrow1.style.display = 'none';
        block.classList.remove('active');
      });
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

