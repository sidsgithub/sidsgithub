'use strict';
module.exports = (sequelize, DataTypes) => {
  const course = sequelize.define('course', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  course.associate = function(models) {
    // associations can be defined here
    course.belongsTo(models.user);//course table having a userId of the user who created the course.
    course.hasMany(models.topic);
    course.hasMany(models.watched_topic);
  };
  return course;
};