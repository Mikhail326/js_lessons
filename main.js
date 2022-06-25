const items = document.querySelectorAll('.list__item')
const closeBtn = document.querySelector('#close-popup')
const popup = document.querySelector('.popup')
const popupBlock = document.querySelector('.popup__block') 
const newElement = document.createElement('div')


const closePopup = () => {
  popup.style.display = 'none'
  popupBlock.removeChild(newElement) 
}

const openPopup = (e) => {
  popup.style.display = 'flex'
  const title = e.currentTarget.dataset.title
  const price = e.currentTarget.dataset.price
  newElement.innerHTML = `<h2>${title}</h2>
                          <h3>${price}</h3>`
  popupBlock.append(newElement) 
}

items.forEach(el => {
  el.addEventListener('click', openPopup)
})

closeBtn.addEventListener('click', closePopup)
