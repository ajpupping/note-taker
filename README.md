# Note Taker 
The Note Taker is a web application for users to write and save notes. 


## Description

The purpose of this project was to build the back end of the note taker application and connect it to the existing front end, contained in the starter code. I learned how to use express.js to create a RESTFUL api. I also learned how to use a UUID to add unique identifiers for each note. These unique IDs enabled me to target specific notes to delete using a DELETE route. This project helped me increase my understanding of APIs.

## Usage 

To begin using the note taker application, first click on the "Get Started" button. 

![A screenshot of the home page](/public/assets/images/note-taker-screenshot-1.png)

To add a new note, simply type in the input field provided on the right. Be sure to fill in both the title and text boxes. Saved notes will appear in the side bar on the left. 

![A screenshot of the notes page](/public/assets/images/note-taker-screenshot-2.png)

After the title and text have been added, the save button will become available. Click on the save button to save your note. If you want to start over, click "clear form" to empty the input field. To delete a note that has already been saved, click the red trashcan icon next to the note you wish to delete. 


## Credits 

I used [this site](https://hayageek.com/generate-unique-id-in-node-js/) to learn about using UUID to generate unique identifiers for each note. 

I used the [Express.js docs](https://expressjs.com/en/guide/routing.html) to learn more about routes. 

I used the [Heroku docs](https://devcenter.heroku.com/articles/git) to learn how to deploy my application to Heroku.



## License 

This project was created for educational purposes and does not have a license.