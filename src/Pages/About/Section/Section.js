import React from 'react'
import Experience from './Experience'
import PageTitle from './PageTitle'
import PersonalInfo from './PersonalInfo'
import Skills from './Skills'

function Section() {
    return (
        <>
            <PageTitle />

            <section className="main-content">
                <div className="container">
                    <div className="row">
                        <PersonalInfo />
                        <Skills />
                        <Experience />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section
