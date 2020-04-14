module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'sub_topics', // name of Source model
        'topicId', // name of the key we're adding 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'topics', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'sub_topics', // name of Source model
        'topicId' // key we want to remove
      );
    }
  };