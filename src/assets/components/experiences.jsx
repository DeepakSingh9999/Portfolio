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
                                <li>Translated Figma designs into responsive, production ready interfaces with consistent praise from product design teams for visual accuracy and attention to detail.</li>
                                <li>Delivered reusable UI components with semantic HTML, keyboard navigation, and screen reader considerations for a physician-facing healthcare application.</li>
                                <li>Refactored the legacy image assets across the React application to high performance AVIF formats drastically improving load times.</li>
                                <li>Replaced external CDN based icons with a localized static icon pack (Tabler Icons), reducing network overhead, and improving bundle size.</li>
                                <li>Achieved FCP & LCP below 1.5s, increasing Lighthouse performance scores from 65 to 97 by modernizing assets, eliminating third party dependencies and implementing lazy loading..</li>
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
