//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES-NOTIFICATION
const messageNotification = document.querySelector('#messages-notifications');
//MESSAGES BAR
const messages = document.querySelector('.messages');
//INDIVIDUAL MESSAGES
const message = document.querySelectorAll('.message');
//MESSAGE SEARCH BOX
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
//FONTS
const fontSize = document.querySelectorAll('.choose-size span');
//ROOT
var root = document.querySelector(':root');
//COLOR
const colorPalette = document.querySelectorAll('.choose-color span');

//BACKGROUND
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');




//--------------------SIDEBAR-------------------------//

//---------------NOTIFICATIONS------------------//

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(elem => {
        elem.classList.remove('active');
    })
}

menuItems.forEach(elem => {
    elem.addEventListener('click', () => {
        changeActiveItem();
        elem.classList.add('active');
        if(elem.id != 'notifications'){
            document.querySelector('.notification-popup')
            .style.display = 'none';
            document.querySelector('#notifications .notification-count').style.display = 'block';
        }else{
            document.querySelector('.notification-popup')
            .style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
        if(elem.id != 'messages-notifications'){
            document.querySelector('#messages-notifications .notification-count')
            .style.display = 'block';
        }else{
            document.querySelector('#messages-notifications .notification-count').style.display = 'none';
        }
    })
})

//------------------------MESSAGES------------------------//
//search chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat =>{
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })
}

// search input
messageSearch.addEventListener('keyup', searchMessage);

//highlight message card when clicked on message
messageNotification.addEventListener('click', ()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000)
})

//---------------------THEME---------------------------//

//Opens Modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//Close modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

//----------------CHANGING FONT SIZE-------------------//
//remove slector from all classes
const removeSizeSelector = () =>{
    fontSize.forEach(elem => {
        elem.classList.remove('active');
    })
}


//choose size function call
fontSize.forEach(elem => {

    elem.addEventListener('click', ()=>{
        removeSizeSelector();
        let fontsize;
        elem.classList.toggle('active');

        if(elem.classList.contains('font-size-1')){
            fontsize = '10px';
            // root.style.setProperty('--sticky-top-left', '5.4rem');
            // root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(elem.classList.contains('font-size-2')){
            fontsize = '12px';
            // root.style.setProperty('--sticky-top-left', '5.4rem');
            // root.style.setProperty('--sticky-top-right', '-7rem');
        }else if(elem.classList.contains('font-size-3')){
            fontsize = '14px';
            // root.style.setProperty('--sticky-top-left', '-2rem');
            // root.style.setProperty('--sticky-top-right', '-17rem');
        }else if(elem.classList.contains('font-size-4')){
            fontsize = '16px';
            // root.style.setProperty('--sticky-top-left', '-5rem');
            // root.style.setProperty('--sticky-top-right', '-25rem');
        }else if(elem.classList.contains('font-size-5')){
            fontsize = '17px';
            // root.style.setProperty('--sticky-top-left', '-12rem');
            // root.style.setProperty('--sticky-top-right', '-35rem');
        }

        document.querySelector('html').style.fontSize = fontsize;
    })
    
})


//----------------------CHANGE PRIMARY COLORS-------------------//
//remmove active class form color
const removeColorSelector = () =>{
    colorPalette.forEach(elem =>{
        elem.classList.remove('active');
    })
}

colorPalette.forEach(elem => {
    elem.addEventListener('click', ()=>{
        removeColorSelector();
        let primaryHue;
        elem.classList.add('active');

        if(elem.classList.contains('color-1')){
            primaryHue = 252;
        }else if(elem.classList.contains('color-2')){
            primaryHue = 52;
        }else if(elem.classList.contains('color-3')){
            primaryHue = 352;
        }else if(elem.classList.contains('color-4')){
            primaryHue = 152;
        }else if(elem.classList.contains('color-5')){
            primaryHue = 202;
        }

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

//----------------------BACKROUND-COLOR--------------------------//
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//CHANGE BG
const changeBg = () => {
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
}

Bg1.addEventListener('click', ()=>{
    darkColorLightness = '17%';
    whiteColorLightness = '100%';
    lightColorLightness = '95%';
    //add active class
    Bg1.classList.add('active');
    //remove form others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})

Bg2.addEventListener('click', ()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    Bg2.classList.add('active');
    //remove form others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})

Bg3.addEventListener('click', ()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    Bg3.classList.add('active');
    //remove form others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBg();
})
