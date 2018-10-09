import { Pagination } from "antd";

export default {
    formatDate (time) {
        let date = new Date(time);
        return date.getFullYear()+"-" + ( date.getMonth()+1) + "-" + date.getDate()+' ' + date.getHours() + ":" + date.getMinutes() +":"+date.getSeconds();
    },

    pagination (data,callback) {
        return {
                onChange:(current)=>{
                    callback(current)
                },
                current:data.data.page,
                pageSize:data.data.page_size,
                total:data.data.total,
                showToal: ()=>{
                    return `共${data.data.total}条`
                },
                showQuickJumper:true
        }
    }
}