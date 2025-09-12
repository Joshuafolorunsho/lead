"use client";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  {
    name: "Ofiara Joy",
    team: "Team Cider (Aug' 23 Edition) ",
    body: "A place where you will be taught the basics of reading and writing, and you'll see the result when you speak and write.",
  },
  {
    name: "Falola Tejumade  ",
    team: "Team Ocean(June' 24 Edition) ",
    body: "I encourage anyone ready for a personal development journey in public speaking and writing to join this program",
  },
  {
    name: "Alumona Oluomachi ",
    team: "Team Cyan(June' 24 Edition) ",
    body: "I was chatting with a friend and he asked me why I was too formal, then I realized that Readers Cohort was working on me.",
  },
  {
    name: "Mumeh Bertrand",
    team: "Team Ginger (Aug' 23 Edition) ",
    body: "I have experienced exponential growth in punctuation which has boosted my communication skills. ",
  },
  {
    name: "Ojo Omowumi ",
    team: "Team Ginger(Aug' 23 Edition) ",
    body: "I am happy because the changes were evident in my life. I was able to work on my weakness and transform it into my strength. ",
  },
  {
    name: "Ajayi Olufemi ",
    team: "Team Regal (Oct '23 Edition) ",
    body: "Since the training, I have learnt a lot. Self-discipline, mindset, time management, focus, and lot more.  ",
  },
  {
    name: "Isaac Precious",
    team: "Team Ginger(Aug' 23 Edition) ",
    body: "Readers Cohort is a place to be trained, disciplined, and impacted. Join the next edition and see how much value you will gain. ",
  },
  {
    name: "Eze Chisom ",
    team: "Team Teal (Feb' 24 Edition) ",
    body: "Writing is no longer a hard nut to crack, there is a high level of improvement in my speaking and writing skills. ",
  },
  {
    name: "Adedoyin Ajao ",
    team: "Team Imperial (Oct '23 Edition) ",
    body: "Writing now excites me. I became a better manager of time, learned discipline, and a huge sense of commitment. ",
  },
];

function TestimonialCard({
  name,

  body,
  team,
}: (typeof testimonials)[number]) {
  return (
    <Card className="w-64">
      <CardContent>
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9 rounded-full items-center justify-center border">
            {name[0]}
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-muted-foreground">{team}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm text-econdary-foreground">
          {body}
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialSlider() {
  return (
    <div className="relative flex h-auto w-full flex-row items-center justify-center overflow-hidden gap-1.5">
      <Marquee pauseOnHover repeat={3} className="[--duration:40s]">
        {testimonials.map((review, index) => (
          <TestimonialCard key={index} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
