class Fibonacci {
    public static int[] dp = new int[100005];
    public static int f(int n) {
        if(n == 0 || n == 1) return n; // base case
        if(dp[n] != -1) return dp[n]; // if value is not -1 we can directly return ans
        // if the above if case doesn't execute, it means subproblem has not been solved
        return dp[n] = f(n-1) + f(n-2);
    }
    
    public int fib(int n) {
        dp = new int[100005];
        Arrays.fill(dp, -1);
        return f(n);
    }
}