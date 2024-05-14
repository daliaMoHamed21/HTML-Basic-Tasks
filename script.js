document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star-rating');

    stars.forEach((star, index) => {
        star.addEventListener('mouseover', function () {
            if (!star.classList.contains('fixed')) {
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add('filled');
                }
            }
        });

        star.addEventListener('mouseout', function () {
            if (!star.classList.contains('fixed')) {
                stars.forEach(s => s.classList.remove('filled'));
            }
        });

        star.addEventListener('click', function () {
            if (!star.classList.contains('fixed')) {
                star.classList.add('fixed');
                star.setAttribute('data-rating', '1');
            } else if (star.classList.contains('fixed')) {
                star.classList.remove('filled', 'fixed');
                star.setAttribute('data-rating', '0');
            }
        });
    });
});
