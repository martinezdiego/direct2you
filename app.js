const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const settings = require('./settings');

const models = require('./models');

// Routers
const usuario = require('./routes/usuario');
const tipoUsuario = require('./routes/tipoUsuario');
const empresa = require('./routes/empresa');
const categoriaEmpresa = require('./routes/categoriaEmpresa');
const ciudad = require('./routes/ciudad');
const zonaResidencial = require('./routes/zonaResidencial');
const ubicacion = require('./routes/ubicacion');
const producto = require('./routes/producto');
const categoriaProducto = require('./routes/categoriaProducto');
const medioTransporte = require('./routes/medioTransporte');
const tipoMedioTransporte = require('./routes/tipoMedioTransporte');
const metodoPago = require('./routes/metodoPago');
const pago = require('./routes/pago');
const pedido = require('./routes/pedido');
const reclamo = require('./routes/reclamo');
const ubicacionUsuario = require('./routes/ubicacionUsuario');

// App config
const app = express();

const myStore = new SequelizeStore({
    db: models.sequelize,
});

app.use(
    session({
        secret: "s3Cur3",
        store: myStore,
        resave: true,
        saveUninitialized: true
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

// Database connection
// models.sequelize.sync();
myStore.sync();

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

//Routes
app.use("/api/usuarios", usuario);
app.use("/api/tipo_usuarios", tipoUsuario);
app.use("/api/empresas", empresa);
app.use("/api/categoria_empresas", categoriaEmpresa);
app.use("/api/ciudades", ciudad);
app.use("/api/zona_residenciales", zonaResidencial);
app.use("/api/ubicaciones", ubicacion);
app.use("/api/productos", producto);
app.use("/api/categoria_productos", categoriaProducto);
app.use("/api/medios_transporte", medioTransporte);
app.use("/api/tipos_medio_transporte", tipoMedioTransporte);
app.use("/api/metodos_pago", metodoPago);
app.use("/api/pagos", pago);
app.use("/api/pedidos", pedido);
app.use("/api/reclamos", reclamo);
app.use("/api/ubicaciones_usuario", ubicacionUsuario),

app.use("/", (req, res) => {
    res.send({ message: "Hello from Express" });
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
