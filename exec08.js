function temParam(param)
{
    return process.argv.indexOf(param) !== -1

}

if(temParam('--teste'))
{
    console.log('recebeu atencao')
}
else
{
    console.log('ta suave')
}