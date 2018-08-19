import React, {Component} from "react"
import {connect} from "react-redux"
import Slick from "react-slick"



class ParticipantsList extends Component {

    componentDidMount(){
        this.checkWindowSize()
        window.addEventListener("resize", this.checkWindowSize)
    }

    state = {
        curPage: 0,
        perPage: 6,
    }

    checkWindowSize = () =>{
        if (window.innerWidth > 1280 && window.innerHeight < 1000 && this.props.participants.length){
            console.log(window.innerHeight);

            if(window.innerHeight >= 900){
                this.setState({perPage: 5, curPage: 0})
            } else if(window.innerHeight >= 750){
                this.setState({perPage: 4, curPage: 0})
            }else  if (window.innerHeight >= 500){
                this.setState({perPage: 3, curPage: 0})
            }
        }else if(this.state.perPage !== 6){
            this.setState({perPage: 6, curPage: 0})
        }
    }

    pageClick = (e) => {
        let val = parseInt(e.currentTarget.getAttribute("data-value"), 10);
        if (this.state.curPage === val) {
            return
        }
        this.setState({curPage: val})
    }

    checkCurPage = (page) => {
        return parseInt(page, 10) === this.state.curPage ? "leaders__nav-item leaders__nav-item--active" : "leaders__nav-item"
    }

    createPaginate = (checkSlider = false) => {
        let pagesCount = Math.ceil(this.props.participants.length / this.state.perPage)
        if (pagesCount === 1) {
            return
        }
        let pagination = [];
        for (let i = 0; i < pagesCount; i++) {
            pagination[i] = i;
        }
        if(checkSlider){
            return pagesCount > 6
        }
        return pagination.map((page) => {
            return (
                <div data-value={page} className={this.checkCurPage(page)} onClick={this.pageClick} key={page}>
                </div>
            )
        })
    }

    sortlist = () => {
        let partSort = [...this.props.participants];
        partSort.sort((a, b) => b.score - a.score);

        return partSort
    }
    showList = () => {
        const curPage = this.state.curPage;
        const perPage = this.state.perPage;

        if (!this.props.participants.length) {
            return (

                <div className="leaders__havent">
                    Пока нет участников
                </div>
            )
        }
        let participantsSorted = this.sortlist();
        return participantsSorted.slice(curPage * perPage, (curPage + 1) * perPage).map((participants,
                                                                                         index) => {
            return (
                <div className="leaders__item" key={index}>
                    <div className="leaders__info">
                        <div className="leaders__item-name">
                            {participants.name}

                        </div>
                        <div className="leaders__item-score">
                            {participants.score} очков

                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        const curPage = this.state.curPage
        const isSlider = this.createPaginate(true)
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            draggable: false,
            centerMode: false,
            arrows: true,
            ariableWidth: true,
            swipe: false,
        }
        return (
            <div className="leaders">
                <div className="leaders__head">
                    Лидеры
                </div>
                <div className="leaders__content">
                    <div
                        className={curPage === 0 ? "leaders__items-wrap leaders__items-wrap--winners" : "leaders__items-wrap"}>
                        {this.showList()}
                    </div>
                    <div className="leaders__nav">
                        {isSlider && <Slick ref={slider => (this.slider = slider)} {...settings}>
                            {this.createPaginate()}
                        </Slick>}
                        {!isSlider && this.createPaginate()}
                    </div>
                </div>

            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        participants: state.participantsInit.participants
    }
}

export default connect(MapStateToProps)(ParticipantsList)