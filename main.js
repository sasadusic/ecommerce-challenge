const hamburger = document.querySelector('#hamburger')
const links = document.querySelector('.links')
const cardBtn  = document.querySelector('#card')
const cardModal = document.querySelector('[data-modal]')
const linksAll = document.querySelectorAll('.link')
const imageModalOpen = document.querySelector('#image-modal-open')
const imageModal = document.querySelector('[data-modal-image]')
const closeImageModal = document.querySelector('.modal-close')
const next = document.querySelector('#next')
const previous = document.querySelector('#previous')
const modalItems = document.querySelectorAll('.modal-item')
const modalImageBig = document.querySelector('.modal-image-big')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const count = document.querySelector('#count')
const add = document.querySelector('#add')
const cardBody = document.querySelector('.card-body')

hamburger.onclick = () => {
    hamburger.classList.toggle('close')
    links.classList.toggle('nav-active')
}

cardBtn.onclick = () => cardModal.showModal()

cardModal.onclick = (e) => {
    // alert('test')
    const dialogDimensions = cardModal.getBoundingClientRect()
    if(
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) { cardModal.close()}
}

imageModalOpen.onclick = () => {
    if(window.innerWidth > 576){
        imageModal.showModal()
    }
}
closeImageModal.onclick = () => imageModal.close()

imageModal.onclick = (e) => {
    // alert('test')
    const dialogDimensions = imageModal.getBoundingClientRect()
    if(
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) { imageModal.close()}
}

linksAll.forEach(link => {
    link.onclick = () => {
        linksAll.forEach(l => {
            l.classList.remove('link-active')
        })
        link.classList.add('link-active')
    }
})

let index = 1
modalItems.forEach(item => {
    item.onclick = () => {
        index = parseInt(item.dataset.index,10);
        modalImageBig.style.backgroundImage = `url(images/image-product-${index}.jpg)`
        modalItems.forEach(i => i.classList.remove('active-modal-item'))
        item.classList.add('active-modal-item');
    }
})
previous.onclick = () => {
    index--
    if(index < 1){index = 4}
    modalImageBig.style.backgroundImage = `url(images/image-product-${index}.jpg)`
    modalItems.forEach(item => {
        if(parseInt(item.dataset.index) === index){
            item.classList.add('active-modal-item')
        }else{
            item.classList.remove('active-modal-item')
        }
        })
}
next.onclick = () => {
    index++
    if(index > 4){index = 1}
    modalImageBig.style.backgroundImage = `url(images/image-product-${index}.jpg)`
    modalItems.forEach(item => {
        if(parseInt(item.dataset.index) === index){
            item.classList.add('active-modal-item')
        }else{
            item.classList.remove('active-modal-item')
        }
        })
}
let countNum = 0
minus.onclick = () => {
    if(countNum > 0){
        countNum--
    }
    count.innerHTML = countNum
}
plus.onclick = () => {
        countNum++
    count.innerHTML = countNum
}
add.onclick = () => {
    cardBody.innerHTML = ''
    cardBody.style.cssText = `
    top: 0;
    padding: 24px;
    text-align: left;
    `
    const cardImage = document.createElement('div')
    cardImage.className = 'card-img'
    cardImage.style.cssText = `
        width: 70px;
        height: 70px;
        background: url(images/image-product-1-thumbnail.jpg);
        display: inline-block;
        border-radius: 5px;
    ` 
    const hphar = document.createElement('p')
    hphar.classList = 'phar'
    hphar.innerHTML = 'Fall Limited Edition Sneakers'

    const bill = document.createElement('p')
    bill.classList = 'bill'
    bill.innerHTML = `$125.00 x ${countNum} <span>\$${125 * countNum}.00</span>`

    const trash = document.createElement('div')
    trash.classList = 'trash'
    trash.style.cssText = `
        width: 20px;
        height: 20px;
        background-image: url(images/icon-delete.svg);
        background-repeat: no-repeat;
        cursor: pointer;
        background-size: cover;
        background-position: center;
    `

    const cardBtn = document.createElement('button')
    cardBtn.classList = 'btn add-to-card'
    cardBtn.innerText = 'Checkout'
    cardBtn.style.cssText = `
        display: block;
        width: 100%;
    `
    // cardBtn.addEventListener('click' , emptyCard())

    const flex = document.createElement('div')
    flex.style.cssText = `
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    justify-content: space-betwen;
    gap: 18px;
    `
    
    const cont = document.createElement('div')
    cont.appendChild(hphar)
    cont.appendChild(bill)
    flex.appendChild(cardImage)
    flex.appendChild(cont)
    flex.appendChild(trash)
    cardBody.appendChild(flex)
    cardBody.appendChild(cardBtn)
}