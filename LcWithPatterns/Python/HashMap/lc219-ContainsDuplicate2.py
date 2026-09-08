from typing import List

def containsNearbyDuplicate(nums: List[int], k: int) -> bool:
    num_map = {}

    for i, currentNum in enumerate(nums):
        if currentNum in num_map and i - num_map[currentNum] <= k:
            return True

        num_map[currentNum] = i

    return False
