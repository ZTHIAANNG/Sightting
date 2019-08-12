var obj = {



    click: function(el, callback) {
        var time = 0;
        var flag = true;

        el.addEventListener('touchstart', function() {
            time = new Date() * 1;
            // console.log('按下')
        })


        el.addEventListener('touchmove', function() {
            // console.log('移动');
            flag = false;
        })



        el.addEventListener('touchend', function() {
            var endtime = new Date() * 1
            if ((endtime - time) < 150 && flag) {
                callback && callback(el);
            }
            time = 0;
            flag = true;
            // console.log('抬起')
        })




    },

    //滑动

    /**
     * 
     * @param {实参} el 
     * @param {方向} direction 
     * @param {回调函数} callback 
     */

    //获取起始坐标
    //获取起始差值
    //水平差>垂直差：水平平移    or 垂直平移；
    //根据差值的正负判断上下左右

    slide1: function(el, direction, callback) {
        var startpoint = null; //开始坐标
        var endpoint = null; //结束坐标


        el.addEventListener("touchstart", function(e) {
            var Point = e.touches[0];

            startpoint = {
                    x: Point.clientX,
                    y: Point.clientY

                }
                // console.log(startpoint);
        })
        el.addEventListener("touchmove", function(e) {
            var Point = e.touches[0];
            endpoint = {
                    x: Point.clientX,
                    y: Point.clientY

                }
                // console.log(endpoint);
        });
        el.addEventListener("touchend", function() {
            //坐标点判断
            if (startpoint && endpoint && count(startpoint, endpoint) == direction) {
                callback && callback();
            }


        })



        function count(startpoint, endpoint) {
            var text = null;
            var diffX = endpoint.x - startpoint.x; //差值
            var diffY = endpoint.y - startpoint.y;

            var absX = Math.abs(diffX); //绝对值
            var absY = Math.abs(diffY);

            // console.log(absX, absY)

            if (absX > 30 || absY > 30) { //s水平
                if (absX > absY) { //水平
                    text = diffX > 0 ? 'right' : 'left';
                } else { //垂直
                    text = diffY > 0 ? 'bottom' : 'top';
                }
            }
            return text;
            // console.log(text)


        }
        startpoint = null; //开始坐标
        endpoint = null; //结束坐标

    }

}