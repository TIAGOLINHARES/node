const _ = require('lodash')

const alunos = 
[{
 nome: 'Joao',
 nota: 7.6
},
{
 nome: 'Maria',
 nota: 10   
},
{
 nome: 'Pedro',
 nota: 8   

}
]

const media = _.sumBy(alunos, 'nota') / alunos.length

console.log(media)