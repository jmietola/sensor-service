                      _                   _                                    _          
      /\  /\__ _  ___| | ___   _    /\/\ (_) ___ _ __ ___  ___  ___ _ ____   _(_) ___ ___ 
     / /_/ / _` |/ __| |/ / | | |  /    \| |/ __| '__/ _ \/ __|/ _ \ '__\ \ / / |/ __/ _ \
    / __  / (_| | (__|   <| |_| | / /\/\ \ | (__| | | (_) \__ \  __/ |   \ V /| | (_|  __/
    \/ /_/ \__,_|\___|_|\_\\__, | \/    \/_|\___|_|  \___/|___/\___|_|    \_/ |_|\___\___|
                        |___/   
        
        
    This hacky microservice is meant to gather, process and view sensor data. Idea is to evolve from hacky solution to more towards CLEAN solution(as much as licence allows).

    Sample services includes weather sensor summary and temperature difference.

    http://localhost:3000/sensors/summary
    http://localhost:3000/sensors/diff
    
   **Proper API design later**
    
# INSTRUCTIONS

    Server:

    npm install 

    npm start

    Client:

    cd client 
    npm start

    Tests:
    npm test

# TODOs

    Add API GATEWAY should be implemented so that we could serve different clients and protocols as well.

    Add Docker.

    Add Typescript.

    Add Swagger, Monitoring, more tests.

# NOTEs

    Event sourcing could be interesting here since data is already stored for that purpose.

    I'd gladly accept all the feedback.

# Folder Structure
    /src
        /controllers
        /routes
        /repositories
        /services
        /utils
        
    The source folder contains sub-folders that arrange the application into logical layers as suggested by the Hexagonal Architecture (a.k.a. the Onion Architecture):

    routes/controllers: These are the adapter layer of the Hexagonal Architecture. It adapts the HTTP transforms the HTTP requests from the external world to the service layer and transforms the objects returned by the service layer to HTTP responses.

    services: The service layer coordinates high-level activities such as creation of domain objects and asking them to perform tasks requested by the external world. It interacts with the repository layer to save and restore objects.

    repositories: The repository layer is responsible for persisting domain objects.

    The utils folder contains useful utilities and helpers.

    --------------
    
    --------------

***Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to copy, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, but NOT including the right to modify without keeping
    solution more or less hacky.***

  ***The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.***

   ***THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE***
                       
:shipit:
