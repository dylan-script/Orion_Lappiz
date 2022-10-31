//id del campo NIT CampoId=1f32dedd-7570-43ce-9c12-d4f4f65b089f
//id del campo DV CampoId=c3cd42e4-7f1b-4412-8863-6540084f94f7
const field = () => {
  setTimeout(() => {
    let nit = getFieldValue('1f32dedd-7570-43ce-9c12-d4f4f65b089f')
    sessionStorage.NIT = nit
    console.log(sessionStorage.NIT)
    setFieldValue('c3cd42e4-7f1b-4412-8863-6540084f94f7', nit)
  }, 1000);
}

const dv = (nit) => {
  let llngAcum = 0
  nit = parseInt(nit)
  if (nit !== 0) {
    console.log('Verificando Digito de Verificación')
    for (let i = 0; i < nit.length - 1; i++) {
      llngAcum += parseInt() * chooseValue(nit.length - 1)
    }
  } else {
    console.log('NIT inválido')
  }

}

function chooseValue(value) {
  switch (value) {
    case 1:
      return 3;
    case 2:
      return 7;
    case 3:
      return 13;
    case 4:
      return 17;
    case 5:
      return 19;
    case 6:
      return 23;
    case 7:
      return 29;
    case 8:
      return 37;
    case 9:
      return 41;
    case 10:
      return 43;
    case 11:
      return 47;
    case 12:
      return 53;
    case 13:
      return 59;
    case 14:
      return 67;
    case 15:
      return 71;
    default:
      return 0;
  }
}