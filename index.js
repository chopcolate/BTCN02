const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const i_num1 = $('.input-1')
const i_num2 = $('.input-2')
const result = $('.input-3')
const notify = $('.notify')
const add = $('.add')
const minus = $('.minus')
const mul = $('.mul')
const div = $('.div')

const radio = $$('.radio')

const calc_btn = $('.calc-btn')

const checkValid = (string) => {
    let isnum = /^\d+$/.test(string);
    return isnum
}

const App = {
    num1: '', 
    num2: '',
    operator:'',

    handleEvent: function() {
        _this = this;
        i_num1.oninput = (e) => {
            const isnum = checkValid(e.target.value)
            if (!isnum) {
                notify.innerHTML = `Giá trị nhập ở ô ${e.target.previousElementSibling.textContent} không phải là số`
            }
            else {
                notify.innerHTML = ""
            }
        }
    
        i_num2.oninput = (e) => {
            const isnum = checkValid(e.target.value)
            if (!isnum) {
                notify.innerHTML = `Giá trị nhập ở ô ${e.target.previousElementSibling.textContent} không phải là số`
            }
            else {
                notify.innerHTML = ""
                num2 = e.target.value
            }
        }

        radio.forEach((item) => {
            item.onchange = (e) => {
                radio.forEach((subItem) => {
                    subItem.checked = false;
                })
                e.target.checked = true;
                _this.operator = e.target.classList[1]
            }
        })

        calc_btn.onclick = () => {
            if (_this.operator == '')
            {
                notify.innerHTML = "Chưa chọn phép tính"
            }
            else
            {
                notify.innerHTML = "";
                num1 = Number(i_num1.value);
                num2 = Number(i_num2.value);

                if (num1 == 0 || num1 == NaN || num2 == 0 || num2 == NaN)
                {
                    notify.innerHTML = "Chưa điền đủ hai số hợp lệ để thực hiện phép tính";
                    return;
                }

                switch (_this.operator)
                {
                    case 'add':
                        result.value = num1 + num2;
                        break;
                    case 'minus':
                        result.value = num1 - num2;
                        break;
                    case 'mul':
                        result.value = num1 * num2;
                        break;
                    case 'div':
                        result.value = num1 / num2;
                        break;    
                }
            }
        }        

    },

    run: () => {
        App.handleEvent();
    }
}

App.run();