
document.getElementById("btn-Tim").onclick = function (){
    var num = document.getElementById("txtNum").value*1;
    var listNguyenTo = timSoNguyenTo(num);
    console.log(listNguyenTo);
}
function timSoNguyenTo (num){
    var soNguyenTo = [];
    for (var i = 0; i <= num; i++){
        if (i === 2) {
            soNguyenTo.push(i);
        } else if( i > 2) {
            var kiemtra = true;
            for (var j = 2; j < i; j++){
                if(i % j === 0){
                    kiemtra = false;
                    break;
                } else {
                    continue;
                }
            }
            if(kiemtra){
                soNguyenTo.push(i);
            }
        }
    }
    return soNguyenTo;
}