import React from 'react'
import "./Form.css"

const Temp = ({ values, index, setFieldValue }) => {

    return (
        <div className='Temp' >
            <div className="descContainer">
                <div className="title">
                    <h3>PAIN & FUNCTIONAL DESCRIPTION</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur eos aliquid animi fuga obcaecati voluptatum quas, officia velit ducimus rem.</p>
                </div>

                <form action=""  >
                    <div className="mb-3">
                        <label htmlFor="q1" className="form-label">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente aliquam praesentium?</label>
                        <textarea className="form-control" name="q1" id="q1" rows="2" onChange={(e) => setFieldValue(index, "q1", e.target.value)} value={values.name} ></textarea>
                    </div>
                    <div className="ques">
                        <label className="quesLabel" htmlFor='q2' >Lorem ietur adipisicing elit.</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="q2" id="q2Choice1" value="Not Relevant" checked={values.q2 === "Not Relevant"}
                                onChange={() => setFieldValue(index, "q2", "Not Relevant")} ></input>
                            <label className="form-check-label" htmlFor="q2Choice1">Not Relevant</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="q2" id="q2Choice2" value="Yes" checked={values.q2 === "Yes"}
                                onChange={() => setFieldValue(index, "q2", "Yes")} ></input>
                            <label className="form-check-label" htmlFor="q2Choice2">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="q2" id="q2Choice3" value="No" checked={values.q2 === "No"}
                                onChange={() => setFieldValue(index, "q2", "No")} ></input>
                            <label className="form-check-label" htmlFor="q2Choice3">No</label>
                        </div>
                    </div>
                    <div className="ques">
                        <label className="quesLabel" htmlFor='q3' >Lorem ipsum dolor , consectetur adipisicing elit.</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="q3" id="q3Choice1" value="Not Relevant" checked={values.q3 === "Not Relevant"}
                                onChange={() => setFieldValue(index, "q3", "Not Relevant")} ></input>
                            <label className="form-check-label" htmlFor="q3Choice1">Not Relevant</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="q3" id="q3Choice2" value="Yes" checked={values.q3 === "Yes"}
                                onChange={() => setFieldValue(index, "q3", "Yes")} ></input>
                            <label className="form-check-label" htmlFor="q3Choice2">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="q3" id="q3Choice3" value="No" checked={values.q3 === "No"}
                                onChange={() => setFieldValue(index, "q3", "No")} ></input>
                            <label className="form-check-label" htmlFor="q3Choice3">No</label>
                        </div>
                    </div>
                    <div className="ques">
                        <label className="quesLabel" htmlFor='q4' >Lorem ipsum dolor sit ametwevew wevew ewewvg elit.</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="q4" id="q4Choice1" value="Not Relevant" checked={values.q4 === "Not Relevant"}
                                onChange={() => setFieldValue(index, "q4", "Not Relevant")} ></input>
                            <label className="form-check-label" htmlFor="q4Choice1">Not Relevant</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="q4" id="q4Choice2" value="Yes" checked={values.q4 === "Yes"}
                                onChange={() => setFieldValue(index, "q4", "Yes")} ></input>
                            <label className="form-check-label" htmlFor="q4Choice2">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="q4" id="q4Choice3" value="No" checked={values.q4 === "No"}
                                onChange={() => setFieldValue(index, "q4", "No")} ></input>
                            <label className="form-check-label" htmlFor="q4Choice3">No</label>
                        </div>
                    </div>
                    <div className="ques">
                        <label className="quesLabel" htmlFor='q5' >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="q5" id="q5Choice1" value="Not Relevant" checked={values.q5 === "Not Relevant"}
                                onChange={() => setFieldValue(index, "q5", "Not Relevant")} ></input>
                            <label className="form-check-label" htmlFor="q5Choice1">Not Relevant</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="q5" id="q5Choice2" value="Daily" checked={values.q5 === "Daily"}
                                onChange={() => setFieldValue(index, "q5", "Daily")} ></input>
                            <label className="form-check-label" htmlFor="q5Choice2">Daily</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="q5" id="q5Choice3" value="Several times/week" checked={values.q5 === "Several times/week"}
                                onChange={() => setFieldValue(index, "q5", "Several times/week")} ></input>
                            <label className="form-check-label" htmlFor="q5Choice3">Several times/week</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="q5" id="q5Choice4" value="A few times/month" checked={values.q5 === "A few times/month"}
                                onChange={() => setFieldValue(index, "q5", "A few times/month")} ></input>
                            <label className="form-check-label" htmlFor="q5Choice4">A few times/month</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="q5" id="q5Choice5" value="A few times/year" checked={values.q5 === "A few times/year"}
                                onChange={() => setFieldValue(index, "q5", "A few times/year")} ></input>
                            <label className="form-check-label" htmlFor="q5Choice5">A few times/year</label>
                        </div>
                    </div>
                    <div className="ques6">
                        <div className="ques6Left">
                            <label className="quesLabel" htmlFor='q6' >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="q6" id="q6Choice1" value="Not Relevant" checked={values.q6 === "Not Relevant"}
                                    onChange={() => setFieldValue(index, "q6", "Not Relevant")} ></input>
                                <label className="form-check-label" htmlFor="q6Choice1">Not Relevant</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="q6" id="q6Choice2" value="When lying down" checked={values.q6 === "When lying down"}
                                    onChange={() => setFieldValue(index, "q6", "When lying down")} ></input>
                                <label className="form-check-label" htmlFor="q6Choice2">When lying down</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="q6" id="q6Choice3" value="When sitting" checked={values.q6 === "When sitting"}
                                    onChange={() => setFieldValue(index, "q6", "When sitting")} ></input>
                                <label className="form-check-label" htmlFor="q6Choice3">When sitting</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="q6" id="q6Choice4" value="When standing" checked={values.q6 === "When standing"}
                                    onChange={() => setFieldValue(index, "q6", "When standing")} ></input>
                                <label className="form-check-label" htmlFor="q6Choice4">When standing</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="q6" id="q6Choice5" value="While walking" checked={values.q6 === "While walking"}
                                    onChange={() => setFieldValue(index, "q6", "While walking")} ></input>
                                <label className="form-check-label" htmlFor="q6Choice5">While walking</label>
                            </div>
                        </div>
                        <div className="ques6Right">
                            <p  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam minus esse itaque explicabo blanditiis sapiente!</p>
                        </div>
                    </div>
                    <div className="ques7">
                        <label className="quesLabel" htmlFor='q7' >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                        <div className="ques7Choices">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="q7" id="q7Choice1" value="1" checked={values.q7 === "1"}
                                    onChange={() => setFieldValue(index, "q7", "1")} ></input>
                                <label className="form-check-label" htmlFor="q7Choice1">1</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="q7" id="q7Choice2" value="2" checked={values.q7 === "2"}
                                    onChange={() => setFieldValue(index, "q7", "2")} ></input>
                                <label className="form-check-label" htmlFor="q7Choice2">2</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="q7" id="q7Choice3" value="3" checked={values.q7 === "3"}
                                    onChange={() => setFieldValue(index, "q7", "3")} ></input>
                                <label className="form-check-label" htmlFor="q7Choice3">3</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="q7" id="q7Choice4" value="4" checked={values.q7 === "4"}
                                    onChange={() => setFieldValue(index, "q7", "4")} ></input>
                                <label className="form-check-label" htmlFor="q7Choice4">4</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="q7" id="q7Choice5" value="5" checked={values.q7 === "5"}
                                    onChange={() => setFieldValue(index, "q7", "5")} ></input>
                                <label className="form-check-label" htmlFor="q7Choice5">5</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="q7" id="q7Choice6" value="6" checked={values.q7 === "6"}
                                    onChange={() => setFieldValue(index, "q7", "6")} ></input>
                                <label className="form-check-label" htmlFor="q7Choice6">6</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="q7" id="q7Choice7" value="7" checked={values.q7 === "7"}
                                    onChange={() => setFieldValue(index, "q7", "7")} ></input>
                                <label className="form-check-label" htmlFor="q7Choice7">7</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="q7" id="q7Choice8" value="8" checked={values.q7 === "8"}
                                    onChange={() => setFieldValue(index, "q7", "8")} ></input>
                                <label className="form-check-label" htmlFor="q7Choice8">8</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="q7" id="q7Choice9" value="9" checked={values.q7 === "9"}
                                    onChange={() => setFieldValue(index, "q7", "9")} ></input>
                                <label className="form-check-label" htmlFor="q7Choice9">9</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="q7" id="q7Choice10" value="10" checked={values.q7 === "10"}
                                    onChange={() => setFieldValue(index, "q7", "10")} ></input>
                                <label className="form-check-label" htmlFor="q7Choice10">10</label>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Temp
