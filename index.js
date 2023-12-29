const { app } = require("./src/app");
const { createHome,createStyleHome } = require("./components/home");
const { port } = require("./config.json");
let data = require("./db/data.json")
app.get("/",(req,res)=>{

    const isMobile = req.headers['user-agent'].includes("Mobile");
    
    if(isMobile) res.redirect("/mobile");

    res.render("home",
    {
        title:"short videos gallery ",
        isMobile,
        data:JSON.stringify(data),
        styles:[
        ],
    })
})

app.get("/project/:name",(req,res)=>{
    const nameProject = req.params.name;

    let project;
    for(const tProject of data.projects){
        if(tProject.title == nameProject){
            project = tProject;
            break;
        }
    }


    res.render("project",{
        title:nameProject + " - porject ",
        project,
    })
})

app.get('/mobile',(req,res)=>{
    res.render("mobile");
})
app.listen(port,console.log("aberto  em https://localhost:"+port));