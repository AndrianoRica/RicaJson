const formData = [
    {
        type: 'div',
        children: [
                {
                    type: 'label',
                    id: 'formLabel',
                    textContent: 'Form'
                }
            ]
    },
    {
      type: 'div',
      className: 'rows',
      children: [
        {
          type: 'label',
          htmlFor: 'textarea',
          textContent: 'Textarea'
        }
      ]
    },
    {
      type: 'div',
      className: 'rows',
      children: [
        {
          type: 'textarea',
          name: 'textarea',
          id: 'textarea',
          cols: '30',
          rows: '3',
          textContent: 'hello'
        }
      ]
    },
    {
      type: 'div',
      className: 'rows',
      children: [
        {
          type: 'label',
          htmlFor: 'text',
          textContent: 'Text Input'
        },
        {
          type: 'input',
          inputType: 'text',
          id: 'text',
          name: 'text'
        }
      ]
    },
    {
      type: 'div',
      className: 'rows',
      children: [
        {
          type: 'input',
          inputType: 'radio',
          id: 'radio',
          name: 'radio'
        },
        {
          type: 'label',
          htmlFor: 'radio',
          textContent: 'Radio Button'
        }
      ]
    },
    {
      type: 'div',
      className: 'rows',
      children: [
        {
          type: 'label',
          htmlFor: 'cars',
          textContent: 'Select'
        }
      ]
    },
    {
      type: 'div',
      className: 'rows',
      children: [
        {
          type: 'select',
          name: 'cars',
          id: 'cars',
          options: [
            { value: 'none', text: '--' },
            { value: 'Mercedes', text: 'Mercedes' },
            { value: 'Bmw', text: 'Bmw' },
            { value: 'Audi', text: 'Audi' }
          ]
        }
      ]
    }
  ];