export default function Experience(){    
    return(
        <section aria-labelledby="experience-heading">
            <div className="section-heading">
                <h2 id="experience">Experience</h2>
            </div>
            
            <div className="experience-container center">
                    <article className="experience bottom-animation">
                        <header className="experience-heading">
                            <h3 className="experience-title">Frontend Developer Intern, Unified Mentors</h3>
                            <p className="experience-duration">
                                <time dateTime="2025-03">March 2025</time> - <time dateTime="2025-09">September 2025</time>
                            </p>
                        </header>
                        <div className="experience-description">
                            <ul>
                                <li>Developed and maintained responsive React applications for desktop, tablet &amp; mobile platforms.</li>
                                <li>Built reusable UI components to improve code maintainability.</li>
                                <li>Translated complex UI wire frames into interactive web pages, collaborating closely with designers to ensure pixel perfect and consistent design implementation.</li>
                                <li>Optimized front end performance &amp; loading speeds while systematically troubleshooting and resolving cross browser bugs to improve overall usability and accessibility.</li>
                                <li>Successfully delivered all mandatory projects and side projects within time frame.</li>
                            </ul>
                        </div>
                    </article>
    
                    <article className="experience bottom-animation">
                        <header className="experience-heading">
                            <h3 className="experience-title">Freelancer</h3>
                            <p className="experience-duration">
                                <time dateTime="2025-09">September 2025</time> - <time dateTime="2026-06">June 2026</time>
                            </p>
                        </header>
                        <div className="experience-description">
                            <ul>
                                <li>I build clean, modern, and fully responsive websites using HTML, CSS, JavaScript, and React, ensuring they work smoothly across all devices.</li>
                                <li>Focus on writing optimized and maintainable code to create fast-loading and user-friendly web interfaces.</li>
                                <li>Available for small tasks like landing pages, UI fixes, HTML/CSS conversions, and React component development with quick delivery.</li>
                            </ul>
                        </div>
                    </article>
                </div>

        </section>
    )
}
