"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
AudioLines,
Bot,
CalendarClock,
CheckSquare,
Network,
ShieldCheck,
Users,
Workflow,
ArrowUpRight,
} from "lucide-react";

const features = [
{
icon: AudioLines,
title: "AI Meeting Summaries",
description:
"Turn long meeting transcripts into concise summaries and key decisions.",
href: "/meetings/new",
color: "cyan",
},
{
icon: CheckSquare,
title: "Smart Task Management",
description:
"Organize tasks, assign owners, set priorities, and track deadlines.",
href: "/projects",
color: "violet",
},
{
icon: Network,
title: "3D Project Explorer",
description:
"Explore projects, tasks, and team relationships through an interactive visualization.",
href: "/projects",
color: "blue",
},
{
icon: Users,
title: "Team Workspaces",
description:
"Keep project information and responsibilities organized in one place.",
href: "/team",
color: "violet",
},
{
icon: CalendarClock,
title: "Deadline Tracking",
description:
"Monitor upcoming deadlines and identify overdue tasks.",
href: "/dashboard",
color: "cyan",
},
{
icon: Workflow,
title: "Action-Item Approval",
description:
"Review AI-generated suggestions before turning them into confirmed tasks.",
href: "/meetings/new",
color: "blue",
},
{
icon: Bot,
title: "AI Project Assistant",
description:
"Ask questions about authorized project information and outstanding work.",
href: "/assistant",
color: "violet",
},
{
icon: ShieldCheck,
title: "Organized Project History",
description:
"Keep track of important project updates and task changes.",
href: "/activity",
color: "cyan",
},
];

export default function Features() {
const reduceMotion = useReducedMotion();

return ( <section id="features" className="section features-section"> <div className="container"> <div className="section-heading"> <span className="section-label">POWERFUL CAPABILITIES</span>

```
      <h2>
        Everything your team needs.
        <br />
        <span className="gradient-text">Nothing gets lost.</span>
      </h2>

      <p>
        From meeting intelligence to task execution, bring your
        collaboration workflow into one organized workspace.
      </p>
    </div>

    <div className="feature-grid">
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <motion.article
            key={feature.title}
            className="feature-card"
            initial={
              reduceMotion ? false : { opacity: 0, y: 18 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            whileHover={reduceMotion ? undefined : { y: -5 }}
          >
            <div className={`feature-icon ${feature.color}`}>
              <Icon size={23} />
            </div>

            <h3>{feature.title}</h3>
            <p>{feature.description}</p>

            <Link
              href={feature.href}
              className="feature-link"
              aria-label={`Explore ${feature.title}`}
            >
              Explore feature
              <ArrowUpRight size={17} />
            </Link>
          </motion.article>
        );
      })}
    </div>
  </div>
</section>
);
}
