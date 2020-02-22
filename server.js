const express = require("express")
const server = express()

//arquivos estaticos na /public
server.use(express.static('public'))

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

server.get("/", (req,res) => {
	return res.render("index.html", { donors })
})

server.listen(3000, () => { 
	console.log("servidor rodando na porta 3000...")
})