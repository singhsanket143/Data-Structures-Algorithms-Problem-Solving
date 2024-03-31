class ArithmeticSlices {
    public static int[] arr;
    public static int[] dp = new int[5005];
    public static int f(int i) {
        if( i == 0 || i == 1) return 0; // base case
        if(dp[i] != -1) return dp[i];
        if( arr[i] - arr[i-1] != arr[i-1] - arr[i-2]) {
            return dp[i] = 0;
        } else {
            return dp[i] = 1 + f(i-1);
        }
    }
    
    
    public static int fbu() {
        // TC: O(n)
        // SC: O(n)
        for(int i = 0; i < arr.length; i++) {
            if( i == 0 || i == 1) dp[i] = 0;
            else {
                if( arr[i] - arr[i-1] != arr[i-1] - arr[i-2]) {
                    dp[i] = 0;
                } else {
                    dp[i] = 1 + dp[i-1];
                }
            }
        }
        
        // sum all of them
        int ans = 0;
        for(int i = 0; i < arr.length; i++) {
            ans += dp[i];
        }
        return ans;
    }
    
    public int numberOfArithmeticSlices(int[] nums) {
        // int ans = 0;
        arr = nums;
        // Arrays.fill(dp, -1);
        // for(int i = 0; i < nums.length; i++) {
        //     ans += f(i);
        // }
        
        return fbu();
    }
}