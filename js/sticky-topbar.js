
!function(){
    var view=document.querySelector('nav')
    var controller={
        view:null,
        init:function(view){
            this.view=view
            this.bindEvents()
        },
        bindEvents:function(){
            this.view=view
            window.addEventListener('scroll',(x)=>{
                if(scrollY>533){
                    view.classList.add('sticky');
                    view.querySelector('.footer').style.boxShadow='none';
                }else{
                    view.classList.remove('sticky');
                    view.querySelector('.footer').style.boxShadow=' 0px 3px 5px 0px rgba(0,0,0,0.3)';
                }
            })
        },
    }
    controller.init(view) 

}.call()

