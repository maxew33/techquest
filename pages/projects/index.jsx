import React, { useEffect, useState } from 'react'
import Project from '@/components/project/Project'
import Link from 'next/link'

async function getProjectsData() {
    const { projects } = await require('../../data/projects.json')
    return projects
}

export default function Projects() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const projectsData = await getProjectsData()
            setData(projectsData)
        }
        fetchData()
    }, [])

    return (
        <main className="projects-main">
            <header className="projects-header">
                <h1 className="projects-headerTitle">Nos projets</h1>
                <p className="projects-headerContent">
                    Chaque projet que nous entreprenons est une histoire unique
                    de créativité, de collaboration et de réussite. <br/>Explorez notre portfolio pour découvrir comment nous transformons
                    des idées en expériences en ligne exceptionnelles.
                </p>
                <Link href="/contact" className="projects-contactBtn">
                    Commençons un projet
                </Link>
            </header>
            {data.map((project, index) => (
                <Project key={`project${index}`} {...project} />
            ))}
        </main>
    )
}
