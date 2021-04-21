export function json2Query(data) {
    if (!data instanceof Object) return
    let querry = ''
    // console.log(data)
    const propertyNames = Object.keys(data)
    for (let propertyName of propertyNames) {
        querry += propertyName + '=' + data[propertyName] + '&'
    }
    // console.log(querry)

    return querry
}

export async function img2Base64(file) {
    // console.log(file)
    var render = new FileReader();
    render.readAsDataURL(file);
    //   render.onload = () => {
    //     return render.result
    //     // this.fileList.push(render.result)
    //   };
    return new Promise((resolve, reject) => {
        try {
            render.onload = () => {
                resolve(render.result)
            }
        } catch {
            reject('error')
        }
    }).then(result => {
        // console.log(1)
        // console.log(result)
        return result
    })
}

export function JsonFilter(jsonstr) {
    console.log(jsonstr)

    jsonstr = jsonstr.replace("\r", "\\r");
    jsonstr = jsonstr.replace("\n", "\\n");
    // //    jsonstr=jsonstr.replace("\\r\\n\\r\\n", "\\n");
    // const rz = /['\\r','\\n']/
    // jsonstr.replace(rz,'\\n')
    console.log(jsonstr)
    return jsonstr;
}