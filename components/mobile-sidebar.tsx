"use client";

import { Button } from "./ui/button";
import {Menu} from 'lucide-react';

const Mobilesidebar = () => {
  return (
    <Button variant="ghost" className="md:hidden md:items-center" size="icon">
      <Menu />
    </Button>
  );
};

export default Mobilesidebar;
