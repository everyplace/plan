var markdown = require('markdown').markdown
  , fs = require('fs');

exports.markdown = function(req, res){

  fs.readFile('public/markdown/plan.md', {"encoding":"utf8"}, function(err, data){
    html = {
      body:markdown.toHTML(data),
      UA: process.env.UA || null,
      domain: process.env.DOMAIN || null
    }
    res.render("index",html);
    res.end();
  });

};
