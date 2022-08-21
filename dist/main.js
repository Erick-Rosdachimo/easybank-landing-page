const iconHamburguer = document.getElementById('hamburguer')
const iconClose = document.getElementById('close')
const headerPage = document.getElementById('headerPage')
const menuBox = document.getElementById('menuBox')
const banner = document.getElementById('banner')

iconHamburguer.addEventListener('click', () => OpenerOrCloser())
iconClose.addEventListener('click', () => OpenerOrCloser())

function OpenerOrCloser() {
  headerPage.classList.toggle('position-fixed')
  menuBox.classList.toggle('d-block')
  menuBox.classList.toggle('d-none')
  iconHamburguer.classList.toggle('d-none')
  iconClose.classList.toggle('d-none')
  banner.classList.toggle('mt-74')
}
