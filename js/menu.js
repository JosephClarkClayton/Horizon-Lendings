(() => {


    let menuBTNMob = document.getElementById('menuBTNMob');
    menuBTNMob.onclick = () => {
        console.log(event)
        let menuToShowHide = document.getElementsByClassName('navLinksContainer')[0];
        menuToShowHide.classList.toggle('showHideMenu')

    }

})()