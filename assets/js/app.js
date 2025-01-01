
const cl = console.log;

const menuI = document.getElementById('menuI')
const closeI = document.getElementById('closeI')
const backdrop = document.getElementById('backdrop')
const sideBar = document.getElementById('sideBar')

const tabHeadingLi = [...document.querySelectorAll('.tabHeading li')]

const accoHeading = [...document.querySelectorAll('.accoHeading')]


const onclickHandler = () => {
    sideBar.classList.toggle('d-none');
    backdrop.classList.toggle('d-none');

}

const onClickOpencontent = (eve) => {
    let getId = eve.target.getAttribute('data-id')
    document.querySelector('.tabPanel.active').classList.remove('active')
    document.querySelector('.tabHeading li.active').classList.remove('active')
    eve.target.classList.add('active')
    document.getElementById(getId).classList.add('active')
}

const onClickHandlerAccoHeading = (eve) => {
    const activeHeading = document.querySelector('.accoHeading.active')
    const clickedHeading = eve.currentTarget
    if(activeHeading){
        activeHeading.classList.remove('active')
        activeHeading.children[1].classList.remove('fa-caret-up')
        activeHeading.children[1].classList.add('fa-caret-down')
    }else if(clickedHeading !== activeHeading){
        clickedHeading.classList.add('active')
        clickedHeading.children[1].classList.add('fa-caret-up')
        clickedHeading.children[1].classList.remove('fa-caret-down')
    }
}


menuI.addEventListener('click', onclickHandler)
closeI.addEventListener('click', onclickHandler)
backdrop.addEventListener('click', onclickHandler)

tabHeadingLi.forEach(heading => {
    heading.addEventListener('click', onClickOpencontent)
})

accoHeading.forEach(heading => {
    heading.addEventListener('click', onClickHandlerAccoHeading)
})






















