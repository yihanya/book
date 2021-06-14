/*
 * @name: 易寒鸦
 * @Description:
 * @Date: 2021-05-11 14:56:33
 * @LastEditTime: 2021-06-02 21:49:04
 * @FilePath: \vuebook\src\request\api.js
 */
import axios from './request.js';
import qs from 'qs';
/**
 * 登录
 * @param {string,string} username,userpass
 * @returns
 */
export const LoginAPI = params => axios.post('/user/login', qs.stringify(params));

/**
 * 注册
 * @param {string,sring,strign} username pass1 pass2
 * @returns
 */
export const RegisteredAPI = params => axios.post('/user/registration', qs.stringify(params));

/**
 * 获取所有章节
 * @param {string} bookid
 * @returns
 */
export const GetChaptersAPI = params => axios.post('/chapter/queryAllChapter', qs.stringify(params));

/**
 * 获取书籍详情
 * @param {string} bookid
 * @returns
 */
export const GetBookAPI = params => axios.post('/book/queryBook', qs.stringify(params));

/**
 * 添加书籍
 * @param {string,sring,strign} username pass1 pass2
 * @returns
 */
export const AddBookAPI = params => axios.post('/book/addBook ', qs.stringify(params));

/**
 * 获取一页书籍
 * @param {string} 页
 * @returns
 */
export const GetBooksAPI = params => axios.post('/book/queryAllBook', qs.stringify(params));

/**
 * 获取用户信息
 * @param {string}
 * @returns
 */
export const GetUserAPI = params => axios.post('/user/queryUser', qs.stringify(params));

/**
 * 获取章节内容
 * @param {string} Chapterid
 * @returns
 */
export const GetChapterAPI = params => axios.post('/chapter/context', qs.stringify(params));

/**
 * 获取用户书籍
 * @param {string} Chapterid
 * @returns
 */
export const GetUserBookAPI = params => axios.post('/user/queryAllBook', qs.stringify(params));

/**
 * 修改书籍
 * @param {string} Chapterid
 * @returns
 */
export const ModifyBookAPI = params => axios.post('/book/updateBook', params, { headers: { 'content-type': 'application/x-www-form-urlencoded' } });

/**
 * 添加章节
 * @param {string} Chapterid
 * @returns
 */
export const AddChapterAPI = params => axios.post('/chapter/addChapter', qs.stringify(params));

/**
 * 修改章节
 * @param {string} Chapterid
 * @returns
 */
export const UpdateChapterAPI = params => axios.post('/chapter/updateChapter', qs.stringify(params));

/**
 * 根据用户id返回所有书架
 * @param {string} Chapterid
 * @returns
 */
export const GetUserBookShelfAPI = params => axios.post('/bookShelf/queryAllBookShelf', qs.stringify(params));

/**
 * 根据书架id查询所有书籍
 * @param {string} Chapterid
 * @returns
 */
export const GetBookShelfAPI = params => axios.post('/bookShelf/queryAllBook  ', qs.stringify(params));

/**
 * 根据书架id查询所有书籍
 * @param {string} bookId bookshelfId
 * @returns
 */
export const GetContextAPI = params => axios.post('/bookShelf/context', qs.stringify(params));

/**
 *
 * @param {string} bookId bookshelfId
 * @returns
 */
export const GetAllUserAPI = params => axios.post('/user/queryAllUser', qs.stringify(params));

/**
 * 添加书架
 * @param {string} bookId bookshelfId
 * @returns
 */
export const AddBookShelfAPI = params => axios.post('/bookShelf/addBookShelf', qs.stringify(params));

/**
 * 添加一本书到指定书架
 * @param {string} bookId bookshelfId
 * @returns
 */
export const AddBookBookShelfAPI = params => axios.post('/bookShelf/addBook', qs.stringify(params));

/**
 * 删除一个书架
 * @param {string} bookId bookshelfId
 * @returns
 */
export const DelBookShelfAPI = params => axios.post('/bookShelf/deleteBookShelf ', qs.stringify(params));

/**
 * 删除书架一本书
 * @param {string} bookId bookshelfId
 * @returns
 */
export const DelBookShelfBookAPI = params => axios.post('/bookShelf/deleteBook', qs.stringify(params));

/**
 * 获取所有用户信息
 * @param {string} bookId bookshelfId
 * @returns
 */
export const GetAllUsersAPI = () => axios.post('/user/queryAllUser');

/**
 * 修改用户信息
 * @param {string} bookId bookshelfId
 * @returns
 */
export const UpdateUserAPI = params => axios.post('/user/updateUser', qs.stringify(params));

/**
 * 获取全部书籍 1审核 0未审核 空全部
 * @param {string} bookId bookshelfId
 * @returns
 */
export const GetBook2API = params => axios.post('/book/queryAllBook2', qs.stringify(params));

/**
 * 删除用户
 * @param {string} bookId bookshelfId
 * @returns
 */
export const DelUserAPI = params => axios.post('/user/deleteUser', qs.stringify(params));

/**
 * 删除一本书
 * @param {string} bookId bookshelfId
 * @returns
 */
export const DelBookAPI = params => axios.post('/book/deleteBook', qs.stringify(params));

/**
 * 添加一条评论
 * @param {string} bookId bookshelfId
 * @returns
 */
export const AddComAPI = params => axios.post('/comment/addComment', qs.stringify(params));

/**
 * 审核章节
 * @param {string} bookId bookshelfId
 * @returns
 */
export const GetAllChapter2API = params => axios.post('chapter/queryAllChapter2', qs.stringify(params));

/**
 * 根据书籍获取评论
 * @param {string} bookId bookshelfId
 * @returns
 */
export const GetAllCommentAPI = params => axios.post('/comment/queryAllComment ', qs.stringify(params));

/**
 * 删除评论
 * @param {string} bookId bookshelfId
 * @returns
 */
export const DelCommentAPI = params => axios.post('/comment/deleteComment ', qs.stringify(params));

/**
 * 删除章节
 * @param {string} bookId bookshelfId
 * @returns
 */
export const DelChapterAPI = params => axios.post('/chapter/deleteChapter', qs.stringify(params));

/**
 * 搜索框
 * @param {string} bookId bookshelfId
 * @returns
 */
export const GetBookListApi = params => axios.post('/search/select', qs.stringify(params));

/**
 * 更换头像
 * @param {string} bookId bookshelfId
 * @returns
 */
export const ToImgHeadApi = params => axios.post('/user/head', params, { headers: { 'content-type': 'application/x-www-form-urlencoded' } });

/**
 * 书架书籍
 * @param {string} bookId bookshelfId
 * @returns
 */
export const ToContextApi = params => axios.post('/bookShelf/context', qs.stringify(params));

/**
 * 书签
 * @param {string} bookId bookshelfId
 * @returns
 */
export const SetContextApi = params => axios.post('/bookShelf/updateChapterId', qs.stringify(params));
