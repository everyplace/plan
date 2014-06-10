var express = require('express')
  , http = require('http')
  , path = require('path')
  , hogan = require('hogan.js')
  , request = require('request')
  , markdown = require('markdown').markdown
  , routes = require('./routes');

var app = module.exports = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hjs');
  // app.set('partials', {footer: 'footer'});

  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(function(req, res) { res.status(404); res.render('index', { title: '404' }); });
});

//configure routes
app.get('/', function(req, res){
  res.writeHead(302, {
    'Location': '.plan'
  });
  res.end();
});
app.get('/.plan', routes.markdown);
app.get('/.project', routes.markdown);

//initiate the app server
http.createServer(app).listen(app.get('port'), function(){
  console.log("erinsparling.com running on port " + app.get('port'));
});
