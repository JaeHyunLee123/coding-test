/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = [];

    for(let i = 0; i < s.length; i++){
        const char = s.at(i);

        if(char === "*"){
            if(stack.length > 0){
                stack.pop()
            }
        }else{
            stack.push(char);
        }
    }

    return stack.join("");
};