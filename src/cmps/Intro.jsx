import React from 'react'

export function Intro() {

    const features = [
        {
            title: 'Track company-wide progress',
            desc: 'See how your day-to-day tasks fit into the wider vision. For from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
        },
        {
            title: 'Advanced built-in reports',
            desc: 'Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you bui;d out the reports you need to keep key stakeholders informed.'
        },
        {
            title: 'Everything you need in one place',
            desc: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents, Manage offers in all-in-one team productivity solution.'
        },
    ]

    return (
        <section className="intro">
            <div className="bring-everyone-together">
                <h1>Bring everyone together to build better products.</h1>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <button>Get Started</button>
            </div>
            <img src="./assets/images/illustration-intro.svg" alt="" />
            <div className="whats-different">
                <h1>What's different about Manage?</h1>
                <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
            </div>
            <ul className="feature-list">
                {features.map((feature, idx) => {
                    return (
                        <li key={feature.desc} className="feature">
                            <div className="number">{String(idx + 1).padStart(2, '0')}</div>
                            <div className="feature-content">
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-desc">{feature.desc}</p>
                            </div>

                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
