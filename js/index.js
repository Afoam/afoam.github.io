var totalCount = 8;
function ChangeAd() 
{
var num = Math.ceil( Math.random() * totalCount );
document.body.background = 'html/img/banner/'+num+'.gif';
document.body.style.backgroundRepeat = "repeat";// Background repeat
}