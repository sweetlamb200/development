# Development

### Link to Deployed Website
If you used the stencil code, this is `https://sweetlamb200.github.io/development`

### Goal and Value of the Application

The Goal of this application is to get more knowledge about different kinds of animes, sort them according to their ratings and also mark them as favourites for later use. This brings value to people new to animes and can use this to choose which anime to watch next. Even though there are currently only 12 animes here, but many more can be added and this page can become something like a smaller version of imdb of animes. 

### Usability Principles Considered

When someone starts to watch a new show or anime, they usually first choose what type they might be in the mood of, therefore I added the genre as one of the things to sort and choose. Secondly, I think a lot of users would want to know a brief description of what they are getting into. Two other things that people might look for before selecting a new show is if it is still ongoing and how well it is rated. Considering the above principles, I made a filtering list for genres and ongoing or finished and also a sorting list according to their ratings. 

Apart from this if someone really like a few shows they can add it to favourites and then choose from the favorurites. The application also shows the avg rating of the favorites (a quick hack will be just to pick the show whose rating is above the favorites average.)

### Organization of Components

App.js has a heading in a ToolBar (@mui) and then has a container (@mui) which is split into two parts using a grid (again @mui). The first Grid contians all the items and the second grid contains the Menu of all the sorting and filtering options. The Second grid is build using Forms, FormLabels, Radios, Checkboxes, etc,etc all imported from mui.

AnimeItem.js is my item component, it is also build uing mui components. It has name, description, image, rating, genre and ongoing categories all written using Typography (from @mui).

FaveItem.js can be considered like a helper component for AnimeItem.js, It is entirely used to take care of the favorite items and also to toggle the add to favorite (or the heart) button.

### How Data is Passed Down Through Components

Data is passed through the components using props. 
All the data for the items is passed from App.js to AnimeItem as a json object itself (using props) and this is further passed in to FaveItem as well to add these items to the favorite list. Apart from that the setfavItems and the favouriteItems are also passed in to AnimeItem and then to FaveItem tgo keep track of the favorited items.

All the types of sorting and filtering is handled within App.js so not much data transfer is required for tha except for favourites.

### How the User Triggers State Changes

The User can trigger state changes by choosing from the menu on the right. They can either sort of filter. There are 4 options to sort:- sort alphabetically, reverse alphabetically, highest rating first and lowest rating first.
Then the user can either filter by genre or by finished/ongoing shows.
Finally the user can use the heart icon to add any show to favourites and this woulc cause the average favourite rating to change and/or once the show only favourites is checked it would only show these items. Simialrly the heart icon can be clicked again to remove an item from the favourites.



