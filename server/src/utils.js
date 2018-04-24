
module.exports.getFormattedDate = function() {
    var date = new Date().toLocaleString().
        replace(/T/, ' ').
        replace(/\..+/, '');

    return date;
};