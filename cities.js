document.addEventListener("DOMContentLoaded", function () {

    const citiesElements = document.querySelectorAll('.cities-w');


    const detElements = document.querySelectorAll('.det');


    citiesElements.forEach((cityElement, index) => {
        cityElement.addEventListener('click', function () {

            detElements.forEach(detElement => {
                detElement.style.display = 'none';
            });


            detElements[index].style.display = 'block';
        });
    });
});
