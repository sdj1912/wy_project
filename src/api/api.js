//封装网络请求
import Axios from "@/style/utils/axios";
const a="http://www.pudge.wang:3001"

/***********************轮播图************************/
let getBanner = () => {
  const url = a + "/home/banner";
  return new Promise((resolve, reject) => {
    Axios.get(url)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        resolve(err)
      })
  })
}


/***************************首页推荐*******************************/
let getRecommend = (count, page) => {
  const url = a + "/home/recommend";
  return new Promise((resolve, reject) => {
    Axios.post(url,{
      count,
      page
    })
    .then((res) => {
      resolve(res)
    })
    .catch((err) => {
      resolve(err)
    })
  })
}


/***************************分类数据*******************************/
let getRecommendClassify = (num) => {
  let n = num;
  const url = a + "/classify";
  return new Promise((resolve, reject) => {
    Axios.post(url,{
      type:n
    })
    .then((res) => {
      resolve(res)
    })
    .catch((err) => {
      resolve(err)
    })
  })
}


/***************************详情页数据*******************************/
let getGoodsDetail = (id) => {
  const url = a + "/detail";
  return new Promise((resolve, reject) => {
    Axios.post(url,{
      productId: id
    })
    .then((res) => {
      resolve(res)
    })
    .catch((err) => {
      resolve(err)
    })
  })
}

/*************************获取短信验证码***************************/
let verificationCode = (phone) => {
  const url = a + "/register/getCode";
  return new Promise((resolve, reject) => {
    Axios.post(url,{
      phone: phone,
      templateId: 537707
    })
    .then((res) => {
      resolve(res)
    })
    .catch((err) => {
      resolve(err)
    })
  })
}

/**************************登录*****************************/
let loginPage = (phone, code) => {
  const url = a + "/register";
  return new Promise((resolve, reject) => {
    Axios.post(url,{
      phone: phone,
      code: code
    })
    .then((res) => {
      resolve(res)
    })
    .catch((err) => {
      resolve(err)
    })
  })
}


/*********************获得个人信息(用于改个人信息)************************/
let personalInfo = (token) => {
  const url = a + "/userinfo/get";
  return new Promise((resolve, reject) => {
    Axios.post(url,{
      token : token
    })
    .then((res) => {
      resolve(res)
    })
    .catch((err) => {
      resolve(err)
    })
  })
}

/*********************修改个人信息************************/
let alterPersonalInfo = (token,nickName,sex) => {
  const url = a + "/userinfo/update";
  return new Promise((resolve, reject) => {
    Axios.post(url,{
      token : token,
      nickName : nickName,
      sex : sex
    })
    .then((res) => {
      resolve(res)
    })
    .catch((err) => {
      resolve(err)
    })
  })
}


/*********************获取收货地址************************/
let getAddress = (token) => {
  const url = a + "/address/get";
  return new Promise((resolve, reject) => {
    Axios.post(url,{
      token : token,
    })
    .then((res) => {
      resolve(res)
    })
    .catch((err) => {
      resolve(err)
    })
  })
}


/*********************新增收货地址************************/
let addAddress = (token,getName,getPhone,address,status) => {
  const url = a + "/address/add";
  return new Promise((resolve, reject) => {
    let status = status ? '2' : '1'
    Axios.post(url,{
      token : token,
      getName : getName,
      getPhone : getPhone,
      address : address,
      status : status
    })
    .then((res) => {
      resolve(res)
    })
    .catch((err) => {
      resolve(err)
    })
  })
}


/*********************修改收货地址************************/
let updateAddress = (token,addressId,getName,getPhone,address,status) => {
  const url = a + "/address/update";
  return new Promise((resolve, reject) => {
    Axios.post(url,{
      token : token,
      addressId : addressId,
      getName : getName,
      getPhone : getPhone,
      address : address,
      status : status
    })
    .then((res) => {
      resolve(res)
    })
    .catch((err) => {
      resolve(err)
    })
  })
}


/*********************获取购物车列表************************/
let getCartList = (token) => {
  const url = a + "/cart/get";
  return new Promise((resolve, reject) => {
    Axios.post(url,{
      token : token,
    })
    .then((res) => {
      resolve(res)
    })
    .catch((err) => {
      resolve(err)
    })
  })
}

/*********************加入购物车列表************************/
let addCartList = (token,productId,count,standard) => {
  const url = a + "/cart/add";
  return new Promise((resolve, reject) => {
    Axios.post(url,{
      token : token,
      productId : productId,
      count : count,
      standard : standard
    })
    .then((res) => {
      resolve(res)
    })
    .catch((err) => {
      resolve(err)
    })
  })
}
export {getBanner,getRecommend,getRecommendClassify,getGoodsDetail, verificationCode,
  loginPage,personalInfo,alterPersonalInfo,getAddress,addAddress,updateAddress,getCartList,addCartList}
