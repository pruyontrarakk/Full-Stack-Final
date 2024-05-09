This is my project for the Full Stack Web Development (COMS W3102) course taught by Professor Shoaib Ahamed.

The project is a Note Keeper website that involves both the frontend and backend. The project works by having an area for a title of your note as well as a section of text for the content of your note. Clicking the plus button adds this new note. Once this note has been added, you can edit it, delete it, or mark it with an exclamation mark.

**Front End:**
This part of my project took care of the UI such as buttons, text inputs, forms, and other components that allows the user to interact with the website. 
It also had various event handlers which provided the basic functionality for taking notes, including:
  addNote: Handles adding new notes
  deleteNote: Removes a note from the database
  updateNote: Updates the content of an existing note
  toggleAlert: Toggles a visual marking for a note

**Back End:**
This part of my project is the server side that handles the database, making sure that the information is saved.
It utilizes API endpoints, including:
  GET /notes: Fetches all notes
  POST /notes: Adds a new note to the database
  PATCH /notes/:id: Updates an existing note (like toggling or updating content)
  DELETE /notes/:id: Deletes a specific note
It also does various operations on the notes stored in MongoDB.
