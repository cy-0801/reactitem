

export const mapStateToProps = (state) => {
    return {
        text : state.search.text
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        handlerSearch(e){
            // console.log(e.target.value)
            let action = {
                type:"AAA",
                value:e.target.value
            }
            dispatch(action)
        },
        serHandler(){
            console.log(this.props.text,"搜索接口不能用")
        }
    }
}