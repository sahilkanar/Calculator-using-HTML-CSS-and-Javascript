
class calc{
    calc(val){
        self.res="";
        self.res=document.getElementById('i1').value+=val;
        
    }

    equals(){
        document.getElementById('i1').value=eval(self.res);
}
}


var c = new calc()