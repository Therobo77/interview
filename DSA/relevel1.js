// Nice Subsequence
// Question Name: Nice Subsequence

// Problem Statement

// Given an array A consisting of N integers.

// A subsequence is a sequence that can be derived from the given array by deleting zero or more elements(not all) without changing the order of the remaining elements.

// A nice subsequence is a subsequence of array A in which the difference between any two elements equals the difference between their original indices in array A.

// More formally a subsequence [Ai1 Ai2 Ai3 … AiL] of array A is nice if for any 1<=p,q<=L, Aip-Aiq = ip-iq holds.

// Now you have to find the largest possible length of a nice subsequence of array A.

// Input Format

// First line contains a single integer denoting N.
// Next line contains N space separated integers denoting the elements of array A.
// Output Format

// Print the largest possible length of a nice subsequence of array A.
// Constraints

// 1<=N<=105
// 1<=Ai<=109
// Sample Input 1

// 6

// 2 1 4 10 7 7

// Sample Output 1

// 3

// Explanation of Sample 1

// A possible nice subsequence of length 3 is [A1 A3 A6] = [2 4 7]

// Things to Note for the Candidate

// You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.
// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output.
// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)

// Function candidate has to implement
function niceSubsequence(arr, n) {
  //   return(n,arr.length)
  if (n === 0) {
    return 0;
  }
  let dp = new Array(arr.length).fill(1);
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }
  return Math.max(...dp);
}

//Driver Code
n = 6;

s = [2, 1, 4, 10, 7, 7];
// var n = readline();
// var temp = readline().trim();
// var s = temp.split(" ");
// for(i=0;i<n;i++)
// {
//     s[i]=Number(s[i]);
// }
var num = niceSubsequence(s, n);
console.log(num);
