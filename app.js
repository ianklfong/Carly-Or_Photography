
// window.onload = function() { 
//     document.querySelector("body").style.display = "none"; 
// }

// document.querySelector("body").style.display = "block";
window.onload=function() {
    document.getElementById('loading-mask').style.display='none';
}



const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a');
const img = document.querySelectorAll('img');
const submits = document.querySelectorAll('input')
const textareas = document.querySelectorAll('textarea')


document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
})

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('link-grow')
    })
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('link-grow')
    })
})
img.forEach(i => {
    i.addEventListener('mouseover', () => {
        cursor.classList.add('link-grow')
    })
    i.addEventListener('mouseleave', () => {
        cursor.classList.remove('link-grow')
    })
})

submits.forEach(i => {
    i.addEventListener('mouseover', () => {
        cursor.classList.add('link-grow')
    })
    i.addEventListener('mouseleave', () => {
        cursor.classList.remove('link-grow')
    })
})

textareas.forEach(i => {
    i.addEventListener('mouseover', () => {
        cursor.classList.add('link-grow')
    })
    i.addEventListener('mouseleave', () => {
        cursor.classList.remove('link-grow')
    })
})