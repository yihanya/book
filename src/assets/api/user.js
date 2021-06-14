/*
 * @name: 易寒鸦
 * @Description:
 * @Date: 2021-05-08 08:44:53
 * @LastEditTime: 2021-05-08 09:49:32
 * @FilePath: \vuebook\src\assets\api\user.js
 */
export function login(loginFrom) {
    this.axios({
        method: 'post',
        url: 'http://73n9179695.imdo.co/user/login',
        data: {
            loginfrom: loginFrom,
        },
    });
}
