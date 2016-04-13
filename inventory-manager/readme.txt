--Open inventory-manager.html.You can add data about new stock, view your inventory, and generate a bill for a customer.

--Edit info about the invoice in invoice.html file.

--This web app makes use of html localStorage. So when you clear your history, all the data that you have added will be wiped off. 
As a workaround, i have provided a download link in the 'addData' view which saves your data into a text file, by downloading data.txt
So in case of a data wipe, open the last downloaded data.txt and copy all text inside.
Then, go to your browser, open console(pressf12) and type in the following command;

localStorage.modelPerm= JSON.parse(---paste here---);