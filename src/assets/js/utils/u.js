/*
 * @name: 易寒鸦
 * @Description:C
 * @Date: 2021-05-10 18:48:24
 * @LastEditTime: 2021-05-27 15:52:22
 * @FilePath: \vuebook\src\assets\js\utils\u.js
 */
/**
 * 整理书籍结构 (整理分卷)
 * @param {数组} arr //用于归类的数组
 * @returns //分类完毕的数组
 */
export function guilei(arr) {
    let list = [
        {
            volumeName: '',
            chapter: [],
        },
    ];
    let volumeNames = []; //所有分卷

    for (let i = 0; i < arr.length; i++) {
        if (volumeNames.indexOf(arr[i].volumeName) == -1) {
            volumeNames.push(arr[i].volumeName);
        }
    }
    for (let i = 0; i < volumeNames.length; i++) {
        list[i].volumeName = volumeNames[i];
    }

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let k = 0;
            if (list[i].volumeName == arr.volumeName) {
                list[i].chapter.push(arr[i]);
            }
        }
    }
    return list;
}

/**
 * @param {} arr,id
 * @returns 上一章ID
 */
export function Next_chapter(arr, id) {
    let an = -1;
    for (let i = 0; i < arr.length - 1; i++) {
        if (id == arr[i].id) {
            an = arr[i + 1].id;
            return an;
        }
    }
    return an;
}

/**
 * @param {} arr
 * @returns 下一章ID
 */
export function Previous_chapter(arr, id) {
    let an = -1;
    for (let i = 1; i < arr.length; i++) {
        if (id == arr[i].id) {
            an = arr[i - 1].id;
            return an;
        }
    }
    return an;
}

// /**
//  * 对象转fromdate
//  * @param {} arr
//  * @returns 下一章ID
//  */
// export function tofromdate(arr, book) {
//     let an = -1;
//     for (let i = 1; i < arr.length; i++) {
//         if (id == arr[i].id) {
//             an = arr[i - 1].id;
//             return an;
//         }
//     }
//     return an;
// }
