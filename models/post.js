module.exports = function(sequelize, DataTypes) {
  
  // Setting up Posts model
  var Posts = sequelize.define("Posts", {
    id: {
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
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

  Posts.associate = function(models) {
    // A Post should belong to an user
    // A Post can't be created without an user due to the foreign key constraint
    Posts.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
    // When an Post is deleted, also delete any associated Comments
    Posts.hasMany(models.Comments, {
      onDelete: "cascade"
    });
  };

  return Posts;
};
