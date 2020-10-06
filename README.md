# test_effective_ads
Coding test for Junior Software Developer position at Effective Ads.

I scaffolded my application using the "npx create-react-app" command, for the communication with the API I used Apollo and for the histogram I used VX.

I started with creating the React App, then I initialized a repository and put everything on Github.

In the first phase I thought about how I could build the histogram, so I looked over the VX documentation at these two examples: https://github.com/airbnb/visx and https://airbnb.io/visx/barstack. The first one was not enought and the second one was to complex for what I needed, so I decided to do something between. After a bit over one hour I managed to do the histogram with some data from the @vx/mock-data package. The process was a bit difficult because was my first time working with this type of library and I tried to understand the examples first.

After that, I played a bit in the FakerQL playground to figure out how I can make requests and get posts, then I looked over the documentation to see how can I get data to build my histogram. After a bit of searching on google I decided to use Apollo for communication with the API.

I installed the @apollo/client package from npm and I followed this documentation: https://www.apollographql.com/docs/react/get-started/.

I did the request to get the posts (I chose to take 1000 posts) and I took only the createdAt property, after that I converted the timestamp to date to see the month of each post. To store the number of posts in each month I created an array of 12 elements, I set un every element to 0 then I increment with 1 the element from the array at the index equal to month of the post. I managed to build the histogram using this data.

In the end, I tried to draw a horizontal line above the histogram to see the corresponding number of posts for each month. I did that but I discovered a strange bug, on the line I should have 12 values but this does not always happen, sometimes only 9, 10 or 11 numbers appear. I tried to solve this problem but I didn't succeed, initially I thought there was something wrong with my array of posts so I decided to display it in the console to see if some values are lost but the array is always displayed well, then I tried to look through the documentation to see if I missed something.

I tried to solve the problem for an hour and I realized that I crossed the 4 hour threshold by about 30 minutes so I chose to send the project in this stage. I encountered the biggest problems in terms of graphics and working with the visx library, overall the project seemed interesting and I liked to think and implement it.
