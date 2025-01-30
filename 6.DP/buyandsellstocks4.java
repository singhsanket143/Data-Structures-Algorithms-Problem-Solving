public class buyandsellstocks4 {
    
        public static int[] p;
        public static int[][][] dp = new int[1005][105][2];
        
        public static int f(int i, int k, int on) {
            // base case
            if(i == p.length) {
                // all the days are completed
                return 0;
            }
            
            if(dp[i][k][on] != -1) return dp[i][k][on];
            
            int ans = Integer.MIN_VALUE;
            
            // ignore
            ans = Math.max(ans, f(i+1, k, on));
            
            // try to buy
            if(k > 0 && on == 0) {
                ans = Math.max(ans, -p[i] + f(i+1, k, 1));
            } 
            
            // try to sell
            if(on == 1) {
                ans = Math.max(ans, p[i] + f(i+1, k-1, 0));
            }
            
            return dp[i][k][on] = ans;
        }
        
        public int maxProfit(int K, int[] prices) {
            for(int i = 0; i < 1005; i++) {
                for(int j = 0; j < 105; j++) {
                    for(int k = 0; k < 2; k++) {
                        dp[i][j][k] = -1;
                    }
                }
            }
            p = prices;
            return f(0, K, 0);
        }
}
