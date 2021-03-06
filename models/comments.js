module.exports = function(sequelize, DataTypes) {
  
  // Setting up comments model
  var Comments = sequelize.define("Comments", {
    comment_id: {
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      required: true
    },
    commenter_username: {
      type: DataTypes.STRING,
      required: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    underscored: true
  });

  Comments.associate = function(models) {
    // Associating Comments with Post
    Comments.belongsTo(models.Posts, {
      foreignKey: {
        allowNull: false
      }
    });

  };

  return Comments;
};