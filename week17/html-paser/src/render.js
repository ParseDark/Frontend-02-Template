const images = require('images');

function render(viewPort, element) {
    if (element.style) {
        var img = images(element.style.width, element.style.height);

        if (element.style['background-color']) {
            let color = element.style['background-color'] || 'rgb(0,0,0)';
            const RegExp = color.match(/rgb\((\d+)\s*,(\d+)\s*,(\d+)\)/);
            img.fill(Number(RegExp[1]), Number(RegExp[2]), Number(RegExp[3]));
            viewPort.draw(img, element.style.left || 0, element.style.top || 0);
        }
    }

    if (element.children) {
        for (var child of element.children) {
            render(viewPort, child);
        }
    }
}

module.exports = render;