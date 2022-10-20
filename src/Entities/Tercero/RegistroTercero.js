setTimeout(() => {
  debugger
  if (e.isNew){
  let section = [
    'd8bb9d85-78e9-4cd3-882d-425386c9313a',
    '132791da-7fbf-412c-b25b-7a39a7502699',
    '080913d3-66fa-4060-963c-866a3a2ad173',
    'f1f1f458-daa5-488c-869d-0d234da785e4'
  ];

  let fields = [
    'a78a1c88-6f8e-481a-b33c-fcf74ecaadce',
    '978cab78-0fe1-4b9b-8a2d-c57a54accc08'
  ]

  for(let i = 0; i < section.length; i++){
    visibilitySection(section[i], false);
  }

  for(let i = 0; i < fields.length; i++){
    disableField(fields[i], true);
  }
}
}, 1000);