import React,{Component} from 'react';

export default class News extends Component{
    render(){
        return(
            <iframe 
                title='iframe 2'
                src='http://news.baidu.com/' 
                style={{width:'100%',position:'absolute',height:'100%',border:'none'}}
                />
        )
    }
}

