const drivers = [`Antonia`, `Nuru`, `Amari`, `Mo`]

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function fareQuintupler() {
        return int * 5
    }    
}

function fareDoubler(int) {
    return int * 2
}

function fareTripler(int) {
    return int * 3
}

function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers) }