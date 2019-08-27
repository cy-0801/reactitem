import styled from "styled-components"

export const MenuWrapper = styled.div`
    img{
        margin:auto;
    }
    .contain{
        margin-top:.3rem;
        overflow:hidden;
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
    




`