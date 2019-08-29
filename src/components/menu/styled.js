import styled from "styled-components"

export const MenuWrapper = styled.div`
    img{
        margin:auto;
    }
    .contain{
        margin-top:.3rem;
        overflow:hidden;
        border-bottom:2px solid #ccc;
        p:nth-child(1){
            font-size:.3rem;
            font-weight:900;
            padding-left:.3rem;
        }
        ul{
            padding-left:.3rem;
            display:flex;
            flex-wrap:nowrap;
            li{
                img{
                    width:2.4rem;
                    height:2.4rem;
                }
                p:nth-child(2){
                    width:100%;
                    color: #333;
                    font-size:.3rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                p:nth-child(3){
                    color: #999;
                    font-size: .266667rem;
                    margin-bottom: .186667rem;
                    min-height: 1em;
                    span:nth-child(1){
                        margin-right:.2rem;
                    }
                }
                p:nth-child(4){
                    color: rgb(255, 83, 57);
                    font-size:.3rem;
                }
            }
        }
    }
    .contain_1{
        display:flex;
    }
    .aside{
        width:2rem;
        float:left;
        ul{
            width:100%;
            border-right:1px solid #ccc;
            li{
                border-bottom:1px solid #ccc;
                font-size:.3rem;
                width:100%;
                height:1rem;
                line-height:1rem;
                text-align:center;
            }
        }
    }
    .contain_1_right{
        width:100%;
        flex:1;
        background:block;
        ul{
            li{
               float:left;
               margin-bottom:.1rem;
                img{
                    width:2rem;
                    height:2rem;
                    float:left;
                    margin-right:.2rem;
                }
                div{
                    margin-left:.2rem;
                    flex:1;
                    
                    p:nth-child(1){
                        font-size:.3rem;
                        font-weight:900;
                    }
                    p:nth-child(2){
                        width:50%;
                        white-space:nowrap;
                        overflow:hidden;
                        text-overflow:ellipsis;
                    }
                    p:nth-child(3){
                        margin-top:.1rem;
                    }
                    p:nth-child(4){
                        font-size:.3rem;
                        color:red;
                        margin-top:.2rem;
                        span:nth-child(1){
                            float:left;
                        }
                        span:nth-child(2){
                            float:right;
                            font-size:.4rem;
                            margin-right:.3rem;
                        }
                    }
                }
                
            }
        }
    }
    .active{
        background:#ccc;
    }




`