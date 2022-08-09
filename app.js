const titre = document.querySelector('h2')
const menu = document.querySelectorAll('nav')
const titre2 = document.querySelectorAll('h3')
const imgHome = document.querySelectorAll('.community_logo')
const faq = document.querySelectorAll('.faq_div_01')
const Team = document.querySelectorAll('.team_div_01')
const TL1 = new TimelineMax({paused: true});

TL1
.from(menu, 1, {y: -100, opacity: 0})
.from(titre, 1, {y: -100, opacity: 0})
.from(titre2, 1, {opacity: 0}, '-=0.5')
.from(imgHome, 1, {x: 100, opacity: 0}, '-=0.5')
.from(Team, 1, {x: 100, opacity: 0}, '-=0.5')
.from(faq, 1, {x: 100, opacity: 0}, '-=0.5')

TL1.play()
