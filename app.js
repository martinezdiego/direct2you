const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

const settings = require('./settings');

const models = require('./models');

// Routers
const usuario = require('./routes/usuario');
const tipoUsuario = require('./routes/tipoUsuario');
const empresa = require('./routes/empresa');
const categoriaEmpresa = require('./routes/categoriaEmpresa');

// App config
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

// Database connection
models.sequelize.sync();

// Passport setup
passport.use(new Strategy({
        usernameField: 'correo_usuario',
        passwordField: 'contrasena'
    },
    async (email, password, done) => {
        try {
            const response = await models.Usuario.findOne({ 
                where: { 
                    correo_usuario: email   
                } 
            });
            if (!response) {
                return done(null, false, { message: 'Incorrect email' });
            }
            if (response.contrasena != password) {
                return done(null, false, { message: 'Incorrect password' });
            }
            return done(null, response);
        }
        catch (err) {
            return done(err);
        }   
    }
));

passport.serializeUser((user, done) => {
  done(null, user.id_usuario);
});

passport.deserializeUser(async (id, done) => {
    try {
        const response = await models.Usuario.findByPk(id);
        done(null, response);
    }
    catch (err) {
        done(err);
    }
});

// Routes
app.use("/api/usuarios", usuario);
app.use("/api/tipo_usuarios", tipoUsuario);
app.use("/api/empresas", empresa);
app.use("/api/categoria_empresas", categoriaEmpresa);

app.use("/", (req, res) => {
  res.send({express: "Hello from express"});
});

if (settings.env === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Listen on provided port
app.listen(settings.port, () => console.log(`Listening on port ${settings.port}`)); 
