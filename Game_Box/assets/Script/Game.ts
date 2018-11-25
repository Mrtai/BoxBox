// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Canvas)
    cv: cc.Canvas= null;
    @property(cc.Node)
    Player1: cc.Node = null;
    @property(cc.Node)
    Player2: cc.Node = null;
    @property(cc.Prefab)
    khoi_pre: cc.Prefab = null;
    @property ()
    speed: number = 0;
    @property ()
    speed_e: number = 0;
    @property
    text: string = 'hello';
    flag: boolean = null;
    flag_2: boolean = null;
    time : number = 0;
    flag1: boolean = null;
    flag2: boolean = null;
    dem: number= null;
    right: boolean= null;
    left: boolean= null;
    // LIFE-CYCLE CALLBACKS:
    
    setInput(){
        //cc.log("Hello");
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,function(event){
            switch (event.keyCode) {
                case cc.KEY.a:
                    this.flag2 = true;
                    break;
                case cc.KEY.d:
                    this.flag1= true;
                default:
                    break;
            }
        },this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,function(event){
            switch (event.keyCode) {
                case cc.KEY.a:
                    this.flag2 = false;
                    break;
                case cc.KEY.d:
                    this.flag1= false;
                default:
                    break;
            }
        },this)
    }
    getNewBoxPosition()
    {
        
        var RandY = 400;
        var RandX = -86;
        return cc.p(RandX,RandY);
        
    }

    spawNewStarPosition()
    {
        //cc.log("vaof spaw");
        var newBox = cc.instantiate(this.khoi_pre);
        this.cv.node.addChild(newBox);
        newBox.setPosition(this.getNewBoxPosition());
       // newBox.getComponent('Khoi').game = this;
    }
    getNewBoxPosition2()
    {
        
        var RandY = 400;
        var RandX = 60;
        return cc.p(RandX,RandY);
        
    }

    spawNewStarPosition2()
    {
        //cc.log("vaof spaw");
        var newBox = cc.instantiate(this.khoi_pre);
        this.cv.node.addChild(newBox);
        newBox.setPosition(this.getNewBoxPosition2());
        newBox.getComponent('Khoi').game = this;
    }
    onLoad () {
       this.time = 0;
       this.flag = false;
       this.flag_2= false;
       this.setInput();
       this.dem = 0;
       this.spawNewStarPosition();
       this.spawNewStarPosition2();
    }

    start () {


    }

     update (dt) {
        this.time += 0.1;
        //cc.log("Time= "+this.time);
        //cc.log(this.Player2.x);
        if(Math.floor(this.time) == 10){
            //cc.log("Vô");
            this.spawNewStarPosition();
            this.spawNewStarPosition2();
            this.time = 0;
        }
        if(this.flag1){
            this.flag = true;
            this.left = false;
        }
        if(this.flag)
        {
            if(this.Player1.x == 60)
                this.flag = false;
            if(this.Player1.x == 180){
                this.left = true;
            }
            if(!this.left){
                this.Player1.x += this.speed;
            }
            else {
                this.Player1.x -= this.speed;
            }
        }
        if(this.flag2){
            this.flag_2 = true;
            this.right = false;
        }
        if(this.flag_2){
            cc.log(this.right);
            if(this.Player2.x == -86)
                this.flag_2 = false;
            if(this.Player2.x == -206){
                this.right = true;
            }
            if(!this.right){
                //cc.log("left");
                this.Player2.x -= this.speed;
            }
            else {
                //cc.log("Right");
                this.Player2.x += this.speed;
                this.right = true;
            }
        }
       
     }
}
