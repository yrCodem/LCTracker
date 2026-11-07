function solve(arr: number[]): number[] {

    const n = arr.length;
    const stack: number[] = [];
    const result: number[] = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {

        while (
            stack.length > 0 &&
            stack[stack.length - 1] <= arr[i]
        ) {
            stack.pop();
        }

        if (stack.length > 0) {
            result[i] = stack[stack.length - 1]
        }

        stack.push(arr[i])
    }

    return result;
}