import { Card } from "../components/Card";
import "../../styles/Support/Support.module.css";

const Support = () => {
    return (
        <>
            <Card Header={"BANK DETAILS TooPay"}>
                <div className="section">
                    <div className="row">

                        <div className="col-lg-4">
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
                                    </tbody>
                            </table>
                        </div>

                        
                        <div className="col-lg-4">
                        <table className="table table-bordered">
                                <tbody>
                                    <tr className="bg-dark text-white text-center">
                                    <th colSpan={2}> Bank 2</th>                                   
                                </tr>
                                <tr>
                                    <td width="135px">Current A/c No  </td>
                                    <td>
                                       N/A
                                    </td>
                                </tr>
                                <tr>
                                    <td>IFSC Code </td>
                                    <td>
                                       N/A
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bank Location </td>
                                    <td>
                                      <p className="inputbox  mb-0">Hindanagar, Wardha - 442001</p>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="col-lg-4">
                        <table className="table table-bordered">
                                <tbody>
                                    <tr className="bg-dark text-white text-center">
                                    <th colSpan={2}> Bank 3</th>                                   
                                </tr>
                                <tr>
                                    <td width="135px">Current A/c No  </td>
                                    <td>
                                       N/A
                                    </td>
                                </tr>
                                <tr>
                                    <td>IFSC Code </td>
                                    <td>
                                       N/A
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bank Location </td>
                                    <td>
                                      <p className="inputbox  mb-0">Hindanagar, Wardha - 442001</p>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    );
};

export default Support;