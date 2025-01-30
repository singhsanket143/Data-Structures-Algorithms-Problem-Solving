class PeakElement {
    public int findPeakElement(int[] nums) {

        if(nums.length == 1) return 0;

        int l = 0;
        int r = nums.length - 1;

        while (l <= r) {
            int mid = l + (r - l)/ 2;
            
            if(mid == 0 && nums[mid] > nums[mid+1]) return mid; // leftmost element being peak

            if(mid == nums.length - 1 && nums[mid] > nums[mid-1]) return mid; // rightmost element being peak

            if(nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]) return mid; // some internal element being peak

            if (mid < nums.length - 1 && nums[mid] < nums[mid + 1]) {
                l = mid + 1;
            } else {
                if (mid == 0 || nums[mid] > nums[mid - 1]) return mid;
                r = mid - 1;
            }
        }

        return -1;
        
    }
}