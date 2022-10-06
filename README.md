# Gamerzone

A minimalist, fast, responsive website built with a simple, clean UI with the purpose of sharing hundreds of users' computer game strategies and walkthroughs with millions of others who seek guidance on progressing with their particular game mission or story, or quite simply gain knowledge from experienced players to further improve their own gameplay.

Development setup:
- Clone the project
- Create 2 separate bash terminals, one with the client file directory and the other with the server
- Make a .env file inside server folder to connect to MongoDB database with PORT & CONNECTION_URL variables inside it.
  You might, for example, use my database connection url and a random port id:
    PORT=5000
    CONNECTION_URL=mongodb+srv://test123:test123@cluster0.amoe6.mongodb.net/gamerzone?retryWrites=true&w=majority
- Run 'npm i && npm start' for both client and server side to start the app
- Use npm i --legacy-peer-deps instead if there are error installing the modules

TODO: refactor reducers, maybe add clickable tags, fix update functionality
