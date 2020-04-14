'use strict';
module.exports = (sequelize, DataTypes) => {
  const topic = sequelize.define('topic', {
    title: DataTypes.STRING
  }, {});
  topic.associate = function(models) {
    // associations can be defined here.
    topic.belongsTo(models.course);
    topic.hasMany(models.sub_topic);
  };
  return topic;
};