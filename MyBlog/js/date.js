            function date(){
                var timer = document.getElementById("timer");
                var dater = document.getElementById("dater");
                var weekend = document.getElementById("weekend");
                var a = new Array("日", "一", "二", "三", "四", "五", "六");
                //日历时间获取
                setInterval(function(){
                    var time = new Date();
                    var year = time.getFullYear();
                    var month = time.getMonth();
                    var day = time.getDate();
                    var week = time.getDay();
                    var hour = time.getHours();
                    var min = time.getMinutes();
                    var sec = time.getSeconds();
                    // console.log(year+"年"+(month+1)+"月"+day+"日"+hour+"时"+min+"分"+sec+"秒"+"星期"+week);
                    if(min<10)min = "0" + min;
                    if(sec<10)min = "0" + min;
                    timer.innerHTML = hour+"："+min+"："+sec;
                    dater.innerHTML = year+"年"+(month+1)+"月"+day+"日";
                    weekend.innerHTML = "星期"+a[week];
                },1000)
            }