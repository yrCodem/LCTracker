"use strict";
function containsNearbyDuplicate(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        if (map.has(currentNum) && i - map.get(currentNum) <= k) {
            return true;
        }
        map.set(currentNum, i);
    }
    return false;
}
