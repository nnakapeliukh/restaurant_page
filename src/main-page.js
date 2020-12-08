const drawMainPage = (() => {


    function init() {
        document.body.style.background = '#111'
        document.body.style.margin = '0';
        const contentDiv = document.getElementById('content');
        contentDiv.style.width = "100%";
        contentDiv.style.margin = "auto";
        
        //header div
        const headerDiv = document.createElement('div');        
        contentDiv.appendChild(headerDiv);
        headerDiv.style.backgroundColor = "#111";
        headerDiv.style.height = "100px";
        headerDiv.style.opacity = '0.8';
        //add navigation
            //home
            const homeDiv = document.createElement('div');
            headerDiv.appendChild(homeDiv);
            homeDiv.style.textAlign = 'center';

                //button home 
                const homeBut = document.createElement('button');
                homeDiv.appendChild(homeBut);            
                homeBut.innerHTML = 'HOME';
                homeBut.className = 'nav-buttons';
                
                //button menu
                const menuBut = document.createElement('button');
                homeDiv.appendChild(menuBut);
                menuBut.innerHTML = "MENU";
                menuBut.className = 'nav-buttons';


                const allButtons = document.getElementsByClassName('nav-buttons');
                for (let elem = 0; elem < allButtons.length; elem++){
                    allButtons.item(elem).style.display = 'inline-block';
                    allButtons.item(elem).style.border = 'none';
                    allButtons.item(elem).style.background = '#333';   
                    allButtons.item(elem).style.color = 'white';
                    allButtons.item(elem).style.height = '60px';
                    allButtons.item(elem).style.width = '20%';
                    allButtons.item(elem).style.margin = '20px';
                }

        //image
        const image = document.createElement('IMG');
        contentDiv.appendChild(image);
        contentDiv.style.background = 'url(../img/bbq.jpg)';
        contentDiv.style.height = "100vh"
        contentDiv.style.backgroundRepeat = 'no-repeat';
        contentDiv.style.backgroundAttachment = 'fixed';
        contentDiv.style.backgroundPosition = 'center center';
        contentDiv.style.backgroundSize = 'cover';
    }

    function sayHello() {
        console.log("Hello");
    }

    return {
        sayHello: sayHello,
        init: init,

    }
})();



export {
    drawMainPage as default
}