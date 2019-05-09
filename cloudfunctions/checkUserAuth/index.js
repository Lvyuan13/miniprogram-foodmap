// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()  
  const administrator = process.env.ADMIN.split('|');
// 没有管理员权限
  if (administrator.indexOf(wxContext.OPENID) == -1){
    return {
      data:{
        is_administrator:false
      }
    }
  }else{
    return {
      // 以json 数据的形式返回
      data: {
        is_administrator: true
      }
    }
  }

}