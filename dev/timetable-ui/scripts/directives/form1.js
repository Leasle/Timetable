function process() {
        // Главная функция.
        var structure = get_forms_elements();
        create_list(structure);
}
function get_forms_elements() { 
        var forms = document.forms;
        var elements = [];
        for (var i = 0; i < forms.length; i++ ) {
                elements[i] = get_elements_from_form(forms[i]);
        }
        return elements;
}
function get_elements_from_form(form) { 
        var elements = [];
        var current_el;
        var radio_groups = {}; // Эта переменная служит для учета групп радиокнопок
        for (var i = 0; i < form.length; i++) {
                var temp_el = form[i];
                switch(temp_el.type) {
                        case "radio" :
                                if (temp_el.checked) {
                                        radio_groups[temp_el.name] = '[filled]'; // помечаем группу
                                        current_el = {name: temp_el.name, type: 'radio', value: temp_el.value};
                                } else {
                                        if (!radio_groups[temp_el.name]) { // если группа еще не встречалась
                                                radio_groups[temp_el.name] = '[no elelements checked]';
                                        }
                                        continue;
                                }
                                break;
                        case 'checkbox' :
                                if (temp_el.checked) {
                                        current_el = {name: temp_el.name, type: 'checkbox', value: temp_el.value};
                                } else {
                                        current_el = {name: temp_el.name, type: 'checkbox', value: '[not checked]'};
                                }
                                break;
                        default:
                                current_el = {name: temp_el.name,  type:temp_el.type, value: temp_el.value};
                                break;
                }
                elements.push(current_el);
        }
        // Отдельная обработка всех radio groups 
        for (var rg in radio_groups) {
                if (radio_groups[rg] != '[filled]') { //добавляем группу, в которой нет выбранных кнопок
                        elements.push({name: rg, type: 'radio', value: radio_groups[rg]});
                }
        }
        return elements;
}
function ce(el) { 
        return document.createElement(el);
} 
 
function create_list(structure) { 
        var host_el = document.getElementById('result');
        host_el.innerHTML = '';
        // Создаем основной элемент списка UL
        var el = ce('ul');
        var ul_top = host_el.appendChild(el);
        for (var i=0; i<structure.length; i++) {
                // Проходимся по всем формам.
                // И для каждой формы создаем вложенные элементы LI и UL
                el = ce('li');
                var li_top = ul_top.appendChild(el);
                el = ce('ul');
                var ul_per_form = li_top.appendChild(el);
                for (var j = 0; j < structure[i].length; j++) {
                        // Проходимся по всем элементам
                        // Для каждого элемента создаем свой внутренний LI
                        el = ce('li');
                        var inner_li = ul_per_form.appendChild(el);
                        // проходимся по всем элементам
                        var form_el = structure[i][j];
                        inner_li.innerHTML = 'Название: ' + form_el.name 
                                                                + '; Тип: ' + form_el.type
                                                                + '; Значение: ' + form_el.value;
                }
        }
} 