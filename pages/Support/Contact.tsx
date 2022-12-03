import { Card } from "../components/Card";
import "../../styles/Support/Contact.module.css";

const Contact = () => {
    return (
        <>
            <Card Header={"Contact Us"}>
                <div className="section">

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody className="tablebody">
                                        <tr className="bg-dark text-white text-center header">
                                            <th colSpan={2}>Distributor Detail</th>
                                        </tr>
                                        <tr>
                                            <td width="180px" className="name">Name </td>
                                            <td>
                                                <p className="inputbox mb-0">Bharhate Chetan </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Mobile No </td>
                                            <td>
                                                <p  className="inputbox mb-0">9665660531</p>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Alternate No </td>
                                            <td>
                                                <p  className="inputbox mb-0"></p>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Email ID </td>
                                            <td>
                                                <p  className="inputbox mb-0">chetan@gmail.com</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Business Name </td>
                                            <td >
                                                <p className="inputbox mb-0">Omega</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name">Business Address</td>
                                            <td >
                                                <p className="inputbox mb-0">dombivali</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                    </table>
                            </div>
                        </div>


                        <div className="col-lg-4">
                        <div className="table-responsive">
                        <table className="table table-bordered">
                                <tbody>
                                    <tr className="bg-dark text-white text-center header">
                                    <th colSpan={2}>Support Detail</th>
                                </tr>
                                <tr>
                                    <td width="180px" className="name">Cust. Care No</td>
                                    <td>
                                        <p className="inputbox mb-0">+91 9595447776</p>

                                    </td>
                                </tr>
                                <tr>
                                    <td className="name">Alternate No </td>
                                    <td>
                                        <p  className="inputbox mb-0">+91 9767206776</p>

                                    </td>
                                </tr>
                                <tr>
                                    <td className="name">Email ID </td>
                                    <td>
                                        <p  className="inputbox mb-0">info@TooPay.co.in</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="name">Address</td>
                                    <td>
                                        <p className="inputbox mb-0">Oxicool fintech pvt ltd <br/>House no. 60, Near Ganesh Mandir, Hindanagar, Wardha - 442001</p>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                            </div>
                        </div>
                        <div className="col-lg-4">

                        </div>
                    </div>

                </div>
            </Card>
        </>
    );
};

export default Contact;