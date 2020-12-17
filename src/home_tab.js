const drawHomeTab = (() => {

    function init (){
        const contentDiv = document.getElementById('content');

        //tab div
        const tabDiv = document.createElement('div');
        contentDiv.appendChild(tabDiv);
        tabDiv.style.backgroundColor = '#111';
        tabDiv.style.opacity = '0.7';
        tabDiv.style.textAlign = 'center';
        tabDiv.style.maxWidth = "80%";
        tabDiv.style.margin = 'auto';
        tabDiv.style.color = "white";
        tabDiv.style.lineHeight = "3";

            //header
            const headerHome = document.createElement('h1');
            tabDiv.appendChild(headerHome);
            headerHome.innerHTML = 'Welcome to The Finest BBQ Joint';
            
            //text
            const textHomeOne = document.createElement('p');
            tabDiv.appendChild(textHomeOne);
            textHomeOne.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit lacus nec aliquet malesuada. Pellentesque finibus lacus id dui pellentesque venenatis. In sed commodo mauris. Aliquam bibendum malesuada est sed venenatis. Mauris eleifend pharetra libero, viverra gravida tellus suscipit a. Fusce molestie ultrices tortor, ut sollicitudin orci malesuada ut. Donec id magna quam. Donec accumsan nibh id ante scelerisque ullamcorper. Fusce dolor ante, posuere id urna eget, porta dignissim nisl. Donec non elit vel est cursus auctor quis ut urna. Morbi eu gravida sem.`
            const textHomeTwo = document.createElement('p');
            tabDiv.appendChild(textHomeTwo);
            textHomeTwo.innerHTML = `Nam lobortis nunc eget ligula fermentum, et imperdiet neque dapibus. Sed nisi ex, eleifend a sapien sed, rhoncus condimentum odio. Proin non luctus dolor. Mauris cursus congue dictum. Ut pharetra sollicitudin arcu, nec efficitur eros commodo id. Nam ullamcorper sem nec nibh euismod, nec aliquet lorem rutrum. In et quam urna. Phasellus quis blandit mi. Fusce tincidunt urna quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent quam turpis, bibendum vitae dui vel, pretium mattis lacus.`

            return tabDiv;
        }



    return {
        init : init,
    }
})();

export {
    drawHomeTab as default
}