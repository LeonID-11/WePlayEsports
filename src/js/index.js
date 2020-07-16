const Handlebars = require("handlebars");
import gsap from "gsap";

window.onload = function(){
    const source = `
        <div class="block">
            <div class="block__avatar" style="background-image: url({{avatar}});"></div>
            <div class="block__nick_name">
                <div class="nick_name__block"></div>
                <div class="nick_name__text_item">{{nickName}}</div>
            </div>
            <div class="block__text"><div class="block_text__item">{{#text}} {{icon}} {{name}} {{/text}}</div>
        </div>
    `;
    let template = Handlebars.compile(source);


    let data = { 
        "nickName": "Nick name", 
        "avatar": "img/image.png",
        "text": [
            {
                "icon": "#",
                "name": "Matumbaman"
            }
        ]
    };
    let result = template(data);

    document.querySelector('body').innerHTML = result



    gsap.from(".block__nick_name", { xPercent: -100, duration: 0.5, ease: "none" });

    gsap.from(".block__nick_name .nick_name__text_item", { yPercent: -100, duration: 1, ease: "none" });
    
    gsap.from(".block__text", { xPercent: -100, duration: 0.5, ease: "none" });

    gsap.from(".block_text__item", { xPercent: -100, duration: 1, ease: "none" });
}