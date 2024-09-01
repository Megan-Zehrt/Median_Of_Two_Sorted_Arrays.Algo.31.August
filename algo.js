// 4. Median of Two Sorted Arrays



// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).







/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let arr = [...nums1, ...nums2]

    arr.sort((a,b) => a-b)

    if(arr.length == 1) return arr[0]

    let mid = Math.floor(arr.length / 2)

    if(arr.length % 2 == 0){
        let sum = (arr[mid - 1] + arr[mid]) / 2
        return sum
    }else{
        return arr[mid]
    }


    
};