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
                                <thead>
                                    <tr className="bg-dark text-white text-center header">
                                        <th colSpan={2}>Bank 1</th>
                                    </tr>
                                </thead>
                                <tbody className="tablebody">

                                    <tr>
                                        <td width="135px">Current A/c No </td>
                                        <td>
                                            <p className="inputbox mb-0">N/A</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >IFSC Code</td>
                                        <td>
                                            <p className="inputbox mb-0">N/A</p>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bank Location </td>
                                        <td>
                                            <p className="inputbox mb-0">Hindanagar, Wardha - 442001</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>



                        <div className="col-lg-4">
                            <table className="table table-bordered">
                                <thead>
                                    <tr className="bg-dark text-white text-center header">
                                        <th colSpan={2}>Bank 2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tableRow">
                                        <td width="135px">Current A/c No  </td>
                                        <td>
                                            N/A
                                        </td>
                                    </tr>
                                    <tr className="tableRow">
                                        <td>IFSC Code </td>
                                        <td>
                                            N/A
                                        </td>
                                    </tr>
                                    <tr className="tableRow">
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
                                <thead>
                                    <tr className="bg-dark text-white text-center header">
                                        <th colSpan={2}> Bank 3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tableRow">
                                        <td width="135px">Current A/c No  </td>
                                        <td>
                                            N/A
                                        </td>
                                    </tr>
                                    <tr className="tableRow">
                                        <td>IFSC Code </td>
                                        <td>
                                            N/A
                                        </td>
                                    </tr>
                                    <tr className="tableRow">
                                        <td>Bank Location </td>
                                        <td>
                                            <p className="inputbox mb-0">Hindanagar, Wardha - 442001</p>
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