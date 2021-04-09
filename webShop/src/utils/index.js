export function json2Query(data){
    if (!data instanceof Object)  return
    let querry = ''
    // console.log(data)
    const  propertyNames = Object.keys(data)
    for (let propertyName of propertyNames){
        querry += propertyName +'='+data[propertyName] + '&'
    }
    // console.log(querry)

    return querry
}