const serveHomePage = function(req,res) {
  let homePage = req.app.fs.readFileSync('./templates/homePage.html','utf8');
  res.type('html');
  res.send(homePage);
}


module.exports = {
  serveHomePage
}
