const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles',{
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article);// uma CATEGORIA tem muitos ARTIGOS
Article.belongsTo(Category);// um ARTIGO pertence a uma CATEGORIA

//remover esta linha após criar as tabelas
//Article.sync({force: true}); 

module.exports = Article;