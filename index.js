import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.post('/choice', async (req, res) => {


    const jokeCatagory = req.body.jokeCategories
    console.log(jokeCatagory)
    try {
        const response = await axios.get(`https://v2.jokeapi.dev/joke/${jokeCatagory}?type=twopart`)
        // console.log(response.data["setup"])
        // console.log(response.data["delivery"])
        res.render("index.ejs", {data: response.data})
        // axios.get(`https://v2.jokeapi.dev/joke/${jokeCatagory}?type=twopart`)
        // .then((response) => {
        //     console.log(response.data["setup"])
        // console.log(response.data["delivery"])
        // res.render("index.ejs", {data: response.data})
        // })
        // .catch((err) => console.log(err))
    } catch (error) {
        console.log(err)
    }


})
app.listen(port, () => {
    console.log(`Server is listning on port: ${port}`);
})
