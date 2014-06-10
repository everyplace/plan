var markdown = require('markdown').markdown
  , fs = require('fs');

exports.markdown = function(req, res){


  if(req.url === '/.plan') {
    file = 'plan.md';
  } else if(req.url === '/.project') {
    file = 'project.md';
  } else {
    res.status(404); res.render('index', { title: '404', error:'File not found' });
  }

  fs.readFile('public/markdown/'+file, {"encoding":"utf8"}, function(err, data){
    html = {
      body:markdown.toHTML(data),
      UA: process.env.UA || null,
      domain: process.env.DOMAIN || null
    }
    res.render("index",html);
    res.end();
  });

};
