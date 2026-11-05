// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

 

// Constraints:

//     1 <= s.length <= 104
//     s consists of parentheses only '()[]{}'.

function isValid(s: string): boolean{
    const stack: string [] = [];
    const pairs: Record <string, string> = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (let char of s){
        if (char === "(" || char === "{" || char === "[" ){
            stack.push(char);
        }
        else{
            if (stack.length === 0){
                return false
            }

            const top = stack.pop()
            if (top !== pairs[char]){
                return false
            }
        }
    }
    return stack.length === 0
};