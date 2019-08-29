import React, { Component } from 'react'
import {MenuWrapper} from "./styled"
import {NavLink} from "react-router-dom"

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
                <div className="contain_1">
                    <div className="aside">
                        <ul>
                            <li><NavLink to="">a</NavLink></li>
                            <li><NavLink to="">a</NavLink></li>
                            <li><NavLink to="">a</NavLink></li>
                            <li><NavLink to="">a</NavLink></li>
                            <li><NavLink to="">a</NavLink></li>
                            <li><NavLink to="">a</NavLink></li>
                        </ul>
                    </div>
                    <div className="contain_1_right" >
                        <ul>
                            <li>
                                <img src="https://cube.elemecdn.com/d/ba/4c4d2eb4283d071e548e7ec0b2da7jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp" alt=""/>
                                <div>
                                    <p>日月潭珍珠奶茶</p>
                                    <p>香蕴浓情、玉满杯心?
                                    主要原料：黑糖珍珠</p>
                                    <p>
                                        <span>月售999份</span>
                                        <span>好评率99%</span>
                                    </p>
                                    <p>
                                        <span>￥19</span>
                                        <span>+</span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <img src="https://cube.elemecdn.com/d/ba/4c4d2eb4283d071e548e7ec0b2da7jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp" alt=""/>
                                <div>
                                    <p>日月潭珍珠奶茶</p>
                                    <p>香蕴浓情、玉满杯心?
                                    主要原料：黑糖珍珠</p>
                                    <p>
                                        <span>月售999份</span>
                                        <span>好评率99%</span>
                                    </p>
                                    <p>
                                        <span>￥19</span>
                                        <span>+</span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <img src="https://cube.elemecdn.com/d/ba/4c4d2eb4283d071e548e7ec0b2da7jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp" alt=""/>
                                <div>
                                    <p>日月潭珍珠奶茶</p>
                                    <p>香蕴浓情、玉满杯心?
                                    主要原料：黑糖珍珠</p>
                                    <p>
                                        <span>月售999份</span>
                                        <span>好评率99%</span>
                                    </p>
                                    <p>
                                        <span>￥19</span>
                                        <span>+</span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </MenuWrapper>
        )
    }
}
