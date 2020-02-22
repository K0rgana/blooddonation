const express = require("express")
const server = express()

//meddlers
server.use(express.static('public')) //arquivos estaticos na /public
server.use(express.urlencoded({ extended: true })) //habilitando body form

//template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
	express: server
})

const donors = [ 
	{
		name: "morgana pedragon",
		blood: "A+"
	},
	{
		name: "arthur pedragon",
		blood: "B+"
	},
	{
		name: "genevive pedragon",
		blood: "AB+"
	},{
		name: "ginevere pedragon",
		blood: "O+"
	},
]


//routes
server.get("/", (req,res) => {
	return res.render("index.html", { donors })
})

server.post("/", (req,res) => {
	const name = req.body.name
	const email = req.body.email
	const blood = req.body.blood

	donors.push({
		name: name,
		blood: blood,
	})

	return res.redirect("/")
})

server.listen(3000, () => { 
	console.log("servidor rodando na porta 3000...")
})