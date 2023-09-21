// crea il from
  const myForm = document.createElement('form');
  myForm.id = 'myForm';
  
  //usa il la costante nell file json.js per creare gli elementi
  formData.forEach(item => {
    const container = document.createElement(item.type); //crea gli div che conterranno ogni riga
    container.className = item.className || '';

    item.children.forEach(child => { //Crea i figli
    const element = document.createElement(child.type);

    if (child.id) 
        element.id = child.id;

    if (child.className) 
        element.className = child.className;

    if (child.textContent) 
        element.textContent = child.textContent;

    if (child.htmlFor) 
        element.htmlFor = child.htmlFor;

    if (child.inputType) 
        element.type = child.inputType;

    if (child.cols) 
        element.cols = child.cols;

    if (child.rows) 
        element.rows = child.rows;

    if (child.name) 
        element.name = child.name;

    if (child.options) {
        child.options.forEach(optionData => {
        const option = document.createElement('option');
        option.value = optionData.value;
        option.textContent = optionData.text;
        element.appendChild(option);
        });
    }

    // Appende elemnto a container
    container.appendChild(element);
    });

    // Aappende il container creato(div) al form
    myForm.appendChild(container);
  });
  
  //appende il form al body
  document.body.appendChild(myForm);
  