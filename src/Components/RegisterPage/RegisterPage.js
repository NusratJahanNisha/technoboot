import React from 'react';
import './RegisterPage.css';

const RegisterPage = () => {

    return (
        <section className="background">
            <div className="register-box">
                <h1 className="heading" style={{ textAlign: "center" }}>Get A Qubi Form</h1>

                <div style={{ margin: "20px" }}><span style={{ fontSize: "25px", color: "white" }}>Name:</span>
                    <input className="fontStyle" style={{ marginLeft: "20px", height: "22px" }} type="text" name="" id="" placeholder="Your Name......" />  <br /></div>

                <div style={{ margin: "20px" }}><span style={{ fontSize: "25px", color: "white" }}>Localty:</span>
                    <input className="fontStyle" style={{ marginLeft: "20px", height: "22px" }} type="text" name="" id="" placeholder="Your Localty......" /> <br /></div>

                <div style={{ margin: "20px" }}><span style={{ fontSize: "25px", color: "white" }}>Mail:</span>
                    <input className="fontStyle" style={{ marginLeft: "20px", height: "22px" }} type="text" name="" id="" placeholder="Your Mail......" /> <br /></div>

                <div style={{ margin: "20px" }}><span style={{ fontSize: "25px", color: "white" }}>Model Required:</span>
                    <input className="fontStyle" style={{ marginLeft: "20px", height: "22px" }} type="text" name="" id="" placeholder="Your Requirement......" /> <br /></div>

                <div style={{ margin: "20px" }}><div style={{ marginLeft: "100px", marginTop: "50px" }}><button className="fontStyle" style={{ color: "#A5783C", background: "black", height: "40px", width: "180px", fontSize: "24px" }}> <b> Submit</b> </button></div> </div>
            </div>
        </section>
    );
};

export default RegisterPage;