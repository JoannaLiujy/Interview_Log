// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 示例 1:
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:
// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 // 整个流程就是上浮下沉
 var findKthLargest = function(nums, k) {
  let heapSize=nums.length
   buildMaxHeap(nums,heapSize) // 构建好了一个大顶堆
   // 进行下沉 大顶堆是最大元素下沉到末尾
   for(let i=nums.length-1;i>=nums.length-k+1;i--){
       swap(nums,0,i)
       --heapSize // 下沉后的元素不参与到大顶堆的调整
       // 重新调整大顶堆
        maxHeapify(nums, 0, heapSize);
   }
   return nums[0]
  // 自下而上构建一颗大顶堆
  function buildMaxHeap(nums,heapSize){
    for(let i=Math.floor(heapSize/2)-1;i>=0;i--){
       maxHeapify(nums,i,heapSize)
    }
  }
  // 从左向右，自上而下的调整节点
  function maxHeapify(nums,i,heapSize){
      let l=i*2+1
      let r=i*2+2
      let largest=i
      if(l < heapSize && nums[l] > nums[largest]){
          largest=l
      }
      if(r < heapSize && nums[r] > nums[largest]){
          largest=r
      }
      if(largest!==i){
          swap(nums,i,largest) // 进行节点调整
          // 继续调整下面的非叶子节点
          maxHeapify(nums,largest,heapSize)
      }
  }
  function swap(a,  i,  j){
       let temp = a[i];
       a[i] = a[j];
       a[j] = temp;
  }
};

// 链接：https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/xie-gei-qian-duan-tong-xue-de-ti-jie-yi-kt5p2/

// 大顶堆：每个节点的值都 大于或等于 其左右孩子节点的值
// 注：没有要求左右值的大小关系
// 小顶堆：每个节点的值都 小于或等于 其左右孩子节点的值

// 排序说明
// 升序：一般采用大顶堆
// 降序：一般采用小顶堆

// 1、求10亿个数中的最大的前10个数，时时构建只有10个元素的小顶堆，如果比堆顶小，则不处理；如果比堆顶大，则替换堆顶，然后依次下沉到适当的位置