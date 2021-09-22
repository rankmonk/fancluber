const express = require("express")
const app = express()

app.get("/", function(req,res))
{
re.send("it is working fine")
})
app.listen(process.env.PORT || 5000)

module.exports = app