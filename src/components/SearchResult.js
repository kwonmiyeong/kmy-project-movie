import '../css/SearchResult.css';
import { Component } from 'react';
import queryString from 'query-string';
import axios from 'axios';

class SearchResult extends Component{
    constructor(props){
        super(props)
        this.state={

        }
      }

    componentDidMount(){
        //dom이 완성되면 자동호출
        console.log(window.location) //location객체 안에는 수많은 속성값이 있다~
        console.log(window.location.search)// "?query = hello"
        //search : "?query=hello&encoding=utf-8"

        const queryObj = queryString.parse(window.location.search)
        //결과에 다담겨져있다. {query:'hello', encdong:'utf-8'}
        console.log(queryObj)//JSON
        console.log(queryObj.query)//'hello'
        const searchText=queryObj.query
        this.getData(searchText)
    }

    getData=async(searchText)=>{
        console.log('getData!')
        console.log(searchText)
        //axios~ 서버에서 데이터 받아온다
        //yts, naver검색 api 활용
        //XMLHttpRequest -> $.ajax -> axios
        const result = await  axios({
            method:'get',
            url:`/v1/search/book.json?query='${searchText}`,
            dataType:'json',
            headers:{
                "X-Naver-Client-Id":'xcg6wJE6EGTmYbaxG0l5',
                "X-Naver-Client-Secret":'KP4WB6my35'
            }
        })
        console.log(result)//object
        //object에서 우리가 원하는 배열 데이터만 뽑아내서 state에 저장~
        //페이지네이션 구조로 되게~
    }

    render(){
        return(
            <div id='search-result'>
                검색결과
            </div>
        )
    }
}

export default SearchResult;