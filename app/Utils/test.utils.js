const { APP_INFO } = require('@constants/static');

function formatTestID(id) {
    return `${APP_INFO.PACKAGE_NAME}:id/${id}`;
}

module.exports = {
    formatTestID,
};
