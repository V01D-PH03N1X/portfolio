import React, {ReactElement} from "react";
import {motion} from "framer-motion";
import styles from './ProjectsPage.module.sass'
import Wave from "../../compontents/Wave";
import NavBar from "../../compontents/NavBar";
import {Card, CardHolder} from "../../compontents/Card";

export default function ProjectsPage(): ReactElement{
    return(
        <>
            <Wave />
            <NavBar />
            <div>
                <h1>Projektübersicht von Sebastian Schindler</h1>
                {
                    /*
                    *
                    * Add Cards for Each Project Here. 
                    *
                    */
                }
            </div>
            <div style={{height: "12em"}}></div>
        </>
    )
}