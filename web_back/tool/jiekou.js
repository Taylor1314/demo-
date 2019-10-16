// 将接口信息拼接一下，为了以后改接口容易些，




var baseURL = ' http://localhost:8000/';
// 用户信息的接口
var URL_DENGLU = baseURL + 'admin/login';
var URL_TUICHU = baseURL + 'admin/logout';
var URL_GETUSER = baseURL + 'admin/getuser';
var URL_USERINFO_GRT = baseURL + 'admin/userinfo_get';
var URL_USERINFO_EDIT = baseURL + 'admin/userinfo_edit'
    // 文章功能的接口：
var ARTICLE_GET = baseURL + 'admin/category_search';
var ARTICLE_ADD = baseURL + 'admin/category_add';
var ARTICLE_EDIT = baseURL + 'admin/category_edit';
var ARTICLE_DEL = baseURL + 'admin/category_delete';