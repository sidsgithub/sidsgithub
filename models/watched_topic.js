'use strict';
module.exports = (sequelize, DataTypes) => {
  const watched_topic = sequelize.define('watched_topic', {
    watched: DataTypes.BOOLEAN
  }, {});
  watched_topic.associate = function(models) {
    // associations can be defined here
    watched_topic.belongsTo(models.topic);
    watched_topic.belongsTo(models.course);
    watched_topic.belongsTo(models.user);
  };
  return watched_topic;
};