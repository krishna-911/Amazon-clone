const images  = document.querySelectorAll('.main ul img');
const prev = document.querySelector('.previous');
const nxt = document.querySelector('.next');

let x = 0;

function slider() {
    for (let i = 0; i < images.length; i++) {
       images[i].style.display = 'none';
        
    }
    images[x].style.display = 'block';
}

slider();


prev.addEventListener('click', (e) => {
        if (x > 0) {
             x--;
        }
        else {
            x = images.length - 1;
        }
        slider();
});

nxt.addEventListener('click', () => {
        if (x < images.length - 1) {
            x++;
        }
        else {
            x = 0;
        }
        slider();
});

const scrollContainer = document.querySelectorAll('.items');

for(const item of scrollContainer){
    item.addEventListener('wheel',(evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
};

const scrollCard = document.querySelectorAll('.card-plate');

for (const items of scrollCard) {
    items.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        items.scrollLeft += evt.deltaY;
    })
}

