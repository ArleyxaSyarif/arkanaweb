import HeroExperience from "./components/HeroExperience";
import StatsExperience from "./components/StatsExperience";
import ProjectsExperience from "./components/ProjectsExperience";
import WorkExperience from "./components/WorkExperience";
import CtaExperience from "./components/CtaExperience";

export default function ExperiencePage() {
    return (
        <div className="bg-background-light font-display selection:bg-primary/40 text-gray-900 min-h-screen">
            <main className="relative pt-32 pb-20 px-4 md:px-10 max-w-7xl mx-auto overflow-hidden flex flex-col gap-y-32">
                <HeroExperience />
                <StatsExperience />
                <ProjectsExperience />
                <WorkExperience />
                <CtaExperience />
            </main>
        </div>
    );
}
