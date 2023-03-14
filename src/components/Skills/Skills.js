import React from "react";
import './Skills.css';
import SkillCard from "./Skill_card";
import { ImHtmlFive2 } from 'react-icons/im';
import { DiCss3Full } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import {DiMysql} from 'react-icons/di'
import {DiDatabase} from 'react-icons/di'
import {SiMongodb} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {FaBullseye} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {AiFillFileWord} from 'react-icons/ai'
import {FaFilePowerpoint} from 'react-icons/fa'
import {FaFileExcel} from 'react-icons/fa'
import {BsFileEarmarkCodeFill} from 'react-icons/bs'



function Skills() {
    return (
        <section id="skill">
            <h5>What Skills I Have</h5>
            <h2>Skills</h2>

            <div className="container skills_container">

                <div className="frontend_skill skill_box">
                    <h3>Frontend Development</h3>
                    <div className="skill_content">
                        <SkillCard title="HTML" tag={<ImHtmlFive2 />} />
                        <SkillCard title="CSS" tag={<DiCss3Full />} />
                        <SkillCard title="JavaScript" tag={<IoLogoJavascript />} />
                        <SkillCard title="React" tag={<FaReact />} />
                        <SkillCard title="Tailwind" tag={<SiTailwindcss />} />
                    </div>
                </div>
                <div className="programming_skill skill_box">
                    <h3>Backend Development</h3>
                    <div className="skill_content">
                        <SkillCard title="DBMS" tag={<DiDatabase/>} />
                        <SkillCard title="SQL" tag={<DiMysql />} />
                        <SkillCard title="MongoDB" tag={<SiMongodb />} />
                        <SkillCard title="NodeJS" tag={<FaNodeJs />} />
                    </div>
                </div>
                <div className="programming_skill skill_box">
                    <h3>Programming Language</h3>
                    <div className="skill_content">
                        <SkillCard title="C" tag={<FaBullseye />} />
                        <SkillCard title="C++" tag={<FaBullseye />} />
                        <SkillCard title="JavaScript" tag={<IoLogoJavascript />} />
                        <SkillCard title="DSA" tag={<FaBullseye />} />
                    </div>
                </div>

                <div className="programming_skill skill_box">
                    <h3>Others</h3>
                    <div className="skill_content">
                        <SkillCard title="MS Word" tag={<AiFillFileWord />} />
                        <SkillCard title="Powerpoint" tag={<FaFilePowerpoint />} />
                        <SkillCard title="Excel" tag={<FaFileExcel />} />
                        <SkillCard title="VS Code" tag={<BsFileEarmarkCodeFill/>} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;