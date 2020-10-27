
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

//My solution that can't deal with numbers containing 0's lit 1908
function expandedForm(num) {
   let integars = num % 10; 
   let dozens = num % 100 - integars;
   let hundreds = num % 1000 - dozens - integars;
   let thousands = num - hundreds - dozens - integars; 
    if (num > 10 && num < 100) { 
      return `${dozens} + ${integars}`
    }
     else if (num > 100 && num < 1000) {
      return `${hundreds} + ${dozens} + ${integars}`
    }
     else if (num > 1000 && num < 100000){       
      return `${thousands} + ${hundreds} + ${dozens} + ${integars}`
    }
}


//Solution of guy from the medium https://medium.com/@dmw9400/expanded-form-algorithm-solution-93f384cac2ed
function expandedForm(num) {
    let subNumArr = [];
    let numStr = num.toString();

    for (let i = 0; i < numStr.length; i += 1){
        let zeroCount = numStr.length - i - 1;
        let x = 0;
        let subNum = numStr[i];

        if (numStr[i] !== '0') {
            while (x < zeroCount) {
                subNum = subNum + '0';
                x += 1;
            }
            subNumArr.push(subNum);
        }
    }
    return subNumArr.join(' + ');
}

//Solution from codewars that impressed me 
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");

console.log(expandedForm(30178));