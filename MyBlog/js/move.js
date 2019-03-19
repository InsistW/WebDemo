            var speed;
            var time = null;
            function move(dom,json,callback){
                if(time)clearInterval(time);
                time = setInterval(function(){
                    var mark = true;
                    for(attr in json){
                        var now = parseInt(getStyle(dom,attr));
                        var target = json[attr];
                        var speed = target - now;
                        if(speed>0){
                            speed = Math.ceil((target - now)*.3);
                        }else{
                            speed = Math.floor((target - now)*.3);
                        }
                        if(now != target){
                            box.style[attr] = now + speed +"px";
                            mark = false;
                        }else{
                            if(mark){
                                clearInterval(time);
                            }
                            if(callback){callback.call(dom);}
                        }
                    }
                },1000/30);
            }

            function getStyle(dom,attr){
                return dom.currentStyle?dom.currentStyle[attr]:getComputedStyle(dom)[attr];
            }