module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to an user
    // A Post can't be created without an user due to the foreign key constraint
    Post.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
    Post.hasMany(models.Comments, {
      onDelete: "cascade"
    });
  };

  return Post;
};
