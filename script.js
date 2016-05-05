var calc_number_buttons;
var calc_operator_buttons;
var calc_body;
var answer_container;
var top_container;
var top_container_buttons;
var numbers_container;
var operators_container;
var input_element;


top_container_buttons = [
    
    'CE'
    
];

calc_number_buttons = [
    
    7,
    8,
    9,
    4,
    5,
    6,
    1,
    2,
    3,
    0
    
];

calc_operator_buttons = [
    
    '*',
    '-',
    '+'
    
];


calc_body = document.createElement('div');
calc_body.style.backgroundColor = '#00394d';
calc_body.style.width = '190px';
calc_body.style.height = '195px';
calc_body.style.borderRadius = '30px';
calc_body.style.marginLeft = '413px';
calc_body.style.boxShadow = '1px 9px 1px 9px #b7cabb';


input_element = document.createElement('input');
input_element.setAttribute('id','answer_container');
input_element.setAttribute('placeholder', '0');


top_container = document.createElement('div');
top_container.setAttribute('id','top_container');

numbers_container = document.createElement('div');
numbers_container.setAttribute('id','numbers_container');

operators_container = document.createElement('div');
operators_container.setAttribute('id','operators_container');

delete_button = document.createElement('button');
delete_button.setAttribute('id','delete_button');

var create_top_buttons_element = function(top_button_element_type,top_button_element_id){
    
    var top_button_element = document.createElement(top_button_element_type);
    top_button_element.setAttribute('id',top_button_element_id);
    
    top_container.appendChild(top_button_element);
    
};

var create_numbers_element = function(element_type, element_id){
    
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    
    numbers_container.appendChild(element);
    
};

var create_operators_element = function(operator_element_type,operator_element_id){
    
    var operator_element = document.createElement(operator_element_type);
    operator_element.setAttribute('id',operator_element_id);
    
    operators_container.appendChild(operator_element);
    
};

document.addEventListener('DOMContentLoaded',function(event){
    
    document.body.appendChild(calc_body);
    calc_body.appendChild(input_element);
    calc_body.appendChild(top_container);
    calc_body.appendChild(numbers_container);
    calc_body.appendChild(operators_container);
    
    answer_container = document.getElementById('answer_container');
    
    for(var i=0; i<top_container_buttons.length; i++){
        console.log(top_container_buttons);
        create_top_buttons_element('button','top_button_'+i);
        
        var current_top_button_element = document.getElementById('top_button_'+i);
        
        current_top_button_element.addEventListener('click',function(event){
            answer_container.value = answer_container.value += this.textContent;
        });
        
        current_top_button_element.textContent = top_container_buttons[i];
        
        
    };
    
    top_container.appendChild(delete_button);
    
    for(var i=0; i<calc_number_buttons.length; i++){
        
        create_numbers_element('button','calc_number_button_'+i);
        
        var current_number_element = document.getElementById('calc_number_button_'+i);
        
        current_number_element.addEventListener('click',function(event){
            answer_container.value =  answer_container.value += this.textContent;
        });
        
        current_number_element.textContent = calc_number_buttons[i];
        
        numbers_container.appendChild(current_number_element);
        
    };
    
    for(var i=0; i<calc_operator_buttons.length; i++){
        
        create_operators_element('button','calc_operator_button_'+i);
        var current_operator_element = document.getElementById('calc_operator_button_'+i);
        
        current_operator_element.addEventListener('click',function(event){
            
            answer_container.value = answer_container.value += this.textContent;
            
        });
        
        current_operator_element.textContent = calc_operator_buttons[i];
        
        operators_container.appendChild(current_operator_element);
    };
   
    create_operators_element('button','equal_button');
    
    var equal_button = document.getElementById('equal_button');
    var clear_data_button = document.getElementById('top_button_0');
    
    equal_button.textContent = '=';
    equal_button.style.backgroundColor = 'red';
    
    calc_body.appendChild(numbers_container);
    calc_body.appendChild(operators_container);
    
    equal_button.addEventListener('click',function(event){
        
        answer_container.value = eval(answer_container.value);
        
    });
    
    clear_data_button.addEventListener('click',function(event){
        
        answer_container.value = '';
        
    });
    
    delete_button.addEventListener('click',function(event){
        
        var current_value = answer_container.value.split('');
        
        var new_value = new String;
        
        for(var i=0; i<answer_container.value.length - 1; i++){
            new_value += current_value[i];
            
        }; 
        
        answer_container.value = new_value;
        
    });
    
});