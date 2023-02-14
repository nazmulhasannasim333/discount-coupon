const buyNowBtn = document.getElementsByClassName('buy-now-button')

for(let btn of buyNowBtn){
    btn.addEventListener('click', function(){
        window.location.href = 'apply-coupon.html'
    })
}