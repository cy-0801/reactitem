import http from "@utils/http";
//首页
export const index_header = (latitude=40.064445,longitude=116.349815)=>http("GET","/pizza/shopping/restaurants/batch_filter",{
    latitude:latitude,
    longitude:longitude,
    terminal:"h5"
})
// /restapi/shopping/v2/entries?latitude=40.064445&longitude=116.349815&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5
export const home_iconList = ()=>http("GET","/restapi/shopping/v2/entries?latitude=40.064445&longitude=116.349815&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5",{
    
})
// /restapi/shopping/v3/restaurants?latitude=40.064445&longitude=116.349815&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5
export const goods_list = ()=>http("GET","/restapi/shopping/v3/restaurants?latitude=40.064445&longitude=116.349815&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5",{

})
// /swarm/v2/hot_search_words?latitude=40.064445&longitude=116.349815
export const search = ()=>http("GET","/restapi/swarm/v2/hot_search_words?latitude=40.064445&longitude=116.349815",{

})
// https://h5.ele.me/restapi/shopping/v1/typeahead?kw=as&latitude=40.064445&longitude=116.349815&city_id=3
// export const searchtext = (text)=>http("GET","/restapi/shopping/v1/typeahead?kw="+text+"&latitude=40.064445&longitude=116.349815&city_id=3",{})
export const searchtext = ()=>http("GET","/restapi/shopping/v1/typeahead?kw=as&latitude=40.064445&longitude=116.349815&city_id=3",{})
