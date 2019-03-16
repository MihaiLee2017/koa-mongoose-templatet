const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const Person = require('../../dbs/models/person')
//获取用户
exports.getUser = async (ctx, next) => {

    // if (ctx.query.id != 1) {
    //     throw new ApiError(ApiErrorNames.USER_NOT_EXIST)
    // }
    let result
    try {
        result = await Person.find({ name: ctx.query.name })
    } catch (e) {
        throw new ApiError(ApiErrorNames.USER_NOT_EXIST)
    }
    ctx.body = {
        list: result
    }
}

//用户注册
exports.registerUser = async (ctx, next) => {
    console.log('registerUser', ctx.request.body);
}

exports.addPerson = async (ctx, next) => {
    const person = new Person({
        name: ctx.request.body.name,
        age: ctx.request.body.age
    })
    let code
    try {
        await person.save()
    } catch (e) {
        throw new ApiError(ApiErrorNames.USER_ADD)
    }
    ctx.body = {
        name: ctx.request.body.name,
        age: ctx.request.body.age
    }
}

exports.updatePerson = async (ctx, next) => {
    try {
        await Person.where({ name: ctx.request.body.name }).update({
            age: ctx.request.body.age
        })
    } catch (e) {
        throw new ApiError(ApiErrorNames.USER_UPDATE_ERROR)
    }
    ctx.body = {

    }
}