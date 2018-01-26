module.exports = function(sequelize, DataTypes) {
  
  // Setting up users model
  var Users = sequelize.define("Users", {
    id: {
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    username: {
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

  Users.associate = function(models) {
    // Associating Users with Posts
    // When an User is deleted, also delete any associated Posts
    Users.hasMany(models.Posts, {
      onDelete: "cascade"
    });
  };

  return Users;
};
