class Fibonacci {
    public static int[] dp = new int[100005];
    public static int f(int i) {
        if(i == 0 || i == 1) return i; // base case
        if(dp[i] != -1) return dp[i]; // if value is not -1 we can directly return ans
        // if the above if case doesn't execute, it means subproblem has not been solved
        return dp[i] = f(i-1) + f(i-2);
    }
    
    
    public static int f_bu(int n) {
        dp = new int[100005];
        dp[0] = 0;
        dp[1] = 1; 
        
        for(int i = 2; i<= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }
        
        return dp[n];
    }
    
    public int fib(int n) {
        // dp = new int[100005];
        // Arrays.fill(dp, -1);
        // return f(n);
        return f_bu(n);
    }
}