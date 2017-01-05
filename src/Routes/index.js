import api from './Api'

export default (router) => {

    console.log("hello?")

    // Home page
    router.get('/', (req, res) => {
        res.send('Home page!'); 
    })

    // ================= //
    // API Routes        //
    // ================= //
    api(router)
}