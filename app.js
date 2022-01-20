const btn1 = document.getElementById('btn1')

const h2 = document.querySelector('h2')

btn1.addEventListener('click', () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  const newColor = `rgb( ${r},${g},${b})`
  document.body.style.backgroundColor = newColor
  h2.innerText = newColor
})
