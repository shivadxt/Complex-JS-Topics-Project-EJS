Working with FLASH Messages:
 - Flash messages are used to store temporary messages that can be displayed to the user across different HTTP requests.
 
 - This allows you to pass data (messages in this case) between different requests, making it easier to provide user feedback and notifications in web applications.


 - Install : npm i connect-flash
 (Make sure you've express-session installed and setup)

 - Setting up Flash : app.use(flash());  //In aap.js

 - Creating flash Messages : req.flash("name",value);

 - Reading Flash Messages in other routes : req.flash("name")

