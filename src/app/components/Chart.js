"use client";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";
import {
  Code2,
  ShieldCheck,
  Server,
  Brain,
  Cloud,
  Palette,
} from "lucide-react";

const data = [
  { skill: "Web Development", level: 95, icon: <Code2 size={20} /> },
  { skill: "Cybersecurity", level: 90, icon: <ShieldCheck size={20} /> },
  { skill: "DevOps", level: 85, icon: <Server size={20} /> },
  { skill: "AI/ML", level: 80, icon: <Brain size={20} /> },
  { skill: "Cloud Computing", level: 88, icon: <Cloud size={20} /> },
  { skill: "UI/UX Design", level: 75, icon: <Palette size={20} /> },
];

export default function SkillGraph() {
  return (
    <section className="py-16 px-4 bg-[#0B0F1A] text-[#E0E0E0]">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold mb-2" style={{ color: "#00D1B2" }}>
          My Expertise
        </h2>
        <p className="text-lg text-[#E0E0E0] max-w-2xl mx-auto">
          A visual representation of my skills across various fields.
        </p>
      </motion.div>

      {/* Chart */}
      <div className="w-full h-[400px] sm:h-[450px] md:h-[500px]">
        <ResponsiveContainer>
          <RadarChart
            data={data}
            outerRadius="70%" // Reduce radius for small screens
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }} // Extra padding
          >
            <PolarGrid stroke="#2E3748" />
            <PolarAngleAxis
              dataKey="skill"
              stroke="#E0E0E0"
              tick={({ payload, x, y, textAnchor }) => {
                const { icon } =
                  data.find((d) => d.skill === payload.value) || {};
                return (
                  <g transform={`translate(${x},${y})`}>
                    <text
                      y={-5}
                      textAnchor={textAnchor}
                      fill="#E0E0E0"
                      fontSize={window.innerWidth < 640 ? 9 : 12} // Responsive font
                      className="font-medium"
                    >
                      {payload.value}
                    </text>
                    <foreignObject x={-10} y={5} width={20} height={20}>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        {icon}
                      </div>
                    </foreignObject>
                  </g>
                );
              }}
            />
            {/* Hide numbers */}
            <PolarRadiusAxis tick={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0B0F1A",
                border: "1px solid #00D1B2",
                color: "#E0E0E0",
              }}
              itemStyle={{ color: "#E0E0E0" }}
            />
            <Radar
              name="Skill Level"
              dataKey="level"
              stroke="#00D1B2"
              fill="#00D1B2"
              fillOpacity={0.5}
              animationDuration={1200}
              animationEasing="ease-out"
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
