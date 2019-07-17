var app = getApp()

function getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    return yyyy + "-" + mm + "-" + dd;
}


function getDateAfterNMonth(n) {


    var theDate = new Date();
    theDate.setMonth(theDate.getMonth() + n);


    var dd = theDate.getDate();
    var mm = theDate.getMonth() + 1; //January is 0!

    var yyyy = theDate.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    return yyyy + "-" + mm + "-" + dd;
}


/*
*  按条件生成随机密码
*    d: 是否有数字   l:是否有小写字母   u:是否有大写字母  size:密码长度
*/
function getNewPassword(CONFIG) {

    var d = CONFIG.autoGenerate_num
    var s = CONFIG.autoGenerate_symbol
    var u = CONFIG.autoGenerate_upcase
    var l = CONFIG.autoGenerate_lowcase
    var size = CONFIG.autoGenerate_range[CONFIG.autoGenerate_size_index]

    // 数字集合
    let DIGITS = [
        "5", "9", "2", "4", "1", "3", "6", "0", "7", "8"
    ]
    // 小写字母集合
    let LOW_ALPHABETS = [
        "j", "e", "c", "f", "u", "w", "d", "s", "h", "q",
        "a", "y", "z", "n", "v", "r", "x", "t", "b", "g",
        "p", "o", "l", "i", "k", "m"
    ]
    // 大写字母集合
    let UP_ALPHABETS = [
        "J", "E", "C", "F", "U", "W", "D", "S", "H", "Q",
        "A", "Y", "Z", "N", "V", "R", "X", "T", "B", "G",
        "P", "O", "L", "I", "K", "M"
    ]
    // 符号集合
    let SYMBOLS = [
        "\"", "`", "-", "=", "~", "!", "@", "#", "$", "%",
        "^", "&", "*", "(", ")", "_", "+", "[", "]", "\"",
        "{", "}", "|", ";", "\'", ":", ",", ".", "<", ">",
        "/", "?"
    ]


    // 生成密码用的字符集合
    var collection = []

    // 如果生成密码的所有条件关闭直接返回 空
    if (!d && !l && !u && !s)
        return ""

    // 根据条件生成密码集合
    if (d)
        collection = collection.concat(DIGITS) 
    
    if (l) 
        collection = collection.concat(LOW_ALPHABETS) 
    
    if (u)
        collection = collection.concat(UP_ALPHABETS) 
    
    if (s)
        collection = collection.concat(SYMBOLS) 

    var newPassword = ""
    // 从collection中随机挑选出counts个字符组成密码

    for (let i = 0; i < size; i++) {
        newPassword += collection[Math.floor(Math.random() * collection.length)]
    }

    return newPassword


}
module.exports = {
    getCurrentDate: getCurrentDate,
    getDateAfterNMonth: getDateAfterNMonth,
    getNewPassword: getNewPassword
}
