const app = require('./app');
const { sequelize } = require('./models/index');
const port = 7777;

sequelize.sync({ force: false , alter : true }).then(() => {
    app.listen(port, () => console.log(`Run on ${port}`))
});
