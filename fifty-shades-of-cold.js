import { colors } from "./fifty-shades-of-cold.data.js";

export const generateClasses = () => {
    let style = document.createElement('style');
    let text = "";
    for(let i = 0; i<colors.length; i++){
        let color = colors[i];
        text+='.'+color+' {background: '+ color + '; }\n ';       
    }   
    style.append(text);
    document.head.appendChild(style);
}

function generateColdShades() {
    const body = document.getElementsByTagName("body")[0];
    colors.forEach((color) => {
        if (
            color.match(/(aqua|blue|turquoise|green|cyan|navy|purple)/) !== null
        ) {
            const div = document.createElement("div");
            div.classList.add(color);
            div.innerHTML = color;
            body.appendChild(div);
        }
    });
}

function choseShade(shade) {
    document.querySelectorAll("div").forEach((div) => {
        div.className = shade;
    });
}

export { generateClasses, generateColdShades, choseShade };