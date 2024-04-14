public class RemovingStarsFromString {
        public String removeStars(String s) {
            Stack<Character> st = new Stack<>();
            int i = 0;
            while(i < s.length()) {
                if(s.charAt(i) != '*') {
                    st.push(s.charAt(i));
                } else if(s.charAt(i) == '*' && !st.isEmpty()) {
                    st.pop();
                }
                i++;
            }
            StringBuilder result = new StringBuilder("");
            while(!st.isEmpty()) {
                result.append(st.peek());
                st.pop();
            }
            return result.reverse().toString();
        }
}
