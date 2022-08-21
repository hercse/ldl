function typogrid() {
    console.log("匯入成功！")
    if (document.querySelector('.cursor')) {
        var cursor_color = document.querySelector('.cursor').getAttribute("cursor-color")

        var cursor_config = document.querySelector('.cursor');

        cursor_config.innerHTML = `
    <div class="cursor-outside">
    <svg class="cursor-outside-outline" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="33.5" stroke="${cursor_color}" stroke-width="2"/>
        </svg>
    <svg class="cursor-outside-fill" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="35" fill="${cursor_color}" />
        </svg>
    </div>
    <svg class="cursor-inside" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="5" r="5" fill="${cursor_color}"/>
    </svg>
`

        if (document.querySelector('.cursor[hide]')) { cursor_config.innerHTML = cursor_config.innerHTML + `<style>body {cursor: none;}</style>` }

        const circleSvg = document.querySelector('.cursor-inside')
        const circleSvg2 = document.querySelector('.cursor-outside')
        const btn = document.querySelector('button')

        let mouseX = 0
        let mouseY = 0

        var m1x, m2x, m1y, m2y

        mouseX = m1x, m2x
        mouseY = m1y, m2y

        window.addEventListener('mousemove', (event) => {

            m1y = (event.clientY / 16) - (5 / 16) + 'rem'
            m1x = (event.clientX / 16) - (5 / 16) + 'rem'

            m2y = (event.clientY / 16) - (35 / 16) + 'rem'
            m2x = (event.clientX / 16) - (35 / 16) + 'rem'
        })

        const mouseMove = () => {

            circleSvg.style.top = m1y
            circleSvg.style.left = m1x

            circleSvg2.style.top = m2y
            circleSvg2.style.left = m2x

            window.requestAnimationFrame(mouseMove)
        }

        mouseMove()

        document.querySelectorAll('a, img, .img, button').forEach(item => item.addEventListener('mouseover', (event) => {
            circleSvg.classList.add('links');
            circleSvg2.classList.add('links');
            console.log("接觸到連結");

        }));

        document.querySelectorAll('a, img, .img, button').forEach(item => item.addEventListener('mouseleave', (event) => {
            circleSvg.classList.remove('links');
            circleSvg2.classList.remove('links');
            console.log("接觸到連結");
        }));
    }

    // 選單偵測
    if (document.querySelector('.menu-button-click')) {
        var menu_Switcher = true;
        const menu_Switcher_ele = document.querySelector('.menu-button-click');

        if (menu_Switcher_ele) {
            menu_Switcher_ele.addEventListener('click', () => {

                if (menu_Switcher == true) {

                    document.querySelector('html').classList.remove("menu-open");
                    menu_Switcher = false;
                    console.log(menu_Switcher);
                } else if (menu_Switcher == false) {
                    document.querySelector('html').classList.add("menu-open");
                    menu_Switcher = true;
                    console.log(menu_Switcher);
                }
            });
        }
    }
}

// export { typogrid };
typogrid();