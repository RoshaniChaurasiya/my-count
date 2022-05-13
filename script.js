const start = document.getElementById('start');
const btns = document.querySelectorAll('.btn');

let count = 0;


btns.forEach(function(btn){
    btn.addEventListener('click',function(e){

        const styles = e.currentTarget.classList;    

        //For the counting
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        
        //For the color
        if(count>0){
            start.style.color = 'green';
        }
        else if(count<0){
            start.style.color = 'orange';
        }
        else{
            start.style.color = 'yellow';
        }

        start.textContent = count;
    })
})