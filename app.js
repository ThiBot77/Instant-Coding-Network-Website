const titre = document.querySelector('h2')
const menu = document.querySelector('nav')
const titre2 = document.querySelectorAll('h3')
const txt = document.querySelector('p')
const btn = document.querySelectorAll('button')
const imgLaptop = document.querySelector('.community_logo')
const allItems = document.querySelectorAll('li')

const TL1 = new TimelineMax({paused: true});

TL1
.from(titre, 1, {y: -100, opacity: 0})
.from(menu, 1, {y: -100, opacity: 0})
.from(txt, 1, {opacity: 0}, '-=0.4')
.from(btn, 1, {opacity: 0}, '-=0.5')
.from(imgLaptop, 1, {x: 100, opacity: 0}, '-=0.5')
.staggerFrom(allItems, 1, {y: -50, opacity: 0}, 0.2, '-=1')
.from(titre2, 1, {opacity: 0}, '-=0.5')

TL1.play()
