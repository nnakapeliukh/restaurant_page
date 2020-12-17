import drawMainPage from './main-page.js';
import drawHomeTab from './home_tab.js';
import drawMenuTab from './menu_tab';
import drawContactTab from './contact_tab';


drawMainPage.init();

let currentTab = drawHomeTab.init();

const menuBut = document.getElementById('menu-but');
menuBut.onclick = () => {
    currentTab.style.display = 'none';
    currentTab = drawMenuTab.init();
}

const homeBut = document.getElementById('home-but');
homeBut.onclick = () => {
    currentTab.style.display = 'none';
    currentTab = drawHomeTab.init();
}

const contBut = document.getElementById('contact-but');
contBut.onclick = () => {
    currentTab.style.display = 'none';
    currentTab = drawContactTab.init();
}

// drawHomeTab.init();
// drawMenuTab.init();
// drawContactTab.init();