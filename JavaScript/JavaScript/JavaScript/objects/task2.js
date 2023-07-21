const menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(obj) {
    for (let item in obj) {
        if (typeof obj[item] === 'number') {
            obj[item] *= 2;
        }
    }
}

multiplyNumeric(menu);
document.getElementById('object_task2').innerHTML = `New menu: title =  ${menu.title}, width = ${menu.width}, height = ${menu.height}; `;