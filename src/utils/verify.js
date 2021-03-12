// JS实现身份证验证 https://blog.csdn.net/haibo5240/article/details/89022595
const isCardNo = function (string) {
  let num = string;
  //num数据类型为字符串 
  num = num.toUpperCase();
  //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
  if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num)) {
    return false;
  }
  //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
  //下面分别分析出生日期和校验位
  var len, re;
  len = num.length;
  if (len == 15) {
    re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
    var arrSplit = num.match(re);

    //检查生日日期是否正确
    var dtmBirth = new Date(
      "19" + arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]
    );
    var bCorrectDay;
    bCorrectDay =
      dtmBirth.getYear() == Number(arrSplit[2]) &&
      dtmBirth.getMonth() + 1 == Number(arrSplit[3]) &&
      dtmBirth.getDate() == Number(arrSplit[4]);
    if (!bCorrectDay) {
      return false;
    } else {
      //将15位身份证转成18位
      //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
      var arrInt = new Array(
        7,
        9,
        10,
        5,
        8,
        4,
        2,
        1,
        6,
        3,
        7,
        9,
        10,
        5,
        8,
        4,
        2
      );
      var arrCh = new Array(
        "1",
        "0",
        "X",
        "9",
        "8",
        "7",
        "6",
        "5",
        "4",
        "3",
        "2"
      );
      var nTemp = 0,
        i;
      num = num.substr(0, 6) + "19" + num.substr(6, num.length - 6);
      for (i = 0; i < 17; i++) {
        nTemp += num.substr(i, 1) * arrInt[i];
      }
      num += arrCh[nTemp % 11];
      return true;
    }
  }
  if (len == 18) {
    re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
    var arrSplit = num.match(re);

    //检查生日日期是否正确
    var dtmBirth = new Date(
      arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]
    );
    var bCorrectDay;
    bCorrectDay =
      dtmBirth.getFullYear() == Number(arrSplit[2]) &&
      dtmBirth.getMonth() + 1 == Number(arrSplit[3]) &&
      dtmBirth.getDate() == Number(arrSplit[4]);
    if (!bCorrectDay) {
      return false;
    } else {
      //检验18位身份证的校验码是否正确。
      //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
      var valnum;
      var arrInt = new Array(
        7,
        9,
        10,
        5,
        8,
        4,
        2,
        1,
        6,
        3,
        7,
        9,
        10,
        5,
        8,
        4,
        2
      );
      var arrCh = new Array(
        "1",
        "0",
        "X",
        "9",
        "8",
        "7",
        "6",
        "5",
        "4",
        "3",
        "2"
      );
      var nTemp = 0,
        i;
      for (i = 0; i < 17; i++) {
        nTemp += num.substr(i, 1) * arrInt[i];
      }
      valnum = arrCh[nTemp % 11];
      if (valnum != num.substr(17, 1)) {
        return false;
      }
      return true;
    }
  }
  return false;
}

// 护照验证 https://www.jb51.cc/regex/488106.html
const isPassport = function (string) {
  let num = string;
  var re1 = /^[a-zA-Z]{5,17}$/;
  var re2 = /^[a-zA-Z0-9]{5,17}$/;
  var arrSplit = re1.test(num) || re2.test(num);
  return arrSplit
}

// 港澳通行证验证 https://www.jb51.cc/regex/488106.html
const isHKMacao = function (string) {
  let num = string;
  var re = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/;
  var arrSplit = re.test(num);
  return arrSplit
}
// 台胞证 http://www.qilin668.com/a/5e8c6cabe63148h.html
const isTaiwan = function (string) {
  let num = string;
  var re1 = /^(?:(830000(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX])|\d{10}[DAB])$/;
  var arrSplit = re1.test(num);
  return arrSplit
}

const explain = {
  isCardNo: "身份证",
  isHKMacao: "港澳通行证",
  isTaiwan: "台胞证",
  isPassport: "护照",
  functionalityL: "证件验证",
  parameter_type: "String" //参数类型
}

export default {
  isCardNo,
  isHKMacao,
  isTaiwan,
  isPassport,
  explain
}
