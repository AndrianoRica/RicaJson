// Crea l'elemento form
        const myForm = document.createElement('form');
        myForm.id = 'myForm';

// Crea il titolo del form
        const formLabel = document.createElement('label');
        formLabel.id = 'formLabel';
        formLabel.textContent = 'Form';

        myForm.appendChild(formLabel);

// Crea label e text area dentro a due div con classe row(mettendoli in due righe divverse)

        const textareaRow = document.createElement('div');
        const textareaRow2 = document.createElement('div');

        textareaRow.classList.add('rows');
        textareaRow2.classList.add('rows');

        const textareaLabel = document.createElement('label');
        textareaLabel.htmlFor = 'textarea';
        textareaLabel.textContent = 'Textarea';

        const textarea = document.createElement('textarea');
        textarea.name = 'textarea';
        textarea.id = 'textarea';
        textarea.cols = '30';
        textarea.rows = '3';
        textarea.textContent = 'hello';

        textareaRow.appendChild(textareaLabel);
        textareaRow2.appendChild(textarea);
        myForm.appendChild(textareaRow);
        myForm.appendChild(textareaRow2);

// Crea il label e un input(text) e vengono messi dentro ad un
//unico div con classe row (nella stessa riga)
        const textInputRow = document.createElement('div');
        textInputRow.classList.add('rows');

        const textInputLabel = document.createElement('label');
        textInputLabel.htmlFor = 'text';
        textInputLabel.textContent = 'Text Input';

        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.id = 'text';
        textInput.name = 'text';

        textInputRow.appendChild(textInputLabel);
        textInputRow.appendChild(textInput);
        myForm.appendChild(textInputRow);

// Crea il radio input e label dentro ad un div con classe row(nella stessa riga)
        const radioRow = document.createElement('div');
        radioRow.classList.add('rows');

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.id = 'radio';
        radioInput.name = 'radio';

        const radioLabel = document.createElement('label');
        radioLabel.htmlFor = 'radio';
        radioLabel.textContent = 'Radio Button';

        radioRow.appendChild(radioInput);
        radioRow.appendChild(radioLabel);
        myForm.appendChild(radioRow);

// Crea label e select dentro a due div con classe row(mettendoli in due righe divverse)
        const selectRow = document.createElement('div');
        const selectRow2 = document.createElement('div');
        selectRow.classList.add('rows');
        selectRow2.classList.add('rows');

        const selectLabel = document.createElement('label');
        selectLabel.htmlFor = 'cars';
        selectLabel.textContent = 'Select';

        const select = document.createElement('select');
        select.name = 'cars';
        select.id = 'cars';

        const selectOptions = [
            { value: 'none', text: '--' },
            { value: 'Mercedes', text: 'Mercedes' },
            { value: 'Bmw', text: 'Bmw' },
            { value: 'Audi', text: 'Audi' }
        ];

        for (const optionData of selectOptions) {
            const option = document.createElement('option');
            option.value = optionData.value;
            option.textContent = optionData.text;
            select.appendChild(option);
        }

        selectRow.appendChild(selectLabel);
        selectRow2.appendChild(select);
        myForm.appendChild(selectRow);
        myForm.appendChild(selectRow2);
// Appende tutto al body
        document.body.appendChild(myForm);
