const footer = document.querySelector('footer');

footer.addEventListener('click', () => {
  console.log('clique');
});

let count = 0; // Initialisation du compteur

// Fonction qui sera appelée lors du clic sur le footer
function handleClick() {
  count++; // Incrémente le compteur à chaque clic
  console.log(`clic numéro ${count}`); // Affiche le nombre de clics dans la console
}

document.addEventListener('DOMContentLoaded', function() {
    const navbarHeader = document.getElementById('navbarHeader');
    const navbarToggler = document.querySelector('.navbar-toggler');

    navbarToggler.addEventListener('click', function() {
        navbarHeader.classList.toggle('collapse');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const firstCard = document.querySelector('.card');
    const editButton = firstCard.querySelector('.btn-outline-secondary');

    editButton.addEventListener('click', function() {
        const cardText = firstCard.querySelector('.card-text');
        cardText.style.color = 'red';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const secondCard = document.querySelectorAll('.card')[1];
    const editButton = secondCard.querySelector('.btn-outline-secondary');
    let isGreen = false;

    editButton.addEventListener('click', function() {
        const cardText = secondCard.querySelector('.card-text');

        if (!isGreen) {
            cardText.style.color = 'green';
            isGreen = true;
        } else {
            cardText.style.color = '';
            isGreen = false;
        }
    });
});

let isBootstrapHidden = false;

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    navbar.addEventListener('dblclick', function() {
        const links = document.getElementsByTagName('link');
        
        if (!isBootstrapHidden) {
            for (let i = 0; i < links.length; i++) {
                if (links[i].href.includes('bootstrap')) {
                    links[i].disabled = true;
                }
            }
            isBootstrapHidden = true;
        } else {
            for (let i = 0; i < links.length; i++) {
                if (links[i].href.includes('bootstrap')) {
                    links[i].disabled = false;
                }
            }
            isBootstrapHidden = false;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const viewButtons = document.querySelectorAll('.btn-group button:first-child');

    viewButtons.forEach(function(button) {
        button.addEventListener('mouseover', function(event) {
            const card = event.target.closest('.card');
            const cardText = card.querySelector('.card-text');
            const cardImage = card.querySelector('.card-img-top');

            if (card.style.transform !== 'scale(0.8)') {
                card.style.transform = 'scale(0.8)';
                cardText.style.display = 'none';
                cardImage.style.width = '20%';
            } else {
                card.style.transform = '';
                cardText.style.display = '';
                cardImage.style.width = '';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const grayButton = document.querySelector('.btn-secondary');

    grayButton.addEventListener('click', function() {
        const cardsContainer = document.querySelector('.album .row');
        const lastCard = cardsContainer.lastElementChild;

        cardsContainer.insertBefore(lastCard, cardsContainer.firstElementChild);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const blueButton = document.querySelector('.btn-primary');

    blueButton.addEventListener('click', function(event) {
        event.preventDefault(); // Bloque le comportement par défaut du lien HTML

        const cardsContainer = document.querySelector('.album .row');
        const firstCard = cardsContainer.firstElementChild;
        const lastCard = cardsContainer.lastElementChild;

        cardsContainer.insertBefore(lastCard, firstCard);
        cardsContainer.insertBefore(firstCard, lastCard.nextSibling);
    });
});
