import java.util.*;
public class AsteroidCollision {
        public int[] asteroidCollision(int[] a) {
            Stack<Integer> st = new Stack<>(); // prepare a stack for storing asteroid
            
            int i = 0; // this variable points to the current incmoning asteroid
            
            while(i < a.length) { // till the time we have asteroids left
                if(st.isEmpty()) { // if stack is empty
                    st.push(a[i]); // just push
                    i++;
                } else {
                    if(st.peek() > 0 && a[i] < 0) { // AST ---->  <------incmoing AST
                        // only coliision condition\
                        if(Math.abs(st.peek()) == Math.abs(a[i])) { // if colliding ast have same size
                            st.pop(); // stored ast is also destroyed
                            i++; // incoming ast is also destroyed, that y we move to next ast
                        } else {
                            // size is not same
                            if(Math.abs(st.peek()) > Math.abs(a[i])) { // stored >> incming
                                // incoming ast will be destroyed
                                i++; // move to next
                            } else {
                                while(!st.isEmpty() && st.peek() > 0 && a[i] < 0 && Math.abs(st.peek()) < Math.abs(a[i])) 
                                {
                                    st.pop(); // stored ast is removed
                                }
                            }
                        }
                    } else {
                        st.push(a[i]); // no coliision cases
                        i++;
                    }
                }
            }
            
            int[] result = new int[st.size()];
            for(int idx = result.length - 1; idx >= 0; idx--) {
                result[idx] = st.peek();
                st.pop();
            }
            return result;
        }
}
