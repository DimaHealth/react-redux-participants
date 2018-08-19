import React, {Component} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faStar, faAnchor, faHeart } from '@fortawesome/free-solid-svg-icons'

const trophy = <FontAwesomeIcon  icon={faTrophy} />
const star = <FontAwesomeIcon  icon={faStar} />
const heart = <FontAwesomeIcon  icon={faHeart} />
const anchor = <FontAwesomeIcon  icon={faAnchor} />

class Menu extends Component{

    state = {
        active: "trophy"
    }

    handleChangeActive = (e) =>{
        let val = e.currentTarget.getAttribute("data-value")
        if (this.state.active === val){
            return
        }
        this.setState({active: val})
    }

    isActive = (val) =>{
        return this.state.active === val ? "menu__nav-item menu__nav-item--active " : "menu__nav-item"
    }

    render(){

        return(
            <div className="menu">
                <div className="menu__circles">
                    <span className="menu__circles-red"></span>
                    <span className="menu__circles-grey"></span>
                </div>
                <div className="menu__nav js-nav-items">
                    <div data-value="trophy" onClick={this.handleChangeActive}
                         className = {this.isActive("trophy")} >
                        {trophy}
                    </div>
                    <div data-value="star" onClick={this.handleChangeActive}
                         className = {this.isActive("star")} >
                        {star}
                    </div>
                    <div data-value="heart" onClick={this.handleChangeActive}
                         className = {this.isActive("heart")} >
                        {heart}
                    </div>
                    <div data-value="anchor" onClick={this.handleChangeActive}
                         className = {this.isActive("anchor")} >
                        {anchor}
                    </div>
                </div>
            </div>

        )
    }
}


export default Menu