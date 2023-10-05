const $container = document.querySelector('#container');
const $blackWhite = document.querySelector('.black-white');
const $colors = document.querySelector('.colors');

const iterate = Array.from(Array(28).keys())

iterate.forEach((number) => {
  const div = document.createElement('div')
  const img = document.createElement('img');
  img.src = `./src/assets/MM-${number + 1}.jpg`
  img.alt = `imagen-${number + 1}`

  const p = document.createElement('p');
  p.textContent = number + 1

  div.append(img)
  div.append(p)
  $container.append(div)
})

$blackWhite.addEventListener('click', () => {
  $container.style.filter = 'grayscale(1)'
})

$colors.addEventListener('click', () => {
  $container.style.filter = 'grayscale(0)'
})