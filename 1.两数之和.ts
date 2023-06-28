/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    /**
     * 解一：双循环
     * 
     * 优点：节省空间（就测试用例的规模来说也就一点点）
     * 缺点：时间复杂度高
     */

    // for (let prevIdx = 0; prevIdx < nums.length; prevIdx++) {
    //     for (let currIdx = 0; prevIdx < nums.length; currIdx++) {
    //         if (nums[prevIdx] === nums[currIdx]) {
    //             continue
    //         }

    //         if (nums[prevIdx] + nums[currIdx] === target) {
    //             return [prevIdx, currIdx]
    //         }
    //     }
    // }

    // return []

    /**
     * 解二：HashMap
     * 
     * 优点：节省时间，只需一次遍历
     * 缺点：需要额外的 Map，占内存
     */
    const numIdxHash = new Map<number, number>()

    for (let currIdx = 0; currIdx < nums.length; currIdx++) {
        const currNum = nums[currIdx]
        const pairIdx = numIdxHash.get(target - currNum)

        if (pairIdx !== undefined) {
            return [pairIdx, currIdx]
        }

        numIdxHash.set(currNum, currIdx)
    }

    return []
}
// @lc code=end
