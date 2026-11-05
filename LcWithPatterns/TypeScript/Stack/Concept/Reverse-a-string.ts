// Input:  "hello"
// Output: "olleh"

// Logic
// Push every character into the stack.

// Then pop every character and append it to the result.

// Because of LIFO, the characters come out in reverse order.

function reverseString(s: string): string{
    const stack: string[] = []

    for (let char of s){
        stack.push(char)
    }

    let result: string = ""
    while (stack.length > 0){
        result += stack.pop()
    }
    return result
}
console.log(reverseString("hello"));