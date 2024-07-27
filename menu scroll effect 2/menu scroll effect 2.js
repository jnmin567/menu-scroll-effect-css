for(const link of document.getElementsByClassName("menu-item")) {
    link.onmousemove = e => {
        const decimal = e.clientX / link.offsetWidth;

        const basePercent = 60,
            percentRange = 40,
            adjustablePercent = percentRange * decimal;

        const colorPercent = basePercent + adjustablePercent;

        link.style.setProperty("--color-percent", `${colorPercent}%`);
    }
}