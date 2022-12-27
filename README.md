
# BrainStation BrainFlix

This project is the front-end of a prototype for a new video streaming platform called BrainFlix.
Leveraging React, CSS/SASS, Node.JS, and Express JS. BEM methodology is used for class names and Flexbox for layout. The layout is responsive and adapts at all dimensions. 

![Mockup](https://raw.githubusercontent.com/afaisalsahar/BrainStation-brainflix/main/mockups/images/homepage-mockup.jpg)

## Implementation Info

    Components:
        The app is composed of multiple React components.
        The components should render using dynamic data, not hardcoded HTML (eg. comments, current video, and video-list sections).
    
    State:
        The app use state to hold the data and pass it down as props to generate side-videos and main-video content including comments.

    Routing:
        The app use react-router-dom with multiple routes, one for each page.

        There are 3 routes:
            The Home/Video Player Page for displaying the details of a video.
            The Video Upload Page.
            A route that loads the video with the provided video id to be displayed using the Video Player Page.

    Styling:
        The project's CSS use SASS variables/partials/mixins.
        The CSS use BEM principles when naming classes.
        The app use Flexbox for layout control.
    
## Functional Info

    Main video page:
        Home Page and Video Details Page use the same Page Component, and two separate routes, one for home and the other for a selected video.
        For the Home Page, the video that should be displayed is the first video within the array of videos.
        For the Video Details Page, the video displayed is the selected video within the array of videos.
        The useEffect and useParams hooks from react-router are used to determine when to update the main-video data.
        Clicking on a video thumb in the side-videos section should update the URL.

    Next videos sidebar:
        The ”Next Video” sidebar must not contain the current video being displayed.
        Clicking on a video must go to the Video Details Page for the selected video via routing and display all the information for the video such as (likes, views, author, comments, etc).

    Video upload page:
        Clicking on the “Upload” button in navbar links to the Video Upload Page.
        After sucessfully uploading a video, user is notified about “upload” and redirected to home page.
    
## API Info
    Data displayed in the app is retrieved from the BrainFlix mock API using axios.
    The app use the provided API to retrieve the video links and video details.
    The app use the comments provided with the video details response.
    All data for videos and comments come from the provided mock API.
