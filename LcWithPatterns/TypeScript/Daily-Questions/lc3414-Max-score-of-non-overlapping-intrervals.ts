interface DPState {
    weight: number;
    indices: number[];
}

function maximumWeight(intervals: number[][]): number[] {
    const n = intervals.length;
    
    // 1. Structure the items with their original indices and sort by start time
    // If start times match, we sort by end time, though start time is the primary key for our DP.
    const items = intervals.map((inv, idx) => ({
        start: inv[0],
        end: inv[1],
        weight: inv[2],
        id: idx
    }));
    
    items.sort((a, b) => a.start - b.start || a.end - b.end);

    // 2. Precompute the next valid non-overlapping interval for every item using Binary Search
    const nextValid = new Int32Array(n);
    for (let i = 0; i < n; i++) {
        let low = i + 1;
        let high = n;
        let target = items[i].end;
        
        while (low < high) {
            const mid = (low + high) >> 1;
            if (items[mid].start > target) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        nextValid[i] = low;
    }

    // 3. Memoization cache: memo[i][count]
    const memo: (DPState | null)[][] = Array.from({ length: n }, () => Array(5).fill(null));

    // Lexicographical comparison logic for tie-breaking
    function isLexicographicallySmaller(a: number[], b: number[]): boolean {
        const len = Math.min(a.length, b.length);
        for (let i = 0; i < len; i++) {
            if (a[i] !== b[i]) return a[i] < b[i];
        }
        return a.length < b.length;
    }

    // 4. Recursive DP with memoization
    function solve(i: number, count: number): DPState {
        if (count === 0 || i === n) {
            return { weight: 0, indices: [] };
        }
        
        if (memo[i][count] !== null) {
            return memo[i][count]!;
        }

        // Option A: Skip the current interval
        const skipResult = solve(i + 1, count);

        // Option B: Take the current interval
        const nextIdx = nextValid[i];
        const pickResult = solve(nextIdx, count - 1);
        
        const pickWeight = items[i].weight + pickResult.weight;
        // Merge current index into sorted path
        const pickIndices = [items[i].id, ...pickResult.indices].sort((a, b) => a - b);

        let bestState: DPState;

        if (pickWeight > skipResult.weight) {
            bestState = { weight: pickWeight, indices: pickIndices };
        } else if (skipResult.weight > pickWeight) {
            bestState = { weight: skipResult.weight, indices: skipResult.indices };
        } else {
            // Weights are tied, apply lexicographical rules
            if (isLexicographicallySmaller(pickIndices, skipResult.indices)) {
                bestState = { weight: pickWeight, indices: pickIndices };
            } else {
                bestState = { weight: skipResult.weight, indices: skipResult.indices };
            }
        }

        memo[i][count] = bestState;
        return bestState;
    }

    return solve(0, 4).indices;
}
