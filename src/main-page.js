const drawMainPage = (() => {


    function init() {
        document.body.style.background = '#222222'
        const divContent = document.getElementById('content');

        //div that has image
        const imageDiv = document.createElement('div');
        imageDiv.style.backgroundImage = 'url("../img/bbq.jpg")';
        
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