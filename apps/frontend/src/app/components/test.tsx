"use client";
import { Button } from "ui/components/button";

export const Test: React.FC = () => {
  return (
    <div>
      <Button onClick={() => console.log("clicked")}>Click me</Button>
    </div>
  );
};
