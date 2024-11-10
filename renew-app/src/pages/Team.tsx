import React from "react";
import "../App.css";
import "./Problem.css";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import teamPhoto from "../team.jpg";
import "./Team.css";
import Navbar from '../components/Navbar'

const Team: React.FC = () => {
    return (
        <div>
            <Navbar />

            <div className="Problem-title">
                Our Team
            </div>
            <div >
                <img src={teamPhoto} className="img-style"/>
            </div>
        </div>
    );
};

export default Team;