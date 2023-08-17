//CREATE A NEW QUOTE_ITEMS
    //addEventListener to the "CREATE" button
        //Use the get PUT route for Quote_Items
            //use query selectors to get the user's selections for quantity and service_id
            //if(response.ok) then call on a new function (createNewQuote)

//CREATE A NEW QUOTE
    //write the function createNewQuote
        //use query selectors to get the user's inputs for all quote parameters
            //always set the quote_items_id = 1
        //use the POST route for Quote to create a new quote

//GET THE TOTAL PRICE
    //write a function that calculates the total price
        //use query selectors to get the service.price from the service option selections
        //create a variable for total-price and set it equal to an empty array
        //use the sum method that takes in the total-price array and returns the sum

//CREATE THE PDF FILE
    //use pdfkit to create the pdf template