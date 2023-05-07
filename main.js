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

document.querySelector('.navbar_close').addEventListener('onclick', function(){
    document.querySelector('#navbar_wrap').display='none';
});
document.querySelector('#beautyCurly').addEventListener('mouseover',function(){
    document.querySelector('#beautyCurly').style.color='rgb(95, 0, 128)';
});
document.querySelector('#beautyCurly').addEventListener('mouseout',function(){
    document.querySelector('#beautyCurly').style.color='rgb(181, 181, 181)';
});


document.querySelectorAll('.categori_list').addEventListener('mouseover',function(){
    document.querySelectorAll('.categori_list').style.color='rgb(95, 0, 128)';
    document.querySelectorAll('.categori_list').style.textDecoration='underline';
});
document.querySelectorAll('.categori_list').addEventListener('mouseout',function(){
    document.querySelectorAll('.categori_list').style.color='black';
    document.querySelectorAll('.categori_list').style.textDecoration='none';
});