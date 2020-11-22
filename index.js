const lightMode = document.getElementById('light-mode')
const darkMode = document.getElementById('dark-mode')
const colourMode = document.getElementById('colour-mode')

function setTheme(mode){
lightMode.addEventListener('click',()=>{
    document.getElementById('theme-style').href = "style.css";
    console.log('Light')
    mode = 'light'
})
darkMode.addEventListener('click',()=>{
    document.getElementById('theme-style').href = "dark.css";
    console.log('dark')
    mode = 'dark'
})
colourMode.addEventListener('click',()=>{
    document.getElementById('theme-style').href = "colour.css";
    console.log('colour')
    mode = 'colour'
})
    localStorage.setItem('theme',mode)
}
var theme = localStorage.getItem('theme')
if(theme == null){
    setTheme('light')
}
else {
    setTheme(theme)
}
