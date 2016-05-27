var xhr = new XMLHttpRequest();//Tells the broswer it is going to use ajax.
//For each ajax request, you should use a new ajax command like the one above.
//Here is an example of the callback function needed:
xhr.onreadystatechange == function () {
  if (xhr.onreadyState === 4) {
    document.getElementbyId('ajax').innerHTML = xhr.responseText;
  }
};
//The open request part of ajax
xhr.open('GET','sidebar.html');

//Last part is sending the request. Also, for an fyi, 'xhr; is just a variable name when using ajax.
xhr.send();

/*Notes
Use get when you are only interested in recieving information, such as information from a
database . Use post when you are sending data like an email address that is going to be saved.
Methods: 'GET' and 'POST' are most common methods used in Ajax.
Get method sends data to the url, which isn't the securest way to do so.
Post sends data outside of the url. It sends its data in the body of the request.
