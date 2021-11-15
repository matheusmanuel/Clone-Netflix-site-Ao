/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.accordion__item')
// 1. Selecionar cada item
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion__header')
    // 2. Seleccionar cada click no header
    accordionHeader.addEventListener('click', () => {
        // 7. Crear la variable
        const openItem = document.querySelector('.accordion-open')
        // 5. chamar a função toogle    
        toggleItem(item)
        // 8. Validar se existe a clase
        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    // 3.1 Criar a variable
    const accordionContent = item.querySelector('.accordion__content')
    // 6. Se existe outro elemento que contenha a classe accordion-open que remova essa classe  
    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        // 4. aumentar  o height maximo do conteudo
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open')
    }
}