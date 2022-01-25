// 1. 单词首字母大写
' hi man good  luck '.replace(/\w+/g, function(word) { 
    return word.substr(0,1).toUpperCase() + word.substr(1);
});

// 2. 相邻字符去重
'aaabbbcdfgghhjjkkk'.replace(/([A-Za-z]{1})(\1)+/g, '$1');

// 3. 编写render函数, 实现template render功能.
const year = '2021'; 
const month = '10'; 
const day = '01'; 

let template = '${year}-${month}-${day}';
let context = { year, month, day };

const str = render(template)({year,month,day}); 

console.log(str) // 2021-10-01

function render(template) {
    return function(context) {
        return template.replace(/\$\{(.*?)\}/g, (match, key) => {
          console.log('match :>> ', match);
          console.log('key :>> ', key);
          return context[key]
          });
    }
}