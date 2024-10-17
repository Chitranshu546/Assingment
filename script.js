const cards = [document.getElementById('card1'), document.getElementById('card2'), document.getElementById('card3'), document.getElementById('card4')];
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'rotate(0deg)';
    anime({
      targets: card,
      rotate: '1turn',
      duration: 780, 
      easing: 'easeInOutQuad', 
      complete: () => {
        card.style.transform = 'rotate(0deg)';
      }
    });
  });
});