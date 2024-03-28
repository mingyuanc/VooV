import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ReactNode } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import ToastBuilder from "@/components/notifications/ToastBuilder";
import { useRouter } from "next/navigation";

interface ResultsDrawerProps {
  src: string;
  dest: string;
  disabled: boolean;
  renderCard: () => ReactNode;
}

export function ResultsDrawer({
  src,
  dest,
  disabled,
  renderCard,
}: ResultsDrawerProps) {
  const router = useRouter();
  return (
    <Drawer>
      <DrawerTrigger disabled={disabled} asChild>
        {renderCard()}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          {disabled ? (
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Bus is fully booked!</DrawerTitle>
                <DrawerDescription>
                  from <span className="text-blue-500">{src}</span> to{" "}
                  <span className="text-green-500">{dest}</span>
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button
                    onClick={() => {
                      ToastBuilder.success("Notification Set!").send();
                    }}
                  >
                    Notify Me When Available!
                  </Button>
                </DrawerClose>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          ) : (
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Book a ride</DrawerTitle>
                <DrawerDescription>
                  from <span className="text-blue-500">{src}</span> to{" "}
                  <span className="text-green-500">{dest}</span>
                </DrawerDescription>
              </DrawerHeader>
              <div className="flex items-center justify-center space-x-2">
                <Switch id="bulk-book" />
                <Label htmlFor="bulk-book">Book for rest of the month</Label>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button
                    onClick={() => {
                      ToastBuilder.success("Successfully Booked!").send();
                    }}
                  >
                    Book Now!
                  </Button>
                </DrawerClose>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
