import React, { Component } from 'react'
import { SearchWrapper } from "./styled"
import {search} from "@api/home"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./connect"

class Search extends Component {
    state={
        list:[]
    }
    render() {
        let {list} = this.state;
        let {text} = this.props
        return (
            <SearchWrapper>
                <Link className="back" to="/home">返回</Link>
                <div className="search">
                    <span>
                        <i className="iconfont">&#xe60b;</i>
                        <input type="text" value={text} placeholder="请输入内容" onChange={this.props.handlerSearch.bind(this)}/>
                    </span>
                    <span onClick={this.props.serHandler.bind(this)}>搜索</span>
                </div>
                
                <div className="title000">热门搜索</div>
                <ul>
                    {
                        list.map((item,index)=>(
                            <li key={index}>{item.word}</li> 
                        ))
                    }
                </ul>
            </SearchWrapper>
        )
    }
    
    async componentDidMount(){
        let data = await search();
        this.setState({
            list:data
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)