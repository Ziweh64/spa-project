Project Overview:

You are building a Single Page Application (SPA) using React, which aims to offer users a seamless platform experience. 
The application will feature user profile management, provide information about the platform, and give access to personalized features.

Problem Statement

The goal is to create a user-friendly SPA where users can:
Navigate through pages without page reloads (to maintain a smooth experience).
View and manage their profile information.

Solution:

Home Component:
Provides a welcoming message and introduces users to the app’s features.
Encourages users to visit their profile or explore more about the app on the About page.

About Component:
This simple page offers information about the platform's purpose and future plans

UserProfile Component:
Fetches user-specific data from a json file based on the username provided in the URL.
Displays detailed information about the user, such as bio, location, occupation, and interests.


UseState in this app is used to manage user data and stores/handle possible errors while
useEffect is used to fetch data of the user specifically retrieves the username from the URL using React Router’s useParams hook.
