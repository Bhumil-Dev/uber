const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstname, lastname, email, password, vehicletype, color , plate , capacity
}) => {
    if (
        firstname === undefined || email === undefined || password === undefined ||
        vehicletype === undefined || color === undefined || plate === undefined || capacity === undefined
    ) {
        throw new Error('All fields are required');
    }

    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            vehicletype,
            color,
            plate,
            capacity
        }
    });

    return captain;
};
