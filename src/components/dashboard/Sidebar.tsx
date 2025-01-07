"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Option from "./Option";
import TitleSection from "./TitleSection";
import ToggleClose from "./ToggleClose";
import { FolderOpenDot, Home, LayoutDashboard } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Add Project");

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-4 pr-2"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <TitleSection open={open} />

      <div className="space-y-1">
        <Option
          Icon={Home}
          title="Home"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/"
        />
        <Option
          Icon={FolderOpenDot}
          title="Add Project"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/add-project"
        />
        <Option
          Icon={LayoutDashboard}
          title="Add Review"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/add-review"
        />
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

export default Sidebar;
