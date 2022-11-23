const prompt = require("prompt")
const validator = require("node-email-validation");

var schema = {
    properties: {
      Nome: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Sobrenome Invalido',
        required: true
      },
      Sobrenome: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Sobrenome Invalido',
        required: true
      },
      Email: {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        message: 'Digite um email valido',
        required: false
      },
      Cpf: {
        pattern: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
        message: 'Digite um cpf valido',
        required: false
      }
    }
  };


  prompt.start();


  prompt.get(schema, function (err, result) {
    
    console.log(' Nome Completo: ' + result.Nome + ' ' + result.Sobrenome);
    console.log(' Email: ' + result.Email);
    console.log(' CPF: ' + result.Cpf);
    
  });


