/*
Pattern: Sliding Window

Time Complexity: O(n)
Space Complexity: O(n)
*/

function lengthOfLongestSubstring(s) {
    let left = 0;
    let maxLength = 0;
    const seen = new Set();

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }

        seen.add(s[right]);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
