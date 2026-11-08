import React from 'react'
import Footer from './Footer'

function Table({ data }) {
    return (
        <div>

            {data && data.length > 0 && (
                <table border={1} cellPadding={15} >

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>subject</th>
                            <th>Message</th>
                        </tr>


                    </thead>
                    <tbody> {data.map((item, index) =>
                    (<tr key={index}> <td>{item.name}</td>
                        <td>{item.email}</td> <td>{item.subject}</td>
                        <td>{item.Message}</td> </tr>))} </tbody>
                </table>
            )}
            <Footer />
        </div>
    )
}

export default Table