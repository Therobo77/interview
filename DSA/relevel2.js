/**
 * SIMPLY EQUAL
SIMPLY EQUAL

Problem Statement

Amy has an array A of N integers. In one operation she can select a non-empty sub-sequence of A, and decrease each element of the subsequence by 1.

Find the minimum number of operations required to make all the elements of the array A equal.

You are given T independent test cases.

Constraints

1 <= T <= 10
1 <= N <= 105
1 <= Ai <= 109
All input values are integers.
Input Format

First-line contains T.
First line of each test case consists of a single integer N.
Second line of each test case consists of N space separated integers denoting the array A.
Output Format

Print in a newline for each test case a single integer denoting the minimum number of operations required to make all the elements of the array A equal.
Sample Input 1

1

3

2 1 2

Sample Output 1

1

Explanation of Sample 1

She can select the subsequence S = {A1, A3} and decrease each by 1. So array becomes: A = [1, 1, 1]



Things to Note for the Candidate

You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.
The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)
*/
// Function candidate has to implement
function simplyEqual(arr, n) {
  //   return arr
  let sum = 0; // for adding value;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    min = Math.min(min, arr[i]);

    let ans = 0;
    ans = sum - n * min;
    console.log(ans);
  }
}
n = 3;
s = [2, 1, 2];
simplyEqual(s, n);
//Driver Code
// var t =readline();
// while(t--)
// {
//     var n = readline();
//     var temp = readline().trim();
//     var s = temp.split(" ");
//     for(i=0;i<n;i++)
//     {
//         s[i]=Number(s[i]);
//     }
//     var num  = simplyEqual(s,n);
//     print(num);
// }
