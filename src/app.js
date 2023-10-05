const $container = document.querySelector('#container');

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