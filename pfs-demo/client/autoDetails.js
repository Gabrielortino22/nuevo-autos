let container = document.querySelector('#container');
let params = [];

const processParam = () => {

    let paramString = window.location.search.substring(1) /* 'index=1' */
    let paramArray = paramString.split('&');


    for (let i = 0; i < paramArray.length; i++) {

        let tmpArray = paramArray[i].split('='); /*['index', '1'] */

        params[tmpArray[0]] = tmpArray[1] /* params['index'] = 1 */
    }
}


const getAutosDetail = async () => {
    try {
        processParam();
        const response = await fetch(`http://localhost:3000/autos/${params["index"]}`);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        } else {
            const auto = await response.json();
            console.log(auto)
            document.querySelector('#id').innerHTML += auto['id'];
            document.querySelector('#marca').innerHTML += auto['marca'];
            document.querySelector('#modelo').innerHTML += auto['modelo'];
            document.querySelector('#anio').innerHTML += auto['anio'];
            document.querySelector('#precio').innerHTML += auto['precio'];
        }
    } catch (error) {
        console.error(error);
        container.innerHTML = "<h1>Connection error</h1>";

    }
}
getAutosDetail();
