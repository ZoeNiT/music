
//  控制点赞,收藏数量显示方式
export function numFormat(num) {
    if (num === 0) {
        num = '';
    }
    else if (num > 9999 && num <= 9999999) {
        num = parseInt(num / 10000);
        num = parseInt(num) + "万";
    }
    else if (num > 9999999) {
        num = parseInt(num / 10000000);
        num = parseInt(num) + "千万";
    }
    return num;
}

//时间戳转换方法    date:时间戳数字
export function dateFormat(time) {
    let date = new Date(time);
    let YY = date.getFullYear() + '-';
    let MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    return YY + MM + DD;
}
//时间戳转换方法    date:时间戳数字 详细版
export function timestampToTime(timestamp) {
    let date = new Date(timestamp);
    var YY = date.getFullYear() + '-';
    var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return YY + MM + DD + " " + hh + mm + ss;
}

//  数组转字符串,并用符合分割
export function strFormat(arr, key, tag = '') {
    //  数组重调
    let setArr = arr.map(item => (
        tag + item[key]
    ))
    //  数组转指定模式字符串
    let str = ''
    for (let i of setArr.toString()) {
        if (i !== ',') {
            str += i
        }
    }
    return str.slice(1)
}

// 时长转换
export function formatTime(_seconds) {
    _seconds = parseInt(_seconds / 1000);
    let hours, mins, seconds;
    let result = '';
    seconds = parseInt(_seconds % 60);
    mins = parseInt(_seconds % 3600 / 60)
    hours = parseInt(_seconds / 3600);

    if (hours)
        result = `${PadZero(hours)}:${PadZero(mins)}:${PadZero(seconds)}`
    else
        result = `${PadZero(mins)}:${PadZero(seconds)}`
    return result;
}
//补零
function PadZero(str) {
    return new RegExp(/^\d$/g).test(str) ? `0${str}` : str;
}
