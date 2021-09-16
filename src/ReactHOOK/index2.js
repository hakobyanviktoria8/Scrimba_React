import React, {useState} from "react"

function UseState3() {
    const [inputData, setInputData] = useState({firstName: "", lastName: ""})
    const [contactsData, setContactsData] = useState([])

    function handleChange(event) {        // update our inputData state        // const {name, value} = event.target
        const {name, value} = event.target
        setInputData(prevInputData => ({...prevInputData, [name]: value}))
    }

    function handleSubmit(event) {
        event.preventDefault()
        setContactsData(prev => [...prev, inputData])
    }

    console.log(inputData, contactsData);
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="First Name"
                    name="firstName"
                    value={inputData.firstName}
                    onChange={handleChange}
                />
                <input
                    placeholder="Last Name"
                    name="lastName"
                    value={inputData.lastName}
                    onChange={handleChange}
                />
                <br/>
                <button>Add contact</button>
            </form>
            {/*{contacts}*/}
            {/*<p>{contactsData[0].firstName} {contactsData[0].lastName}</p>*/}
            {
                contactsData?.map((x, idx) => (
                        <div key={idx}>
                            <p>{x.firstName} {x.lastName}</p>
                        </div>
                    )
                )
            }
        </>
    )
}

export default UseState3


//2 version
// setInputData(event.target.name = event.target.value)

//1version
// setInputData( event.target.name ==="firstName"?
//     inputData.firstName = event.target.value :
//     inputData.lastName = event.target.value
// )