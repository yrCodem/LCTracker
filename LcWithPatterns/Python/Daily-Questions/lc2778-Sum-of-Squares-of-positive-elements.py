def sumOfSquares(nums: list[int]) -> int:
    n = len(nums)
    ans = 0
    
    for i in range(n):
        if n % (i + 1) == 0:
            ans += nums[i] * nums[i]
            
    return ans
