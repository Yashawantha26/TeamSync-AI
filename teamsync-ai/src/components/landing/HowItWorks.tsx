"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
FileText,
Sparkles,
ClipboardCheck,
CheckCircle2,
} from "lucide-react";

const steps = [
{
number: "01",
icon: FileText,
title: "Add your meeting",
description:
"Enter your meeting transcript and select the project it belongs to.",
},
{
number: "02",
icon: Sparkles,
title: "Generate insights",
description:
"AI identifies the main discussion points, decisions, and proposed actions.",
},
{
number: "03",
icon: ClipboardCheck,
title: "Review action items",
description:
"Edit suggestions, clarify deadlines, and approve the tasks your team needs.",
},
{
number: "04",
icon: CheckCircle2,
title: "Track progress",
description:
"Follow confirmed tasks on the project board and keep responsibilities clear.",
},
];

export default function HowItWorks() {
const reduceMotion = useReducedMotion();

return ( <section id="how-it-works" className="section workflow-section"> <div className="container"> <div className="section-heading"> <span className="section-label">A SIMPLE WORKFLOW</span>

```
      <h2>
        From conversation
        <br />
        <span className="gradient-text">to completion.</span>
      </h2>

      <p>
        A clear process keeps your team focused on meaningful work
        instead of manually organizing every discussion.
      </p>
    </div>

    <div className="workflow-grid">
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <motion.article
            key={step.number}
            className="workflow-card"
            initial={
              reduceMotion ? false : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="workflow-top">
              <span className="workflow-number">{step.number}</span>

              <div className="workflow-icon">
                <Icon size={24} />
              </div>
            </div>

            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.article>
        );
      })}
    </div>
  </div>
</section>
);
}
