AFRAME .registerComponent('page-controls',{
    schema:{
        pages:{type:'array',default:[
            {
                page:'image1',
                color:'grey'
            },
            {
                page:'image2',
                color:'grey'
            },
            {
                page:'image3',
                color:'grey'
            },
            {
                page:'image4',
                color:'grey'
            },
            {
                page:'image5',
                color:'grey'
            },
        ]},
        pageIndex:{type:'int',default:0}
    },
    init:function(){
        var pageel=this.pageel=document.querySelector('[layer]');
        pageel.object3D.position.set(0,1.8,-2.5);
        var pageIndex=this.data.pageIndex;
        window.addEventListener('keydown',(e)=>{
            if(e.key==="ArrowRight" & pageIndex<4){
                pageIndex+=1;
                this.turnPage(pageIndex)

            }
            if(e.key==="ArrowLeft" & pageIndex>0){
                pageIndex-=1;
                this.turnPage(pageIndex)
                
            }
        })
        
    },
    turnPage:function(pageIndex){
        var pages=this.data.pages;
        var pageId=pages[pageIndex].page;
        var color=pages[pageIndex].color;
        this.pageel.setAttribute('layer','src','#'+pageId);
        this.el.sceneEl.setAttribute('background','color',color)
    }
})