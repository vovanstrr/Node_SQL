const sequelize = require('../db')
const {DataTypes} = require('sequelize')
// ----- описание таблиц -----------
const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    plu: {type: DataTypes.INTEGER, unique: true, allowNull: false},
})

const Shop = sequelize.define('shop', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})


// const Sale = sequelize.define('sale', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     quantity: {type: DataTypes.INTEGER, allowNull: false},
// })

// const Warehouse = sequelize.define('warehouse', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     quantity: {type: DataTypes.INTEGER, allowNull: false},
// })
// внешние ключи прописывать не нужно, sequelize прописывает их самостоятельно. 


// const User = sequelize.define('user', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     email: {type: DataTypes.STRING, unique: true},
//     password: {type: DataTypes.STRING},
//     role: {type: DataTypes.STRING, defaultValue: 'USER'}
// })

// const Basket = sequelize.define('basket', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })

// const BasketDevice = sequelize.define('basket_device', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })

// const Device = sequelize.define('device', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: DataTypes.STRING, unique: true, allowNull: false},
//     price: {type: DataTypes.INTEGER, allowNull: false},
//     rating: {type: DataTypes.INTEGER, defaultValue: 0},
//     img: {type: DataTypes.STRING, allowNull: false},
// })

// const Type = sequelize.define('type', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: DataTypes.STRING, unique: true, allowNull: false}
// })

// const Brand = sequelize.define('brand', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: DataTypes.STRING, allowNull: false}
// })

// const Rating = sequelize.define('rating', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     rate: {type: DataTypes.INTEGER, unique: true, allowNull: false}
// })

// const DeviceInfo = sequelize.define('device_info', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     title: {type: DataTypes.STRING, allowNull: false},
//     description: {type: DataTypes.STRING, allowNull: false},
// })

// const  TypeBrand = sequelize.define('type_brand', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })

// ----- описание связей между таблицами -----------

// Product.hasOne(Shop) // один к одному
// Shop.belongsTo(Product) // принадлежит user

Product.hasOne(Shop) //   , {as: 'shops', foreignKey: 'id'}
Shop.belongsTo(Product) // принадлежит user

Product.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Product)

// User.hasMany(Rating) // один ко многим
// Rating.belongsTo(User)

// Basket.hasMany(BasketDevice)
// BasketDevice.belongsTo(Basket)

// Type.hasMany(Device)
// Device.belongsTo(Type)

// Brand.hasMany(Device)
// Device.belongsTo(Brand)

// Device.hasMany(Rating)
// Rating.belongsTo(Device)

// Device.hasMany(BasketDevice)
// BasketDevice.belongsTo(Device)

// Device.hasMany(DeviceInfo)
// DeviceInfo.belongsTo(Device)

// Type.belongsToMany(Brand, {through: TypeBrand})   // многие ко многим
// Brand.belongsToMany(Type, {through: TypeBrand})

module.exports = {
    Product,
    Shop
    // User,
    // Basket,
    // BasketDevice,
    // Device,
    // Type,
    // Brand,
    // Rating,
    // TypeBrand,
    // DeviceInfo
}