import React, { Component, ReactPropType} from 'react'


class ContactCards extends Component{

    constructor(props){
        super(props)
        this.state = {
            contactName1: "Bruno",
            phoneNumber1: "555-555-5555",
            email1: "yadayadayada@apple.com",
            workNo1: "111-111-1111",

            contactName2: "Jessica",
            phoneNumber2: "666-666-6666",
            email2: "nomnomnom@microsoft.com",
            workNo2: "222-222-2222",

            contactName3: "Alina",
            phoneNumber3: "777-666-5555",
            email3: "lololololol@google.com",
            workNo3: "333-333-3333"
        }

    }

    render(){
        return (
            <div id = "g2">
                <h1> Contact1:</h1>
                <h2>Contact Name: {this.state.contactName1}</h2>
                 <h2>email: {this.state.email1}</h2>
                 <h2>phonenumber: {this.state.phoneNumber1}</h2>
                 <h2>workNo1: {this.state.workNo1}</h2>
                 <br />

                 <h1> Contact2:</h1>
                 <h2>Contact Name: {this.state.contactName2}</h2>
                 <h2>email2: {this.state.email2}</h2>
                 <h2>phonenumber2: {this.state.phoneNumber2}</h2>
                 <h2>workNo2: {this.state.workNo2}</h2>
                 <br />

                 <h1> Contact3:</h1>
                 <h2>Contact Name: {this.state.contactName3}</h2>
                 <h2>email3: {this.state.email3}</h2>
                 <h2>phonenumber3: {this.state.phoneNumber3}</h2>
                 <h2>workNo3: {this.state.workNo3}</h2>
            </div>
        )
    }

}

export default ContactCards