'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  document.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    type_dokumen: DataTypes.STRING,
    jenis: DataTypes.STRING,
    divisi: DataTypes.STRING,
    route: DataTypes.TEXT,
    stat_upload: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'document'
  })
  return document
}
