
function teste(e) {
    let p = e
    p.style.backgroundColor = generateColor()
    p.style.color = generateColor()
}

function removeParents(e) {
    var root = e.parentNode;
    root.parentNode.removeChild(root);
    console.log(root);
}

function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }    return color;
}

export { teste, removeParents , generateColor }