import React from 'react'
import './UserProfileCard.css'
function UserProfileCard(props) {
    return (
        <div class="card PcardSize" >
            <img src ={props.Image} class="card-img-top" alt="profile of user would be shown here"/>
                <div class="card-body">
                    <h5 class="card-text">{props.name}</h5>
                    <h5 class="card-text">{props.rollNum}</h5>
                    <p class="card-text">{props.arg3}</p>
                    <p class="card-text">{props.arg4}</p>
                    <p class="card-text">{props.arg5}</p>
                </div>
        </div>
    )
}

export default UserProfileCard