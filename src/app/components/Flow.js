"use client";

import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import { motion } from "framer-motion";

const nodeStyles = {
  background: "#0B0F1A",
  color: "#E0E0E0",
  border: "2px solid #00D1B2",
  padding: 10,
  borderRadius: 12,
  fontSize: 14,
  fontWeight: "bold",
  textAlign: "center",
};

const initialNodes = [
  {
    id: "1",
    position: { x: 300, y: 0 },
    data: { label: "AHMAD" },
    style: { ...nodeStyles, border: "3px solid #F4B400", fontSize: 18 },
  },

  {
    id: "2",
    position: { x: 0, y: 150 },
    data: { label: "Development" },
    style: nodeStyles,
  },
  {
    id: "3",
    position: { x: 300, y: 150 },
    data: { label: "Cybersecurity" },
    style: nodeStyles,
  },
  {
    id: "4",
    position: { x: 600, y: 150 },
    data: { label: "DevOps" },
    style: nodeStyles,
  },

  // Development Subskills
  {
    id: "5",
    position: { x: -100, y: 300 },
    data: { label: "Frontend\n(React, Next.js)" },
    style: nodeStyles,
  },
  {
    id: "6",
    position: { x: 0, y: 300 },
    data: { label: "Backend\n(Node.js, MongoDB)" },
    style: nodeStyles,
  },
  {
    id: "7",
    position: { x: 100, y: 300 },
    data: { label: "Mobile Apps\n(React Native)" },
    style: nodeStyles,
  },

  // Cybersecurity Subskills
  {
    id: "8",
    position: { x: 250, y: 300 },
    data: { label: "Networking" },
    style: nodeStyles,
  },
  {
    id: "9",
    position: { x: 350, y: 300 },
    data: { label: "Pentesting" },
    style: nodeStyles,
  },
  {
    id: "10",
    position: { x: 450, y: 300 },
    data: { label: "VPN Setup" },
    style: nodeStyles,
  },

  // DevOps Subskills
  {
    id: "11",
    position: { x: 550, y: 300 },
    data: { label: "Docker" },
    style: nodeStyles,
  },
  {
    id: "12",
    position: { x: 650, y: 300 },
    data: { label: "CI/CD" },
    style: nodeStyles,
  },
  {
    id: "13",
    position: { x: 750, y: 300 },
    data: { label: "Cloud\n(AWS, Azure)" },
    style: nodeStyles,
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#00D1B2" },
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    animated: true,
    style: { stroke: "#00D1B2" },
  },
  {
    id: "e1-4",
    source: "1",
    target: "4",
    animated: true,
    style: { stroke: "#00D1B2" },
  },

  { id: "e2-5", source: "2", target: "5", style: { stroke: "#F4B400" } },
  { id: "e2-6", source: "2", target: "6", style: { stroke: "#F4B400" } },
  { id: "e2-7", source: "2", target: "7", style: { stroke: "#F4B400" } },

  { id: "e3-8", source: "3", target: "8", style: { stroke: "#F4B400" } },
  { id: "e3-9", source: "3", target: "9", style: { stroke: "#F4B400" } },
  { id: "e3-10", source: "3", target: "10", style: { stroke: "#F4B400" } },

  { id: "e4-11", source: "4", target: "11", style: { stroke: "#F4B400" } },
  { id: "e4-12", source: "4", target: "12", style: { stroke: "#F4B400" } },
  { id: "e4-13", source: "4", target: "13", style: { stroke: "#F4B400" } },
];

export default function SkillHierarchy() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          { ...params, animated: true, style: { stroke: "#00D1B2" } },
          eds
        )
      ),
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full h-[80vh] bg-[#0B0F1A] rounded-xl p-4"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap nodeColor="#00D1B2" />
        <Controls />
        <Background gap={16} color="#333" />
      </ReactFlow>
    </motion.div>
  );
}
