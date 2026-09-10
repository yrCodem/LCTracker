// 33. Search in Rotated Sorted Array
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Check if the left half is normally sorted
        if (nums[left] <= nums[mid]) {
            // Check if the target lies within the sorted left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // Search left
            } else {
                left = mid + 1;  // Search right
            }
        } 
        // Otherwise, the right half must be normally sorted
        else {
            // Check if the target lies within the sorted right half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;  // Search right
            } else {
                right = mid - 1; // Search left
            }
        }
    }

    return -1; // Target not found
}
