import React, { Component } from 'react'
import {MenuWrapper} from "./styled"

export default class Menu extends Component {
    render() {
        return (
            <MenuWrapper>
                <img src="https://cube.elemecdn.com/c/ee/0ff37756e579124417602260a2b7apng.png?x-oss-process=image/format,webp/resize,w_686" alt=""/>
                <div className="contain">
                    <p>商家推荐</p>
                    <ul>
                        <li>
                            <img src="https://cube.elemecdn.com/8/e1/045f74d851c1f35b0d9f7f66c6f64png.png?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp" alt=""/>
                            <p>芝士虾滑</p>
                            <p>
                                月售<span>8</span>
                                好评率<span>0%</span>
                            </p>
                            <p>￥<span>31</span></p>
                        </li>
                        <li>
                            <img src="https://cube.elemecdn.com/8/e1/045f74d851c1f35b0d9f7f66c6f64png.png?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp" alt=""/>
                            <p>芝士虾滑</p>
                            <p>
                                月售<span>8</span>
                                好评率<span>0%</span>
                            </p>
                            <p>￥<span>31</span></p>
                        </li>
                    </ul>
                </div>
                
            </MenuWrapper>
        )
    }
}
