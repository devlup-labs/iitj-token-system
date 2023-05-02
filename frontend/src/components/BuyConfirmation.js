import React from 'react'

function BuyConfirmation() {
    return (
        <>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Description of the coupon</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Description about the coupon
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Buy </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Buy</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Enter Your LDAP password</label>
                                {/* <input type="text" class="form-control" id="recipient-name"/> */}
                                <input type={'password'} class="form-control" id="recipient-name" placeholder="Password"/>
                            </div>
                            {/* <div class="mb-3">
                                <label for="message-text" class="col-form-label">Message:</label>
                                <textarea class="form-control" id="message-text"></textarea>
                            </div> */}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Are You Sure</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-info" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Buy</button>
        </>
    )
}

export default BuyConfirmation