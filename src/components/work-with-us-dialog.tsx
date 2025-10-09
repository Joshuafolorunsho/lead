"use client";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
const WorkWithUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="border-[#9EB0CA] bg-transparent text-[#9EB0CA] cursor-pointer hover:text-[#9EB0CA]"
          variant={"outline"}
        >
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl h-[80vh] p-0 py-3.5">
        <DialogHeader className="sr-only">
          <DialogTitle>Google Form</DialogTitle>
          <DialogDescription>Please fill out the form below</DialogDescription>
        </DialogHeader>

        <div className="h-full">
          {isMounted ? (
            <iframe
              src="https://forms.gle/vTALXNyyvtJ6bkFs9"
              width="100%"
              height="100%"
              className="rounded-lg"
            >
              Loading…
            </iframe>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkWithUs;
