console.clear();

/*
1. Create the data for a small social media post.
Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--
const title = "My Post";
const contentText =
  "This is the text that appears in my super douper Post. It is the most amazing thing!";
let numerOfLikes = 92834771789;
const userName = "elf_123";
const isReported = false;
// --^-- write your code here --^--

/*
2. Log all variables to the console.
Then increase the number of likes by one and log the updated like count.
Modify your code from step 1 if necessary.
*/

// --v-- write your code here --v--
console.log(title, contentText, numerOfLikes, userName, isReported);

numerOfLikes++;

console.log(title, contentText, numerOfLikes, userName, isReported);
// --^-- write your code here --^--
