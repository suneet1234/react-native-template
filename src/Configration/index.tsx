//================= Network Configration =======================//
const URIS = {
    DEVELOPMENT: 'https://reqres.in/api/',
    PRODUCTION: '',
    STAGING: '',
};

const HTTP_CODES = {
    SUCCESS: 200,
    UNAUTHORIZED: 401,
    VALIDATION: 422,
    SERVER_ERROR: 500,
};

const URI_METHODs = {
    LOGIN: 'users',
    REGISTRATION: 'user/registration'
};

const STATIC_PAGE = {
    PRIVACY_POLICY: '',
    TERMS_CONDITION: ''
}

//================== Font Family =============================//
const FONT_FAMILIES = {
    NORMAL: 'FuturaPT',
    MEDIUM: 'FuturaPT-Medium',
    BOLD: 'FuturaPT-Bold',
    DEMI: 'FuturaPT-Demi',
    LIGHT: 'FuturaPT-Light',
    REGULAR: 'FuturaPT',
};

//================ MARGIN and PADDINGS ===================//

const METRICS = {
    MAR_5: 5,
    MAR_8: 8,
    MAR_9: 9,
    MAR_10: 10,
    MAR_11: 11,
    MAR_12: 12,
    MAR_13: 13,
    MAR_14: 14,
    MAR_15: 15,
    MAR_16: 16,
    MAR_17: 17,
    MAR_18: 18,
    MAR_19: 19,
    MAR_20: 20,
    MAR_21: 21,
    MAR_22: 22,
    MAR_23: 23,
    MAR_24: 24,
    MAR_25: 25,
    MAR_29: 29,
    MAR_30: 30,
    MAR_32: 32,
    MAR_35: 35,
    MAR_40: 40,
    MAR_45: 45,
    MAR_50: 50,
    MAR_55: 55,
    MAR_60: 60,
    MAR_66: 66,
    MAR_81: 81,
    MAR_104: 104,
    MAR_110: 110,
    MAR_120: 120,
    MAR_131: 131
};

//==================== Define Colors ========================//
const COLORS = {
    GRAY_BACKGROUND: 'rgba(190,190,190,0.5)',
    GRAY: 'gray',
    BORDER_COLOR: 'gray',
    WHITE: 'white',
    BLACK: 'black',
    RED: 'red',
    GREEN: 'green',
    GRAY_255_6: 'rgba(255,255,255,0.6)',
    GOLD: '#E6C65B',
};

//========================= FONT SIZE =========================//
const FONT_SIZES = {
    H1: 24,
    H2: 16,
    H3: 14,
    H4: 12,
    H5: 18,
    H6: 20,
};

export {
    HTTP_CODES,
    FONT_FAMILIES,
    FONT_SIZES,
    URIS,
    COLORS,
    METRICS,
    URI_METHODs,
    STATIC_PAGE
};