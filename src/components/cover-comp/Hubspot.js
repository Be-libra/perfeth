import React from 'react'
import HubspotForm from 'react-hubspot-form'

function Hubspot() {
    return (
        <div style={{position:'absolute',top:'60%',left:'50%', width:'80%',transform:'translate(-50%,-50%)'}}>
            <HubspotForm
                portalId='9292665'
                formId='bbfe65f8-b568-4ee5-b869-539871c1c7d8'
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div style={{marginTop:'30%',fontSize:'42px'}}>Loading...</div>}
            />
        </div>
    )
}

export default Hubspot
