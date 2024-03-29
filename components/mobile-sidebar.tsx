"use client";

import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import {useState, useEffect} from 'react';

const Mobilesidebar = () => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMounted){
        return null;
    }
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="ghost"
          className="md:hidden md:items-center"
          size="icon"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'} className="p-0">
        <Sidebar/>
      </SheetContent>
    </Sheet>
  );
};

export default Mobilesidebar;
