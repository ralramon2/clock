let minutes = 0;
let seconds = 0;
let tenMillis = 0;
const appendTens = document.getElementById("tenMillis");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
const buttonStart = document.getElementById("bt__start");
const buttonStop = document.getElementById("bt__stop");
const buttonReset = document.getElementById("bt__reset");

let intervalId;



buttonStart.onclick = function(){
    clearInterval(intervalId)
    /*우리가 실수로 스타트 버튼 두번 두르면 아이디 두번 생성되니까 삭제되는 것도 넣어줘야 함*/ 
    intervalId = setInterval(operateTimer,10)
}
/*버튼 스탑 클릭 -> clearInterval로  반복실행함수값 제거 */
buttonStop.onclick = function(){
    clearInterval(intervalId)
}

buttonReset.onclick = function(){
    clearInterval(intervalId)
    tenMillis = 0; seconds = 0; minutes = 0;
    appendTens.textContent = "00"
    appendSeconds.textContent = "00"
    appendMinutes.textContent = "00"
    appendhours.textContent = "00"
}



// 10ms 마다 숫자 증가  . 
function operateTimer(){
    tenMillis++;
    appendTens.textContent = tenMillis > 9 ? tenMillis : '0' + tenMillis
    // tenMillis가 9보다 크면 2자리 수 
//1000 ms가 1초임 ->  tenMillis가 100개 되면 초가 올라감 
    if(tenMillis > 99){
        seconds++;
        appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds
        // 이제 이거 올라갔으니까 다시 미리초도 처음부터 초기화 
        tenMillis = 0;
        appendTens.textContent = "00"
    }
    if(seconds > 59){
        minutes++;
        appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes
        // 이제 이거 올라갔으니까 다시 미리초도 처음부터 초기화 
        seconds = 0;
        appendSeconds.textContent = "00"
    }
    if(minutes > 59){
        hours++;
        appendhours.textContent = hours > 9 ? hours : '0' + hours
        // 이제 이거 올라갔으니까 다시 미리초도 처음부터 초기화 
        minutes = 0;
        appendMinutes.textContent = "00"
    }

}




