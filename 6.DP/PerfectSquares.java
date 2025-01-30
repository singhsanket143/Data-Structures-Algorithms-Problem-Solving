import java.util.Arrays;

public class PerfectSquares {
    
    public static int[] c; // global coins array
    public static int[] dp;
    public int f(int amount) {
        if(amount < 0) return Integer.MAX_VALUE; // if amt is less than 0 then its not possible
        if(amount == 0) return 0; // if amt is 0, give nothing
        if(dp[amount] != -1) return dp[amount];
        int ans = Integer.MAX_VALUE;
        int n = c.length; 
        for(int i = 0; i < n; i++) { // i -> [0, n-1]
            if(amount >= c[i]) {
                ans = Math.min(ans, f(amount-c[i]));
            } else {
                break;
            }
        }
        
        // if ans is still Integer.MAX_VALUE, then this amount is not possible
        if(ans == Integer.MAX_VALUE) {
            return dp[amount] = Integer.MAX_VALUE;
        }
        return dp[amount] = 1 + ans;
        
    }
    
    public int numSquares(int n) {
        c = new int[100];
        int j = 0;
        for(int i = 1; i*i <= 10000; i++) {
            c[j] = i*i;
            j++;
        }
        dp = new int[10005];
        Arrays.fill(dp, -1);
        int ans = f(n);
        return ans;
        
    }
    
}
