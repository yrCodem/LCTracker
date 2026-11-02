from typing import List
import bisect

class DPState:
    def __init__(self, weight: int, indices: List[int]):
        self.weight = weight
        self.indices = indices

def maximumWeight(intervals: List[List[int]]) -> List[int]:
    n = len(intervals)
    
    items = []
    for idx, inv in enumerate(intervals):
        items.append({
            'start': inv[0],
            'end': inv[1],
            'weight': inv[2],
            'id': idx
        })
    
    items.sort(key=lambda x: (x['start'], x['end']))

    nextValid = [0] * n
    for i in range(n):
        target = items[i]['end']
        low = i + 1
        high = n
        
        while low < high:
            mid = (low + high) >> 1
            if items[mid]['start'] > target:
                high = mid
            else:
                low = mid + 1
        nextValid[i] = low

    memo = [[None] * 5 for _ in range(n)]

    def isLexicographicallySmaller(a: List[int], b: List[int]) -> bool:
        length = min(len(a), len(b))
        for i in range(length):
            if a[i] != b[i]:
                return a[i] < b[i]
        return len(a) < len(b)

    def solve(i: int, count: int) -> DPState:
        if count == 0 or i == n:
            return DPState(0, [])
        
        if memo[i][count] is not None:
            return memo[i][count]

        skipResult = solve(i + 1, count)

        nextIdx = nextValid[i]
        pickResult = solve(nextIdx, count - 1)
        
        pickWeight = items[i]['weight'] + pickResult.weight
        pickIndices = sorted([items[i]['id']] + pickResult.indices)

        if pickWeight > skipResult.weight:
            bestState = DPState(pickWeight, pickIndices)
        elif skipResult.weight > pickWeight:
            bestState = DPState(skipResult.weight, skipResult.indices)
        else:
            if isLexicographicallySmaller(pickIndices, skipResult.indices):
                bestState = DPState(pickWeight, pickIndices)
            else:
                bestState = DPState(skipResult.weight, skipResult.indices)

        memo[i][count] = bestState
        return bestState

    return solve(0, 4).indices
