
/**
 * 获取外侧圆的指定数量的坐标
 * a中心点的x坐标 b中心点的y坐标 r半径 w数量
 */
function 外侧(w){
    let a=360,b=638,x,y
    let m=(2*Math.PI)/w,r=119

    for (let i = 0; i < w; i++) {

        x= a+r*Math.sin(m*i)
        y = b+r*Math.cos(m*i)
        wq.push(x+","+y)
    }
    logd(wq.filter(d=>d));

}
/**
 * 获取内侧圆的指定数量的坐标
 * a中心点的x坐标 b中心点的y坐标 r半径 w数量
 */
function 内侧(w){
    let a=360,b=638,x,y
    let m=(2*Math.PI)/w,r=95

    for (let i = 0; i < w; i++) {

        x= a+r*Math.sin(m*i)
        y = b+r*Math.cos(m*i)
        nq.push(x+","+y)
    }
    logd(nq.filter(d=>d));

}

/**
 * 比较两点rgb的相似度
 * r1 rgb
 */


function xs(r1) {

    let r= r1.split(",")

    r3 = (r[0] - r[3]) / 256
    g3 = (r[1] - r[4]) / 256
    b3 = (r[2] - r[5]) / 256
    diff = 1-Math.sqrt(r3 *r3 + g3 *g3 + b3 * b3)
    // logd(diff);
    if (parseFloat(diff)>parseFloat(0.72) ){
        return true
    }
    return false
}