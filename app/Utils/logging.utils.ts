import { CONFIG } from '@constants/static';
import Constants from '@constants';

const catchLogger = (...data: any[]) => {
    consoleLogger('CATCH: ', data);
};

const responseLogger = (...data: any[]) => {
    consoleLogger('RESPONSE: ', data);
};

const consoleLogger = (...data: any[]) => {
    if (CONFIG.BUILD_TYPE !== Constants.ENV.PROD) {
        console.log(new Date(), ' ', data);
    }
};

const errorLogger = (...data: any[]) => {
    console.error(new Date(), data);
};

const printData = (data: any) => {
    __DEV__ && console.log('FlipAppLog', data);
};

export { catchLogger, responseLogger, errorLogger, consoleLogger, printData };
