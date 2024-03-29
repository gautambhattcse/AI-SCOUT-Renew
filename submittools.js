function submitForm(event) {
    event.preventDefault();
  
    // Gather form data
    const toolName = document.getElementById('toolName').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const toolLink = document.getElementById('toolLink').value;
  
    // Do something with the form data (e.g., send it to a server)
    console.log('Tool Name:', toolName);
    console.log('Description:', description);
    console.log('Category:', category);
    console.log('Link to Tool:', toolLink);
  
    
    alert('Thank you for submitting the tool!');
    
  }
  