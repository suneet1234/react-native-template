import { Service } from '../Network';
import * as Config from '../Configration'

export default {
    //===================Login API ============================//
    loginApi: async (data: any) => {
        const response = await Service.userLogin(Config.URI_METHODs.LOGIN, data)
        return response
    },
};