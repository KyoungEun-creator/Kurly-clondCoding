document.querySelector('#customer-center').addEventListener('mouseover',function(){
    if (document.querySelector('#cust-center').style.display='none'){
        document.querySelector('#cust-center').style.display='block';
    }
})
document.querySelector('#customer-center').addEventListener('mouseout',function(){
    if (document.querySelector('#cust-center').style.display='block'){
        document.querySelector('#cust-center').style.display='none';
    }
})