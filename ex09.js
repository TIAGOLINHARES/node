process.stdout.write('esta gostado do curso?')
process.stdin.on('data', function(data)
{
    process.stdout.write(`sua resposta foi ${data.toString()} Obrigado \n`)
    process.exit() 
})
