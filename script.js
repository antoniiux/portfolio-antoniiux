

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky"); // transição da logo, com falha
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // escrita com animação (sessão home)
     var typed = new Typed(".typing", {
         strings:["Analista de Suporte", "Analista de Sistema", "Desenvolvedor"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
});
// Carrosel (sessão projetos)
$('.carousel').owlCarousel({
    margin:20,
    loop:true,
    autoplayTimeOut:2000,
    autoplayHoverPauser:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }
});
