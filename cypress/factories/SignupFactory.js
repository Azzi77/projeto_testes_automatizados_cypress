


//import { faker } from '@faker-js/faker';
var faker = require('faker')
var cpf = require('gerador-validador-cpf')


export default {

    deliver: function(){

      var firstName = faker.name.firstName()
      var lastName = faker.name.lastName()
      
        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            whatsapp:'1499999911',
            email: faker.internet.email(firstName),
            address: {             
            postalcode: '17064150',
            street: 'Rua Santos Dumont',
            number: '2022',
            details: 'casa',
            district: 'Jardim São Jorge',
            city_state: 'Bauru/SP'
        
              },
              'delivery_method': 'Moto',
              'cnh': 'cnh-digital-teste.jpg'
        
            }
            
            return data
              
    }
  }
