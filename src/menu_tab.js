const drawMenuTab = (() => {

    function init(){
        const contentDiv = document.getElementById('content');

        //tab div
        const tabDiv = document.createElement('div');
        contentDiv.appendChild(tabDiv);

        //menu items
        const item1 = document.createElement('div');
        tabDiv.appendChild(item1);
        item1.className = 'menu-item';
        item1.innerHTML = '1';
        

    }

return{
    init : init,
}

})();

export {drawMenuTab as default};