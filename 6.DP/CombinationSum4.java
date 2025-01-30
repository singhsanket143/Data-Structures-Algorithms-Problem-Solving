public class CombinationSum4 {
    
        public static int[] arr;
        public static int[] dp = new int[1005];
        
        public static int f(int target) {
            if(target == 0) return 1;
            if(dp[target] != -1) return dp[target];
            int n = arr.length;
            
            int result = 0;
            
            for(int k = 0; k < n; k++) {
                if(target - arr[k] >= 0) {
                    result += f(target - arr[k]);
                }
            }
            
            return  dp[target] = result;
        }
        
        public static int fbu(int givenTarget) {
            
            for(int target = 0; target <= givenTarget; target++) {
                if(target == 0) dp[target] = 1;
                else {
                    int n = arr.length;
                    int result = 0;
                    for(int k = 0; k < n; k++) {
                        if(target - arr[k] >= 0) {
                            result += dp[target - arr[k]];
                        }
                    }
                    dp[target] = result;
                }
            }
            return dp[givenTarget];
            
            
        }
        
        
        public int combinationSum4(int[] nums, int target) {
            arr = nums;
            // Arrays.fill(dp, -1);
            return fbu(target);
        }
    }
