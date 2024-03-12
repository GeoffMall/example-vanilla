const app = async () => {
    console.log('Hello, World!');
}

const followMouse = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    let ly1 = line1.offsetHeight;
    let lx2 = line2.offsetWidth;
    let px = pointer.offsetWidth;
    let py = pointer.offsetHeight;
    let rx = result.offsetWidth;
    let ry = result.offsetHeight;
    result.innerHTML = `Height: ${y}px <br/> Width: ${x}px`
    line1.style.top = y - (ly1 / 2) + 'px';
    line2.style.left = x - (lx2 / 2) + 'px';
    pointer.setAttribute('style', `top: ${y - (px / 2)}px; left: ${x - (py / 2)}px`);
    [line1, line2, pointer].map(v => v.style.display = 'block');
    setTimeout(() => {
        if (x > (window.innerWidth - rx * 1.5) && !(y < ry * 1.5)) {
            result.setAttribute('style', `top: ${y - (ry + 20)}px; left: ${x + (rx / 4) - (rx * 1.4)}px; opacity: 1`);
        } else if ((y < ry * 1.5) && !(x > (window.innerWidth - rx * 1.5))) {
            result.setAttribute('style', `top: ${y - (ry + 20) + ry * 1.5}px; left: ${x + (rx / 4)}px; opacity: 1`);

        } else if ((x > (window.innerWidth - rx * 1.5)) && (y < ry * 1.5)) {
            console.log('true')
            result.setAttribute('style', `top: ${y + (ry)}px; left: ${x - (rx * 1.5)}px; opacity: 1`);

        } else {
            result.setAttribute('style', `top: ${y - (ry + 20)}px; left: ${x + (rx / 4)}px; opacity: 1`);

        }
        // console.log('first:' + (ry*1.5))
        // console.log('second' + (y))

    }, 200)
}

let line1 = document.getElementById('line1')
let line2 = document.getElementById('line2')
let pointer = document.getElementById('pointer');
let result = document.getElementById('result')

document.addEventListener('DOMContentLoaded', app);

window.onmousemove = followMouse;
