const { formatTestID } = require('@utils/test.utils');

const KEY = 'NAVIGATION';

module.exports = {
    BUTTON_BACK_LEFT: formatTestID(`${KEY}-BUTTON-BACK_LEFT`),
    BUTTON_CLOSE: formatTestID(`${KEY}-BUTTON-CLOSE`),
    TEXT_HEADER_TITLE: formatTestID(`${KEY}-TEXT-HEADER_TITLE`),
    BUTTON_CHAT: formatTestID(`${KEY}-BUTTON-CHAT`),
};
