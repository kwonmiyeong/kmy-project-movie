
import React, { Component } from 'react';
import '../css/Pagination.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class Pagination extends Component {

    constructor(props){
        super(props);
        this.state={
            loading:this.props.loading,
            movieLen:this.props.movieLen,
            postsPerPage:this.props.postsPerPage,
            clicked:false,
        }

    }

    setCurrentPage=(page)=>{
        alert(page);
        this.props.setCurrentPage(page);
    }

    prevPage=()=>{
        const currentPage=this.props.currentPage
        if(currentPage===1){
            alert("이동불가!")
            return
        }
        this.props.setCurrentPage(currentPage-1);
    }

    nextPage=()=>{
        const currentPage=this.props.currentPage
        const {movieLen,postsPerPage}=this.props;
        const lastPage=Math.ceil(movieLen / postsPerPage)
        if(currentPage===lastPage){
            alert("이동불가!")
            return
        }
        this.props.setCurrentPage(currentPage+1);
    }

    render(){
        let pageNumbers = [];
        const {movieLen,postsPerPage,currentPage}=this.props;
        console.log("pn:"+movieLen);
        console.log("pn:"+postsPerPage);
        for (let i = 1; i <= Math.ceil(movieLen / postsPerPage); i++) {
        pageNumbers.push(i);
        }
        console.log(pageNumbers);

        const pageList=pageNumbers.map((page,i)=>(
        <span className={currentPage==page? "active":""} id="page" onClick={()=>this.setCurrentPage(page)} key={i}>
            {page}
        </span>
            )
        );
        
        return (
    <div id="Pagination">
        <div id="page_list">
            <span id="page" onClick={this.prevPage}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </span>
                {pageList}
            <span id="page" onClick={this.nextPage}>
                <FontAwesomeIcon icon={faChevronRight} />
            </span>
        </div>
    </div>
        );
    }
}

export default Pagination;
