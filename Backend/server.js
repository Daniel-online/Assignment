const express = require('express')
const app = express();
const port = 3000;
const cors = require('cors')
const corsOptions = {
    origin: ["http://localhost:5173"],
}
// {response.map((country, index) => (
//     <div key={index} className="cards__inner  ml-3 mr-3 py-3">
//         <div className="cards__card card">
//             <div className="flex-row justify-between items-center">
//                 <h2 className="card__heading  ">{country.name}</h2>
//                 <h4 className="card__heading">{country.countryCode}</h4>
//             </div>
//             {/* <a href="#basic" className="card__cta cta">Get Started</a> */}
//         </div>
//     </div>
// )
// )
// }
app.use(cors(corsOptions));

app.listen(port, () => {
    console.log(`Port started on ${port}`)
});

app.get("/", (req, res) => {
    res.send("Main page")

})
app.get("/api", (req, res) => {
    console.log("Path '/api' working ")
    // res.sendStatus(200)
    res.json({
        name: ["Daniel", "Luis", "Dave"
        ],
        age:[24, 21, 25]
    });

})
