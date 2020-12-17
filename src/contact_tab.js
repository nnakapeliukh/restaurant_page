const drawContactTab = (() => {

    function init(){

        const contentDiv = document.getElementById('content');

        const contactTab = document.createElement('div');
        contentDiv.appendChild(contactTab);
        contactTab.style.maxWidth = '80%';
        contactTab.style.backgroundColor = 'rgba(17,17,17,1)';
        contactTab.style.margin = 'auto';
        contactTab.style.textAlign = 'center';
        contactTab.style.color = 'white';
        contactTab.style.opacity = '0.7';

        const headerText = document.createElement('h1');
        contactTab.appendChild(headerText);
        headerText.innerHTML = 'Contact Us';
        headerText.style.padding = "20px";
        
        const contactInfo = document.createElement('p');
        contactTab.appendChild(contactInfo);
        contactInfo.innerHTML = `Phone : 123 234 345 <br>
        Email : bestjoint@grill.com <br>
        23 Charwood Street <br>
        Burnington, CA` 

        contactInfo.style.lineHeight = '3';

        return contactTab;
    }

    return {
        init: init,
    }
})();

export {drawContactTab as default};