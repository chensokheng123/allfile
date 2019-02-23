let app = new Vue({
    el: '#app',
    data:{
        hour:0,
        minute:0,
        second:0,
        check:false,
        timer:'',
        resume:false,
    
    },

    methods:{
        start(){
            this.startTimer();
            this.resume = true;
        },
        pause(){
            clearInterval(timer);
            this.resume = false;
        },
        Resume(){
            this.startTimer();
            this.resume = true;
        },
        reset(){
            this.check = false; 
            this.hour = 0;
            this.second = 0;
            this.minute = 0;
        },
         
        startTimer(){
            if ( this.second < 0 || this.second > 59 || this.minute > 59 || this.minute <0 || this.hour > 99 || this.hour < 0){
                alert('please enter again');
            }else{
                this.check = true;
                    timer = setInterval(() => {
                            if(this.second != 0){
                                this.second--;
                            }
                            if ( this.second == 0 && this.minute != 0)
                            {
                                this.minute--;
                                this.second = 59;
                                
                            }else if ( this.second == 0 && this.minute == 0 && this.hour == 0){
                                clearInterval(timer);
                                if( confirm("It's Time")){
                                    this.check = false;
                                }else{
                                    this.check = false;
                                }
                            } 
                        
                        if ( this.hour != 0 && this.minute == 0 && this.second == 0){
                            this.hour--;
                            this.minute = 59;
                            this.second = 59;
                        }
                    }, 1000);
                    
                
            }
        }
    },
    computed:{
      
       
    }
});