import { resumeData } from "@/data/resume"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"
import {
  MailIcon,
  SmartPhone01Icon,
  Linkedin01Icon,
  Github01Icon,
  LinkSquare01Icon,
} from "@hugeicons/core-free-icons"

export function Resume() {
  const { personal, education, workExperience, projects, technicalSkills } =
    resumeData

  return (
    <div className="bg-background mx-auto w-full max-w-3xl px-6 py-12 sm:px-8 md:py-16">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
          {personal.name}
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          {personal.location}
        </p>

        {/* Contact Links */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button variant="ghost" size="sm" render={<a href={`mailto:${personal.email}`} />}>
            <HugeiconsIcon icon={MailIcon} strokeWidth={2} data-icon="inline-start" />
            {personal.email}
          </Button>
          <Button variant="ghost" size="sm" render={<a href={`tel:${personal.phone}`} />}>
            <HugeiconsIcon icon={SmartPhone01Icon} strokeWidth={2} data-icon="inline-start" />
            {personal.phone}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<a href={personal.linkedin} target="_blank" rel="noopener noreferrer" />}
          >
            <HugeiconsIcon icon={Linkedin01Icon} strokeWidth={2} data-icon="inline-start" />
            LinkedIn
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<a href={personal.github} target="_blank" rel="noopener noreferrer" />}
          >
            <HugeiconsIcon icon={Github01Icon} strokeWidth={2} data-icon="inline-start" />
            GitHub
          </Button>
        </div>
      </header>

      <Separator className="mb-10" />

      {/* Work Experience */}
      <section className="mb-10">
        <h2 className="text-foreground mb-6 text-lg font-medium">
          Work Experience
        </h2>
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <article key={index} className="group">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex items-center gap-3">
                  {job.logo && (
                    <div className="relative h-10 w-10 shrink-0">
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        fill
                        className="rounded-md object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-foreground text-sm font-medium">
                      {job.role}
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      {job.company} · {job.location}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs">
                  {job.startDate} – {job.endDate}
                </p>
              </div>
              <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
                {job.description}
              </p>
              <ul className="text-muted-foreground mt-3 space-y-1.5 text-xs leading-relaxed">
                {job.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-muted-foreground/60 select-none">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <Separator className="mb-10" />

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-foreground mb-6 text-lg font-medium">Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article key={index}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-foreground text-sm font-medium">
                  {project.name}
                </h3>
                <div className="flex gap-2">
                  {project.website && (
                    <Button
                      variant="link"
                      size="xs"
                      render={
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      <HugeiconsIcon icon={LinkSquare01Icon} strokeWidth={2} data-icon="inline-start" />
                      Website
                    </Button>
                  )}
                  {project.sourceCode && (
                    <Button
                      variant="link"
                      size="xs"
                      render={
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      <HugeiconsIcon icon={Github01Icon} strokeWidth={2} data-icon="inline-start" />
                      Source
                    </Button>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <ul className="text-muted-foreground mt-3 space-y-1.5 text-xs leading-relaxed">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-muted-foreground/60 select-none">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <Separator className="mb-10" />

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-foreground mb-6 text-lg font-medium">Education</h2>
        <article>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-foreground text-sm font-medium">
                {education.degree}
              </h3>
              <p className="text-muted-foreground text-xs">
                {education.institution} · {education.location}
              </p>
            </div>
            <p className="text-muted-foreground text-xs">
              Expected {education.graduation}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-muted-foreground mb-2 text-xs font-medium">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-1.5">
              {education.coursework.map((course) => (
                <Badge key={course} variant="outline">
                  {course}
                </Badge>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-muted-foreground mb-2 text-xs font-medium">
              Online Courses
            </p>
            <div className="flex flex-wrap gap-1.5">
              {education.onlineCourses.map((course) => (
                <Badge key={course} variant="outline">
                  {course}
                </Badge>
              ))}
            </div>
          </div>
        </article>
      </section>

      <Separator className="mb-10" />

      {/* Technical Skills */}
      <section>
        <h2 className="text-foreground mb-6 text-lg font-medium">
          Technical Skills
        </h2>
        <div className="space-y-4">
          <div>
            <p className="text-muted-foreground mb-2 text-xs font-medium">
              Languages
            </p>
            <div className="flex flex-wrap gap-1.5">
              {technicalSkills.languages.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="text-muted-foreground mb-2 text-xs font-medium">
              Frameworks & Libraries
            </p>
            <div className="flex flex-wrap gap-1.5">
              {technicalSkills.frameworks.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="text-muted-foreground mb-2 text-xs font-medium">
              Tools & Platforms
            </p>
            <div className="flex flex-wrap gap-1.5">
              {technicalSkills.tools.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
