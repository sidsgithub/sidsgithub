'use strict';
module.exports = (sequelize, DataTypes) => {
  const sub_topic = sequelize.define('sub_topic', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    topicId : DataTypes.INTEGER
  }, {});
  sub_topic.associate = function(models) {
    // associations can be defined here
    sub_topic.belongsTo(models.topic);
  };
  return sub_topic;
};