"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, Sparkles, Users } from "lucide-react";
import { useState } from "react";

const members = [
{
name: "Yashawantha H M",
role: "Full-Stack Developer & Project Lead",
description:
"Focused on application architecture, full-stack development, product design, and feature integration.",
photo: "https://kommodo.ai/i/CugKlYQb7l2P8sfKL7e9",
initials: "YH",
icon: Code2,
},
{
name: "Yashwanth Gowda S N",
role: "AI Integration & Web Development",
description:
"Focused on AI meeting intelligence, action-item extraction, web development, and testing.",
photo: "https://kommodo.ai/i/7XkdON2c3k6SGXaF18pN",
initials: "YG",
icon: Sparkles,
},
];

function MemberAvatar({
name,
photo,
initials,
}: {
name: string;
photo: string;
initials: string;
}) {
const [imageFailed, setImageFailed] = useState(false);

return ( <div className="team-avatar">
{!imageFailed ? (
<Image
src={photo}
alt={`Profile photo of ${name}`}
fill
sizes="120px"
unoptimized
className="team-avatar-image"
onError={() => setImageFailed(true)}
/>
) : ( <span className="team-avatar-fallback" aria-label={name}>
{initials} </span>
)} </div>
);
}

export default function TeamSection() {
const reduceMotion = useReducedMotion();

return ( <section id="team" className="section team-section"> <div className="container"> <div className="section-heading"> <span className="section-label">THE PEOPLE BEHIND THE PRODUCT</span>

```
      <h2>
        Meet Team
        <span className="gradient-text"> Tech Titans.</span>
      </h2>

      <p>
        Two developers. One ambitious vision. Building smarter
        collaboration with AI and modern web technology.
      </p>
    </div>

    <div className="team-grid">
      {members.map((member, index) => {
        const Icon = member.icon;

        return (
          <motion.article
            key={member.name}
            className="team-card"
            initial={
              reduceMotion ? false : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.12 }}
            whileHover={reduceMotion ? undefined : { y: -6 }}
          >
            <div className="team-card-top">
              <MemberAvatar
                name={member.name}
                photo={member.photo}
                initials={member.initials}
              />

              <span className="team-member-icon">
                <Icon size={19} />
              </span>
            </div>

            <h3>{member.name}</h3>

            <span className="team-role">{member.role}</span>

            <p>{member.description}</p>
          </motion.article>
        );
      })}
    </div>

    <div className="institution-banner">
      <Users size={21} />

      <div>
        <strong>Built by Team Tech Titans</strong>
        <p>Rajeev Institute of Technology, Hassan</p>
        <span>Department of Computer Science and Engineering</span>
      </div>
    </div>
  </div>
</section>
);
}
