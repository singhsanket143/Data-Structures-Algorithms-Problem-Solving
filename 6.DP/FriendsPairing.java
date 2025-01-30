import java.util.Arrays;

public class FriendsPairing {
    public static long mod = 1000000007;
    public static long[] dp;
    public static long f(int i) {
        if(i == 0 || i == 1 || i == 2) {
            return i;
        }

        if(dp[i] != -1) return dp[i];

        long singleWays = f(i-1)%mod;
        long pairWays = ((i-1)%mod * f(i-2)%mod)%mod;
        return dp[i] = ((singleWays%mod) + (pairWays%mod))%mod;
    }
    public static int numberOfWays(int n) {
        // Write your code here.
        dp = new long[10005];
        Arrays.fill(dp, -1);
        return (int)f(n);
    }

}
