const drawMenuTab = (() => {

    
    
    function init(){
        const contentDiv = document.getElementById('content');

        //tab div
        const tabDiv = document.createElement('div');
        contentDiv.appendChild(tabDiv);
        // tabDiv.style.textAlign = 'center';
        tabDiv.style.maxWidth = "80%";
        tabDiv.style.margin = 'auto';
        tabDiv.style.color = "white";
        tabDiv.style.lineHeight = "3";
        tabDiv.style.backgroundColor = 'rgba(17,17,17,0.7)'

        //menu items
        const item1 = document.createElement('div');
        tabDiv.appendChild(item1);             
        item1.className = 'menu-item';
            
            //image
            const image1 = document.createElement('img');
            item1.appendChild(image1);
            image1.src = '../img/bbq.jpg';
            image1.style = 'width:300px;height:200px;float:left;margin: 20px';
            
            //text
            const text1 = document.createElement('p');
            item1.appendChild(text1);
            text1.innerHTML  = `<b>Lorem ipsum dolor sit amet</b><br>Consectetur adipiscing elit. Morbi hendrerit lacus nec aliquet malesuada. Pellentesque finibus lacus id dui pellentesque venenatis. In sed commodo mauris. Aliquam bibendum malesuada est sed venenatis. Mauris eleifend pharetra libero, viverra gravida tellus suscipit a. Fusce molestie ultrices tortor, ut sollicitudin orci malesuada ut.`;
        
        const item2 = document.createElement('div');
        tabDiv.appendChild(item2);             
        item2.className = 'menu-item';
            
            //image
            const image2 = document.createElement('img');
            item2.appendChild(image2);
            image2.src = '../img/bbq.jpg';
            image2.style = 'width:300px;height:200px;float:left;margin: 20px';
            
            //text
            const text2 = document.createElement('p');
            item2.appendChild(text2);
            text2.innerHTML  = `<b>Lorem ipsum dolor sit amet</b><br>Consectetur adipiscing elit. Morbi hendrerit lacus nec aliquet malesuada. Pellentesque finibus lacus id dui pellentesque venenatis. In sed commodo mauris. Aliquam bibendum malesuada est sed venenatis. Mauris eleifend pharetra libero, viverra gravida tellus suscipit a. Fusce molestie ultrices tortor, ut sollicitudin orci malesuada ut. Donec id magna quam.`;
        
        const item3 = document.createElement('div');
        tabDiv.appendChild(item3);             
        item3.className = 'menu-item';
            
            //image
            const image3 = document.createElement('img');
            item3.appendChild(image3);
            image3.src = '../img/bbq.jpg';
            image3.style = 'width:300px;height:200px;float:left;margin: 20px; opacity:2';
            
            //text
            const text3 = document.createElement('p');
            item3.appendChild(text3);
            text3.innerHTML  = `<b>Lorem ipsum dolor sit amet</b><br>Consectetur adipiscing elit. Morbi hendrerit lacus nec aliquet malesuada. Pellentesque finibus lacus id dui pellentesque venenatis. In sed commodo mauris. Aliquam bibendum malesuada est sed venenatis. Mauris eleifend pharetra libero, viverra gravida tellus suscipit a. Fusce molestie ultrices tortor, ut sollicitudin orci malesuada ut. Donec id magna quam.`;
        

        
        const allItems = document.getElementsByClassName('menu-item');
        for (let cnt = 0; cnt < allItems.length; cnt++){
            // allItems.item(cnt).style.backgroundColor = "rgba(17,17,17,0.7";
            // allItems.item(cnt).style.padding = '20px';
            // allItems.item(cnt).style.opacity = '0.8';
        }

        return tabDiv;
    }

return{
    init : init,
}

})();

export {drawMenuTab as default};